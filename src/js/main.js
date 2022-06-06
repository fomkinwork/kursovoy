$(document).ready(function(){
$('.slider').slick({
	dots:true,
	arrows:false,
});
$('.header-burger').click(function(event) {
	$('.header-burger,.header-row,.header-banner').toggleClass('active');
});
});
