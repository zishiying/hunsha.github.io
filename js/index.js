/****************************************************************
 *																*		
 * 						      代码库							*
 *                        www.dmaku.com							*
 *       		  努力创建完善、持续更新插件以及模板			*
 * 																*
****************************************************************/
// 产品轮播图

var swiper1 = new Swiper('#sect_one .swiper-container', {  
    slidesPerView: 6,
    centeredSlides: false,
    spaceBetween: 0,
    freeMode: true,
    breakpoints: {
        750:{
            slidesPerView: 2,
            spaceBetween: 0,
        },
        1200:{
            slidesPerView: 4,
            spaceBetween: 0, 
        },
        1600:{
            slidesPerView: 5,
            spaceBetween: 0, 
        },
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});





window.onload = function(){
    var arrLocation = window.location.href.split('/');
    var activeName = '';
    console.log(arrLocation)
    activeName = arrLocation[arrLocation.length - 1];
    if(activeName == "about.html" || activeName == "contact.html" || activeName == "list-1.html" || activeName == "list-2.html"){}else{ activeName = arrLocation[arrLocation.length - 2]; }
    console.log(activeName)
    switch(activeName){
        case 'list-1.html': 
            for(var i = 0; i<$('.ul li').length; i++){ if($('.ul li').eq(i).attr("name") == 'list-1'){ $('.ul li').eq(i).addClass('active').siblings('li').removeClass('active') } }; break;
        case 'list-2.html': 
            for(var i = 0; i<$('.ul li').length; i++){ if($('.ul li').eq(i).attr("name") == 'list-2'){ $('.ul li').eq(i).addClass('active').siblings('li').removeClass('active') } }; break;
        case 'notice':
            for(var i = 0; i<$('.ul li').length; i++){ if($('.ul li').eq(i).attr("name") == 'notice'){ $('.ul li').eq(i).addClass('active').siblings('li').removeClass('active') } }; break;
        case 'news':
            for(var i = 0; i<$('.ul li').length; i++){ if($('.ul li').eq(i).attr("name") == 'news'){ $('.ul li').eq(i).addClass('active').siblings('li').removeClass('active') } }; break;
        case 'about.html':
            for(var i = 0; i<$('.ul li').length; i++){ if($('.ul li').eq(i).attr("name") == 'about.html'){ $('.ul li').eq(i).addClass('active').siblings('li').removeClass('active') } }; break;
        case 'contact.html':
            for(var i = 0; i<$('.ul li').length; i++){ if($('.ul li').eq(i).attr("name") == 'contact.html'){ $('.ul li').eq(i).addClass('active').siblings('li').removeClass('active') } }; break;
        default: 
            $('.ul li').eq(0).addClass('active').siblings('li').removeClass('active'); break;
    }
    var flag = true;
    $('header .nav').click(function(){
        if(flag){
            flag = false;
            $('header .nav span').eq(0).addClass('active');
            $('header .nav span').eq(2).addClass('active');
            $('header .nav span').eq(1).hide();
            $('header ul').slideDown();
        }else{
            flag = true;
            $('header .nav span').eq(0).removeClass('active');
            $('header .nav span').eq(2).removeClass('active');
            $('header .nav span').eq(1).show();          
            $('header ul').slideUp();
        }
    });
    var Bannerswiper = new Swiper('.banner .swiper', {  
        loop: true,
        autoplay:true,
        speed:800,
       
    });
    
    // var swiperHeight = $('.banner').height();
    // $('#banner').css({'height':swiperHeight+'px'});
    $('.sect_two ul li').mouseenter(function(){
        $(this).find('.mask').slideDown();
        var that = $(this);
        that.mouseleave(function(){
            that.find('.mask').slideUp();
        })
    })

    $('#product ul.List li').mouseenter(function(){
        $(this).find('.mask').slideDown();
        var that = $(this);
        that.mouseleave(function(){
            that.find('.mask').slideUp();
        })
    })

    $('#case ul.List li').mouseenter(function(){
        $(this).find('.mask').slideDown();
        var that = $(this);
        that.mouseleave(function(){
            that.find('.mask').slideUp();
        })
    })


}
