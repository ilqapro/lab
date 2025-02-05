$(function() {

    if( $('body').width() <= 768 ) {
        $('.siteHeader.fill-header-on-mobile').removeClass('siteHeader-mini')
    }

    $('select').niceSelect();
    
    $('input[type="tel"]').inputmask("+7 999 999 99-99");

    Fancybox.bind('[data-fancybox]', {
        
    });

    if( $('html').width() <= 992 ) {
        $('body').removeClass('do-css-hover')
    }

    function scrollTopHandler( scrollTop ) {

        if( scrollTop >= 300 ) {
            $('.siteHeader-fixed').addClass('active')
        } else {
            $('.siteHeader-fixed').removeClass('active')
        }

    }

    $(window).on('scroll', function() {
        scrollTopHandler($(this).scrollTop())
    })

    $('.siteFaqItem').on('click', function() {
        
        $(this).toggleClass('active')

    }).first().trigger('click')

    $('.vacancySingle__header-buttons button').on('click', function() {
        let index = $(this).index();
        
        $(this).parent().find('.active').removeClass('active')
        $(this).addClass('active')

        $('.vacancySingle__tabs-item.active').removeClass('active')
        $('.vacancySingle__tabs-item').eq(index).addClass('active')
    }).first().trigger('click')

    $('.vacancySingle__sidebar-apply').on('click', function() {
        $('.vacancySingle__header-buttons button').eq(1).trigger('click')
    })
    
})