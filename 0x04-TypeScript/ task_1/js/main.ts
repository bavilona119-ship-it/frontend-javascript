// task_1/js/main.ts

// Teacher interface (Task 1)
interface Teacher {
  readonly firstName: string;      // only set at initialization
  readonly lastName: string;       // only set at initialization
  fullTimeEmployee: boolean;       // mandatory
  yearsOfExperience?: number;      // optional
  location: string;                // mandatory
  [key: string]: any;              // allow any other attributes (e.g., contract)
}

// Example teacher required by Task 1
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false,
};

console.log(teacher3);

// Directors interface extending Teacher (Task 2)
interface Directors extends Teacher {
  numberOfReports: number;         // mandatory
}

// Example director required by Task 2
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
