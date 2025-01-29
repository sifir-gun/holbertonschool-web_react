// 1. Définition des interfaces DirectorInterface et TeacherInterface

export interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}
  
export interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}
  
// 2. Implémentation des classes Director et Teacher
  
export class Director implements DirectorInterface {
	workFromHome(): string {
	  return "Working from home";
	}
  
	getCoffeeBreak(): string {
	  return "Getting a coffee break";
	}
  
	workDirectorTasks(): string {
	  return "Getting to director tasks";
	}
}
  
export class Teacher implements TeacherInterface {
	workFromHome(): string {
	  return "Cannot work from home";
	}
  
	getCoffeeBreak(): string {
	  return "Cannot have a break";
	}
  
	workTeacherTasks(): string {
	  return "Getting to work";
	}
}
  
// 3. Fonction createEmployee
  
export function createEmployee(salary: number | string): Director | Teacher {
	if (typeof salary === "number" && salary < 500) {
	  return new Teacher();
	}
	return new Director();
}
  
// Exemples d'utilisation
console.log(createEmployee(200));  // Teacher
console.log(createEmployee(1000)); // Director
console.log(createEmployee("$500")); // Director

// 4. Fonction isDirector (Type Predicate)

export function isDirector(employee: Director | Teacher): employee is Director {
	return employee instanceof Director;
}
  
// 5. Fonction executeWork
  
export function executeWork(employee: Director | Teacher): string {
	if (isDirector(employee)) {
	  return employee.workDirectorTasks();
	} else {
	  return employee.workTeacherTasks();
	}
}
  
// Exemples d'utilisation
console.log(executeWork(createEmployee(200)));  // "Getting to work"
console.log(executeWork(createEmployee(1000))); // "Getting to director tasks"

// 6. String Literal Type Subjects et fonction teachClass

export type Subjects = "Math" | "History";

export function teachClass(todayClass: Subjects): string {
	return todayClass === "Math" ? "Teaching Math" : "Teaching History";
}
  
// Exemples d'utilisation
console.log(teachClass("Math"));    // "Teaching Math"
console.log(teachClass("History")); // "Teaching History"
