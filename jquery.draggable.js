/**
 * @author: 	Inscure
 * @email: 	drimer.eco@gmail.com
 * @website:	http://extreme-fusion.pl/
 */

(function($) {
  $.fn.liveDraggable = function (opts) {
		this.on('mousemove', opts.selector, function() {
			$(this).draggable();
		});
	};
}(jQuery));
