const buttonEntrar = document.querySelector('#button-entrar');
const submitBtn = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');
const counter = document.querySelector('#counter');
const textarea = document.querySelector('#textarea');
const form = document.querySelector('#evaluation-form');

function validation() {
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

buttonEntrar.addEventListener('click', (event) => {
  event.preventDefault();
  validation();
});

function validarAgreement() {
  if (!agreement.checked) {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
}
agreement.addEventListener('click', validarAgreement);

function decrementaCounter() {
  // const valorCounter = parseInt(counter.innerText);
  const maxValor = 500;
  const caracteresTextArea = textarea.value.length;
  const resultado = maxValor - caracteresTextArea;
  counter.innerText = resultado;
}
textarea.addEventListener('keyup', decrementaCounter);

function salvaName() {
  const nome = document.querySelector('#input-name').value;
  const sobrenome = document.querySelector('#input-lastname').value;
  const nomeNew = document.createElement('p');
  nomeNew.innerText = `Nome: ${nome} ${sobrenome}`;
  return nomeNew;
}

function salvaEmail() {
  const email = document.querySelector('#input-email').value;
  const emailNew = document.createElement('p');
  emailNew.innerText = `Email: ${email}`;
  return emailNew;
}

function salvaCasa() {
  const select = document.querySelector('#house');
  const casaSelecionada = select.options[select.selectedIndex].value;
  const houseNew = document.createElement('p');
  houseNew.innerText = `Casa: ${casaSelecionada}`;
  return houseNew;
}

function salvaFamilia() {
  const family = document.querySelectorAll('[name=family]:checked');
  const familyNew = document.createElement('p');
  familyNew.innerText = `Família: ${family[0].value}`;
  return familyNew;
}

function salvaMaterias() {
  const content = document.querySelectorAll('[name=content]:checked');
  const valores = [];
  for (let i = 0; i < content.length; i += 1) {
    valores.push(content[i].value);
  }
  const contentNew = document.createElement('p');
  contentNew.innerText = `Matérias: ${valores.join(', ')}`;
  return contentNew;
}

function salvaAvaliacao() {
  const rate = document.querySelectorAll('[name=rate]:checked');
  const rateNew = document.createElement('p');
  rateNew.innerText = `Avaliação: ${rate[0].value}`;
  return rateNew;
}

function salvaObservacao() {
  const text = document.querySelector('#textarea').value;
  const textareaNew = document.createElement('p');
  textareaNew.innerText = `Observações: ${text}`;
  return textareaNew;
}

function geraForm() {
  const newName = salvaName();
  const newEmail = salvaEmail();
  const newHouse = salvaCasa();
  const newFamily = salvaFamilia();
  const newContent = salvaMaterias();
  const newRate = salvaAvaliacao();
  const newTextarea = salvaObservacao();
  form.innerHTML = '';
  const titulo = document.createElement('h1');
  titulo.innerText = 'Meu Formulário de Avaliação';
  form.appendChild(titulo);
  form.appendChild(newName);
  form.appendChild(newEmail);
  form.appendChild(newHouse);
  form.appendChild(newFamily);
  form.appendChild(newContent);
  form.appendChild(newRate);
  form.appendChild(newTextarea);
}

submitBtn.addEventListener('click', geraForm);
