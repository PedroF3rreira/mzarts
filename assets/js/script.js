 AOS.init({
    duration:1000,
 });

 let cont = 0;

function sliderShow () {
   
   setInterval(() =>{
      document.querySelector('.sliders').style.marginLeft = `${cont}px`;
      cont -= 405;
      if(cont == -1620){
         cont = 0
      }
   }, 3000);
   
}

sliderShow();