const listImages = document.querySelector(".list-images");
const imgs = document.querySelectorAll(".ssimg");
const width = imgs[0].offsetWidth;
let current = 0;
let btnLeft = document.querySelector(".btn-left");
let btnRight = document.querySelector(".btn-right");

const handleChangeSlide = () => {
  if (current == imgs.length - 1) {
    current = 0;
  } else {
    current++;
  }
  listImages.style.transform = `translateX(${width * -1 * current}px)`;
};

let handleEventChangeSlide = setInterval(handleChangeSlide, 4000);

btnRight.addEventListener("click", () => {
  clearInterval(handleEventChangeSlide);
  handleChangeSlide();
  handleEventChangeSlide = setInterval(handleChangeSlide, 4000);
});

btnLeft.addEventListener("click", () => {
  clearInterval(handleEventChangeSlide);

  if (current == 0) {
    current = imgs.length - 1;
  } else {
    current--;
  }
  listImages.style.transform = `translateX(${width * -1 * current}px)`;

  handleEventChangeSlide = setInterval(handleChangeSlide, 4000);
});
