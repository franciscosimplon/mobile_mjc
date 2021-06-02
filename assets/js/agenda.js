// Progression actuel : 
// - Commentaire sur le fonctionnement du calendrier

//  création variable lier à l'ID calendar 
let calendarNode = document.querySelector("#calendar");

// création variable date, mois et année en cours que nous réutiliserons

let currDate = new Date(); // creation variable avec l'objet Date
let currYear = currDate.getFullYear(); // variable en lien avec la methode getFullYear qui recupère l'année d'après l'heure locale
let currMonth = currDate.getMonth() + 1; // variable en lien avec la methode getMonth qui récupère le mois
let currDay = currDate.getDate(); // récupère la date du jour

// création de variable 

let selectedYear = currYear;
let selectedMonth = currMonth;
let selectedMonthName = getMonthName(selectedYear, selectedMonth);
let selectedMonthDays = getDayCount(selectedYear, selectedMonth);

// déclaration de deux nouvelles variables égales aux deux premieres
// qui servirons pour les deux fonctions qui m'aiderons à afficher les mois suivants

renderDOM(selectedYear, selectedMonth); // qui m'affichant mon calendrier voir plus bas

// creation fonction nous retournant le mois en langue locale
function getMonthName(year, month) {
  let selectedDate = new Date(year, month - 1, 1);
  return selectedDate.toLocaleString("default", { month: "long" });
}
// creation de function du mois en texte
function getMonthText() {
  if (selectedYear === currYear) return selectedMonthName;
  else return selectedMonthName + " ";
}
function getYearText() {
  return " " + selectedYear;
}
// afin de pourvoir coordonnée nos date avec nos jours
function getDayName(year, month, day) {
  let selectedDate = new Date(year, month - 1, day);
  return selectedDate.toLocaleDateString("en-US", { weekday: "long" }); 
  /* toLocaleDateString renvoie une chaine de caractères correspondant à la date
   (le fragment de l'objet qui correspond à la date : jour, mois, année) exprimée selon une locale */
}
// va nous renvoyer notre nombre de jours
function getDayCount(year, month) {
  return 32 - new Date(year, month - 1, 32).getDate();
}
// fonction pour notre rangée de jours
function getDaysArray() {
  let emptyFieldsCount = 0;
  let emptyFields = [];
  let days = [];
// afin de commencer le calendrier par le bon jour de la semaine et éviter que chaque 1er du mois soit un Lundi si c'est n'est pas le cas
  switch (getDayName(selectedYear, selectedMonth, 1)) {
    case "Tuesday":
      emptyFieldsCount = 1;
      break;
    case "Wednesday":
      emptyFieldsCount = 2;
      break;
    case "Thursday":
      emptyFieldsCount = 3;
      break;
    case "Friday":
      emptyFieldsCount = 4;
      break;
    case "Saturday":
      emptyFieldsCount = 5;
      break;
    case "Sunday":
      emptyFieldsCount = 6;
      break;
  }
// donc si le mois ne commence pas par un Lundi la rangée aura un vide
  emptyFields = Array(emptyFieldsCount).fill("");
  days = Array.from(Array(selectedMonthDays + 1).keys());
  days.splice(0, 1);

  return emptyFields.concat(days);
}
// création en html de notre calendrier
function renderDOM(year, month) {
  let newCalendarNode = document.createElement("div");
  newCalendarNode.id = "calendar";
  newCalendarNode.className = "calendar";

  // creation de la div de nos mois en lien avec la fonction qui nous récupère sous text le mois et l'année
  let dateText = document.createElement("div");
  dateText.append(getMonthText(), getYearText());
  dateText.className = "date-text";
  newCalendarNode.append(dateText);

  // flèche en lien avec la fonction pour naviguer vers le mois précédant
  let leftArrow = document.createElement("div");
  leftArrow.append("«");
  leftArrow.className = "prev";
  leftArrow.addEventListener("click", goToPrevMonth);
  newCalendarNode.append(leftArrow);

  // flèche en lien avec la fonction pour naviguer vers le mois suivant
  let rightArrow = document.createElement("div");
  rightArrow.append("»");
  rightArrow.className = "next";
  rightArrow.addEventListener("click", goToNextMonth);
  newCalendarNode.append(rightArrow);

  // liste sous forme d'array pour les jours de la semaine en texte

  let dayNames = ["LUN", "MAR", "MER", "JEU", "VEN", "SAM", "DIM"];

  // création des cellules pour les jours de la semaine
  dayNames.forEach((cellText) => {
    let cellNode = document.createElement("div");
    cellNode.className = "cell";
    cellNode.append(cellText);
    newCalendarNode.append(cellNode);
  });

  let days = getDaysArray(year, month);

// création de nos cellules de date du mois et ciblage de la date du jour
  days.forEach((cellText) => {
    let cellNode = document.createElement("div");
    let classes = "cell numbers";
    if (
      cellText == currDay &&
      currMonth == selectedMonth &&
      currYear == selectedYear
    ) {
      classes += " today";
    }
    cellNode.className = classes;
    cellNode.append(cellText);
    newCalendarNode.append(cellNode);
  });
// permet de remplacer par un nouveau calendrier dans la div calendar
  calendarNode.replaceWith(newCalendarNode);
  calendarNode = document.querySelector("#calendar");
}
// fonction permettant de naviguer et charger le mois précédant
function goToPrevMonth() {
  selectedMonth--;
  if (selectedMonth === 0) {
    selectedMonth = 12;
    selectedYear--;
  }
  selectedMonthDays = getDayCount(selectedYear, selectedMonth);
  selectedMonthName = getMonthName(selectedYear, selectedMonth);
// nouvelles variable qui récupère le mois et le nombre de jours du mois sélectionner

  renderDOM(selectedYear, selectedMonth);
}
// creation fonction pour aller au mois suivant
function goToNextMonth() {
  selectedMonth++;
  if (selectedMonth === 13) {
    selectedMonth = 1;
    selectedYear++;
  }
  selectedMonthDays = getDayCount(selectedYear, selectedMonth);
  selectedMonthName = getMonthName(selectedYear, selectedMonth);

  renderDOM(selectedYear, selectedMonth);
}

/* ---------------------------------------------------------
--------------           AGENDA         --------------------
----------------------------------------------------------*/
// création bloc agenda
let cours = document.createElement("div");
cours.className = "cours";
document.querySelector("#monagenda").appendChild(cours);
// creation des activités sous forme de rectangle avec les informations du cours, date et heure de ce dernier
let matiere = document.createElement("h2");
let daHe = document.createElement("div");
daHe.className = "daHe" ;
let journee = document.createElement("p");
let horaire = document.createElement("div");
horaire.className = "horaire";
let clock = document.createElement("i");
clock.className = "material-icons";

/* icone horloge a rajouter */

matiere.textContent = "YOGA"; // intitulé du cours ex: Yoga
journee.textContent = "Lorem Ipsum"; // date du cours
horaire.textContent = "00H00"; // heure du cours en lien avec la database 
clock.textContent = "schedule"; // icone horloge 

// affichage des éléments dans le body
cours.appendChild(matiere);
cours.appendChild(daHe);
daHe.appendChild(journee);
daHe.appendChild(clock);
daHe.appendChild(horaire);
