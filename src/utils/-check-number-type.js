const numType = (x) => {
    let y;
    for (let i = 3; i < Math.ceil(Math.sqrt(x)) + 1; i+=2) {
      if (x % 2 === 0) {    
        y = 0;  
        break;
      } else if (x % i === 0) {
        y = 1;      
        break;
      }    
    }
    if (x === 0 || y === 0) {
      return 'green'
    } else if ( x === 1 || y === 1) {
      return 'orange'
    } else return 'red'
  }
  export default numType;

 