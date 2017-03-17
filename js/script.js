 box1 =document.querySelector(".box1");
 box2=document.querySelector(".box2");
 p1=200;
 mov1=box1.style;
 mov2=box2.style;
 d=2000;
 p2=30;
// for(var i=0;i<box1.length;i++){
// 	box1[i].addEventListener("click",move(d))
// }
function move(d){
	setTimeout(function(){
	  mov1.left=p1+"px";
	  setTimeout(function(){
	  	mov2.left=p2+"px"
	  },100)
	},d);
	if(box1 !=p1+"px"){
		interval=setInterval(mov1,80000);
	}
	

}
move(d);