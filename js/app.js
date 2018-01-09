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


	$('.main-menu').on('click', function() {

		$('.main-menu').removeClass('active');
		$(this).addClass('active');
		injectSubMenu();
		var accordion = new Accordion($('#sub-menu-bar'), true);
		animasi($(this),$('#sub-menu-container'));
	});
	
	var toggleFullHide = false;
	var toggleHide = false;

    // $(".fa-window-minimize").click(function() {
    //     toggleFullHide = !toggleFullHide;

    //     if(toggleFullHide){
    //         $('#sidebar').animate({height: "10%"},"fast");
    //         $('#menu').css('display', 'none');
    //         $('#headbar, #search').css('height','50%');
    //     }
    //     else{
    //         $('#sidebar').animate({height: "100%"},"fast");
    //         $('#menu').css('display', '');
    //         $('#headbar, #search').css('height','');
    //     }

    // });

    $(".fa-bars").click(function() {
    	toggleHide = !toggleHide;
    	if (toggleHide) {
	    	$('#headbar').hide();
	    	$('#search').css("transform","translateX(-200%)");
	    	$('#sidebar').css("background-color","transparent");
	    	$('#headbar-hide').show();
	    	hideSubMenuContainer();
    	} else {
    		$('#right-menu').show();
    		$('#headbar').show();
    		$('#search').css("transform","translateX(0)");
			injectSubMenu();
			var accordion = new Accordion($('#sub-menu-bar'), true);
			animasi($('#main-menu-bar li:first-child'),$('#sub-menu-container'));
    		$('#sidebar').css("background-color","#2F343D");
    		$('#headbar-hide').hide();
    	}
		
		//clear all event listener in main-menu button before attaching the new one
		$('.main-menu').off(); 
		// onclick event main-menu
		if ($('#headbar').is(':visible')) {

			$('.main-menu').on('click', function() {

				$('.main-menu').removeClass('active');
				$(this).addClass('active');
				injectSubMenu();
				var accordion = new Accordion($('#sub-menu-bar'), true);
				animasi($(this),$('#sub-menu-container'));
			});		
		} else {
			$('.main-menu').hover(
				function(){
					$('.main-menu').removeClass('active');
					$(this).addClass('active');
					injectSubMenu();
					var accordion = new Accordion($('#sub-menu-bar'), true);
					$('#search').css("transform","translateX(0)");
					animasi($(this),$('#sub-menu-container'));
				},function() {
					$('#sidebar').hover(
						function() {}, function() { 
							$('#search').css("transform","translateX(-200%)");
							hideSubMenuContainer();
						});
				});
		}
    });



});

function hideSearchBar () {
	$('#search').css("transform","translateX(-100%)");
}

function hideSubMenuContainer() {
	$('#sub-menu-container').css({
		"position": "absolute",
		"top": 0,
		"left": 0,
		"margin-left": "-100%",
		"width":  "70%",
		"height": "47px",
		"transition": "0s",
	});
}

function animasi (mainMenu,subMenu) {
	subMenu.finish();
	var mainMenuPos = mainMenu.position();
	var subMeneHeight = $('#right-menu').height() - $('#search').height();

	
	subMenu.css({
		"position": "absolute",
		"top": mainMenuPos.top,
		"left": mainMenuPos.left,
		"margin-left": "-100%",
		"width":  "70%",
		"height": "47px",
		"transition": "0s",
	});


	subMenu.animate({
		    "left": mainMenu.width(),
		    "margin-left": "0",
		    "height": "47px",
    	},250);
	setTimeout(function(){
		subMenu.animate({
			"top": $('#search').height(),
			"height": subMeneHeight,
		},250);
	},125);

}