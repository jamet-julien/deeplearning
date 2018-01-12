import Timer  from './timer.js';
import Render from './render.js';
import Point  from './element/point.js';
import Line   from './element/line.js';
import GradientDescent from './GradientDescent.js'

const canvas  = document.getElementById('game'),
      context = canvas.getContext('2d');


function background( ctx){
  ctx.fillStyle = '#333';
  ctx.fillRect(0, 0, 800, 600);
}

async function init(){
  
  function addPoint(){
    let point = Point({
      x: Math.random(),
      y: Math.random(),
    });

    oGradient.point.add(point);
    render.layer.add(point.draw.bind(point));
  }


  let timer     = Timer( 1/60),
      render    = Render( context),
      oLine     = Line(),
      oGradient = GradientDescent(),
      timeUp      = 3,
      timeCurrent = 0;

  render.layer.add( background);

  for(let i= 0; i < 2; i++){
   addPoint();
  }

  render.layer.add( oLine.draw.bind( oLine));

  timer.update = (frq) => {
    oGradient.treat();
    oLine.start.y = oGradient.calculate( oLine.start.x);
    oLine.end.y   = oGradient.calculate( oLine.end.x);

    if( timeCurrent > timeUp){
      timeCurrent = 0;
      addPoint();
    }

    timeCurrent += frq;
  }

  timer.draw = () => {
    render.draw();
  }

  timer.run();

}

init();