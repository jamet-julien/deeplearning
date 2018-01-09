import Timer from './timer.js'

const canvas  = document.getElementById('game'),
      context = canvas.getContext('2d');


async function init(){
  
  let timer = Timer( 1/60);

  let curve = Curve();
  
  let obj = {
    x : 0,
    y : 0
  }

  timer.update = (frq) => {}

  timer.draw = ( )=>{}

  timer.run();

}

init();