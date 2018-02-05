import Matrix from './matrix.js';

/**
 * 
 * @param {*} x 
 */
function sigmoid( x){
  return 1 / ( 1 + Math.exp( -x));
}

function dsigmoid(y) {
  // return sigmoid(x) * (1 - sigmoid(x));
  return y * (1 - y);
}

/**
 * 
 * @param {*} input 
 */
function predict( input){
  let inputLayer  = Matrix.fromArray( input);

  let hiddenLayer = this.weights_ih
                        .multiply( inputLayer)
                        .add( this.hidden_bias)
                        .map( sigmoid);

  let outputLayer = this.weights_ho
                        .multiply( hiddenLayer)
                        .add( this.output_bias)
                        .map( sigmoid);
  
  return outputLayer.toArray();
}

/**
 * 
 * @param {*} input 
 * @param {*} target 
 */
function train( input, target){
  // Generating the Hidden Outputs
  let inputLayer  = Matrix.fromArray(input);

  let hiddenLayer = this.weights_ih
                        .multiply(inputLayer)
                        .add(this.hidden_bias)
                        .map(sigmoid);

  let outputLayer = this.weights_ho
                        .multiply(hiddenLayer)
                        .add(this.output_bias)
                        .map(sigmoid);
  
  /// END predict

  /*
   ____  _     _____  ____  _     _____
  /  _ \/ \ /\/__ __\/  __\/ \ /\/__ __\
  | / \|| | ||  / \  |  \/|| | ||  / \
  | \_/|| \_/|  | |  |  __/| \_/|  | |
  \____/\____/  \_/  \_/   \____/  \_/

  */
  // Calculate the output layer errors
  let targetLayer  = Matrix.fromArray(target);
  let outputErrors = targetLayer.subtract( outputLayer);

  //calculate gradient
  let outputGradients = outputLayer.map( dsigmoid)
                                   .multiply( outputErrors)
                                   .multiply( this.learningRate);

  //calculate deltas
  let hiddenTranspose  = hiddenLayer.transpose();
  let weight_ho_deltas = outputGradients.multiply( hiddenTranspose);

  //adjust value
  this.weights_ho  = this.weights_ho.add( weight_ho_deltas);
  this.output_bias = this.output_bias.add( outputGradients);


  /*
  _     _  ____  ____  _____ _
  / \ /|/ \/  _ \/  _ \/  __// \  /|
  | |_||| || | \|| | \||  \  | |\ ||
  | | ||| || |_/|| |_/||  /_ | | \||
  \_/ \|\_/\____/\____/\____\\_/  \|

  */
  // Calculate the hidden layer errors
  let alternLayer  = this.weights_ho.transpose();
  let hiddenErrors = alternLayer.multiply( outputErrors);
  
  //calculate gradient
  let hiddenGradients = hiddenLayer.map( dsigmoid)
                                   .multiply( hiddenErrors)
                                   .multiply( this.learningRate);

  //calculate deltas
  let inputTranspose   = inputLayer.transpose();
  let weight_ih_deltas = hiddenGradients.multiply( inputTranspose);

  //adjust value
  this.weights_ih  = this.weights_ih.add( weight_ih_deltas);
  this.hidden_bias = this.hidden_bias.add( hiddenGradients);

}


const NeuralNetwork = ( inputLength, hiddenLength, outputLength)=>{
  let _public = {
    learningRate: 0.1,
    predict,
    train
  };

  _public.weights_ih = Matrix( hiddenLength, inputLength);
  _public.weights_ho = Matrix( outputLength, hiddenLength);

  _public.weights_ih = _public.weights_ih.randomize();
  _public.weights_ho = _public.weights_ho.randomize();

  _public.hidden_bias = Matrix( hiddenLength, 1);
  _public.output_bias = Matrix( outputLength, 1);

  _public.hidden_bias = _public.hidden_bias.randomize();
  _public.output_bias = _public.output_bias.randomize();

  return _public;
};


export default NeuralNetwork;