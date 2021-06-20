canvas = document.getElementById("myCanvas");
c = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = red;
ctx.lineWidth = 2;
ctx.rect(150 , 143 , 430 ,200);
ctx.stroke();


function circle(){
c.beginPath();
c.strokeStyle = blue;
c.lineWidth = 5;
c.arc(250 , 210 , 40 , 0 , 2*Math.PI);
c.stroke();}  


function circle(){
c.beginPath();
c.strokeStyle = black;
c.lineWidth = 5;
c.arc(350 , 210 , 40 , 0 , 2*Math.PI);
c.stroke();}

function circle(){
    c.beginPath();
    c.strokeStyle =red ;
    c.lineWidth = 5;
    c.arc(450 , 210 , 40 , 0 , 2*Math.PI);
    c.stroke();}

    
function circle(){
    c.beginPath();
    c.strokeStyle =yellow ;
    c.lineWidth = 5;
    c.arc(330 , 250 , 40 , 0 , 2*Math.PI);
    c.stroke();}

    function circle(){
        c.beginPath();
        c.strokeStyle =green ;
        c.lineWidth = 5;
        c.arc(350 , 250 , 40 , 0 , 2*Math.PI);
        c.stroke();}