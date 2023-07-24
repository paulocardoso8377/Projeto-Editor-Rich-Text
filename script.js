const $ = document.querySelector.bind(document)/* Selecionando esse documento quando usado
essa const*/
const divText = $('.text')/* Mencionando a const criada acima e selecionando a classe ".text" */

let lastInput 

$('.t').addEventlistener('click', () => {

    if(!lastInput) return alert('Nenhum componente selecionado')
    if(lastInput.style.fontSize === '25px') lastInput.style.fontSize = '15px'
    else lastInput.style.fontSize = '25px'

})