let $mensajeOffline = document.querySelector('#mensaje-offline');

function crearMensajeOffline (){
    
    let mensaje = document.createElement('p');
        mensaje.classList.add('alert-danger', 'm-0');
        mensaje.textContent = 'No me la conteiner que estoy offline!';

    $mensajeOffline.appendChild(mensaje);
}

setInterval(mensajeTime, 5000);

function mensajeTime() {
  const d = '';
  document.getElementById("mensaje-offline").innerHTML ='';
}
crearMensajeOffline();