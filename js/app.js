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

}

// submenu accordion-like class

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

	// menentukan element yang menggunakan class Accordion

	var accordion = new Accordion($('#sub-menu-bar'), true);


	// onclick event main-menu
	$('.main-menu').on('click', function() {

		$('.main-menu').removeClass('active');
		$(this).addClass('active');
		injectSubMenu();
		var accordion = new Accordion($('#sub-menu-bar'), true);
		animasi($(this),$('#sub-menu-container'));
	});

	
	var toggle = false;

    $(".fa-window-minimize").click(function() {
        toggle = !toggle;

        if(toggle){
            $('#sidebar').animate({height: "10%"},"fast");
            $('#menu').css('display', 'none');
            $('#headbar, #search').css('height','50%');
        }
        else{
            $('#sidebar').animate({height: "100%"},"fast");
            $('#menu').css('display', '');
            $('#headbar, #search').css('height','');
        }

    });



});

// onclick event minimize
// $( ".fa-window-minimize" ).toggle(function() {
//   alert( "First handler for .toggle() called." );
// }, function() {
//   alert( "Second handler for .toggle() called." );
// });
// $('.fa-window-minimize').toggle(function() {
// 	$('#menu').css('display', 'hidden');
// 	$('#sidebar').css('height','10%');
// 	$('#header','#search').css('height','50%');
// }, function() {
// 	$('#menu').css('display', '');
// 	$('#sidebar').css('height','');
// 	$('#header','#search').css('height','');
// });
	
const subMenu =  $('#sub-menu-container');	
const subMenuWidth = subMenu.width();



function animasi (mainMenu,subMenu) {
	subMenu.finish();
	var mainMenuPos = mainMenu.position();

	
	subMenu.css({
		"position": "absolute",
		"top": mainMenuPos.top,
		"left": mainMenuPos.left,
		"margin-left": "-100%",
		"width":  "70%",
		"height": "47px",
		"transition": "0s",
	});


	subMenu.animate(
		{
		    "left": mainMenu.width(),
		    "margin-left": "0",
		    "height": "47px",
    	},250);

	setTimeout(function(){
		subMenu.animate({
			"top": 0,
			"height": "100%",
		},250)
	},125);

}