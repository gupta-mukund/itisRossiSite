var currentImage = 0;
const sliderImages = [
  {
    image_url:
      "https://www.itisrossi.edu.it/wp-content/uploads/2022/09/panoramica-istituto.jpg",
    text: "La nostra scuola",
    data: "12 settembre 2022",
  },
  {
    image_url:
      "https://www.itisrossi.edu.it/wp-content/uploads/2022/07/rossi-confindustria-panoramica.jpg",
    text: "Evento Mind the Gap su iniziativa di Confindustria di Vicenza",
    data: "17 luglio 2022",
  },
  {
    image_url:
      "https://www.itisrossi.edu.it/wp-content/uploads/2022/07/gnm-panoramica.jpg",
    text: "Secondi alla Gara Nazionale di Meccanica",
    data: "11 luglio 2022",
  },
  {
    image_url:
      "https://www.itisrossi.edu.it/wp-content/uploads/2022/06/nicola-home.jpg",
    text: "Atletica, Nicola Testa entra in nazionale con la maglia azzurra",
    data: "28 giugno 2022",
  },
  {
    image_url:
      "https://www.itisrossi.edu.it/wp-content/uploads/2022/06/foto-panoramica-2022.jpg",
    text: "Buone vacanze e buoni esami!",
    data: "17 giugno 2022",
  },
];
const changeImage = () => {
  document.getElementById("slider-image").src =
    sliderImages[currentImage].image_url;
  document.getElementById("sliderLink").innerText =
    sliderImages[currentImage].text;
  document.getElementById("sliderDate").innerText =
    sliderImages[currentImage].data;
  document.getElementById(currentImage + "").checked = true;
};
changeImage();
const setImageByRadio = (e) => {
  currentImage = e.target.id;
  changeImage();
};

const radios = document.getElementsByName("sliderRadio");
for (let radio of radios) {
  radio.addEventListener("change", setImageByRadio);
}

const setImages = (e) => {
  if (e.currentTarget.myParam == -1 && currentImage == 0) {
    currentImage = 0;
  } else if (
    e.currentTarget.myParam == 1 &&
    currentImage == sliderImages.length - 1
  ) {
    currentImage = 0;
  } else {
    currentImage += e.currentTarget.myParam;
  }
  changeImage();
};

document.getElementById("left_arrow").addEventListener("click", setImages);
document.getElementById("left_arrow").myParam = -1;
document.getElementById("right_arrow").addEventListener("click", setImages);
document.getElementById("right_arrow").myParam = 1;

const sliderAutoChange = () => {
  if (currentImage == sliderImages.length - 1) {
    currentImage = 0;
  } else {
    currentImage++;
  }
  changeImage();
};

//setInterval(sliderAutoChange, 2000);

const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "Gennaio",
    "Febbraio",
    "Marzo",
    "Aprile",
    "Maggio",
    "Giugno",
    "Luglio",
    "Agosto",
    "Settembre",
    "Ottobre",
    "Novembre",
    "December",
  ];

  document.querySelector(".date h1").innerHTML =
    months[date.getMonth()] + " " + new Date().getFullYear();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
