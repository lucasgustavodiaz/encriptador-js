const btnEncriptar = document.getElementById('btnEncriptar')
const btnDesencriptar = document.getElementById('btnDesencriptar')
const btnCopiar = document.getElementById('btnCopiar')

const textInput = document.getElementById('textInput')
const textOutput = document.getElementById('textOutput')

const cardHead = document.getElementsByClassName('card-head')
const cardBody = document.getElementsByClassName('card-body')

btnEncriptar.addEventListener('click', () => {
  if (textInput.value === '') {
    cardHead[0].style.display = 'none'
    cardBody[0].style.display = 'flex'
    textOutput.value = ''
  } else {
    encriptar()
    cardHead[0].style.display = 'flex'
    cardBody[0].style.display = 'none'
  }
})

btnDesencriptar.addEventListener('click', () => {
  if (textInput.value === '') {
    cardHead[0].style.display = 'none'
    cardBody[0].style.display = 'flex'
    textOutput.value = ''
  } else {
    desencriptar()
    cardHead[0].style.display = 'flex'
    cardBody[0].style.display = 'none'
  }
})

btnCopiar.addEventListener('click', () => {
  textInput.value = textOutput.value
  textOutput.value = ''
  cardHead[0].style.display = 'none'
  cardBody[0].style.display = 'flex'
})

function encriptar() {
  let text = textInput.value.toLowerCase()
  let textEncriptado = ''

  textEncriptado = text
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat')

  textOutput.value = textEncriptado

  setTimeout(function () {
    textOutput.style.height = textOutput.scrollHeight + 'px'
  }, 10)
}

function desencriptar() {
  let text = textInput.value.toLowerCase()
  let textDesencriptado = ''

  textDesencriptado = text
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u')

  textOutput.value = textDesencriptado
}

function auto_grow(element) {
  element.style.height = '5px'
  element.style.height = element.scrollHeight + 'px'
}
