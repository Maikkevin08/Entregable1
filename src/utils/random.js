const getRandomElement=(elements)=>{
    //logica necesaria para devolver un elemento aleatorio de ese arreglo 
    //metodo aleatorio q nos da de 0 a 0.9999
    //0--->0.9999*10=9.999999
    //el math.floor es donde nos hace ver los indices aleatorio, ejemplo el maximo array es 10valores
    //tomamos el q menos se acerca al valor entero para q el indice si es 9.99999 entonces es indice 9, pero el valor sera
    // la posiicon 10
    //9
    const indexRandom=Math.floor(Math.random()*elements.length)
    return elements[indexRandom]
  };
  export {getRandomElement}