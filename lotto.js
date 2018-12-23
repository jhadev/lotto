
$("#pick3").on("click", event => {
  event.preventDefault();
  const pick3 = [];
  const first = Math.floor(Math.random() * 9);
  const second = Math.floor(Math.random() * 9);
  const third = Math.floor(Math.random() * 9);

  pick3.push(first, second, third);

  const row = $("<div>");
  row.addClass("numbers");

  row.append(`<p>${pick3.join("")}</p>`);

  $("#pick-3").prepend(row);
});

$("#pick4").on("click", event => {
  event.preventDefault();
  const pick4 = [];
  const first = Math.floor(Math.random() * 9);
  const second = Math.floor(Math.random() * 9);
  const third = Math.floor(Math.random() * 9);
  const fourth = Math.floor(Math.random() * 9);

  pick4.push(first, second, third, fourth);

  const row = $("<div>");
  row.addClass("numbers");

  row.append(`<p>${pick4.join("")}</p>`);

  $("#pick-4").prepend(row);
});

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
  row.addClass("numbers");

  row.append(`<p>${lotteryNumbers.join(", ")}</p>`);

  $("#pick-5").prepend(row);
});

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
  row.addClass("numbers");

  row.append(`<p>${lotteryNumbers.join(", ")}</p>`);

  $("#pick-6").prepend(row);
});

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
  row.addClass("numbers");

  row.append(`<p>${lotteryNumbers.join(", ")}</p>`);

  $("#mega-area").prepend(row);
});

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
  row.addClass("numbers");

  row.append(`<p>${lotteryNumbers.join(", ")}</p>`);

  $("#powerball").prepend(row);
});

$(".clear").click(() => {
  $(".numbers").empty();
});