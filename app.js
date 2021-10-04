const list_items = [
	"Bala Yogesh",
	"Bharath Kumar",
	"Abilash",
	"Kavithasan",
	"Logeswaran",
	"Mani Bharahthi",
	"Deepan",
	"Jaisanjay",
	"Jaga",
	"Jawahar",
	"Abishek",
	"Matheswar",
	"Meenu",
	"Harish",
	"Kumar",
	"Mani",
	"Meganathan",
	"Karthick",
	"Abinesh",
	"Elango",
	"Jillu",
	"GK vasan",
    "Ashok",
    "Bunitham"
];

const list_element = document.getElementById('list');
const pagination_element = document.getElementById('pagination');

let current_page = 1;
let rows = 6;

function DisplayList (items, wrapper, rows_per_page, page) {
	wrapper.innerHTML = "";
	page--;

	let start = rows_per_page * page;
	let end = start + rows_per_page;
	let paginatedItems = items.slice(start, end);

	for (let i = 0; i < paginatedItems.length; i++) {
		let item = paginatedItems[i];

		let item_element = document.createElement('div');
		item_element.classList.add('item');
		item_element.innerText = item;
		
		wrapper.appendChild(item_element);
	}
}

function SetupPagination (items, wrapper, rows_per_page) {
	wrapper.innerHTML = "";

	let page_count = Math.ceil(items.length / rows_per_page);
	for (let index = 1; index < page_count + 1; index++) {
		let btn = PaginationButton(index, items);
		wrapper.appendChild(btn);
	}
}

function PaginationButton (page, items) {
	let button = document.createElement('button');
	button.innerText = page;

	if (current_page == page) button.classList.add('active');

	button.addEventListener('click', function () {
		current_page = page;
		DisplayList(items, list_element, rows, current_page);

		let current_btn = document.querySelector('.pagenumbers button.active');
		current_btn.classList.remove('active');

		button.classList.add('active');
	});

	return button;
}

DisplayList(list_items, list_element, rows, current_page);
SetupPagination(list_items, pagination_element, rows);
