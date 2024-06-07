function simple_function(){
    var a = 70
    var b = 34
    console.log(a+b)
}

function Argument_function(a,b){
  console.log(a+b)

}

function img_change(i){
   if(i==1){
    document.getElementById('img1').src= "img/images.jpeg"
    document.getElementById('img2').src= "img/9558de9d-1e49-437e-aa7b-b8bd4d999b00.webp"
   }
   else{
        document.getElementById('img1').src= "img/9558de9d-1e49-437e-aa7b-b8bd4d999b00.webp"
        document.getElementById('img2').src= "img/images.jpeg"
   }
}

function calculate(a,b,operator){
  if(operator == '+'){
    var output = add(a,b)
    console.log(output)
  }

  if(operator == '-'){
    var output = minus(a,b)
    console.log(output)
  }

  if(operator == '*'){
    var output = multiply(a,b)
    console.log(output)
  }

  if(operator == '/'){
    var output = divide(a,b)
    console.log(output)
  }

}
function add(c,d){
  return c+d
}
function minus(c,d){
  return c-d
}
function multiply(c,d){
  return c*d
}
function divide(c,d){
  return c/d
} 