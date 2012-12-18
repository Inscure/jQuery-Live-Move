// Author: Inscure drimer.eco@gmail.com

(function($) {
  $.fn.liveDraggable = function (opts) {
		this.on('mousemove', opts.selector, function() {
			$(this).draggable();
		});
	};
}(jQuery));
