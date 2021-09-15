$(document).ready(function(){
		//gnb button
		let gnbBtn = $(`.gnbBtn`);
		let gnb = $(`#gnb`);
        let menu = $(`#gnb li`);

        menu.click(function (e) {
          e.preventDefault();
          let i = $(this).index();
          let content = $(`#section${i+1}`);
          let headerH = $(`#headerWrap`).outerHeight();
          let ot = content.offset().top - headerH;
          $(`html,body`).stop().animate({ scrollTop: ot });
        });

		gnbBtn.click(function(){
			gnb.slideToggle();
		});

		$(window).resize(function(){
				if ($(this).width()>=640) {
					gnb.css('display','flex');
				} else {
					gnb.removeAttr(`style`);
				}
		});

        //contact style
        $(`.copy`).each(function(){
            $(this).click(function(){
                let url = $(this).find(`.copyLink`);
                url.select();
                document.execCommand(`copy`);
                alert(`복사 되었습니다.`);
            });
        });

        if($(this).width()>1280) {
                $(`.contact li`).eq(0).html(`<i class="fas fa-envelope-square fa-lg"></i> <br> yeunk0206@naver.com`);
                $(`.contact li`).eq(1).html(`<i class="fas fa-phone-square fa-lg"></i> <br> 010-9137-1521`);
            }    

        //sectionTitle underline
        $(window).scroll(function(){
            $(`section`).each(function(){
                let secTop = $(this).offset().top - 400;
                if($(window).scrollTop() > secTop) {
                    $(this).find(`.sectionTitle`).addClass(`on`);
                }
            });

            let aboutTop = $(`.aboutMe`).offset().top - 200;
            if($(window).scrollTop() > aboutTop) {
                $(`.contact`).fadeIn(300);
            } else { $(`.contact`).fadeOut(100); }

            //mobile일때 메뉴 숨기기
            if($(window).scrollTop() > 60 && $(window).width() < 640) {
                gnb.slideUp();
            }
        });

        //project thumbnails
        $(`.projects>div`).each(function(i){
            $(this).find(`.slideImg`).css('backgroundImage', `url("img/thumbnail/thumbnail${i+1}.png"`);
        });
        $(`.detail`).css('backgroundImage', `url("img/thumbnail/detail.png"`);
        $(`.detail2`).css('backgroundImage', `url("img/thumbnail/detail2.png"`);

        //color palete
        let colorChip = $(`.colorP ul li`);
        colorChip.each(function(i){
            let colorName = colorChip.eq(i).find(`p`).text();
            $(this).css('backgroundColor', colorName);
        });
});