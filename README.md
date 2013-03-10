mouse-is-near
=============  
  
Mouse-is-near is a jQuery plugin which track movement of the cursor and allows you to define events when the cursor is next to some element.  

There are 4 parameters you can set:

* dist - distance from a particular element (in pixels)
* mouseIgnore - element which will be ignored when you move cursor over it (movement won't be tracked)
* functionIfNear
* functionIfFar


##Usage:

	  $(".leftArr, .rightArr").mouseIsNear(
	    {
	      mouseIgnore:$(".navbar, .collapseDesc"),
	      functionIfNear:function(elem){
	        elem.css("visibility","visible");
	        elem.isNear({dist:180,functionIfNear:function(elem){elem.addClass("near");} })
	      },
	      functionIfFar:function(elem){
	        elem.css("visibility","hidden");
	        elem.isNear({dist:180,functionIfFar:function(elem){elem.removeClass("near");} })
	      }
	    }
	  );