window.helper;
if ( typeof( ghelper ) == 'undefined' || typeof( ghelper.proactive_timeout ) == 'undefined' ) {
	window.ghelper = {
		proactive_timeout: 4000
	};		
}

function focusHelper() {
	window.helper = setInterval( function() {
		$('.helper').css({ "visibility": "visible" }).removeClass( 'animate__tada' );
		setTimeout( function() { $('.helper').addClass( 'animate__animated animate__tada' ) }, 100 );
	}, ghelper.proactive_timeout );
}

$(document).ready( function() {
	$(".share").on('click', function(e) {
		$(".fab").removeClass("no");
		if(e.target != this) return;
		$('.share, .fab').toggleClass("active");
	});
	
	if ( typeof( ghelper ) == 'undefined' || typeof( ghelper.proactive_timeout ) == 'undefined' ) {
		window.ghelper = {
			proactive_timeout: 4000
		};		
	}
	
	focusHelper();
	
	$('.share').click( function() {
		if ( $(this).hasClass( 'active' ) ) {
			clearInterval( window.helper );
			$('.helper').css({ "visibility": "hidden" }).removeClass( 'animate__tada animate__animated' );
		} else {
			focusHelper();
		}
	});
});