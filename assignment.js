

// frist assignement convert feet to mile *

function feetToMile (value) {
    const valueDivision = value / 5280;

    return valueDivision;
}

var setValue = feetToMile (5280);         // please set your feet number  to convert mile.
console.log("total Mile :" , setValue );  







// second assignement count total wood cubic **

function woodCalculator (chare , table , bad) {

    var chareWoodCount = chare * 1;
    var tableWoodCount = table * 3;
    var badWoodCount = bad * 5;
    var addValue = chareWoodCount + tableWoodCount + badWoodCount;

    return addValue;
}

var woodCount = woodCalculator (1 , 1 , 1);    // please set your (chare , table , bad) quantity to Measurements wood.
console.log ("total cubic wood :" , woodCount );








// third assignement calculator brick ***

function brickCalculator (value1) {
     
   if (value1 <= 10) {
       return  value1 * 15 * 1000;
   } else if (value1 <= 20) {
        return  (10 * 15 * 1000) + ((value1-10) * 12 * 1000);
   }else {
        return  (10 * 15 * 1000) + (10 * 12 * 1000) + ((value1-20) * 10 * 1000);
   }
}

var setValue = brickCalculator (1);          // please set your building floor for calculation total brick number.
console.log( "total brick :" , setValue );







// fourth assignement find out the small ( name / element )****  
 
function tinyFriend(value) {
 
    var longest = "";
    for (i = 0 ; i < value.length ; i ++){
        var stor = value[i];
        if ( stor.length < longest.length || longest.length == 0){
            longest = stor;
        }
        
    }
    return longest;
   }
   var setArray = ["html","css", "bootstrap","JS"];    // you can set array here to see small element. 
   var callArray = tinyFriend(setArray);
   console.log ("small element is : " , callArray);