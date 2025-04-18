$(function () {
  let banners = $(".banner");
  let subnavItems = $(".subnav ul li");
  let currentIndex = 0;

  function showSlide(index) {
    banners.fadeOut(800);
    banners.eq(index).fadeIn(800);
    subnavItems.removeClass("active").find("span").css({
      color: "",
      "border-bottom": "",
      "font-weight": "",
    });
    subnavItems.eq(index).addClass("active").find("span").css({
      color: "#dd3454",
      "border-bottom": "1.5px solid #dd3454",
    });
    currentIndex = index;
  }
  // 초기 상태 설정
  banners.hide();
  showSlide(currentIndex);
  // 자동 슬라이드
  setInterval(() => {
    const nextIndex = (currentIndex + 1) % banners.length;
    showSlide(nextIndex);
  }, 5000);
  // subnav 클릭 시 해당 배너로 이동
  subnavItems.on("click", function () {
    let index = $(this).index();
    showSlide(index);
  });
  // 초기 스타일 설정 (active 제외)
  subnavItems.each(function () {
    const span = $(this).find("span");
    if (!$(this).hasClass("active")) {
      span.css({
        "border-bottom": "1px solid transparent",
        display: "inline-block",
        "line-height": "50px",
        height: "50px",
        transition: "border-bottom 0.2s ease",
      });
    } else {
      span.css({
        display: "inline-block",
        "line-height": "50px",
        height: "50px",
        transition: "border-bottom 0.2s ease",
      });
    }
  });
  // 호버 시 천천히 밑줄 효과
  subnavItems.find("span").hover(
    function () {
      if (!$(this).parent().hasClass("active")) {
        $(this).css("border-bottom", "1.5px solid #dd3454");
      }
    },
    function () {
      if (!$(this).parent().hasClass("active")) {
        $(this).css("border-bottom", "1.5px solid transparent");
      }
    }
  );
});
