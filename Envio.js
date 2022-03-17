function isMobile() {

    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;

    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;

    return false;
}
const $form = document.querySelector('#form');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const phone = '51939054685';


$form.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true

    setTimeout(() => {
	    
  let cliente = document.querySelector("#cliente").value;
  let fecha = document.querySelector("#fecha").value;
  let hora = document.querySelector("#hora").value;
  let empleado = document.querySelector("#empleado").value;
  let items = document.querySelector("#price").innerText;
  let servicio = document.querySelector("#servicio").value;
  let total = document.querySelector("#total").innerHTML;

	    
     //   let name = document.querySelector('#name').value
     //   let lastname = document.querySelector('#lastname').value
     //   let email = document.querySelector('#email').value
        let message = 'send?phone=' + phone + '&text=*_Formulario Gabriel Chávez_*%0A*Contacto*%0A%0A*¿Cual es tu nombre?*%0A' + cliente + '%0A*¿Cuáles son tus apellidos?*%0A' + items + '%0A*¿Cuál es tu correo?*%0A' + total + ''


        if (isMobile()) {
            window.open(urlMobile + message, '_blank')
        } else {
            window.open(urlDesktop + message, '_blank')
        }

        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false

    }, 4000);

});
