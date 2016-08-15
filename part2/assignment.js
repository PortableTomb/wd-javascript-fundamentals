// Define a function named sum that takes in one argument.
//    arr (array of numbers)
//
// Return the sum of all of the numbers in the array. For example, given
// [1, 2, 3, 4], then return 10. If the array is empty, return 0.
// var sum = 0;
//
// for (var i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
//
// return sum;
var numbers = [1, 2, 3, 4];

function sum(arr) {
    var total = 0;

    if (arr.length === 0){
        return 0;
    } else {
    for (var i = 0; i < arr.length; i++) {
		total += arr[i]; 	// adds sum + current
    }
    return total;
    }
}

// Define a function named product that takes in one argument.
//    arr (array of numbers)
//
// Return the product of all of the numbers in the array. For example, given
// [1, 2, 3, 4], then return 24. If the array is empty, return 1.

var numbers = [1, 2, 3, 4];
var total = 1;

 function product(arr) {
    for (var i = 1; i < arr.length; i++) {
   		total *= arr[i]; 	// multiplies sum * current
    }
       return total;
   }

// Define a function named concatenate that takes in one argument.
//    arr (array of strings)
//
// Return the concatenation of all the strings in the array. For example, given
// ['hello', 'my', 'name', 'is', 'ken'], then return 'hellomynameisken'. If the
// array is empty, return ''.
var words = ['hello', 'my', 'name', 'is', 'ken'];
function concatenate(arr) {
    var concatenatedWord = arr.join('');
    return concatenatedWord;
}

// Define a function named repeat that takes in two arguments.
//     str (string)
//     times (number)
//
// Return a new string containing times copies of the input str. For example,
// given 'hi' and 4, then return 'hihihihi'.
function repeat(str, times) {
     var result = '', i;

     for (i = 1; i <= times; i *= 2) {
         if ((times & i) === i) {
             result += str;
         }
         str = str + str;
     }
     return result;
}


// Define a function named filterPassingGrades that takes in one argument.
//     grades (array of numbers)
//
// Return a new array with any grade less than 70 filtered out. For example,
// given [88, 67, 70, 92, 53], then return [88, 70, 92].

// var grades =[88, 67, 70, 92, 53];
//
// function filterPassingGrades(arr) {
//
//     for (i = 0; i <= arr.length; i ++) {
//         if (arr[i] < 70) {
//             arr.splice(i,1);
//         }
//     }
//     return arr;
// }



var grades =[88, 67, 70, 92, 53, 45];
function filterPassingGrades(arr) {

    var filteredgrades = [];
    for (i = 0; i <= arr.length; i ++) {
        if (arr[i] >= 70) {
            filteredgrades.push(arr[i]);
        }
    }
    console.log(grades);
    return filteredgrades;
}

// Define a function named replace that takes in three arguments.
//    arr (array of numbers)
//    from (number)
//    to (number)
//
// Return a new array of numbers where all from elements are replaced with to.
// For example, given [1, 3, 2, 1, 3], 1, and 4, then return [4, 3, 2, 4, 3].
// var arr =[1, 3, 2, 1, 3];

function replace(arr,from,to){

    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if( arr[i] === from) {
            newArr.push(to);
        } else {
            newArr.push( arr[i]);
        }
    }
    return newArr;
}

// var newArr = arr.splice(from, to , 4, 3, 2, 4, 3);
// return arr;
// Define a function named flatten that takes in one argument.
//     arr (array of arrays)
//
// Return a new array that combines all of elements of each inner array. For
// example, given [[1], [2, 3], [4]], then return [1, 2, 3, 4].
//
// Tip: You only need to flatten one level deep.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

var arrOfarr = [[1], [2, 3], [4]];

function flatten(arr){
    var flattened=[];
    for (var i=0; i<arr.length; ++i) {
        var current = arr[i];
        for (var j=0; j<current.length; ++j)
            flattened.push(current[j]);
    }
    return flattened;
}

// var flat = []; // alt method - does not work on deeply nested arrays
// flat = arr.join(',').split(',').map(Number);
// return flat;


// Define a function named max that takes in one argument.
//    arr (array of numbers)
//
// Return the maximum number in the array. For example, given [1, 2, -3, 4],
// then return 4. If the array is empty, return -Infinity.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
var numbers = [1, 2, -3, 4];
function max( arr ) {
 return Math.max.apply(null, arr);
}



// Define a function named min that takes in one argument.
//    arr (array of numbers)
//
// Return the minimum number in the array. For example, given [1, 2, -3, 4],
// then return -3. If the array is empty, return Infinity.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
var numbers = [1, 2, -3, 4];
function min( arr ) {
return Math.min.apply(null, arr);
}



// Define a function named mean that takes in one argument.
//    arr (array of numbers)
//
// Return the mean (i.e. average) of all of the numbers in the array. For
// example, given [1, 2, 6], then return 3. If the array is empty, return null.
var given=[1, 2, 6];

function mean(arr) {
    if (arr.length === 0){
        return null;
    } else {
    var sum = 0;
    arr.forEach(function(i) {		//	iterates through num*
      sum += i;						//  sum + current
  });
    return sum / arr.length;        //  sum / array length
}
}


// Define a function named median that takes in one argument.
//    arr (array of numbers)
//
// Return the median of all of the numbers. For example, given [1, 2, 6], then
// return 2. Also, if given [1, 2, 6, 8], return 4. If the array is empty,
// return null.
//
// Tip: Use Google to learn more about calculating the median.
// Tip: The given array may not be sorted.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// median w/ sort
var given =[1, 2, 6, 8];

function median(arr) {
    if (arr.length === 0){
        return null;
    } else {
    arr.sort(function (a,b){return a - b});
    var mid = Math.floor(arr.length / 2);
    if ((arr.length % 2) == 1)  // length is odd
        return arr[mid];
    else
        return (arr[mid - 1] + arr[mid]) / 2;
        }
}

//
// function median(arr){
//     var result = [];
//     var sortedArr = arr.sort(function(num1, num2) {
//           return num1 - num2;
//     });
//
//         result.push(sortedArr);
//         var medianIndex = Math.floor(sortedArr.length / 2);
//         if (arr.length % 2 === 0) {
//           result.push((sortedArr[medianIndex-1] + sortedArr[medianIndex]) / 2);
//           return result;
//         } else {
//           result.push(sortedArr[medianIndex]);
//           return result;
//         }
//
// }


// Define a function named contains that takes in two arguments.
//     arr (array of strings)
//     str (string)
//
// Return true if that string exists in the array, otherwise false.
function contains(arrayOfStrings,string){

        if (arrayOfStrings.indexOf(string)> -1){
            return true;
            } else {
                return false;
            }

}
// Define a function named distance that takes in two arguments.
//    point1 (object)
//    point2 (object)
//
// Assume each point argument has the following format.
//    { x: NUMBER, y: NUMBER }
//
// Return the distance between the two points on a Cartesian coordinate system.
// For example, given { x: 3, y: 2 } and { x: 9, y: 7 }, then return
// approximately 7.810249675906654.
//
// Tip: Use Google to learn more about calculating the distance.
function distance( point1, point2 )
{
  var xNumber = 0;
  var yNumber = 0;

  xNumber = point2.x - point1.x;
  xNumber = xNumber * xNumber;

  yNumber = point2.y - point1.y;
  yNumber = yNumber * yNumber;

  return Math.sqrt( xNumber + yNumber ); //returns square root of numbers
}


// Define a function named combine that takes in two arguments.
//    obj1 (object)
//    obj2 (object)
//
// Return a new object that has the key-value pairs of both objects. For
// example, given { a: 1 } and { b: 2 }, then return { a: 1, b: 2 }.
// If there's a key in more than one object,
// the latest object to have the key will determine the value. For example,
// given {c: 3} and {c: 4}, then return {c: 4}.


var objA = { a: 1, b: 1, c: 1, d: 1 };
var objB = { a: 2, b: 2, c: 2, d: 2 };

// One possible solution
// function combine(obj1, obj2){
// var objC = {};
//
// for (var attrname in objA) { objC[attrname] = objA[attrname]; }
// for (var attrname in objB) { objC[attrname] = objB[attrname]; }
// return objC;
// }

// Another solution
function combine(obj1, obj2){
var objC = {};
var combinedObject = Object.assign(objC, objA, objB);
return objC;
 }


// Define a function called invert that takes in one argument.
//    obj (object)
//
// Return a new object where the keys and values of the argument are inverted.
// For example, given { a: 1, b: 2 }, then return { '1': 'a', '2': 'b' }.
// var given = { a: 1, b: 2 };

function invert(object){
var target = {};
 for (var key in object) {
     if ( object.hasOwnProperty(key) ) {
         target[ object[key] ] = key;
     }
 }
  return target;
}

// Define a function named values that takes in one argument.
//    obj (object)
//
// Return an array of the values of the object. For example, given
// { a: 1, b: 2, c: 3 }, then return [1, 2, 3].
// var example = { a: 1, b: 2, c: 3 };
// var exampleArray = [];
//
// for ( var value in example ) {
// exampleArray.push(example[value]);
// }

function values(object){
var objectArray = Object.keys(object).map(function (key) {return object[key]});
return objectArray;
}

// Define a function called toPairs that takes in one argument.
//    obj (object)
//
// Return a new array where each element is key-value pair array of the
// argument. For example, given { a: 1, b: 2 }, then return
// [['a', 1], ['b', 2]].

var given = { a: 1, b: 2, c:3 };

function toPairs(object){

var copyobj = {};

    function copyOwnPropertiesFrom(target, source) {
        Object.getOwnPropertyNames(source)  // (1)
        .forEach(function(propKey) {  // (2)
            var desc = Object.getOwnPropertyDescriptor(source, propKey); // (3)
            Object.defineProperty(target, propKey, desc);  // (4)
        });
        return target;
    }
return copyobj();
}


// Define a function called fromPairs that takes in one argument.
//    arr (array)
//
// Return a new object where each key-value pair is from an element in the
// argument. For example, given [['a', 1], ['b', 2]], then return
// { a: 1, b: 2 }.
function toPairs(object){

var obj = {};
for (var i = 0; i < x.length; i++) {
    var split = x[i].split(':');
    obj[split[0].trim()] = split[1].trim();
    }
}
