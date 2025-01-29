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
  
  // Create a table and set basic styles
  const table = document.createElement('table');
  table.style.width = '50%';
  table.style.borderCollapse = 'collapse';
  table.style.margin = '20px auto';
  table.style.border = '1px solid black';
  
  // Create the table header
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  
  const thFirstName = document.createElement('th');
  thFirstName.innerText = 'First Name';
  thFirstName.style.border = '1px solid black';
  thFirstName.style.padding = '10px';
  
  const thLocation = document.createElement('th');
  thLocation.innerText = 'Location';
  thLocation.style.border = '1px solid black';
  thLocation.style.padding = '10px';
  
  headerRow.appendChild(thFirstName);
  headerRow.appendChild(thLocation);
  thead.appendChild(headerRow);
  table.appendChild(thead);
  
  // Create the table body
  const tbody = document.createElement('tbody');
  
  studentsList.forEach((student) => {
	const row = document.createElement('tr');
  
	const firstNameCell = document.createElement('td');
	firstNameCell.innerText = student.firstName;
	firstNameCell.style.border = '1px solid black';
	firstNameCell.style.padding = '10px';
  
	const locationCell = document.createElement('td');
	locationCell.innerText = student.location;
	locationCell.style.border = '1px solid black';
	locationCell.style.padding = '10px';
  
	row.appendChild(firstNameCell);
	row.appendChild(locationCell);
	tbody.appendChild(row);
  });
  
  table.appendChild(tbody);
  document.body.appendChild(table);
  