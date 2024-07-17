// 彈出視窗開啟
$(".btn_modal").on("click", function () {
  let name = $(this).data("name");
  console.log(name);
  $("._modal").each(function () {
    if ($(this).data("name") === name) {
      $(this).addClass("active");
    }
  });
});

//彈出視窗關閉
$(".btn_back").on("click",function(){
  const modal = this.closest("._modal"); //往父元素查找._modal的元素
  modal.classList.remove("active");
})

// 台灣淹沒海平線選擇按鈕
const seamap = document.querySelector(".seamap");
$(".btn-sea").on("click", function(){
  const target = $(this).data("target");

  seamap.classList.remove("map2", "map3", "map4");
  
  if(target != null){
    seamap.classList.toggle(target);
  }
})