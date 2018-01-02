function injectSubMenu() {
	
	$('#sub-menu-bar').empty().append(`

		<li class="default open">
            <div class="link"><i class="fa fa-paint-brush"></i>Disasdaeño web<i class="fa fa-chevron-down"></i></div>
            <ul class="submenu">
                <li><a href="#">Photasdoshop</a></li>
                <li><a href="#">HTML</a></li>
                <li><a href="#">CSS</a></li>
                <li><a href="#">Maquetacion web</a></li>
            </ul>
        </li>
        <li>
	        <div class="link"><i class="fa fa-code"></i>Desarrollo front-end<i class="fa fa-chevron-down"></i></div>
	        <ul class="submenu">
	            <li><a href="#">Javascript</a></li>
	            <li><a href="#">jQuery</a></li>
	            <li><a href="#">Frameworks javascript</a></li>
	        </ul>
	    </li>
	    <li>
	        <div class="link"><i class="fa fa-mobile"></i>Diseño responsive<i class="fa fa-chevron-down"></i></div>
	        <ul class="submenu">
	            <li><a href="#">Tablets</a></li>
	            <li><a href="#">Dispositivos mobiles</a></li>
	            <li><a href="#">Medios de escritorio</a></li>
	            <li><a href="#">Otros dispositivos</a></li>
	        </ul>
	    </li>
	    <li><div class="link"><i class="fa fa-globe"></i>Posicionamiento web<i class="fa fa-chevron-down"></i></div>
	        <ul class="submenu">
	            <li><a href="#">Google</a></li>
	            <li><a href="#">Bing</a></li>
	            <li><a href="#">Yahoo</a></li>
	            <li><a href="#">Otros buscadores</a></li>
	        </ul>
	    </li>
	    <li><div class="link"><i class="fa fa-globe"></i>Posicionamiento web<i class="fa fa-chevron-down"></i></div>
	        <ul class="submenu">
	            <li><a href="#">Google</a></li>
	            <li><a href="#">Bing</a></li>
	            <li><a href="#">Yahoo</a></li>
	            <li><a href="#">Otros buscadores</a></li>
	        </ul>
	    </li>


		`);

	$('#sub-menu-bar').hide().fadeIn("slow");

}


$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#sub-menu-bar'), true);

	$('.main-menu').on('click', function() {

		$('.main-menu').removeClass('active');
		// $(".main-menu > a").removeClass('active');

		$(this).addClass('active');
		// $(this).children().addClass('active');
		injectSubMenu();
		var accordion = new Accordion($('#sub-menu-bar'), true);
	});

});
