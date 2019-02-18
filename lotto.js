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

$(".lotto").on("click", event, game => {
  event.preventDefault();
  const { value } = game.target;
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

$(".cleargame").on("click", event, game => {
  event.preventDefault();
  const { value } = game.target;
  switch (value) {
    case "pick3":
      $("#pick-3").empty();
      break;
    case "pick4":
      $("#pick-4").empty();
      break;
    case "pick5":
      $("#pick-5").empty();
      break;
    case "pick6":
      $("#pick-6").empty();
      break;
    case "mega":
      $("#mega-area").empty();
      break;
    case "power":
      $("#powerball").empty();
      break;
  }
});

//START ALL GENERATOR FUNCTIONS

//pick 3 function
const genPickThree = () => {
  const pick3 = [];
  const first = Math.floor(Math.random() * 9);
  const second = Math.floor(Math.random() * 9);
  const third = Math.floor(Math.random() * 9);
  pick3.push(first, second, third);
  const row = $("<div>");
  row.addClass("numbers clear3");
  row.append(`<p class="animated zoomIn">${pick3.join("")}</div><hr>`);
  $("#pick-3").prepend(row);
};
//pick 4 function
const genPickFour = () => {
  const pick4 = [];
  const first = Math.floor(Math.random() * 9);
  const second = Math.floor(Math.random() * 9);
  const third = Math.floor(Math.random() * 9);
  const fourth = Math.floor(Math.random() * 9);
  pick4.push(first, second, third, fourth);
  const row = $("<div>");
  row.addClass("numbers clear4");
  row.append(`<p class="animated zoomIn">${pick4.join("")}</p><hr>`);
  $("#pick-4").prepend(row);
};
//pick 5 function
const genPickFive = () => {
  const lotteryNumbers = [];
  numberGenerator(lotteryNumbers, 43, 5);
  const row = $("<div>");
  row.addClass("numbers clear5");
  row.append(`<p class="animated zoomIn">${lotteryNumbers.join(", ")}</p><hr>`);
  $("#pick-5").prepend(row);
};
//pick 6 function
const genPickSix = () => {
  const lotteryNumbers = [];
  numberGenerator(lotteryNumbers, 49, 6);
  const row = $("<div>");
  row.addClass("numbers clear6");
  row.append(`<p class="animated zoomIn">${lotteryNumbers.join(", ")}</p><hr>`);
  $("#pick-6").prepend(row);
};
//mega millions function
const genMega = () => {
  const lotteryNumbers = [];
  numberGenerator(lotteryNumbers, 75, 5);
  const mega = Math.floor(Math.random() * 25 + 1);
  const row = $("<div>");
  row.addClass("numbers clearmega");
  row.append(
    `<p class="animated zoomIn">${lotteryNumbers.join(
      ", "
    )}, <span class="${className(mega)}">${mega}</span></p><hr>`
  );
  $("#mega-area").prepend(row);
};
//powerball function
const genPowerball = () => {
  const lotteryNumbers = [];
  numberGenerator(lotteryNumbers, 69, 5);
  const power = Math.floor(Math.random() * 26 + 1);
  const row = $("<div>");
  row.addClass("numbers clearpower");
  row.append(
    `<p class="animated zoomIn">${lotteryNumbers.join(
      ", "
    )}, <span class="${className(power)}">${power}</span></p><hr>`
  );
  $("#powerball").prepend(row);
};

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

const className = ball => {
  let classes = "last-num badge m-1 badge-";
  classes += ball > 13 ? "success" : "danger";
  return classes;
};
