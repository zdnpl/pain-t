const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

//resize
// canvas.height = window.innerHeight;
// canvas.width = window.innerWidth;

//var
let painting = false;

function startPosition(e) {
  painting = true;
  draw(e);
}

function endPosition() {
  painting = false;
  ctx.beginPath();
}

function draw(e) {
  if (!painting) return;
  ctx.lineWidth = 10;
  ctx.lineCap = "round";
  // ctx.strokeStyle = "black";

  ctx.lineTo(e.clientX, e.clientY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.clientX, e.clientY);
}

//event listener
canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", endPosition);
canvas.addEventListener("mousemove", draw);
// });

function colorChanger() {
  var x = document.getElementById("colorPicker").value;
  console.log("You selected: " + x);
  document.getElementById("colorInputed").innerHTML = x;
  ctx.strokeStyle = x;
}

function startDraw() {
  const starter = document.querySelector(".starter");
  const kanpas = document.querySelector("#canvas");

  starter.style.display = "none";
  kanpas.style.display = "block";
  console.log("sdas");
}
