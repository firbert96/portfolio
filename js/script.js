// event pada saat link di klik
$('.page-scroll').on('click', function(e){
	//ambil isi href
	var href = $(this).attr('href');
	//tangkap elemen ybs
	var elemenHref= $(href);

	//pindahkan scroll
	$('html,body').animate({
		scrollTop: elemenHref.offset().top - 50
	},1000,'easeInOutExpo');
	
	e.preventDefault();
}); 

//parallax
// about
$(window).on('load',function(){
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});

$(window).scroll(function(){
	// jumbotron
	var wScroll = $(this).scrollTop();
	$('.jumbotron img').css({
		'transform':'translate(0px,'+wScroll/4+'%)'
	});
	$('.jumbotron h1').css({
		'transform':'translate(0px,'+wScroll/2+'%)'
	});
	$('.jumbotron p').css({
		'transform':'translate(0px,'+wScroll/1.5+'%)'
	});
	//

	//certificate
	if(wScroll>$('.certificate').offset().top-150){
		$('.certificate .thumbnail').each(function(i){
			setTimeout(function(){
				$('.certificate .thumbnail').eq(i).addClass('muncul'); 
			},300*i+1);
		});

	}
});