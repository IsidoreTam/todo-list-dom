/*
  Add the required JavaScript to handle form submit and add a new todo item to 
  the page (in the div.todo-list element).  You will need to use a counter to 
  uniquely identify each todo item and use only DOM API functions to interact
  with the document (i.e. create each todo item), DO NOT use innerHTML for this
  exercise.
*/

// required vars
var todos = document.querySelector('.todo-list');
var todoCount = 0;

// todo form submit handler, adds a new todo item to the 'list'
document.querySelector('.todo-frm').addEventListener('submit', function (evt) {

	var div,
		checkbox,
		label,
		labelText,
		todoText,
		up,
		dn;

	todoText = evt.target.elements['todo-item'].value;

	// adding a todo regardless, so might as well increment now...
	todoCount += 1;
	
	if (todoText === '') {
		todoText = 'Todo ' + (todoCount);
	}

	// create required elements
	div = document.createElement('div');
	checkbox = document.createElement('input');
	label = document.createElement('label');
	labelText = document.createTextNode(todoText);
	up = document.createElement('span');
	dn = document.createElement('span');

	// set appropriate attributes
	checkbox.setAttribute('type', 'checkbox');
	checkbox.setAttribute('id', 'todo-' + todoCount);
	label.setAttribute('for', 'todo-' + todoCount);
	label.setAttribute('contenteditable', '');
	up.setAttribute('class', 'arrow up');
	dn.setAttribute('class', 'arrow dn');

	// build document fragment
	label.appendChild(labelText);
	div.appendChild(checkbox);
	div.appendChild(label);
	up.append('\u21e7');
	dn.append('\u21e9');
	div.appendChild(up);
	div.appendChild(dn);

	// add the document fragment to the document for rendering
	todos.appendChild(div);

	// clear the form
	evt.target.reset();

	evt.preventDefault();
});

document.querySelector('.todo-list').addEventListener('click', function (evt) {
	// check for click on an arrow
	let targetTodo = evt.target.parentNode;
	let todoList = targetTodo.parentNode;
	let siblingTodo;

	if (evt.target.classList.contains('arrow')) {

		// identify the type of arrow (i.e. down or up)
		if (evt.target.classList.contains('up')) {
			siblingTodo = targetTodo.previousElementSibling;
			// insert the sibling before the target
			todoList.insertBefore(targetTodo, siblingTodo);
		} else if (evt.target.classList.contains('dn')) {
			siblingTodo = targetTodo.nextElementSibling;
			// insert the sibling before the target
			todoList.insertBefore(siblingTodo, targetTodo);
		}

	}
   });