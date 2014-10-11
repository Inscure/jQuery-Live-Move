/**
 * @author: 	Inscure
 * @email: 	drimer.eco@gmail.com
 */

(function($) {
  $.fn.liveDraggable = function (opts) {
  		$(opts.selector).css({'cursor': 'move'});
		this.on('mousemove', opts.selector, function() {
			$(this).draggable();
		});
	};
}(jQuery));
