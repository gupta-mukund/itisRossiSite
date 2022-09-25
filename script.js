// var currentImage = 0;

// const sliderImages = [
//   "https://www.itisrossi.edu.it/wp-content/uploads/2022/09/panoramica-istituto.jpg",
//   "https://www.itisrossi.edu.it/wp-content/uploads/2022/07/rossi-confindustria-panoramica.jpg",
//   "https://www.itisrossi.edu.it/wp-content/uploads/2022/07/gnm-panoramica.jpg",
//   "https://www.itisrossi.edu.it/wp-content/uploads/2022/06/nicola-home.jpg",
//   "https://www.itisrossi.edu.it/wp-content/uploads/2022/06/foto-panoramica-2022.jpg",
// ];
// document.getElementById("image-container").style.backgroundImage =
//   "url(" + sliderImages[currentImage] + ")";
// const setImages = (e) => {
//   if (e.currentTarget.myParam == -1 && currentImage == 0) {
//     currentImage = 0;
//   } else if (
//     e.currentTarget.myParam == 1 &&
//     currentImage == sliderImages.length - 1
//   ) {
//     currentImage = 0;
//   } else {
//     currentImage += e.currentTarget.myParam;
//   }
//   document.getElementById("image-container").style.backgroundImage =
//     "url(" + sliderImages[currentImage] + ")";
// };

// document.getElementById("left_arrow").addEventListener("click", setImages);
// document.getElementById("left_arrow").myParam = -1;
// document.getElementById("right_arrow").addEventListener("click", setImages);
// document.getElementById("right_arrow").myParam = 1;
