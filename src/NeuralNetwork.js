import Matrix from './matrix.js';

function sigmoid( x){
  return 1 / ( 1 + Math.exp( -x));
}

function feedForward( input){
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


const NeuralNetwork = ( inputLength, hiddenLength, outputLength)=>{
  let _public = {
    feedForward
  };

  _public.weights_ih = Matrix(hiddenLength, inputLength);
  _public.weights_ho = Matrix(outputLength, hiddenLength);

  _public.weights_ih = _public.weights_ih.randomize();
  _public.weights_ho = _public.weights_ho.randomize();

  _public.hidden_bias = Matrix( hiddenLength, 1);
  _public.output_bias = Matrix( outputLength, 1);

  _public.hidden_bias = _public.hidden_bias.randomize();
  _public.output_bias = _public.output_bias.randomize();

  return _public;
};


export default NeuralNetwork;