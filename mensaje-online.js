let $mensajeOnline = document.querySelector('#mensaje-online');

function crearMensajeOnline (){
    
    let mensaje = document.createElement('p');
        mensaje.classList.add('alert-success', 'm-0');
        mensaje.textContent = 'Estamos Online papa!';
    
    $mensajeOnline.appendChild(mensaje);
}

setInterval(mensajeTime, 5000);

function mensajeTime() {
  const d = '';
  document.getElementById("mensaje-online").innerHTML ='';
}

crearMensajeOnline();
