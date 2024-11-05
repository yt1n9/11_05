let font;  //載入字型文字
let points = [];  //轉成點狀文字
let angel =0
let r=10
// ==================================================
function preload(){  //在執行setup()前，必須先做此函數執行，主要先載入字型
    //為載入在fonts資料夾內的Itim-Regular.ttf字型
    font = loadFont("Itim-Regular.ttf") 
}
//===================================================







function setup() {  //設定環境
  createCanvas(windowWidth, windowHeight);  //設定畫布的寬高
  angleMode(DEGREES)  //設定三角函數0~360
background("#9d8189")  //背景顏色
//====================================================
points = font.textToPoints("mingyu",-300, 80, 200, {
  sampleFactor:0.1
}); //轉成文字圖檔，放在(0, 200)位置，圖形大小為200，sampleFactor為點數距離大小，值越小代表點數越少
//====================================================
for (let i=0; i<points.length-1; i++) { 
  //text(str(i),points[i].x,points[i].y)  //在(points[i].x,points[i].y)座標上顯示一個文字(數字)
//fill("#f4acb7")  //畫圖的充滿顏色
//noStroke()
//strokeWeight(1)  //畫圓框線粗細
 // ellipse(points[i].x+sin(angel),points[i].y,10)
  //stroke("#ffcad4")  //線條的顏色
 //strokeWeight(5)  //線條的粗細
//line(points[i].x,points[i].y,points[i+1].x,points[i+1].y)  //畫線，兩個點構成一條線
} 
//===================================================
angel=angel+10
}

function draw() {  //畫圖，每秒會進入程式執行60次



  background("#d8e2dc");
  //textSize(30)
//text(mouseX+":"+mouseY,width/2,height/2)


translate(mouseX,mouseY)  //把原本原點(0,0)在左上角，改為到畫布中心點(width/2,height/2)
rotate((frameCount)%360)  //依照framecount除以360求餘數
  for (let i=0; i<points.length-1; i++) { 
  //text(str(i),points[i].x,points[i].y)  //在(points[i].x,points[i].y)座標上顯示一個文字(數字)
  //fill("#f4acb7")  //畫圖的充滿顏色
  //noStroke()
  //strokeWeight(1)  //畫圓框線粗細
    ellipse(points[i].x+r*sin(angel+i*10),points[i].y+r*sin(angel*10),10)
    stroke("#ffcad4")  //線條的顏色
    strokeWeight(5)  //線條的粗細
    //line(points[i].x,points[i].y,points[i+1].x,points[i+1].y)  //畫線，兩個點構成一條線
  } 
  //===================================================
  angel=angel+10
}
