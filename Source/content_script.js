$(document).ready(function() {
	var initNoware = function() {
		$('a').mouseover(function() {
			var href_url = this.href;
			href_url = decodeURIComponent(href_url.replace(/https?:\/\/t\.yesware\.com\/tl(\/[0-9a-f]+)+\?ytl=(.+)/gi, "$2"));
			$(this).attr('href', href_url);
		});
	};
	$(document).bind('DOMSubtreeModified', function() {
		initNoware();
	});
});
