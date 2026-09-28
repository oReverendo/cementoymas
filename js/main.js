document.getElementById('anio').textContent = new Date().getFullYear();

document.getElementById('burger').addEventListener('click', function(){
  document.getElementById('menu').classList.toggle('abierto');
});
document.querySelectorAll('#menu a').forEach(function(a){
  a.addEventListener('click', function(){ document.getElementById('menu').classList.remove('abierto'); });
});

document.getElementById('formulario').addEventListener('submit', async function(e){
  e.preventDefault();
  var boton=this.querySelector('button'), estado=document.getElementById('estado'), t=boton.textContent;
  boton.disabled=true; boton.textContent='Enviando…'; estado.textContent=''; estado.style.color='';
  try{
    var datos=new FormData(this);
    datos.append('_subject','Nueva solicitud de presupuesto · cementoymas.es');
    datos.append('_template','table');
    datos.append('_captcha','false');
    var r=await fetch('https://formsubmit.co/ajax/cementoymas2002@gmail.com',{method:'POST',body:datos,headers:{'Accept':'application/json'}});
    if(!r.ok) throw new Error();
    estado.textContent='Solicitud enviada. Nos pondremos en contacto en breve.'; estado.style.color='#1E9E5A'; this.reset();
  }catch(err){
    estado.textContent='No se ha podido enviar. Puede llamarnos al 603 78 11 51.'; estado.style.color='#C0392B';
  }finally{ boton.disabled=false; boton.textContent=t; }
});

/* entrada de los bloques al hacer scroll, de izquierda a derecha */
(function(){
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var imagenes = document.querySelectorAll('.serv .ph, .proy, .marco .ph, .marco-video');
  var textos   = document.querySelectorAll('.serv .txt, .tira, .dir, .lista-check li, .invita');
  imagenes.forEach(function(e){ e.classList.add('rev'); });
  textos.forEach(function(e){ e.classList.add('rev-txt'); });
  var io = new IntersectionObserver(function(filas){
    filas.forEach(function(f){
      if (f.isIntersecting){ f.target.classList.add('visible'); io.unobserve(f.target); }
    });
  }, {rootMargin:'0px 0px -10% 0px', threshold:0.08});
  imagenes.forEach(function(e){ io.observe(e); });
  textos.forEach(function(e){ io.observe(e); });
})();
