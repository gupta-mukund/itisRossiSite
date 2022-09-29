const hamburger = document.getElementById("hamburger");
const navBar = document.getElementById("navbar_wrapper");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navBar.classList.toggle("active");
});
var currentImage = 0;
const sliderImages = [
  {
    image_url:
      "https://www.itisrossi.edu.it/wp-content/uploads/2022/09/panoramica-istituto.jpg",
    text: "La nostra scuola",
    data: "12 settembre 2022",
    desc: "ITIS Rossi dal 1878",
  },
  {
    image_url:
      "https://www.itisrossi.edu.it/wp-content/uploads/2022/07/rossi-confindustria-panoramica.jpg",
    text: "Evento Mind the Gap su iniziativa di Confindustria di Vicenza",
    data: "17 luglio 2022",
    desc: "Un’esposizione di quadri che raccontano del rapporto tra le donne e le materie SteAm.\nL’acronimo STEM, dall’inglese science, technology, engineering and mathematics, è un termine utilizzato per indicare le discipline scientifico-tecnologiche (scienz…",
  },
  {
    image_url:
      "https://www.itisrossi.edu.it/wp-content/uploads/2022/07/gnm-panoramica.jpg",
    text: "Secondi alla Gara Nazionale di Meccanica",
    data: "11 luglio 2022",
    desc: "Il nostro Istituto ha partecipato alla prestigiosa Gara Nazionale di Meccanica per gli Studenti delle CLASSI QUARTE degli Istituti Tecnici per l’articolazione Meccanica e Meccatronica, edizione 2022, presso l’Istituto “Garfagnana” di Castelnuovo di G…",
  },
  {
    image_url:
      "https://www.itisrossi.edu.it/wp-content/uploads/2022/06/nicola-home.jpg",
    text: "Atletica, Nicola Testa entra in nazionale con la maglia azzurra",
    data: "28 giugno 2022",
    desc: "Nazionale! Nicola Testa, classe 3BMM, dopo aver vinto alle gare di atletica il decathlon ai Campionati italiani under 18, vestendo la maglia azzurra parteciperà ai Campionati Europei allievi dal 4 al 7 luglio a Gerusalemme. Forza Nicola!",
  },
  {
    image_url:
      "https://www.itisrossi.edu.it/wp-content/uploads/2022/06/foto-panoramica-2022.jpg",
    text: "Buone vacanze e buoni esami!",
    data: "17 giugno 2022",
    desc: "Il Collegio Docenti dell’istituto Rossi augura a tutti una serena e rilassante estate e un in bocca al lupo alle studentesse e agli studenti di quinta che stanno per affrontare l’esame di stato!",
  },
];
const changeImage = () => {
  document.getElementById("slider-image").src =
    sliderImages[currentImage].image_url;
  document.getElementById("sliderLink").innerText =
    sliderImages[currentImage].text;
  document.getElementById("sliderDate").innerText =
    sliderImages[currentImage].data;
  document.getElementById("sliderDesc").innerText =
    sliderImages[currentImage].desc;
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
    currentImage = sliderImages.length - 1;
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
