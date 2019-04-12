function slowScroll (id) {
	var offset = 0;
	$("html, body").animate ({
		scrollTop: $(id).offset ().top - offset
	}, 1500);
	return false;
}


//      кнопка наверх          


$(function() {
 
$(window).scroll(function() {
 
if($(this).scrollTop() != 0) {
 
$('.toUp').fadeIn();
 
} else {
 
$('.toUp').fadeOut();
 
}
 
});
 
$('.toUp').click(function() {
 
$('body,html').animate({scrollTop:0},1500);
 
});
 
});



//             раскрытие блоков         


// var div1 = document.querySelector(".exp");
// var img1 = document.querySelector(".exp img");

// div1.hover = function(){
// 	if(this.classList.contains("plusClass")){
// 		this.classList.remove("plusClass");
// 	}else{
// 		this.classList.add("plusClass");
// 	};
// };
// img1.onclick = function(){
// 	if(this.classList.contains("imges")){
// 		this.classList.remove("imges");
// 	 }else{
// 	 	this.classList.add("imges");
// 	};
// };



$('.img1').on('click' , function(){
	$('.img_text1').slideToggle(300);
	$('.img_text1').toggleClass('open');

});
$('.img2').on('click' , function(){
	$('.img_text2').slideToggle(300);
	$('.img_text2').toggleClass('open');

});
$('.img3').on('click' , function(){
	$('.img_text3').slideToggle(300);
	$('.img_text3').toggleClass('open');

});

// var text = document.querySelector(".img_text");
// var img = document.querySelector(".anim");
// var exp = document.querySelector(".exp");
// var img1 = document.querySelector(".exp img");
// img1.onclick = function(){
// 	if(exp.classList.contains("plusImg")){
// 		exp.classList.remove("plusImg");
// 	 }else{
// 	 	exp.classList.add("plusImg");
// 	};
// };

// img.onclick = function(){
// 	text.slideToggle(300);
// 	text.toggleClass('open');
// };