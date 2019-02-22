//START ALL CLICK FUNCTIONS

$(".clear").click(() => {
  $(".numbers").empty();
});

$(".generate").on("click", event => {
  event.preventDefault();
  genPickThree();
  genPickFour();
  genPickFive();
  genPickSix();
  genMega();
  genPowerball();
});

$(".lotto").on("click", event => {
  event.preventDefault();
  const { value } = event.target;
  switch (value) {
    case "pick3":
      genPickThree();
      break;
    case "pick4":
      genPickFour();
      break;
    case "pick5":
      genPickFive();
      break;
    case "pick6":
      genPickSix();
      break;
    case "mega":
      genMega();
      break;
    case "power":
      genPowerball();
      break;
  }
});

$(".cleargame").on("click", event => {
  event.preventDefault();
  const { value } = event.target;
  $(`.${value}`).empty();
});

//Function to pad zeros on pick 3 and 4
const pad = (number, zeros, length) => {
  return number <= 9999 ? `${zeros}${number}`.slice(length) : number;
};

//generator function to not allow duplicates and sort on 5,6, mega, and powerball
const numberGenerator = (arr, max, count) => {
  if (arr.length >= count) return;
  const newNumber = Math.floor(Math.random() * max + 1);
  if (arr.indexOf(newNumber) < 0) {
    arr.push(newNumber);
  }
  numberGenerator(arr, max, count);
  arr.sort((a, b) => {
    return a - b;
  });
};

//function for dynamically changing class names

const className = (ball, num) => {
  let classes = "last-num badge m-1 badge-";
  classes += ball > num ? "success" : "danger";
  return classes;
};

//START ALL GENERATOR FUNCTIONS
const numClass = "animated zoomIn text-light text-center";
//pick 3 function
const genPickThree = () => {
  const randomThree = Math.floor(Math.random() * 999);
  const row = $("<div>");
  row.addClass("numbers clear3");
  row.append(`<p class="${numClass}">${pad(randomThree, "00", -3)}</div><hr>`);
  $(".pick3").prepend(row);
};
//pick 4 function
const genPickFour = () => {
  const randomFour = Math.floor(Math.random() * 9999);
  const row = $("<div>");
  row.addClass("numbers clear4");
  row.append(`<p class="${numClass}">${pad(randomFour, "000", -4)}</p><hr>`);
  $(".pick4").prepend(row);
};
//pick 5 function
const genPickFive = () => {
  const lotteryNumbers = [];
  numberGenerator(lotteryNumbers, 43, 5);
  const row = $("<div>");
  row.addClass("numbers clear5");
  row.append(`<p class="${numClass}">${lotteryNumbers.join(", ")}</p><hr>`);
  $(".pick5").prepend(row);
};
//pick 6 function
const genPickSix = () => {
  const lotteryNumbers = [];
  numberGenerator(lotteryNumbers, 49, 6);
  const row = $("<div>");
  row.addClass("numbers clear6");
  row.append(`<p class="${numClass}">${lotteryNumbers.join(", ")}</p><hr>`);
  $(".pick6").prepend(row);
};
//mega millions function
const genMega = () => {
  const lotteryNumbers = [];
  numberGenerator(lotteryNumbers, 75, 5);
  const mega = Math.floor(Math.random() * 25 + 1);
  const row = $("<div>");
  row.addClass("numbers clearmega");
  row.append(
    `<p class="${numClass}">${lotteryNumbers.join(
      ", "
    )}, <span class="${className(mega, 12)}">${mega}</span></p><hr>`
  );
  $(".mega").prepend(row);
};
//powerball function
const genPowerball = () => {
  const lotteryNumbers = [];
  numberGenerator(lotteryNumbers, 69, 5);
  const power = Math.floor(Math.random() * 26 + 1);
  const row = $("<div>");
  row.addClass("numbers clearpower");
  row.append(
    `<p class="${numClass}">${lotteryNumbers.join(
      ", "
    )}, <span class="${className(power, 13)}">${power}</span></p><hr>`
  );
  $(".power").prepend(row);
};
