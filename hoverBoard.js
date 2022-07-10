const container = document.getElementById('container')
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']

const SQUARE = 552

for (i = 0; i < SQUARE; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 0.15rem ${color}`, `0 0 1rem ${color}`
}

function removeColor() {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = `0 0 0.1rem #000`

}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}