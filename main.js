///////////// taking CANVAS ////////////////////////
let can = document.getElementById("snake")
let c = can.getContext("2d")

////////////////// creating Snake body ///////////////
// CONST
const box = 32
let x = Math.floor( Math.random()*19 )*box
let y = Math.floor( Math.random()*19 )*box

let a = Math.floor( Math.random()*19 )*box
let b = Math.floor( Math.random()*19 )*box

c.beginPath()
c.rect( x, y , box, box )
c.fillStyle = '#18f'
c.fill()
c.closePath()

///////////////////////////////////////////////////////
////////////////// creating Food //////////////////////

c.beginPath()
c.rect( a, b, box, box )
c.fillStyle = 'red'
c.fill()
c.closePath()

////////////////////////////////////////////////////////
//////////////////// drawing Setka /////////////////////

// vertical line
let k = 0
let h = 0
for( let i=0; i<19; i++ ){
  c.beginPath()
  c.moveTo( k, 0 )
  c.lineTo( k ,608 )
  c.stroke()
  k+=32
}

// horizontal line
for( let i=0; i<19; i++ ){
  c.beginPath()
  c.moveTo( 0, h )
  c.lineTo( 608, h )
  c.stroke()
  h+=32
}

////////////////////////////////////////////////////////
///////////// Action of the Snake //////////////////////
window.addEventListener( 'keydown', event => {
  
  switch( event.ket ){
    
    case('arrowUp'):
      toUp()
      break;

    case('arrowDown'):
      toDown()
      break;

    case('arrowRight'):
      toRight()
      break;

    case('arrowLeft'):
      toLeft()
      break;
  }

} )