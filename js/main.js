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
    var r=await fetch('https://formspree.io/f/XXXXXXXX',{method:'POST',body:new FormData(this),headers:{'Accept':'application/json'}});
    if(!r.ok) throw new Error();
    estado.textContent='¡Mensaje enviado! Te llamamos en breve.'; estado.style.color='#1E9E5A'; this.reset();
  }catch(err){
    estado.textContent='No se ha podido enviar. Llámanos al 603 78 11 51.'; estado.style.color='#C0392B';
  }finally{ boton.disabled=false; boton.textContent=t; }
});
