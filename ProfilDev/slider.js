const leftBtn = document.querySelector(".left-btn"),
  rightBtn = document.querySelector(".right-btn"),
  slide = document.querySelector(".slide"),
  slideImg = document.querySelector(".slide-img");

images = [
  '<img src="../project-img/apple.png" alt="">',
  '<img src="../project-img/digital-agency.png" alt="">',
  '<img src="../project-img/akademnashr.png" alt="">',
  '<img src="../project-img/expedia.png" alt="expedia">',
  '<img src="../project-img/figmaland.png" alt="">',
  '<img src="../project-img/linkedtech.png" alt="">',
];
slideImg.innerHTML = '<img src="../project-img/apple.png" alt="">';

var imageIndex = 0,
  activeImage;
rightBtn.addEventListener("click", () => {
  activeImage = imageIndex + 1;
  if (activeImage < images.length-1) {
    imageIndex++;
  } else {
    imageIndex = -1;
  }
  if (activeImage < images.length) {
    slideImg.innerHTML = images[activeImage];
  }
});

leftBtn.addEventListener("click", () => {
  activeImage = imageIndex - 1;
  if (activeImage > 0) {
    imageIndex--;
  } else {
    imageIndex = images.length;
  }
  if (activeImage >= 0) {
    slideImg.innerHTML = images[activeImage];
  }
  
});
