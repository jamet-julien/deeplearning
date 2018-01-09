
function add(value) {
  let _Matrice = Matrice(this.rows, this.cols);
  
  if( value.matrice){  
    _Matrice.matrice = this.matrice.map((col, j) => col.map((cell, i) => cell += value.matrice[j][i]));
  }else{
    _Matrice.matrice = this.matrice.map(col => col.map(cell => cell += value));
  }

  return _Matrice;
}

function multiply(value) {
  let _Matrice;

  if (value.matrice) {  

    if( this.cols !== value.rows){
      throw new Error('The number of column and row are different');
    }

    let a = this,
        b = value;

    _Matrice   = Matrice( a.rows, b.cols);
    let [iLen, jLen, kLen] = [ _Matrice.rows, _Matrice.cols, a.cols];

    for (let i = 0; i < iLen;i++){
      for (let j = 0; j < jLen;j++){
        let sum = 0;
        for( let k = 0; k < kLen;k++){
          sum += a.matrice[i][k] * b.matrice[k][j];        
        }
        _Matrice.matrice[ i ][ j ] = sum;
      }
    }

  }else{
    _Matrice     = Matrice(this.rows, this.cols);
    _Matrice.matrice = this.matrice.map(col => col.map(cell => cell *= value));
  }

  return _Matrice;
}

function transpose(){
  let _Matrice = Matrice( this.cols, this.rows);
  _Matrice.matrice = _Matrice.matrice.map((row, j) => row.map((cell, i) => this.matrice[i][j]));
  return _Matrice;
}

function randomize( min = 0, max = 10) {
  let _fn = _ => Math.ceil( (Math.random() * (max-min)) + min);
  let _Matrice = Matrice(this.rows, this.cols);

  _Matrice.matrice = this.matrice.map(col => col.map(cell => _fn()));
  return _Matrice;
}


const Matrice = (rows, cols) => {
  let _public = {
    rows,
    cols,
    add,
    multiply,
    transpose,
    randomize,
    matrice: []
  },subTmp = [];

  subTmp.length = cols;
  subTmp.fill(0);

  _public.matrice = [];

  for (;rows--;){
    _public.matrice.push( [ ...subTmp]);
  }

  return _public;
}


export default Matrice;