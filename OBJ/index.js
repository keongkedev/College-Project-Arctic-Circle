// 北極圈動物知多少
const modalBtns = document.querySelectorAll('.btn_modal'); //取得所有.point的div

modalBtns.forEach(modalBtn => {
    modalBtn.addEventListener('click', function () {
        let name = this.getAttribute('name');
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (modal.getAttribute('name') === name) {
                modal.classList.add('active');
            }
        })
    })
})

// 北極圈動物知多少 關閉按鈕
const btnModals = document.querySelectorAll(".btn_modal");

btnModals.forEach(button => {
    button.addEventListener('click', function () {
        const modal = this.closest('.modal'); //尋找指定的父元素
        modal.classList.remove('active');
    })
})


// 台灣淹沒海平線
const sea1 = document.querySelector(".sea1");
const sea2 = document.querySelector(".sea2");
const sea3 = document.querySelector(".sea3");
const sea4 = document.querySelector(".sea4");
const seamap = document.querySelector(".seamap");

sea1.addEventListener("click", () => {
    seamap.classList.remove("map2");
    seamap.classList.remove("map3");
    seamap.classList.remove("map4"); //切換
})
sea2.addEventListener("click", () => {
    seamap.classList.toggle("map2");
    seamap.classList.remove("map3");
    seamap.classList.remove("map4"); //切換
})
sea3.addEventListener("click", () => {
    seamap.classList.toggle("map3");
    seamap.classList.remove("map2");
    seamap.classList.remove("map4"); //切換
})
sea4.addEventListener("click", () => {
    seamap.classList.toggle("map4");
    seamap.classList.remove("map2");
    seamap.classList.remove("map3");
})



