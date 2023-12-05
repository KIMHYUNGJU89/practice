



var Prpc = "";

while(true) {
   Prpc = prompt("가위,바위,보 중에 하나 내시오");
   if(Prpc == "가위" || Prpc == "바위" || Prpc == "보"){
      break;
   } else {

      alert("장난치지마세요");
   }
}
var Crpcn = Math.floor(Math.random()*3)+1;
var Crpcstr = "";

if(Crpcn == 1) {
   Crpcstr = "가위";
}
if(Crpcn == 2) {
   Crpcstr = "바위";
}
if(Crpcn == 3) {
   Crpcstr = "보";
}

dw("플레이어:"+Prpc);
br();
dw("컴:"+Crpcstr);
br();

var windrawlose = "";

switch(Prpc) {
   case"가위": switch(Crpcstr) {
      case"가위": windrawlose = "무승부"
      break;
      case"바위": windrawlose = "패배"
      break;
      case"보": windrawlose = "승리"
      break;

   }
   break;
   case"바위": switch(Crpcstr) {
      case"가위": windrawlose = "승리"
      break;
      case"바위": windrawlose = "무승부"
      break;
      case"보": windrawlose = "패배"
      break;

   }
   break;
   case"보": switch(Crpcstr) {
      case"가위": windrawlose = "패배"
      break;
      case"바위": windrawlose = "승리"
      break;
      case"보": windrawlose = "무승부"
      break;

   }
   break;
}
dw(windrawlose);