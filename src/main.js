import Timer  from './timer.js';
import Render from './render.js';
import Point  from './element/point.js';
import Line   from './element/line.js';
import GradientDescent from './GradientDescent.js';
import NeuralNetwork from './NeuralNetwork.js';

const canvas  = document.getElementById('game'),
      context = canvas.getContext('2d');

function background( ctx){
  ctx.fillStyle = '#333';
  ctx.fillRect(0, 0, 800, 600);
}

async function init(){
  
  /**
   * 
   */
  function addPointRandom(){
    let point = Point({
      x: Math.random(),
      y: Math.random(),
    });

    oGradient.point.push( point);
    render.layer.add(point.draw.bind(point));
  }

  /**
   * 
   * @param {*} _x 
   * @param {*} _y 
   */
  function updatePoint(_x, _y) {
    
    let point = oGradient.point[indexClick % 2];
  
    point.x = _x / 800;
    point.y = _y / 600;
  }


  let timer       = Timer( 1/100),
      render      = Render( context),
      oLine       = Line(),
      oGradient   = GradientDescent(),
      timeUp      = 3,
      indexClick  = 0,
      timeCurrent = 0,
      nn          = NeuralNetwork(2, 2, 1);
  
  let result = nn.feedForward([0,1]);
  console.log(result);

  canvas.addEventListener( 'click', ({ offsetX, offsetY }) => {

    indexClick++;
    updatePoint( offsetX, offsetY);
  });

  render.layer.add( background);

  for(let i= 0; i < 2; i++){
    addPointRandom();
  }

  render.layer.add( oLine.draw.bind( oLine));

  timer.update = (frq) => {
    oGradient.treat();
    oLine.start.y = oGradient.calculate( oLine.start.x);
    oLine.end.y   = oGradient.calculate( oLine.end.x);
  }

  timer.draw = () => {
    render.draw();
  }

  timer.run();

}

init();