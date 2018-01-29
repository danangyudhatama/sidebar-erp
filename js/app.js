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

//**----  START :: BAGIAN FUNGSI DARI BERBAGAI ELEMENT ----**//

//Submenu accordion-like class
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
		 if ($(':animated').length) {
		        return false;
		    }
		$('.main-menu').removeClass('active');
		$(this).addClass('active');
		injectSubMenu();
		showSearchBar();
		var accordion = new Accordion($('#sub-menu-bar'), true);
		animasi($(this),$('#sub-menu-container'));
	});
	

	//Deklarasi variabel toggle menu
	var toggleFullHide = false;
	var toggleHide = false;

	$("#hide").css("cursor","pointer");
	$("#hide").css("margin-left","-100px;");
	$("#hide").click(function() {
		if ($(':animated').length) {
	        return false;
	    }
		if (toggleFullHide) {
			$('#menu').show();
			$('#hide').removeClass('hidden');
			halfHide();
			$('#b').removeClass('fa fa-play');
			$('#b').addClass('fa fa-play');
		} else {
			fullHide();
			$('#b').removeClass('fa fa-play');
			$('#b').addClass('fa fa-play');
			if (toggleHide == false) {
				toggleHide = !toggleHide;
			}
		}
		toggleFullHide = !toggleFullHide;
	});


		$("#control").css("cursor","pointer");
  		$("#control").click(function() {
  			if ($(':animated').length) {
		        return false;
		    }
			toggleHide = !toggleHide;
			$(document).off();
		//Jika Toogle tidak hide
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
			//START :: Icon Default
			$('.fa-play').css('color','#fff');
			$('.fa-play').css('background-color','#323232');
			//START :: Icon change
			$('.fa-eye-play').css('color','#fff');
			$('.fa-eye-play').css('background-color','#323232');
			//END
			$('#a').removeClass('fa fa-bars');
			$('#a').addClass('fa fa-times');
			var accordion = new Accordion($('#sub-menu-bar'), true);
			animasi($('#main-menu-bar li:first-child'),$('#sub-menu-container'));
  			$('#sidebar').css("background-color","#2F343D");
  			$('#headbar-hide').hide();
  		}
	
		//Bersihkan semua event listener di tombol menu utama sebelum melampirkan yang baru
		$('.main-menu, #sidebar').off();
		
		// apabila dalam keadaan default
		$('.main-menu').on('click', function() {
			if ($(':animated').length) {
		        return false;
		    }
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



//START :: Fungsi sembunyikan searchbar
function hideSearchBar () {
	$('#search').css("transform","translateX(-300%)");
}
//END :: Fungsi sembunyikan searchbar



//START :: Fungsi memunculkan searchbar
function showSearchBar () {
	$('#search').css("transform","translateX(0)");
}
//END :: Fungsi memunculkan searchbar



//START :: Fungsi setengah hide
function halfHide() {
	//Sub-menu-container
	$('#sub-menu-container').css({
		"position": "absolute",
		"top": 0,
		"left": 0,
		"margin-left": "-100%",
		"width":  "100%",
		"height": "47px",
		"transition": "0s"
	});

	$('#hide').show();
	//START :: Icon Default
	$('.fa-play').css('color','#323232');
	$('.fa-play').css('background-color','#fff');
	//START :: Icon Change
	$('.fa-play').css('color','#323232');
	$('.fa-play').css('background-color','#fff');
	//END
	$('#title').hide();
	$('#title').css("position","absolute");
	$('#title').css("margin-left","-900px");
	$('#headbar').css("width","23%");
	$('#search').css("transform","translateX(-300%)");
	$('#sidebar').css("background-color","transparent");
	$('#a').addClass('fa fa-bars');

	$(document).on('click', function(event) {
		if (!$(event.target).closest("#sidebar").length) {
    	halfHide();
		}
	});
}
//END :: Fungsi setengah hide




//START :: Fungsi animasi
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
//END :: Fungsi animasi




//START :: Fungsi sembunyi keseluruhan
function fullHide(){
	$('#menu').hide();
	$('#hide').addClass('hidden');
	halfHide();
	hideSearchBar();
}
//END :: Fungsi sembunyi keseluruhan


//START :: Fungsi Inject per item
function injectItem() {
	
	//START :: Deklarasi variables
    var menuList, i;
    var listSingkatan = [];
    var subMenuItem = [];
    

	//START :: menuList = $(".submenu li"); 
	//Jika ada penambahan menu bisa memasukkan key didalam menuList
    menuList = {
		//"Unique Key"  : "nama menu"
    	"SO"  			: "Sales Order",
    	"PO" 			: "Purchase Order",
    	"AR" 			: "Account Receivable",
    	"AP" 			: "Account Payable",
    	"RB" 			: "Retur Barang",
    	"FJ" 			: "Faktur Jual",
    	"FB" 			: "Faktur Beli",
    	"PD" 			: "Penyerahan Dokumen",
		"singkatan9" 	: "pencarian v9",
		"singkatan9" 	: "pencarian wxyz 10",
		"singkatan9" 	: "!!"
	};
	//END :: menuList = $(".submenu li"); 


    //START :: Loop through all list items, and hide those who don't match the search query
    for (var list in menuList) {
    	listSingkatan.push(list);
    	subMenuItem.push(menuList[list]);
	}
	//END :: Looping
    $('input#searchInput').keyup(function() {
    	if ($('input#searchInput').val().length == 1){
			
			$('#sub-menu-bar').empty();
			$('#sub-menu-bar').append(`<ul class="submenu"></ul>`);

		    for (i = 0; i < subMenuItem.length; i++) {
		    	$('.submenu').append(
					`<li><a href="#" value="${listSingkatan[i]}">${subMenuItem[i]}</a></li>`
				);
		    }
			filter();
		} 
		
	    if ($('input#searchInput').val() == ""){
			injectSubMenu();
		}
    });
}
//END :: Fungsi Inject per item




//START :: Fungsi filter key
function filter() {
    var input, filter, a, i;
    var b= [];
	input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();

	var items = $('.submenu li');
    for (i = 0; i < items.length; i++) {
        a = items[i].getElementsByTagName("a")[0];
        // cek apakah input sesuai dengan sub menu item
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
			items[i].style.display = "background-color:red;";
		// cek apakah input sesuai dengan singkatan sub menu item
        } else if (a.getAttribute("value").toUpperCase().indexOf(filter) > -1) {
			items[i].style.display = "background-color:red;";
        } else {
			items[i].style.display = "none";
        }

        if($('.submenu li:visible').length == 0) {
        	if ($('#sub-menu-bar').find('img').length == 0)
			$('#sub-menu-bar').prepend('<img id="theImg" src="bobo-404.gif"/></p>');
        }
    }

}

//END :: Fungsi filter key

//**----  END :: BAGIAN FUNGSI DARI BERBAGAI ELEMENT ----**//