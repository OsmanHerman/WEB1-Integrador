//CARROUSEL
let images = ['./assets/carrousel-img-1.png', './assets/carrousel-img-2.png', './assets/carrousel-img-3.png'];
let currentImageIndex = 0;

const carrouselImg = document.getElementById('carrousel-img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

prevButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  carrouselImg.src = images[currentImageIndex];
});

nextButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  carrouselImg.src = images[currentImageIndex];
});


//FORMULARIO
function validate (event) {
  event.preventDefault();
  const result = document.getElementById('result');
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  const phoneRegex = /^\d{10}$/;
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('textarea').value.trim();

  result.innerHTML = '';

  let hasError = false;
  
  if (!name || name.length > 50) {
    addErrorMessage('El nombre es obligatorio y no debe exceder los 50 caracteres.');
    hasError = true;
  }

  if (!emailRegex.test(email)) {
    addErrorMessage('El correo electrónico no tiene un formato válido.');
    hasError = true;
  }

  if (!phoneRegex.test(phone)) {
    addErrorMessage('El número de teléfono debe contener 10 dígitos.');
    hasError = true;
  }

  if (message.length === 0) {
    addErrorMessage('El mensaje es obligatorio.');
    hasError = true;
  }

  if (!hasError) {
    //addResultMessage('Formulario enviado exitosamente.');
    addResultMessage(`Nombre: ${name}`);
    addResultMessage(`Email: ${email}`);
    addResultMessage(`Teléfono: ${phone}`);
    addResultMessage(`Mensaje: ${message}`);
    addResultImg();
    return false;
  }

  return false;
};

function addErrorMessage(msg) {
  const errorMsg = document.createElement('p');
  errorMsg.style.color = 'red';
  errorMsg.textContent = msg;
  result.appendChild(errorMsg);
}

function addResultMessage(msg) {
  const resultMsg = document.createElement('p');
  const [label, value] = msg.split(': ');
  const labelSpan = document.createElement('span');
  const valueText = document.createTextNode(`: ${value}`);
  labelSpan.textContent = label;
  labelSpan.style.fontWeight = '600';
  resultMsg.appendChild(labelSpan);
  resultMsg.appendChild(valueText);
  const form = document.getElementsByClassName('form-container')[0];
  form.querySelector('form').style.display = 'none';
  result.appendChild(resultMsg);
}

function addResultImg() {
  const img = document.createElement('img');
  img.src = './assets/check.png';
  img.classList.add('result-img');
  result.appendChild(img);
  result.classList.add('result-centered');
}

