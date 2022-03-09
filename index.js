let getColor = document.querySelector('input')
let getText = document.querySelector('p')
let getBackground = document.querySelector('.colorband')

document.body.addEventListener('click', () => {
    console.log(getColor.value)
    getText.style.color =`${getColor}`
    getBackground.style.backgroundColor =
})