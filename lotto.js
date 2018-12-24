
$("#pick3").on("click", event => {
  event.preventDefault();
  const pick3 = [];
  const first = Math.floor(Math.random() * 9);
  const second = Math.floor(Math.random() * 9);
  const third = Math.floor(Math.random() * 9);

  pick3.push(first, second, third);

  const row = $("<div>");
  row.addClass("numbers clear3");

  row.append(`<p>${pick3.join("")}</p><hr>`);

  $("#pick-3").prepend(row);
});

$(".clear-3").on("click", event => {
  console.log("clicked")
  event.preventDefault();
  $(".clear3").empty();
})

$("#pick4").on("click", event => {
  event.preventDefault();
  const pick4 = [];
  const first = Math.floor(Math.random() * 9);
  const second = Math.floor(Math.random() * 9);
  const third = Math.floor(Math.random() * 9);
  const fourth = Math.floor(Math.random() * 9);

  pick4.push(first, second, third, fourth);

  const row = $("<div>");
  row.addClass("numbers clear4");

  row.append(`<p>${pick4.join("")}</p><hr>`);

  $("#pick-4").prepend(row);
});

$(".clear-4").on("click", event => {
  event.preventDefault();
  $(".clear4").empty();
})

$("#pick5").on("click", event => {
  event.preventDefault();

  const lotteryNumbers = [];

  const numberGenerator = arr => {
    if (arr.length >= 5) return;
    const newNumber = Math.floor(Math.random() * 43 + 1);
    if (arr.indexOf(newNumber) < 0) {
      arr.push(newNumber);
    }
    numberGenerator(arr);
  };

  numberGenerator(lotteryNumbers);
  lotteryNumbers.sort((a, b) => {
    return a - b;
  });

  const row = $("<div>");
  row.addClass("numbers clear5");

  row.append(`<p>${lotteryNumbers.join(", ")}</p><hr>`);

  $("#pick-5").prepend(row);
});

$(".clear-5").on("click", event => {
  event.preventDefault();
  $(".clear5").empty();
})

$("#pick6").on("click", event => {
  event.preventDefault();

  const lotteryNumbers = [];

  const numberGenerator = arr => {
    if (arr.length >= 6) return;
    const newNumber = Math.floor(Math.random() * 49 + 1);
    if (arr.indexOf(newNumber) < 0) {
      arr.push(newNumber);
    }
    numberGenerator(arr);
  };

  numberGenerator(lotteryNumbers);
  lotteryNumbers.sort((a, b) => {
    return a - b;
  });

  const row = $("<div>");
  row.addClass("numbers clear6");

  row.append(`<p>${lotteryNumbers.join(", ")}</p><hr>`);

  $("#pick-6").prepend(row);
});

$(".clear-6").on("click", event => {
  event.preventDefault();
  $(".clear6").empty();
})

$("#mega").on("click", event => {
  event.preventDefault();

  const lotteryNumbers = [];

  const numberGenerator = arr => {
    if (arr.length >= 5) return;
    const newNumber = Math.floor(Math.random() * 75 + 1);
    if (arr.indexOf(newNumber) < 0) {
      arr.push(newNumber);
    }
    numberGenerator(arr);
  };

  numberGenerator(lotteryNumbers);
  lotteryNumbers.sort((a, b) => {
    return a - b;
  });

  const mega = Math.floor(Math.random() * 25 + 1);

  lotteryNumbers.push(mega);

  const row = $("<div>");
  row.addClass("numbers clearmega");

  row.append(`<p>${lotteryNumbers.join(", ")}</p><hr>`);

  $("#mega-area").prepend(row);
});

$(".clear-mega").on("click", event => {
  event.preventDefault();
  $(".clearmega").empty();
})

$("#power").on("click", event => {
  event.preventDefault();

  const lotteryNumbers = [];

  const numberGenerator = arr => {
    if (arr.length >= 5) return;
    const newNumber = Math.floor(Math.random() * 69 + 1);
    if (arr.indexOf(newNumber) < 0) {
      arr.push(newNumber);
    }
    numberGenerator(arr);
  };

  numberGenerator(lotteryNumbers);
  lotteryNumbers.sort((a, b) => {
    return a - b;
  });

  const mega = Math.floor(Math.random() * 26 + 1);
  lotteryNumbers.push(mega);

  const row = $("<div>");
  row.addClass("numbers clearpower");

  row.append(`<p>${lotteryNumbers.join(", ")}</p><hr>`);

  $("#powerball").prepend(row);
});

$(".clear-power").on("click", event => {
  event.preventDefault();
  $(".clearpower").empty();
})

$(".clear").click(() => {
  $(".numbers").empty();
});