function setup() { //設定初始內容，只會執行一次
  createCanvas(windowWidth,windowHeight);  //產生一個畫布
  //baclground(0) //黑色背景
  background("#cdb4bd")  //設定背景顏色，天空色
}


function draw() {  //畫圖，每秒繪畫60次
  //background(220);  //背景顏色，灰白色(0黑色~225白)
  background("#cdb4bd")  //設定背景顏色，天空色
  rectMode(CENTER) 
  noFill()  //以下所畫的物件不要充滿顏色
  stroke("#ffc8dd")
  strokeWeight(5)  //線條的粗細
  //宣告變數
  var rect_width = 50 + mouseX/10  //方形的寬度
  var bc_width = 50 + mouseY/10 //大圓的寬度
  var sc_width = 25 +mouseX/25   //小圓的寬度
  //第一排//////
  //FOR迴圈
  //i=0 :i為變數，要i的直為0開始(設定i的初始值)
  //i<20: 條件判斷，當條件成立時，就繼續進到迴圈內的程式碼執行
  //i=i+1 : i值每次改變的差距值，當迴圈內程式碼執行一次完畢後，i值會自動+1
for(let j=0;j<20;j=j+1){  //產生第20排 
  for(let i=0;i<40;i=i+1){
      if(j<5){  //第0~4排共5排設定的顏色
      stroke("#ffe6a7")    
  }  else if(i<10)  {  //第5~9排
      stroke("#f5cac3")   
  }else {  //第10排
     stroke("#ff8fab")   
  }    
  ellipse(25+50*i,25+50*j,bc_width) 
  rect(25+50*i,25+50*j,rect_width)
  ellipse(50+50*i,50+50*j,sc_width)
}
}
}

