// 1. Définition de l’interface Teacher
interface Teacher {
  readonly firstName: string;     // ne peut pas être modifié après initialisation
  readonly lastName: string;      // idem
  fullTimeEmployee: boolean;      // toujours défini
  yearsOfExperience?: number;     // optionnel
  location: string;               // toujours défini
  [key: string]: any;             // permet d’ajouter d’autres attributs (ex: contract)
}

// 2. Exemple fourni dans l’énoncé
const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,
};

console.log(teacher3);
