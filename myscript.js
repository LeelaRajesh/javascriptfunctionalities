var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

//1 day
function getday_time(){
    document.getElementById('day').innerHTML = 'Today is: '+days[d.getDay()]; 
    document.getElementById('time').innerHTML= 'Current Time is: '+getTime();
}
//time
function getTime(){
    var time =d.getHours();
    var temp = 'AM'
    if (time > 12)
    {
        time = time - 12;
        temp = 'PM'
    }
    time = time +' '+temp+' '+' '+ d.getMinutes()+ ' '+d.getSeconds();
    return time; 
}

//2 date
function getDate(){
    var date =d.getHours();
    date = d.getMonth()+1+'/'+d.getDate()+'/'+d.getFullYear();
    document.getElementById('date').innerHTML= date;
}

//3 multiply
function multiply(){
    var inp1 = document.getElementById('input1').value;
    var inp2 = document.getElementById('input2').value;
    document.getElementById('calcresult').classList.remove('error');  
    document.getElementById('calcresult').innerHTML = 'The result is: '+(inp1 * inp2);
}
// divide
function divide(){
    var inp1 = document.getElementById('input1').value;
    var inp2 = document.getElementById('input2').value;
    if(inp2 == 0){
        document.getElementById('calcresult').innerHTML = 'Cannot divide by zero';
        document.getElementById('calcresult').classList.add('error');    
    }
    else{
        document.getElementById('calcresult').innerHTML = 'The result is: '+(inp1 / inp2);
        document.getElementById('calcresult').classList.remove('error');    
    }    
}

//4 url
function getURL(){
    document.getElementById('url').innerHTML= window.location.href ;
}

//5 reverse
function reverse() {
    var inp = document.getElementById('revinp').value
    var splitString = inp.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    document.getElementById('revres').innerHTML = joinArray;
}

//6 2nd low high
function lowhigh(){
    var inp = document.getElementById('inparr').value
    var points = inp.split(",");
    points.sort(function(a, b){return a - b});
    document.getElementById("lowhighres").innerHTML = points[1]+','+points[points.length-2];
}

//7 range
function range(){
    var inp = document.getElementById('inprange').value
    var points = inp.split(",");
    if (points[0] > points[1]){
        document.getElementById('rangeres').innerHTML = 'First value must be lower than second value';
        document.getElementById('rangeres').classList.add('error'); 
    }
    else{
        var res ='[';
        for(var i=parseFloat(points[0])+1; i< points[1];i++){
            if ( i != points[1] - 1){
                res = res + i + ', ';
            }
            else{
                res = res + i + ']';
            }   
        }
        document.getElementById('rangeres').classList.remove('error'); 
        document.getElementById("rangeres").innerHTML = res;
    }
}


//8 merge sort 
function mergeres(){
    var inp =document.getElementById('inpmerge').value;
    var arr = inp.split(",");
    document.getElementById('mergeres').innerHTML=mergeSort(arr);
}


function mergeSort (arr) {
  if (arr.length === 1) {
    // return once we hit an array with a single item
    return arr
  }

  const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
  const left = arr.slice(0, middle) // items on the left side
  const right = arr.slice(middle) // items on the right side

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

// compare the arrays item by item and return the concatenated result
function merge (left, right) {
  let result = []
  let indexLeft = 0
  let indexRight = 0

  while (indexLeft < left.length && indexRight < right.length) {
      var left_value = parseFloat(left[indexLeft]);
      var right_value = parseFloat(right[indexRight]);
    if (left_value < right_value) {
      result.push(left[indexLeft])
      indexLeft++
    } else {
      result.push(right[indexRight])
      indexRight++
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}


//9 highest of the array
function gethighest(){
    var inp = document.getElementById('inphighest').value
    var points = inp.split(",");
    points.sort(function(a, b){return a - b});
    alert(points[points.length - 1]+' is the largest')
}


//10 check if nan
function checkIsNan(){
    var inp = document.getElementById('isnan').value;
    if(isNaN(inp)){
        document.getElementById('nanres').innerHTML = inp+ ' is not a number';
        document.getElementById('nanres').classList.add('error'); 
    }
    else{
        document.getElementById('nanres').innerHTML = inp+' is a number';
        document.getElementById('nanres').classList.remove('error'); 
    }
}

//11 type check
function checktype(){
    var inp1 = document.getElementById('data1').value;
    var inp2 = document.getElementById('data2').value;
    var element = document.getElementById('typeres')
    if(!(isNaN(inp1)) && !(isNaN(inp2)) && !(inp1 =="" || inp2 == "")){
        element.innerHTML = 'Both inputs are of data type number';
    }
    else if(inp1 =="" && inp2 == ""){
        element.innerHTML = 'Both inputs are of same type'
    }
    else if((typeof(inp1) === typeof(inp2)) && (isNaN(inp1) && isNaN(inp2))){
        element.innerHTML = 'Both inputs are of same type'
    }
    else {
        element.innerHTML = 'Both inputs are of diffrent data type';
    }  
}


