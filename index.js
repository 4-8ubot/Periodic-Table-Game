import ptable from "./ptable.js";

function generateQuestion(ans) {
  this.ans = arguments[0];
  var input = $("<input class='ifield'/>");
  input.on("input", function () {
    if ($(this).val() ==  arguments[0]) {
      $(this)[0].disabled = true;
      $(this).css("background-color", "#1dd1a1");
      $(this).css("border-bottom", "dashed #10ac84 3px");
    } else {
      $(this).css("background-color", "#ff6b6b");
      $(this).css("border-bottom", "dashed #ee5253 3px");
    }
  });
  return input;
}

var random = Math.floor(Math.random() * ptable.elements.length) + 1;
var chosen = ptable.elements[random];
console.log(chosen.image.url);

var qhash = {
  1: generateQuestion(Math.round(chosen.number)),
  2: generateQuestion(Math.round(chosen.atomic_mass - chosen.number)),
  3: generateQuestion(Math.round(chosen.number)),
  4: generateQuestion(chosen.atomic_mass),
  5: generateQuestion(chosen.block),
};
console.log(qhash);
$("<div>")
  .append(chosen.name.bold())
  .append("<br />")
  .append(chosen.summary.italics())
  .append("<br /><br/>")
  .appendTo(document.body);
$("<div class='qfield'>")
  .append(`<b>Protons:</b>`)
  .append(qhash[1])
  .append("<br />")
  .appendTo(document.body);
$("<div class='qfield'>")
  .append(`<b>Neutrons:</b>`)
  .append(qhash[2])
  .append("<br />")
  .appendTo(document.body);
$("<div class='qfield'>")
  .append(`<b>Electrons:</b>`)
  .append(qhash[3])
  .append("<br />")
  .appendTo(document.body);
$("<div class='qfield'>")
  .append(`<b>Atomic Mass:</b>`)
  .append(qhash[4])
  .append("<br />")
  .appendTo(document.body);
$("<div class='qfield'>")
  .append(`<b>Block:</b>`)
  .append(qhash[5])
  .append("<br />")
  .appendTo(document.body);

requestAnimationFrame(function frame() {
  var allDisabled = true;

  for (var key in qhash) {
    if (!qhash[key].disabled) {
      allDisabled = false;
      break;
    }
  }

  if (allDisabled) {
    window.reload();
  }
  requestAnimationFrame(frame);
});
