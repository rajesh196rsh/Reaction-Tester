var startTime=new Date().getTime();
		
		function getRandomColor(){
		    var letters = '0123456789ABCDEF'.split('');
			var color='#';
			for(var i=0;i<6;i++){
			    color+=letters[Math.floor(Math.random()*16)];
			}
			return color;
		}
		
	    function makeShapeAppear(){
		    var top = Math.random()*400;
			var left = Math.random()*400;
			var width = (Math.random()*200) + 100;
			if(Math.random()>0.5){
			    document.getElementById("sq").style.borderRadius="50%";
			}
			else{
			    document.getElementById("sq").style.borderRadius="0";
			}
			document.getElementById("sq").style.backgroundColor = getRandomColor();
			document.getElementById("sq").style.width = width + "px";
			document.getElementById("sq").style.height = width + "px";
			document.getElementById("sq").style.top = top + "px";
			document.getElementById("sq").style.left = left + "px";
			document.getElementById("sq").style.display = "block";
			startTime=new Date().getTime();
			
		}
	    function appearAfterDelay(){
		    setTimeout(makeShapeAppear,Math.random()*2000);
		}
	    appearAfterDelay();
	    document.getElementById("sq").onclick=function(){
		    document.getElementById("sq").style.display="none";
			var endTime=new Date().getTime();
			var timeTaken=(endTime-startTime)/1000;
			document.getElementById("dispTime").innerHTML = timeTaken + "s";
			appearAfterDelay()
		}