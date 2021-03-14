function random() {
    return Math.floor(Math.random() * 4);
  }
  
  var object = {
    word: ['table', 'car', 'chair', 'book', 'house'],
    study: ['javasript', 'css', 'html', 'python', 'java'],
    program: ['cook', 'game', 'trip', 'holiday', 'work'],
  }
  
  
  var mixed = []
  
  
  for(let something in object){
    var mixNumber = random(object[something].length)
    
    if(something === 'word'){
      mixed.push(`you are a ${object[something][mixNumber]}`)
    } else if  (something === 'study'){
      mixed.push(`you are learning ${object[something][mixNumber]}`)
    } else if(something === 'program'){
      mixed.push(`you have program: ${object[something][mixNumber]}`)
    } else {
      mixed.push('There is not enough info.')
    }
  }
  
  
    
    //console.log(mixed)
    //console.log(object)
  
  
  function formatWisdom(wisdom) {
      var formatted = mixed.join('\n')
      console.log(formatted)
    }
  
  formatWisdom(mixed);