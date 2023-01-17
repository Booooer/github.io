let valueLarge = document.querySelector('.value-large')
let canvas = document.getElementById('draw-field')
let reset = document.getElementById('reset')
let color = document.getElementById('color')
let ctx = canvas.getContext('2d')
ctx.lineWidth = document.getElementById('large-number').innerHTML
ctx.lineCap = "round"
let prevX = null
let prevY = null
let draw = false

valueLarge.addEventListener('input',function (){
    document.getElementById('large-number').innerHTML = this.value
    ctx.lineWidth = this.value
})

reset.addEventListener('click',function (){
    ctx.clearRect(0,0,900,500)
})

color.addEventListener('change',function (){
    ctx.fillStyle = this.value
    ctx.strokeStyle = this.value
})

canvas.addEventListener("mousedown", (e) => draw = true)
// Set draw to false when mouse is released
canvas.addEventListener("mouseup", (e) => draw = false)

canvas.addEventListener('mousemove',(e) => {
    if (prevX == null || prevY == null || !draw){
        prevX = e.offsetX
        prevY = e.offsetY
        return
    }

    let currentX = e.offsetX
    let currentY = e.offsetY

    ctx.beginPath()
    ctx.moveTo(prevX,prevY)
    ctx.lineTo(currentX,currentY)
    ctx.stroke()

    prevX = currentX
    prevY = currentY
})

function saveCanvas(){
    let dataUrl = canvas.toDataURL("image/png")
    let link = document.createElement("a")
    link.href = dataUrl
    link.download = "canvas.png"
    link.click()
}