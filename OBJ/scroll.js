// //頁面滑動
// $(document).on('click', 'a', function (event) {
//     event.preventDefault();
//     $('html, body').animate({
//         scrollTop: $($.attr(this, 'href')).offset().top
//     }, 500);
// });

// 滑鼠滑動
$(window).mousemove(function (evt) {
    var pagex = evt.pageX;

    $(".animal1").css("transform", "translateX(" + (pagex / +60 - 50) + "px)")
    $(".animal2").css("transform", "translateX(" + (pagex / -44 + 50) + "px)")
    $(".animal3").css("transform", "translateX(" + (pagex / -22 + 50) + "px)")
    $(".animal4").css("transform", "translateX(" + (pagex / -80 + 50) + "px)")
    $(".animal5").css("transform", "translateX(" + (pagex / +36 + 50) + "px)")
    $(".animal6").css("transform", "translateX(" + (pagex / -40 + 50) + "px)")
    $(".animal7").css("transform", "translateX(" + (pagex / -40 + 50) + "px)")
    $(".animal8").css("transform", "translateX(" + (pagex / +20 - 50) + "px)")
    $(".animal9").css("transform", "translateX(" + (pagex / -14 + 50) + "px)")
})