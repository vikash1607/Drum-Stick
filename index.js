var a = document.querySelectorAll(".drum").length;
for(var i=0;i<a;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var button1=this.innerHTML;
        //this.style.color="black";
        switch(button1){
            case "V":
                var audio1=new Audio("sounds/crash.mp3");
                audio1.play();
                break;
                case "I":
                var audio2=new Audio("sounds/kick-bass.mp3");
                audio2.play();
                break;
                case "K":
                var audio3=new Audio("sounds/snare.mp3");
                audio3.play();
                break;
                case "A":
                var audio4=new Audio("sounds/tom-1.mp3");
                audio4.play();
                break;
                case "S":
                var audio5=new Audio("sounds/tom-2.mp3");
                audio5.play();
                break;
                case "H":
                var audio6=new Audio("sounds/tom-3.mp3");
                audio6.play();
                break;
                case "G":
                var audio7=new Audio("sounds/tom-4.mp3");
                audio7.play();
                break;
                default: alert("wrong input");
        }
    });
}
