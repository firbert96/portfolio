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

// //parallax
// // about
// $(window).on('load',function(){
// 	$('.pKiri').addClass('pMuncul');
// 	$('.pKanan').addClass('pMuncul');
// });

//image modal
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName('imgPortfolio');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
$(document).ready(function(){
	$(".imgPortfolio").click(function(event){
	  event.preventDefault();
	  modal.style.display = "block";
  	  modalImg.src = this.src;
      captionText.innerHTML = this.alt;	
	});
  });

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}