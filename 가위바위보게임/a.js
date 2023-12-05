// var playerrcp = prompt("가위,바위,보중에 하나를 내시오");
// var comrcpnum = Math.floor(Math.random() * 3) + 1;
// var comrcpstr = "";

// if (comrcpnum == 1) {
//    comrcpstr = "가위";
// }
// if (comrcpnum == 2) {
//    comrcpstr = "바위";
// }
// if (comrcpnum == 3) {
//    comrcpstr = "보";
// }

// dw("플레이어:" + playerrcp);
// br();
// dw("컴:" + comrcpstr);
// br();

// var windrawlose = "";

// switch (playerrcp) {
//    case "가위":
//       switch (comrcpstr) {
//          case "가위":
//             windrawlose = "무승부";
//             break;
//          case "바위":
//             windrawlose = "패배";
//             break;
//          case "보":
//             windrawlose = "승리";
//             break;

//       }
//       break;
//    case "바위":
//       switch (comrcpstr) {

//          case "가위":
//             windrawlose = "승리";
//             break;
//          case "바위":
//             windrawlose = "무승부";
//             break;
//          case "보":
//             windrawlose = "패배";
//             break;
//       }
//       break;

//    case "보":
//       switch (comrcpstr) {
//          case "가위":
//             windrawlose = "패배";
//             break;
//          case "바위":
//             windrawlose = "승리";
//             break;
//          case "보":
//             windrawlose = "무승부";
//             break;

//       }
//       break;
//    default: document.write("잘못된 입력입니다.");


// }
// dw(windrawlose);
var Prpc = prompt("가위,바위,보 중에 하나를 내시오");
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