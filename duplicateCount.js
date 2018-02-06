
duplicateCount("helpmeplease");

function duplicateCount(text){

 const count = text.split("").reduce( (tally, text) => {
   tally[text] = (tally[text] || 0) + 1 ;
     return tally;
 } , {})

var arr = Object.keys(count).map(function (key) {
    return count[key];
});

const result = arr.filter(word => word > 1);
const end = result.length;
  console.log(end);

};
