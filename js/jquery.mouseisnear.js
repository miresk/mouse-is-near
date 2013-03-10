(function($){
	jQuery.fn.mouseIsNear = function(options)
	{
		var defaults = {
			dist:350,
			mouseIgnore:null,
			functionIfNear:function(){},
			functionIfFar:function(){}
		},
		settings = $.extend({},defaults,options);

		return this.each(function()
		{
			var $this = $(this);

		  $('body').mousemove( function( event ) {
		    $(settings.mouseIgnore).mousemove(function() {return false;});

		    if( isNear( $this, settings.dist, event ) ) {
		      settings.functionIfNear($this);
		    } 
		    else{
		    	settings.functionIfFar($this);
		    };
		  }); 

		  function isNear( element, distance, event ) {
		    var left = element.offset().left - distance,
		        top = element.offset().top - distance,
		        right = left + element.width() + 2*distance,
		        bottom = top + element.height() + 2*distance,
		        x = event.pageX,
		        y = event.pageY;
		    return ( x > left && x < right && y > top && y < bottom );
		  };

		});
	}
})(jQuery);

