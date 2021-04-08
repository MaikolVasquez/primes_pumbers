function sumPrimes(num) {
    let arr = []
    let res = []
    for(let i=num;i>2;i--){
      if(i%2){
        arr.unshift(i)
      }    
    }
  
  
  arr.map(el=>{
    let index = Math.ceil(el-(el/2))
    for(let i = index;i>2;i--){
      if(Number.isInteger(el/i)){
        arr[arr.indexOf(el)] = null;
        break;
      }
    }
  })
  
  arr = arr.filter(e=>e)
  arr.unshift(2)
    
    return arr;
  }
  
  console.log(sumPrimes(30))