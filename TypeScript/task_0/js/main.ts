interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}
  
const student1: Student = {
	firstName: 'John',
	lastName: 'Doe',
	age: 20,
	location: 'New York',
};
  
const student2: Student = {
	firstName: 'Jane',
	lastName: 'Smith',
	age: 25,
	location: 'San Francisco',
};
  
const studentsList: Student[] = [student1, student2];
  
// Create a table
const table = document.createElement('table');
document.body.appendChild(table);
  
// Populate the table with rows for each student (firstName, location)
studentsList.forEach((student) => {
	const row = table.insertRow();
	const firstNameCell = row.insertCell();
	const locationCell = row.insertCell();
  
	firstNameCell.innerHTML = student.firstName;
	locationCell.innerHTML = student.location;
});
