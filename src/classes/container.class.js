const fs = require('fs');

class Contenedor {

  constructor(filename) {
    this._filename = `src/db/${filename}.txt`;
  }


  /**
   * This function 
   * @returns 
   */
  _getLines(){
    const fileBuffer =  fs.readFileSync(this._filename).toString();
    
    return !fileBuffer ? [] : fileBuffer.split("\n");
  }


  /**
   * Recive a new object, save current element in file 
   * 
   * @param {object} data
   */
  save(data) {

    const lines = this._getLines();

    if(lines.length > 0){
      const {id} = JSON.parse(lines.pop())

      data.id = id + 1

    } else{
      data.id = 1
      
    }
         
    fs.appendFileSync(this._filename, (data.id === 1 ? '' : '\n') + JSON.stringify(data));

    console.log(data.id)

    return data.id

  }

  /**
   * Get element by Id
   * 
   * @param {number} id 
   * @returns {Object} element
   */
  getById(id) {
    
    return  this.getAll().find(element => element.id === id );

  }

  /**
   * List all elements
   * 
   * @returns {Array<Object>} elements
   */
  getAll() {
    return this._getLines().map(element => JSON.parse(element));
    
  }

  /**
   * Delete elemet by Id
   * 
   * @param {number} id 
   */
  deleteById(id) {
    const allLines = this.getAll().filter( el => el.id !== id);

    const reducer = (previousValue, currentValue) => {
      return previousValue + (previousValue === '' ? '' : '\n') + JSON.stringify(currentValue);
    }
    
    fs.writeFileSync(this._filename, allLines.reduce(reducer, ''));
  }
  

  /**
   * Removes all saved elements
   */
  deleteAll() {

    const datos = fs.writeFileSync(this._filename, '');
    console.log(datos);

  }
}


module.exports = Contenedor;
