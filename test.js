var vm = new Vue({
  el: "#app",
  data: {
    Cost: 9,
    Atk: 9,
    HP: 9,
    Name: "G道",
    Description: "強",
    Rare: ""
  },
  methods: {
    draw: function() {
      var vm1 = this;
      var img = new Image();
      img.onload = function() {
        var c = document.getElementById("customCard");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.drawImage(img, 0, 0);
        ctx.font = "50pt Arial";
        ctx.textAlign = "center";
        ctx.fillStyle = "white";

        ctx.fillText(vm1.Cost, 68, 77);
        ctx.fillText(vm1.Atk, 68, 500);
        ctx.fillText(vm1.HP, 355, 500);
        ctx.font = "32pt Arial ";
        ctx.fillStyle = "black";
        ctx.fillText(vm1.Name, 200, 300);
        ctx.font = "28pt Arial";
        ctx.textAlign = "left";
        ctx.fillText(vm1.Description, 75, 380);
      };
      img.src = "images/cardBack.png";
    }
  },
  mounted: function() {
    this.draw();
  }
});

// function draw() {
//   var ctx = document.getElementById("customCard").getContext("2d");
//   var img = new Image();
//   img.onload = function() {
//     ctx.drawImage(img, 0, 0);
//     ctx.stroke();
//   };
//   img.src = "cardBack.png";
// }
// function draw() {
//   var ctx = document.getElementById("customCard").getContext("2d");
//   var img = new Image();
//   img.onload = function() {
//     ctx.drawImage(img, 0, 0);
//     ctx.font = "50pt Arial";
//     ctx.textAlign = "center";
//     ctx.fillStyle = "white";
//     ctx.fillText("1", 68, 77);
//     ctx.fillText("1", 68, 500);
//     ctx.fillText("1", 355, 500);
//   };
//   img.src = "images/cardBack.png";
// }
// draw();
