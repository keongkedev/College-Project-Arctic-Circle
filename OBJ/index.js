// 北極圈動物知多少
const m23Elements = Array.from(document.querySelectorAll(".m23_1, .m23_2, .m23_3, .m23_4, .m23_5, .m23_6, .m23_7, .m23_8, .m23_9"));
const tipElements = Array.from(document.querySelectorAll(".tip_1, .tip_2, .tip_3, .tip_4, .tip_5, .tip_6, .tip_7, .tip_8, .tip_9"));

m23Elements.forEach((m23Element, index) => {
    m23Element.addEventListener("click", () => {
        tipElements[index].classList.toggle("active");
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

// 那麼大的面積是什麼樣的想像
const btn_25 = document.querySelector(".btn_25");
const btn_255 = document.querySelector(".btn_255");
const area_25 = document.querySelector(".area_25");

btn_25.addEventListener("click", () => {
    area_25.classList.toggle("active");
})

btn_255.addEventListener("click", () => {
    area_25.classList.remove("active");
})

const btn_back = document.querySelector(".btn_back");
btn_back.addEventListener("click", () => {
    area_25.classList.remove("active");
    area_26.classList.remove("active");
})

const btn_white = document.querySelector(".btn_white");
const btn_white2 = document.querySelector(".btn_white2");
const btn_white3 = document.querySelector(".btn_white3");
const btn_white4 = document.querySelector(".btn_white4");
const btn_white5 = document.querySelector(".btn_white5");
const btn_white6 = document.querySelector(".btn_white6");
const btn_white7 = document.querySelector(".btn_white7");
const btn_white8 = document.querySelector(".btn_white8");
const btn_white9 = document.querySelector(".btn_white9");
btn_white.addEventListener("click", () => {
    tip1.classList.remove("active");
})
btn_white2.addEventListener("click", () => {
    tip2.classList.remove("active");
})
btn_white3.addEventListener("click", () => {
    tip3.classList.remove("active");
})
btn_white4.addEventListener("click", () => {
    tip4.classList.remove("active");
})
btn_white5.addEventListener("click", () => {
    tip5.classList.remove("active");
})
btn_white6.addEventListener("click", () => {
    tip6.classList.remove("active");
})
btn_white7.addEventListener("click", () => {
    tip7.classList.remove("active");
})
btn_white8.addEventListener("click", () => {
    tip8.classList.remove("active");
})
btn_white9.addEventListener("click", () => {
    tip9.classList.remove("active");
})


const btn_donate = document.querySelector(".btn_donate");
const area_26 = document.querySelector(".area_26");

btn_donate.addEventListener("click", () => {
    area_26.classList.toggle("active");
})

const w1 = document.querySelector(".w1");
const w2 = document.querySelector(".w2");
const w3 = document.querySelector(".w3");
const w4 = document.querySelector(".w4");
const w5 = document.querySelector(".w5");
const w6 = document.querySelector(".w6");
const w7 = document.querySelector(".w7");

w1.addEventListener("click", () => {
    tp7.classList.toggle("active");
})
w2.addEventListener("click", () => {
    tp6.classList.toggle("active");
})
w3.addEventListener("click", () => {
    tp5.classList.toggle("active");
})
w4.addEventListener("click", () => {
    tp4.classList.toggle("active");
})
w5.addEventListener("click", () => {
    tp3.classList.toggle("active");
})
w6.addEventListener("click", () => {
    tp2.classList.toggle("active");
})
w7.addEventListener("click", () => {
    tp1.classList.toggle("active");
})


const tp1 = document.querySelector(".tp_1");
const tp2 = document.querySelector(".tp_2");
const tp3 = document.querySelector(".tp_3");
const tp4 = document.querySelector(".tp_4");
const tp5 = document.querySelector(".tp_5");
const tp6 = document.querySelector(".tp_6");
const tp7 = document.querySelector(".tp_7");

const btn_back1 = document.querySelector(".btn_back1");
const btn_back2 = document.querySelector(".btn_back2");
const btn_back3 = document.querySelector(".btn_back3");
const btn_back4 = document.querySelector(".btn_back4");
const btn_back5 = document.querySelector(".btn_back5");
const btn_back6 = document.querySelector(".btn_back6");
const btn_back7 = document.querySelector(".btn_back7");

btn_back1.addEventListener("click", () => {
    tp1.classList.remove("active");
})
btn_back2.addEventListener("click", () => {
    tp2.classList.remove("active");
})
btn_back3.addEventListener("click", () => {
    tp3.classList.remove("active");
})
btn_back4.addEventListener("click", () => {
    tp4.classList.remove("active");
})
btn_back5.addEventListener("click", () => {
    tp5.classList.remove("active");
})
btn_back6.addEventListener("click", () => {
    tp6.classList.remove("active");
})
btn_back7.addEventListener("click", () => {
    tp7.classList.remove("active");
})
