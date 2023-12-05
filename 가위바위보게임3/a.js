



var Prpc = "";
var Crpc = "";
var rpcInputButtonClick;

window.onload = function () {

   rpcInputText = document.getElementById("rpc_input_text");       // 연결

}

function rpcInputButtonClick() {
   while (true) {
      Prpc = rpcInputText.value;
      if (Prpc == "가위" || Prpc == "바위" || Prpc == "보") {
         break;
      } else {

         alert("장난치지마세요");
      }
   }
   var Crpc = Math.floor(Math.random() * 3) + 1;

   if (Crpc == 1) {
      Crpc = "가위";
   }
   if (Crpc == 2) {
      Crpc = "바위";
   }
   if (Crpc == 3) {
      Crpc = "보";
   }

   dw("플레이어:" + Prpc);
   br();
   dw("컴:" + Crpc);
   br();

   var windrawlose = "";

   switch (Prpc) {
      case "가위": switch (Crpc) {
         case "가위": windrawlose = "무승부"
            break;
         case "바위": windrawlose = "패배"
            break;
         case "보": windrawlose = "승리"
            break;

      }
         break;
      case "바위": switch (Crpc) {
         case "가위": windrawlose = "승리"
            break;
         case "바위": windrawlose = "무승부"
            break;
         case "보": windrawlose = "패배"
            break;

      }
         break;
      case "보": switch (Crpc) {
         case "가위": windrawlose = "패배"
            break;
         case "바위": windrawlose = "승리"
            break;
         case "보": windrawlose = "무승부"
            break;

      }
         break;
   }
   dw(windrawlose);
}