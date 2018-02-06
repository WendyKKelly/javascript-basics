function duplicateCount(text){

 var text = "watermellon";

   //console.log(text.split(""));

 const count = text.split("").reduce( (tally, text) => {
   tally[text] = (tally[text] || 0) + 1 ;
     return tally;
 } , {})

//console.log(count);

 //var arr = Object.values(count);
var arr = Object.keys(count).map(function (key) {
    return count[key];
});

console.log(arr);

const tally = arr.reduce((total, amount)=> total + amount);

console.log(tally);

};
