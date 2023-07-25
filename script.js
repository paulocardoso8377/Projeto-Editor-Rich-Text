const $ = document.querySelector.bind(document)/* Selecionando esse documento quando usado
essa const*/
const divText = $('.text')/* Mencionando a const criada acima e selecionando a classe ".text" */

let lastInput 

$('.t').addEventlistener('click', () => {

    if(!lastInput) return alert('Nenhum componente selecionado')
    if(lastInput.style.fontSize === '25px') lastInput.style.fontSize = '15px'
    else lastInput.style.fontSize = '25px'

})
$('.b').addEventListener('click', () => {
    if (!lastInput) return alert('Nenhum componente selecionado')
    if (lastInput.style.fontWeight === 'bold') lastInput.style.fontWeight = ''
    else lastInput.style.fontWeight = 'bold'
})
$('.i').addEventListener('click', () => {
    if (!lastInput) return alert('Nenhum componente selecionado')
    if (lastInput.style.fontStyle === "italic") lastInput.style.fontStyle = ""
    else lastInput.style.fontStyle = "italic"
})
$('.u').addEventListener('click', () => {
    if (!lastInput) return alert('Nenhum componente selecionado')
    if (lastInput.style.textDecoration === "underline") {
        lastInput.style.textDecoration = ''
    }else  lastInput.style.textDecoration = 'underline'
})
$('.s').addEventListener('click', () => {
    if (!lastInput) return alert('Nenhum componente selecionado')
    if (lastInput.style.textDecoration === "line-through") {
        lastInput.style.textDecoration = ''
    }else  lastInput.style.textDecoration = 'line-through'
})
$('.link').addEventListener('click',() => {
    if(!lastInput) return('Nenhum componente selecionado') 
    const domain = ('Digite o link do domínio  que deseja selecionar\n obs: incluindo o https://')
    if(!domain) return;
    const content = lastInput.value
    const container = lastInput.parentElement
    lastInput.remove()
    const link = document.createElement('a')
    link.setAttribute('href', domain)
    link.setAttribute('class', 'input-link')
    link.innerHTML = content 
    container.insertAdjacentElement('afterbegin', link)
})

    