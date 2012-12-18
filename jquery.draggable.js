(function($) {
  $.fn.liveDraggable = function (opts) {
		this.on('mousemove', opts.selector, function() {
			$(this).draggable();
		});
	};
}(jQuery));
