import Matrix from './matrix.js';


describe('first test', ()=>{
  
  it( 'init Matrix', ()=>{
      let ma = new Matrix(2, 2);
      expect(ma.rows).toBe(2);
      expect(ma.cols).toBe(2);
  });

  it('buildMatrice Matrix X2', () => {
    let ma = new Matrix(2, 2);
    expect(ma.matrice).toEqual([[0, 0], [0, 0]]);
  });

  it('buildMatrice Matrix X3-2', () => {
    let ma = new Matrix(3, 2);
    expect(ma.matrice).toEqual([[0, 0], [0, 0], [0, 0]]);
  });

  it('add Matrix', () => {
    let ma = new Matrix(2, 2);
    let mb = ma.add(2);
    expect(mb.matrice).toEqual([[2, 2], [2, 2]]);
  });

  it('add Matrix #2', () => {
    let ma = new Matrix(2, 2);
    ma.matrice = [[1, 2], [3, 4]];
    let mb = ma.add( 2);
    expect( mb.matrice).toEqual([[3, 4], [5, 6]]);
  });

  it('is pure matrice Matrix #2', () => {
    let ma  = new Matrix(2, 2);
    let row = ma.matrice[0];
    let mb  = ma.add(2);
    expect(row).not.toBe([2, 2]);
  });

  it('randomize matrice', () => {
    let ma = new Matrix(2, 2);
    let mb = ma.randomize(3, 3);
    expect(mb.matrice).toEqual([[3, 3], [3, 3]]);
  });

  it('add matrice / matrice', () => {
    let ma = new Matrix(2, 2);
    let mb = new Matrix(2, 2);
    
    ma.matrice = [[1, 2], [3, 4]]
    mb.matrice = [[4, 3], [2, 1]]
   
    let result = ma.add( mb);
    expect(result.matrice).toEqual([[5, 5], [5, 5]]);
  });

  it('multiply matrice / int', () => {
    let ma = new Matrix(2, 2);
    ma.matrice = [[1, 2], [3, 4]]
    let result = ma.multiply( 2);
    expect(result.matrice).toEqual([[2, 4], [6, 8]]);
  });

  it('multiply matrice / matrice', () => {
    let ma = new Matrix(2, 3);
    ma.matrice = [[1, 2, 3], [4, 5, 6]];
    let mb = new Matrix(3, 2);
    mb.matrice = [[1, 2], [3, 4], [5, 6]];
    let result = ma.multiply( mb);
    expect(result.matrice).toEqual([[22, 28], [49, 64]]);
  });

});