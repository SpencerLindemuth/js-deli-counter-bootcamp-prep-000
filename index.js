function takeANumber(line, person){
  line.push(person)
  return `Welcome, ${person}. You are number ${line.length} in line.`
}

function nowServing(line){
  if(!line.length){
    return `There is nobody waiting to be served!`
  }
  else{
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(line){
  if(!line.length){
    return `The line is currently empty.`
  }
  else{
    var queue = "The line is currently: "
    for(let i = 0; i < line.length; i++){
      if(i < (line.length - 1)){
        queue = queue + `${i + 1}. ${line[i]}, `
      }
      else{
        queue = queue + `${i + 1}. ${line[i]}`
      }
    }
    return queue
  }
}
