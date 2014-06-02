$(document).ready(function() {
	var nowareRunning = false;
	var initNoware = function() {
		if (nowareRunning) return;
		nowareRunning = true;
		$('a:not(.noware-replaced)').each(function() {
			$(this).addClass('noware-replaced');
			if (this.href.indexOf('yesware') >= 0) {
				var href_url = this.href;
				href_url = decodeURIComponent(href_url.replace(/https?:\/\/t\.yesware\.com\/tl(\/[0-9a-f]+)+\?ytl=(.+)/gi, "$2"));
				if (this.href != href_url) {
					$(this).attr('href', href_url);
				}
			}
		});
		nowareRunning = false;
	};
	$(document).bind('DOMSubtreeModified', function() {
		initNoware();
	});
});
