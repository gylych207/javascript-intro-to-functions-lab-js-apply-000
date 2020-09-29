function  shout (str){
  return str.toUpperCase()
}

function whisper(str){
  return str.toLowerCase()
}

function calls(str){
  return console.log(str.toUpperCase())
}

function logShout(str){
  console.log(str.toUpperCase());
}

function logWhisper(str){
  console.log(str.toLowerCase());
}

function sayHiToGrandma(str){
  if(str === str.toLowerCase()){
    return "I can't hear you!"
  }
  else if(str == str.toUpperCase()){
    return "YES INDEED!"
  }
  else{
    return "I love you, too." 
  }
}