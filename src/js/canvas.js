


function draw() {
    var canvas = document.getElementById('tutorial');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

        ctx.fillstyle = "red";
        ctx.beginPath();
        ctx.arc(220, 300, 6, 0, Math.PI * 2, true);
        
        ctx.fill();
    }
}