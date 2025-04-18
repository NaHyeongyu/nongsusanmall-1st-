$(function () {
  // 카테고리 hover 시 .categorydetail 보이기
  $(".category").hover(
    function () {
      $(this).css("border-radius", "16px 16px 0px 0px").css("height", "40px ");
      $(this).find(".categorydetail").css("display", "block");
    },
    function () {
      $(this).css("border-radius", "24px").css("height", "34px");
      $(this).find(".categorydetail").css("display", "none");
    }
  );
  // 카테고리 메뉴 - 메인 항목에 마우스 올릴 때 서브카테고리 표시
  $(".categorylist li").on("mouseenter", function () {
    $(".categorylist li").removeClass("active");
    $(this).addClass("active");
  });

  const target = $(this).data("sub");
  $(".sub-category").hide();
  $("#" + target).show();
});
