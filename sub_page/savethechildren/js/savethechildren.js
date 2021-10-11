$(document).ready(function(){
    //lnb button
    let lnbBtn = $(`.lnbBtn`);
    let lnb = $(`nav`);

    lnbBtn.click(function(){
        lnb.slideToggle();
    });

    $(window).resize(function(){
            if ($(this).width()>=768) {
                $(`header nav`).stop().show();
            } else {
                $(`header nav`).removeAttr(`style`); 
            }
        });

        
    //footer gnbmenu
    $(`.gnb p .gnbMenu`).click(function(e){
        e.preventDefault();
        $(`.gnb ul`).slideToggle();
    });
    
    //fixed top button function
    $(window).scroll(function(){
        if($(this).scrollTop() > $(`.sec0`).offset().top){
            $(`.topBtn`).show().click(function(){
                $(`html, body`).stop().animate({
                    scrollTop: 0
                },500)
            });
        } else {
            $(`.topBtn`).hide();
        }
    });
    
    //index page main message animation
    $(`.sec0 h2`).stop().animate({
        opacity: "1"
    },800,'swing');
        
    //index page section2 background image
    $(`.sec2Image`).each(function(i){
        $(this).css({
            backgroundImage: `url("img/section_img/journey-${i+1}.jpg")`
        });
    });

    //index page section3 gallery
    $(`.sec3Contain div`).each(function(i){
        $(this).css({
            backgroundImage: `url("img/gallery/gallery-${i+1}.jpg")`
        });
    });

    $(`.more`).click(function(){
        $(`.sec3`).css({
            height:`auto`
        });
        $(this).hide();
    });

});