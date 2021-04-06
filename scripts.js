//Animação ao rolar a página

const elementos=document.querySelectorAll('[data-anima]');
const animacaoClasse='animacao';

function animaScroll(){ //pra animar a rolagem
    const topoDaPaginaNaJanela=window.pageYOffset+((window.innerHeight*3)/4);
     //o topo da página de referencia pra ter a animação é tipo em 3 quartos da janela
    elementos.forEach(
        function(elemento){
            if(topoDaPaginaNaJanela>elemento.offsetTop){
                elemento.classList.add(animacaoClasse)
            } else {
                elemento.classList.remove(animacaoClasse)
            }
        }
    );
}

if(elementos.length){
      window.addEventListener('scroll', function(){animaScroll()});
}


//Modal










//Slider