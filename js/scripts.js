$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var countTo = parseInt($("#countTo").val());
    var countBy = parseInt($("#countBy").val());
    var countCurrent = countBy;

    console.log(countTo);

    if (!countTo || !countBy) {
      alert("Please enter numbers");
    }
    else if ((countTo < 0 && countBy > 0) || (countTo > 0 && countBy < 0)){
      alert("Numbers must both be positive or negative");
    }
    else if (Math.abs(countBy) > Math.abs(countTo)) {
      alert("Number to be counted to must be greater or equal to number to be counted by");
    }

else {
    for (countCurrent; Math.abs(countCurrent) <= Math.abs(countTo); countCurrent += countBy ) {
      $("#outputNumbers").append(countCurrent);
      if ((Math.abs(countCurrent) + Math.abs(countBy)) <= Math.abs(countTo)) {$("#outputNumbers").append(", ")}
}
}
    });
});
