function drawClock(width, pad) {
  'use strict';
  var size = width || 230;
  var padding = pad || 15;
  var canvas = document.getElementById('canvas-clock');
  var ctx = canvas.getContext('2d');
  canvas.width = canvas.height = size;
  var x = size/2, y = size/2;
  var r = (size - 2*padding) / 2;
  var diotImg=new Image();
  diotImg.src="https://www.kinder.vip/static/home/images/dian.png";
  var drawTime = function () {
    ctx.fillStyle = '#fff';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.beginPath();
   

    ctx.shadowOffsetX =0;
    ctx.shadowOffsetY=0;
    ctx.shadowBlur=10;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)'
    ctx.moveTo(x+r, y);
    ctx.arc(x, y, r+10, 0, 2*Math.PI, true); // 中心点、半径，角度 2PI，顺时针
    ctx.fill(); // 绘制结束
    ctx.restore();

    ctx.beginPath();
    ctx.fillStyle = '#333';
    ctx.moveTo(x+r, y);
    ctx.arc(x, y, r, 0, 2*Math.PI, true); // 中心点、半径，角度 2PI，顺时针
    ctx.fill(); // 绘制结束

    var fontSize = size/18;
    ctx.font = fontSize + "px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "#fff";
    var idg = 2*Math.PI/12; // 360度分�?2�?
    var txr = r - fontSize * 1; // 在圆弧内测的小圆写文�?
    for(var i=1; i<=12; i++){
      var rot = i*idg;
      ctx.fillText(i, x+txr*Math.sin(rot), y-txr*Math.cos(rot)+fontSize/2);
    }
    ctx.restore();
    ctx.save();

    var hr = r * 0.55;
    var mr = r * 0.65;
    var sr = r * 0.75;  // 时分秒的半径长度，时针hour最短，秒针second最长�?
    var cr = r * 0.68; // 秒针的圆�?
    var rr = 4; // 圆点半径
    var sr1= r * 0.1;  // 秒针尾巴长度
    var p2 = 2 * Math.PI;
    var now = new Date();
    var seconds = now.getSeconds() + now.getMilliseconds()/1000, minutes = now.getMinutes() + seconds/60,  hour = now.getHours() + minutes/60;
    var hx = x + hr * Math.sin(hour/12 * p2), hy =  y - hr * Math.cos(hour/12*p2), // 时针x,y
        mx = x + mr * Math.sin(minutes/60 * p2), my =  y - mr * Math.cos(minutes/60*p2), // 分针x,y
        sx = x + sr * Math.sin(seconds/60 * p2), sy =  y - sr * Math.cos(seconds/60*p2), // 秒针最大到达的x,y
        cx = x + (cr - rr) * Math.sin(seconds/60 * p2), cy =  y - (cr - rr) * Math.cos(seconds/60*p2), // 秒针的圆x,y
        tx = x + cr * Math.sin(seconds/60 * p2), ty =  y - cr * Math.cos(seconds/60*p2), // 秒针开始绘制圆的x,y
        sx0 = x + (cr - 2*rr) * Math.sin(seconds/60 * p2), sy0 =  y - (cr - 2*rr) * Math.cos(seconds/60*p2), // 秒针到圆圈的长度
        sx1= x - sr1 * Math.sin(seconds/60 * p2), sy1=  y + sr1 * Math.cos(seconds/60*p2); // 秒针反向绘制的x,y

    ctx.beginPath(); // 时针
    ctx.lineCap = 'round';
    ctx.lineWidth = 7;
    ctx.strokeStyle = '#fff';
    ctx.moveTo(x,y);
    ctx.lineTo(hx,hy);
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.beginPath(); // 分针
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#fff';
    ctx.moveTo(x,y);
    ctx.lineTo(mx,my);
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.beginPath(); // 秒针
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#f00';
    ctx.moveTo(tx,ty);
    ctx.lineTo(sx1,sy1);
    ctx.stroke();
    ctx.restore();
    ctx.save();

    ctx.beginPath(); // 绘制中心小圆
    ctx.drawImage(diotImg, x-5, y-5,10,10);
    ctx.restore();
    ctx.save();


  };
  drawTime();
  setInterval(function(){
    drawTime();
  }, 100);
}
window.onload = function(){
  drawClock();
};