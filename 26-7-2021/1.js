$(function () {
  $(".languages").slideUp();
  $(".top_language b").click(function (event) {
    $(this).next().slideToggle(300);
  });
});
