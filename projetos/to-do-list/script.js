const inputTextTarefa = document.querySelector('#texto-tarefa'); // input
inputTextTarefa.style.color = 'red';
// console.log(inputTextTarefa);
const buttonCriaTarefa = document.querySelector('#criar-tarefa'); // button
const buttonClearAll = document.querySelector('#apaga-tudo');
// console.log(buttonCriaTarefa);
// const listaTarefa = document.querySelector('#lista-tarefas'); // ol
// console.log(listaTarefa);
// const olChildren = listaTarefa.children;
const buttonRemoverFinalizados = document.querySelector('#remover-finalizados');
const botaoSalvarTarefas = document.querySelector('#salvar-tarefas');
const moverBaixo = document.querySelector('#mover-baixo');
const moverCima = document.querySelector('#mover-cima')
const botaoRemoveSelecioanado = document.querySelector('#remover-selecionado');
// cria li com o value do input
// buttonCriaTarefa.addEventListener('click', criaLi);
// function criaLi() {
//     let inputValue = inputTextTarefa.value;
//     // console.log('inputValue', inputValue);
//     if (inputValue !== '') {
//         var li = document.createElement('li');
//         console.log('texto li -- ', li.innerText = inputValue);        
//         // listaTarefa.appendChild(li); 

//     } else {
//         $('#modalError').modal('show');
//     }
// };

var arr = [];
var ol = document.getElementById("lista-tarefas");

buttonCriaTarefa.addEventListener('click', function criaLi() {
  var li = document.createElement("li");
  li.className = 'li-item'
  let inputValue = inputTextTarefa.value;
  if (inputValue !== '') {
    ol.appendChild(li);
    li.innerText = inputValue;
    arr.push(li);
    inputTextTarefa.value = '';
  } else {
    $('#modalError').modal('show');
  };
//   console.log('evento -', li);
//   console.log('evento -', ol);
});
// console.dir(ol.children);
// console.log('arr', arr);

// pintar li ao ser clicada
ol.addEventListener('click', (e) => {
  // guarda todas as classes selected achadas 
  const selected = document.querySelectorAll('.selected');
  // e.target.classList.toggle('selected')
  // // percorre todas as classes selected em ol     
  for (let i = 0; i < selected.length; i++) {
    // achou a classe selected no indice ? remove
    selected[i].classList.remove('selected');
  };

  // // add a classe selected no elemento alvo do click
  e.target.classList.add('selected');
});


// risca elemento li
function riscaItem(e) {
  // guarda classe completed
  // const completed = document.querySelector('.completed');
  // guarda classe selected
  
  // const selected = document.querySelector('.selected');
  // if (completed === selected) {
  //   // remove classe completed
  //   completed.classList.toggle('completed');
  // }

  // add/remove classe completed ao clique duplo
  e.target.classList.toggle('completed');
}
ol.addEventListener('dblclick', riscaItem);
/** https://pt.stackoverflow.com/questions/396504/juntar-dois-eventos-que-tem-a-mesma-fun%C3%A7%C3%A3o */

// apaga a ol
function apagaListaToda() {
  // ol.innerHTML = ''
  let liItem = document.querySelectorAll('.li-item')
  for (let i = 0; i < liItem.length; i++) {
    liItem[i].remove()
  }
}
buttonClearAll.addEventListener('click', apagaListaToda);


function removeLiRiscada(e) {
  let selected = document.querySelectorAll('.completed');
  for (let i = 0; i < selected.length; i++) {
    selected[i].remove()
  }
  // for (let i = 0; i < olLi.length; i++) {
  //   if (olli[i].classList.contains('completed')) {
  //     olLi[i].remove('li')
  //   }
  // }
}
buttonRemoverFinalizados.addEventListener('click', removeLiRiscada);


/** LOCAL SOTORAGE */
// armazena em local storage
console.log(ol.innerHTML);

// salva em localstorage
function salvarTarefa(){
  let conteudo = ol.innerHTML;
  localStorage.setItem('li', conteudo);
};
botaoSalvarTarefas.addEventListener('click', salvarTarefa);

// rederiza no HTML
function renderizaLocalStorage() {
  let dadosLocalStorage = localStorage.getItem('li');
  ol.innerHTML = dadosLocalStorage;
};
renderizaLocalStorage();

// move li para cima
function moveLiParaCima() {
  let selected = $('ol li.selected');
  selected.insertBefore(selected.prev());
};
moverCima.addEventListener('click', moveLiParaCima);

// move li para baixo
function moveLiParaBaixo(e) {
  let selected = $('ol li.selected');
  selected.insertAfter(selected.next());
}
moverBaixo.addEventListener('click', moveLiParaBaixo);

// remove li marcada como selecionada
function removeSelecionado() {
  let selected = document.querySelectorAll('.selected');
  for (let i = 0; i < selected.length; i++) {
    selected[i].remove();
  }
};
botaoRemoveSelecioanado.addEventListener('click', removeSelecionado);