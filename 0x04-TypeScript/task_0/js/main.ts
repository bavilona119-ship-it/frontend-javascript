// 1. Définition de l’interface Student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Création de deux étudiants
const student1: Student = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 21,
  location: "Paris",
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Smith",
  age: 25,
  location: "Nairobi",
};

// 3. Tableau des étudiants
const studentsList: Student[] = [student1, student2];

// 4. Création du tableau HTML
const table = document.createElement("table");
const headerRow = document.createElement("tr");

const headerFirstName = document.createElement("th");
headerFirstName.textContent = "First Name";
const headerLocation = document.createElement("th");
headerLocation.textContent = "Location";

headerRow.appendChild(headerFirstName);
headerRow.appendChild(headerLocation);
table.appendChild(headerRow);

// 5. Ajout des lignes pour chaque étudiant
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// 6. Insertion du tableau dans le body
document.body.appendChild(table);
