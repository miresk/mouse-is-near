mouse-is-near
=============  
  
Mouse-is-near is a jQuery plugin which track movement of the cursor and allows you to define events when the cursor is close to some element. Basically i turned this code [jsFiddle example](http://jsfiddle.net/ThinkingStiff/Lpg8x/) into plugin.

There are 4 parameters you can set:

* dist - distance from a particular element. Default = 350 (in pixels)
* mouseIgnore - element which will be ignored when you move cursor over it (movement won't be tracked)
* functionIfNear - do something when you enter the element area specified by 'dist' parameter
* functionIfFar - do something when you leave the element area specified by 'dist' parameter


##Usage:

Imagine 2 hidden elements on a page. When we enter the element area (default 350px), the element show up because we set a css rule in the 'functionIfNear'. If we go closer to the element (dist:180), we can set another css rule or do something else.
Function 'functionIsFar' is used when we move our cursor further from the element (the opposite direction).  

	  $(".leftArr, .rightArr").mouseIsNear(
	    {
	      mouseIgnore:$(".navbar"),
	      functionIfNear:function(elem){
	        elem.css("visibility","visible");
	        elem.mouseIsNear({dist:180,functionIfNear:function(elem){elem.addClass("near");} })
	      },
	      functionIfFar:function(elem){
	        elem.css("visibility","hidden");
	        elem.mouseIsNear({dist:180,functionIfFar:function(elem){elem.removeClass("near");} })
	      }
	    }
	  );