function oculta() {
    var textoFuncional = document.getElementById('textofuncional');
    textoFuncional.style.display = 'none';
  }
  
  function ver() {
    var textoFuncional = document.getElementById('textofuncional');
    textoFuncional.style.display = 'block';
  }
  
  function cambia() {
    var textoFuncional = document.getElementById('textofuncional');
    textoFuncional.style.color = 'red';
  }
  
  function regresa() {
    var textoFuncional = document.getElementById('textofuncional');
    textoFuncional.style.color = 'black';
  }
  
  function tamaño() {
    var textoFuncional = document.getElementById('textofuncional');
    textoFuncional.style.fontSize = '50px';
  }
  
  function scrollUp() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  function Scrolldown() {
    const alturaTotal = document.body.scrollHeight;
  
    window.scrollTo({
      top: alturaTotal,
      behavior: 'smooth'
    });
  }
  
  function Esconderbtn() {
    var botonesScroll = document.querySelectorAll('.btn-scroll');
  
    botonesScroll.forEach(function(boton) {
      boton.style.display = 'none';
    });
  }
  