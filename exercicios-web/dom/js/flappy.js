function novoElemento(tagName, className) {
    const elem = document.createElement(tagName);
    elem.className = className;
    return elem;
}

function barreira(reversa = false) {
    this.elemento = novoElemento('div', 'barreira');

    const borda = novoElemento('div', 'borda');
    const corpo = novoElemento('div', 'corpo');
    this.elemento.appendChild(reversa ? corpo : borda);
    this.elemento.appendChild(reversa ? borda : corpo);

    this.setAltura = altura => corpo.style.height = `${altura}px`
}

// const b = new barreira(true);
// b.setAltura(350);
// document.querySelector('[wm-flappy]').appendChild(b.elemento);

function parDeBarreiras(altura, abertura, x) {
    this.elemento = novoElemento('div', 'par-de-barreiras');

    this.superior = new barreira(true);
    this.inferior = new barreira(false);

    this.elemento.appendChild(this.superior.elemento);
    this.elemento.appendChild(this.inferior.elemento);

    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura);
        const alturaInferior = altura - abertura - alturaSuperior;
        this.superior.setAltura(alturaSuperior);
        this.inferior.setAltura(alturaInferior);
    }

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0]);
    this.setX = x => this.elemento.style.left = `${x}px`;
    this.getLargura = () => this.elemento.clientWidth;

    this.sortearAbertura();
    this.setX(x);
}

// const b = new parDeBarreiras(700, 200, 400);
// document.querySelector('[wm-flappy]').appendChild(b.elemento);

function barreiras(altura, largura, abertura, espaco, notificarPonto) {
    this.pares = [
        new parDeBarreiras(altura, abertura, largura),
        new parDeBarreiras(altura, abertura, largura + espaco),
        new parDeBarreiras(altura, abertura, largura + espaco * 2),
        new parDeBarreiras(altura, abertura, largura + espaco * 3)
    ]

    const deslocamento = 3;
    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento);

            // quando o elemento sair da área do jogo
            if (par.getX() < -par.getLargura()) {
                par.setX(par.getX() + espaco * this.pares.length);
                par.sortearAbertura();
            }

            const meio = largura / 2;
            const cruzouOMeio = par.getX() + deslocamento >= meio
                && par.getX() < meio
            if(cruzouOMeio) notificarPonto();
        })
    }
}

function passaro(alturaJogo) {
    let voando = false;

    this.elemento = novoElemento('img', 'passaro');
    this.elemento.src = 'imgs/passaro.png';

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0]);
    this.setY = y => this.elemento.style.bottom = `${y}px`;

    window.onkeydown = e => voando = true;
    window.onkeyup = e => voando = false;

    this.animar = () => {
        const novoY = this.getY() + (voando ? 8 : -10);
        const alturaMaxima = alturaJogo - this.elemento.clientHeigth;

        if (novoY <= 0) {
            this.setY(0);
        } else if (novoY >= alturaMaxima) {
            this.setY(alturaMaxima);
        } else {
            this.setY(novoY);
        }
    }

    this.setY(alturaJogo / 2);
}

// const brs = new barreiras(700, 1200, 200, 400);
// const psr = new passaro(700);
// const areaDoJogo = document.querySelector('[wm-flappy]');

// areaDoJogo.appendChild(psr.elemento);
// brs.pares.forEach(par => areaDoJogo.appendChild(par.elemento));
// setInterval(() => {
//     brs.animar();
//     psr.animar();
// }, 20);

function progresso() {
    this.elemento = novoElemento('span', 'progresso');
    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos;
    }
    this.atualizarPontos(0);
}

// const brs = new barreiras(700, 1200, 200, 400);
// const psr = new passaro(700);
// const areaDoJogo = document.querySelector('[wm-flappy]');
// areaDoJogo.appendChild(new progresso().elemento);
// areaDoJogo.appendChild(psr.elemento);
// brs.pares.forEach(par => areaDoJogo.appendChild(par.elemento));
// setInterval(() => {
//     brs.animar();
//     psr.animar();
// }, 20);

function estaoSobrepostos(elementoA, elementoB) {
    const a = elementoA.getBoundingClientRect();
    const b = elementoB.getBoundingClientRect();

    const horizontal = a.left + a.width >= b.left
        && b.left + b.width >= a.left;
    const vertical = a.top + a.height >= b.top
        && b.top + b.height >= a.top;
    return horizontal && vertical;
}

function colidiu(bird, barriers) {
    let colidiu = false;
    barriers.pares.forEach(parDeBarreiras => {
        if (!colidiu) {
            const superior = parDeBarreiras.superior.elemento;
            const inferior = parDeBarreiras.inferior.elemento;
            colidiu = estaoSobrepostos(bird.elemento, superior)
                || estaoSobrepostos(bird.elemento, inferior);
        }
    })
    return colidiu;
}

function flappyBird() {
    let pontos = 0;

    const areaDoJogo = document.querySelector('[wm-flappy]');
    const altura = areaDoJogo.clientHeight;
    const largura = areaDoJogo.clientWidth;

    const progress = new progresso();
    const barriers = new barreiras(altura, largura, 200, 400, 
        () => progress.atualizarPontos(++pontos));
    const bird = new passaro(altura);

    areaDoJogo.appendChild(progress.elemento);
    areaDoJogo.appendChild(bird.elemento);
    barriers.pares.forEach(par => areaDoJogo.appendChild(par.elemento));

    this.start = () => {
        // loop do jogo
        const temporizador = setInterval(() => {
            barriers.animar();
            bird.animar();

            if (colidiu(bird, barriers)) {
                clearInterval(temporizador);
            }
        }, 20);
    }
}

new flappyBird().start();