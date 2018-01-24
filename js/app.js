function injectSubMenu() {
	
	$('#sub-menu-bar').empty().append(`

		<li class="default open">
            <div class="link">Submenu-Head<i class="fa fa-chevron-down"></i></div>
            <ul class="submenu">
                <li><a href="#">Child sub-menu</a></li>
                <li><a href="#">Child sub-menu</a></li>
                <li><a href="#">Child sub-menu</a></li>
                <li><a href="#">Child sub-menu</a></li>
            </ul>
        </li>
        <li class="default open">
	        <div class="link">Submenu-Head<i class="fa fa-chevron-down"></i></div>
			<ul class="submenu">
				<li><a href="#">Child sub-menu</a></li>
				<li><a href="#">Child sub-menu</a></li>
				<li><a href="#">Child sub-menu</a></li>
				<li><a href="#">Child sub-menu</a></li>
			</ul>
	    </li>
	    <li class="default open">
	        <div class="link">Submenu-Head<i class="fa fa-chevron-down"></i></div>
			<ul class="submenu">
				<li><a href="#">Child sub-menu</a></li>
				<li><a href="#">Child sub-menu</a></li>
				<li><a href="#">Child sub-menu</a></li>
				<li><a href="#">Child sub-menu</a></li>
			</ul>
	    </li>
		<li class="default open">
			<div class="link">Submenu-Head<i class="fa fa-chevron-down"></i></div>
			<ul class="submenu">
				<li><a href="#">Child sub-menu</a></li>
				<li><a href="#">Child sub-menu</a></li>
				<li><a href="#">Child sub-menu</a></li>
				<li><a href="#">Child sub-menu</a></li>
			</ul>
	    </li>
		<li class="default open">
			<div class="link">Submenu-Head<i class="fa fa-chevron-down"></i></div>
			<ul class="submenu">
				<li><a href="#">Child sub-menu</a></li>
				<li><a href="#">Child sub-menu</a></li>
				<li><a href="#">Child sub-menu</a></li>
				<li><a href="#">Child sub-menu</a></li>
			</ul>
	    </li>


		`);

}

// submenu accordion-like class

$(function() {

	injectItem();
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
		showSearchBar();
		var accordion = new Accordion($('#sub-menu-bar'), true);
		animasi($(this),$('#sub-menu-container'));
	});
	
	var toggleFullHide = false;
	var toggleHide = false;

	$("#hide").click(function() {

		if (toggleFullHide) {
			$('#menu').show();
			$('#hide').removeClass('hidden');
			halfHide();
		} else {
			fullHide();
			if (toggleHide == false) {
				toggleHide = !toggleHide;
			}
		}
		toggleFullHide = !toggleFullHide;
	});

  $("#control").click(function() {
	toggleHide = !toggleHide;
		$(document).off();
  	if (toggleHide) {
			halfHide();
  	} else {
			$('#title').css("position","relative");
			$('#title').css("margin-left","0px");
    	$('#right-menu').show();
			$('#headbar').show();
			$('#headbar').css("width","100%");
    	$('#sidebar').show();
    	$('#menu').show();
			$('#search').css("transform","translateX(0)");
			$('#search').css("margin-top","0px");
			$('#sub-menu-container').css("transform","translateY(0)");
			$('#sub-menu-container').css("margin-top","0px");
			injectSubMenu();
			$('.fa-chevron-left').css('color','white');
			$('.fa-chevron-left').css('background-color','rgb(47, 52, 61)');

			$('#a').removeClass('fa fa-bars');
			$('#a').addClass('fa fa-times');
			var accordion = new Accordion($('#sub-menu-bar'), true);
			animasi($('#main-menu-bar li:first-child'),$('#sub-menu-container'));
  		$('#sidebar').css("background-color","#2F343D");
  		$('#headbar-hide').hide();
  	}
	
		//clear all event listener in main-menu button before attaching the new one
		$('.main-menu, #sidebar').off();
		// apabila dalam keadaan default

		$('.main-menu').on('click', function() {
			$('.main-menu').removeClass('active');
			$(this).addClass('active');
			$('#search').css("transform","translateX(0)");
			$('#sub-menu-container').css("transform","translateY(0)");
			injectSubMenu();
			var accordion = new Accordion($('#sub-menu-bar'), true);
			animasi($(this),$('#sub-menu-container'));
		});

	});
});


function hideSearchBar () {
	$('#search').css("transform","translateX(-300%)");
}

function showSearchBar () {
	$('#search').css("transform","translateX(0)");
}

function halfHide() {
	$('#sub-menu-container').css({
		"position": "absolute",
		"top": 0,
		"left": 0,
		"margin-left": "-100%",
		"width":  "100%",
		"height": "47px",
		"transition": "0s"
	});
	$('.fa-chevron-left').css('color','black');
	$('.fa-chevron-left').css('background-color','white');
	$('#title').hide();
	$('#title').css("position","absolute");
	$('#title').css("margin-left","-900px");
	$('#headbar').css("width","23%");
	$('#search').css("transform","translateX(-300%)");
	$('#sidebar').css("background-color","transparent");
	$('#a').addClass('fa fa-bars');
	$(document).on('click', function(event) {
		if (!$(event.target).closest("#sidebar").length) {
    	fullHide();
		}
	});
}

function animasi (mainMenu, subMenu) {
	subMenu.finish();
	var mainMenuPos = mainMenu.position();
	subMenuHeight = $('#sidebar').height() - 100;
	
	subMenu.css({
		"position": "absolute",
		"top": mainMenuPos.top,
		"left": mainMenuPos.left,
		"right": "-17",
		"margin-left": "-100%",
		"width": "calc(100% + 17px)",
		"height": "47px",
		"transition": "0s",
	});


	subMenu.animate({
		    "left": "0",
		    "right": "-17",
		    "margin-left": "0",
		    "height": "47px",
    	},250);

	setTimeout(function(){
		subMenu.animate({
			"top":"50",
	    "left": "0",
	    "right": "-17",
	    "margin-left": "0",
	    "width": "calc(100% + 17px)",
			"height": subMenuHeight,
		},250);
	},125);

}

function fullHide(){
	$('#menu').hide();
	$('#hide').addClass('hidden');
	halfHide();
	hideSearchBar();
}

function injectItem() {
    // Declare variables

    var menuList, i;
    var listSingkatan = [];
    var subMenuItem = [];
    

    //menuList = $(".submenu li"); 
    menuList = {
    	"singkatan1" : "kepanjsadangan1",
    	"singkatan2" : "kepanjangan2",
    	"singkatan3" : "kepanjangan3",
    	"singkatan4" : "kepanjagasdngan4",
    	"singkatan5" : "kepanjangan5",
    	"singkatan6" : "kepanjaasdngan6",
    	"singkatan7" : "kepanjangan7",
    	"singkatan8" : "kepanjangan8",
    	"singkatan9" : "kepanjaasdngan9"
    };


    // Loop through all list items, and hide those who don't match the search query
    for (var list in menuList) {
    	listSingkatan.push(list);
    	subMenuItem.push(menuList[list]);
    }
    $('input#searchInput').keyup(function() {
    	if ($('input#searchInput').val().length == 1){
	    	$('#sub-menu-bar').empty();
	    	$('#sub-menu-bar').append(`<ul class="submenu"></ul>`);
		    for (i = 0; i < subMenuItem.length; i++) {
		    	$('.submenu').append(
		    		`<li><a href="#">${subMenuItem[i]}</a></li>`);
		    }
		    filter();
	    }
	    if ($('input#searchInput').val() == ""){
	    	injectSubMenu();
	    }  	
    });

}

function filter() {
    var input, filter, a, i;
	  input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();

		var items = $('.submenu li');
    for (i = 0; i < items.length; i++) {
        a = items[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
}