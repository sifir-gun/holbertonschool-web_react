// 1. Définition de l'interface Teacher
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [propName: string]: any; // Permet d'ajouter des propriétés supplémentaires
}

// Exemple d'utilisation de l'interface Teacher
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false, // Propriété additionnelle
};
console.log(teacher3);

// 2. Définition de l'interface Directors qui étend Teacher
export interface Directors extends Teacher {
  numberOfReports: number; // Attribut obligatoire
}

// Exemple d'utilisation de Directors
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17, // Obligatoire pour Directors
};
console.log(director1);

// 3. Définition de l'interface printTeacherFunction et implémentation de la fonction printTeacher
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implémentation de printTeacher
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Exemple d'utilisation
console.log(printTeacher("John", "Doe")); // Doit afficher "J. Doe"

// 4. Définition des interfaces pour StudentClass
export interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

export interface StudentClassInterface {
  displayName(): string;
  workOnHomework(): string;
}

// Implémentation de la classe StudentClass
export class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Exemple d'utilisation
const student = new StudentClass("John", "Doe");
console.log(student.workOnHomework()); // "Currently working"
console.log(student.displayName());    // "John"
