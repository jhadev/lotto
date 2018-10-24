$("#submit").on("click", function(event) {
  event.preventDefault();


let lotteryNumbers = [];

let numberGenerator = function(arr) {
 if (arr.length >= 5) return;
 let newNumber = Math.floor(Math.random() * 75 + 1);
 if (arr.indexOf(newNumber) < 0) {
   arr.push(newNumber);
 }
 numberGenerator(arr);

};

numberGenerator(lotteryNumbers)
lotteryNumbers.sort(function(a, b){return a - b})

let mega = Math.floor(Math.random() * 25 + 1);
lotteryNumbers.push(mega)

var row = $("<div>");
row.addClass("numbers");

row.append(`<p>Your numbers: ${lotteryNumbers}</p>`);

$("#lotto-area").prepend(row);

})