$(document).ready(function () {
  /*메뉴바*/
  let menubox = $(`#gnbWrap`);
  let menu = $(`#gnb >li`);
  menu.click(function (e) {
    e.preventDefault();
    let i = $(this).index();
    let content = $(`#section${i + 1}`);
    let ot = content.offset().top;
    $(`html,body`).stop().animate({ scrollTop: ot });
  });

  let menuOT = menubox.offset().top;
  $(window).scroll(function () {
    let sct = $(this).scrollTop();
    if (sct >= menuOT) {
      menubox.css({ position: `fixed`, zIndex: `200` });
    } else {
      menubox.css({ position: `block` });
    }

    $(`section`).each(function () {
      let idx = $(this).index(); //순서
      if(sct>=$(this).offset().top){
            menu.find(`a`).removeClass(`on`).eq(idx).addClass(`on`);
        }
    });
  });
  

  $(`.menubox .menu`).hover(
    function () {
      $(this)
        .css({ border: `2px solid var(--main-green)` })
        .find(`.arrowbtn`)
        .attr(`src`, $(`.arrowbtn`).attr(`src`).replace(`.png`, `_on.png`));
    },
    function () {
      $(this)
        .css({ border: `2px solid var(--main-gray)` })
        .find(`.arrowbtn`)
        .attr(`src`, $(`.arrowbtn`).attr(`src`).replace(`_on.png`, `.png`));
    }
  );

  const mapBtn = $(`#section4 .maplist ul li`);
  const map = $(`#section4 .mapContainer .map`);
  const mapText = $(`#section4 .mapContainer .mapTextBox`);

  mapBtn.click(function () {
    let idx = $(this).index();
    map.css({ backgroundImage: `url("img/map/map_${idx + 1}.png")` });
    mapBtn.removeClass(`on`);
    $(this).addClass(`on`);
    mapText.hide();
    mapText.eq(idx).show();
  });

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  let banner = $(`.swiper-slide`);
  banner.each(function(){
    let j = $(this).index();
    $(this).css({
        backgroundImage: `url("img/banner/banner_${j+1}.jpg")`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`
    });
  });

  let owl = $(".owl-carousel");
  owl.find(`.item`).each(function () {
    let i = $(this).index();
    $(this).css({
      backgroundImage: `url("img/slider/slider_${i + 1}.jpg")`,
    });
  });

  owl.owlCarousel({
    center: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    stagePadding: 30,
    loop: true,
    margin: 5,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});
