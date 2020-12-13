(function(){
	  var size = $.cookie('fontsize');
	  var thema = $.cookie('theme');
	  if(size == undefined){
		 clsize(16);
		 var size = 16;
	  }else{
	  clsize(size);
	  }
	  if(thema == undefined){
		 cltheme(1);
		  var thema = 1;
	  }else{
	  cltheme(thema);
	  }
        $('#font_inc').click(function(){
		 if(size<=18 && size !=""){
                size++;
				clsize(size);
　　　　　　　　}else{clsize("19");}
		
        });
		$('#font_dec').click(function(){
		 if(size>=16 && size !=""){
                size--;
				clsize(size);
　　　　　　　　}else{clsize("15");}
		
        });
	
	$('#theme2').click(function(){
		//alert(thema);
		       if(thema<=6){
				   thema++;
				  
				   cltheme(thema);

			   }else{
					thema-=6;
					cltheme(thema);
					}		
		
        });
      //  thmoon(thmooa);
	  var thmooa = $.cookie('thmoon');
	          if(thmooa == 1){
	               thmoon();
	           }
	  //alert(thmooa);
		$('#mode').click(function(){
			var classname = document.getElementById("readbg").getAttribute("class");
			if(classname != "nightbg theme-moon active"){
				thmoon();
			
			}else{
				cltheme(thema);
				if(thmooa == 1){
	               $.cookie('thmoon',null,{ expires: 365 });
	              }
			}
        });

    });
function thmoon(){
	      document.getElementById("readbg").className= "nightbg theme-moon active";
		  $.cookie('thmoon',"1",{ expires: 365 }); 
}
function clsize(size){
	             if(size == 15){
				 document.getElementById("wrapper").className= "wrapper font-normal";
				 }else if(size == 16){
				 document.getElementById("wrapper").className= "wrapper font-large";
				 }else if(size == 17){
				 document.getElementById("wrapper").className= "wrapper font-xlarge";
				 }else if(size == 18){
				 document.getElementById("wrapper").className= "wrapper font-xxlarge";
				 }else if(size == 19){
				 document.getElementById("wrapper").className= "wrapper font-xxxlarge";
				 }
				 $.cookie('fontsize',size,{ expires: 365 }); 
}
function cltheme(thema){
	           if(thema == 1){
					document.getElementById("readbg").className= "readbg theme-white";
					document.getElementById("theme2").className= "theme-area theme-white";
					}else if(thema == 2){
					document.getElementById("readbg").className= "readbg theme-sheepskin";
					document.getElementById("theme2").className= "theme-area theme-sheepskin";
					}else if(thema == 3){
					document.getElementById("readbg").className= "readbg theme-purple";
					document.getElementById("theme2").className= "theme-area theme-purple";
					}else if(thema == 4){
					document.getElementById("readbg").className= "readbg theme-green";
					document.getElementById("theme2").className= "theme-area theme-green";
					}else if(thema == 5){
					document.getElementById("readbg").className= "readbg theme-huyan";
					document.getElementById("theme2").className= "theme-area theme-huyan";
					}else if(thema == 6){
					document.getElementById("readbg").className= "readbg theme-pink";
					document.getElementById("theme2").className= "theme-area theme-pink";
					}else if(thema == 7){
					document.getElementById("readbg").className= "readbg theme-default";
					document.getElementById("theme2").className= "theme-area theme-default";
					} 
					$.cookie('theme',thema,{ expires: 365 }); 
}

function shuqian(aid,cid){
	window.location.href = "/user/mark/add.html?novelid="+ aid +"&chapterid="+ cid +"&ajax_request=1";
}

function AD1(){
}
function AD2(){
}
function AD3(){
}
function AD4(){

}
function AD5(){
}
function tj(){



}