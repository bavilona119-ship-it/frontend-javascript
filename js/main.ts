// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith", 
  age: 22,
  location: "San Francisco"
};

// Create array containing the students
const studentsList: Array<Student> = [student1, student2];

// Create and render the table using Vanilla JavaScript
const body: HTMLElement = document.body;
const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const tbody: HTMLTableSectionElement = document.createElement('tbody');

// Create table header
const headerRow: HTMLTableRowElement = document.createElement('tr');
const firstNameHeader: HTMLTableHeaderCellElement = document.createElement('th');
const locationHeader: HTMLTableHeaderCellElement = document.createElement('th');

firstNameHeader.textContent = 'First Name';
locationHeader.textContent = 'Location';

headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
thead.appendChild(headerRow);

// Add rows for each student
studentsList.forEach((student: Student): void => {
  const row: HTMLTableRowElement = document.createElement('tr');
  const firstNameCell: HTMLTableDataCellElement = document.createElement('td');
  const locationCell: HTMLTableDataCellElement = document.createElement('td');
  
  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
  
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

// Assemble and append the table
table.appendChild(thead);
table.appendChild(tbody);
body.appendChild(table);
