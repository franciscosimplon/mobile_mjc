// let slider = document.querySelector(".slider-contenedor");
// let sliderIndividual = document.querySelectorAll(".carrusell");
// let contador = 1;
// let width = sliderIndividual[0].clientWidth;
// let intervalo = 3000;

//  window.addEventListener("resize", function(){
//      width = sliderIndividual[0].clientWidth();
// })

// setInterval(function() {
//     slides();
// },intervalo);

// function slides() {
//     slider.style.transform = "translate(" +(-width*contador)+"px)";
//     slider.style.transition = "transform 1s";
//     contador++;
// }

new Glider(document.querySelector('.carousel__lista'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '.carousel__indicadores',
    arrows: {
      prev: '.carousel__anterior',
      next: '.carousel__siguiente'
    }
  });