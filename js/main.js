$(function(){

$(window).scroll(function() {

	let target = $('.footer').offset().top / 2;
	if($(this).scrollTop() > target) {

		$('.up-down-arrow').addClass('uparrow')

	} else {

		$('.up-down-arrow').removeClass('uparrow')

	}

});

var $page = $('html, body');
$('a[href*="#top-page"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});


$('.top-links_cities-link').click(function(){
	$('.js-fixed-area.fixed-area_cities').fadeIn()
	return false;
})
$('.top-links_lk-link').click(function(){
	$('.js-fixed-area.fixed-area_lk-enter').fadeIn()
	return false;
})

$('.popup-block.popup-block_cities').mouseleave (function(){
	$('.js-fixed-area.fixed-area_cities').fadeOut()
})
$('.popup-block.popup-block_lk-enter').mouseleave (function(){
	$('.js-fixed-area.fixed-area_lk-enter').fadeOut()
})

$('.select-close-icon').click(function(){
	$('.js-fixed-area').fadeOut()
})

$('.cart-main').click(function(){
	$('.opened-cart').fadeIn()
})

$('.js-close-cart').click(function(){
	$('.opened-cart').fadeOut()
})

$('.opened-cart').mouseup(function (e){ // событие клика по веб-документу
	var div = $(".cart-block"); // тут указываем ID элемента
	if (!div.is(e.target) // если клик был не по нашему блоку
	    && div.has(e.target).length === 0) { // и не по его дочерним элементам
		$('.opened-cart').fadeOut()
	}
});


if ($('.parallax-decor').length) {
	$('.parallax-decor').paroller({
	    factor: "0.5",
	    type: "foreground",
	    direction: "vertical"
	});
}
 $('.lk-adresses-form .form-radio').click(function () {
    $(this).parents('.lk-adresses-form').find('.form-radio-button').removeClass('w--redirected-checked')
    $(this).find('.form-radio-button').addClass('w--redirected-checked')
})

$('.form-radio').click(function () {
    $(this).parent('div').parent('div').find('.form-radio-button').removeClass('w--redirected-checked')
    $(this).find('.form-radio-button').addClass('w--redirected-checked')
})


$('.cart-order-select-link').click(function () {
    $(this).next('.cart-order-select-inner').fadeIn()
})
$('.cart-order-select-link').click(function () {
    $(this).next('.cart-order-select-inner-_sub-select').fadeIn()
})

$('.cart-order-form-column_right a').click(function () {
    $(this).closest('.cart-order-select-inner').fadeOut()
})


$('.w-plus').click(function () {
    let val = $(this).parent('div').prev('div').find('.count-value').text()
    val = parseInt(val) + 1
    $(this).parent('div').prev('div').find('.count-value').text(val)
})
$('.w-minus').click(function () {
    let val = $(this).parent('div').next('div').find('.count-value').text()
    if (val != 1) {
        val = parseInt(val) - 1
    }
    $(this).parent('div').next('div').find('.count-value').text(val)
})
$('label.choose-restaurant').click(function () {
    $('div.enter-address').css('display', 'none')
    $('div.choose-restaurant').css('display', 'block')
})

$('label.enter-adress').click(function () {
	$('div.choose-restaurant').css('display', 'none')
	$('div.enter-address').css('display', 'block')
})

$('.cart-order-select-inner-text').click(function () {
    let text = $(this).text()
    $(this).parent('div').prev('a').find('input').val(text)
    $(this).parent('div').hide()
})

$('.menu-icon').click(function () {
        $('.menu-list').fadeIn()
    })
    $('.select-close-icon_sub-menu').click(function () {
        $('.menu-list').fadeOut()
    })
})