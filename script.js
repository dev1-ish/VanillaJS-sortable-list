const draggable_list = document.getElementById('draggable-list')
const check = document.getElementById('check');

const mostPowerfulWizards = [
    'Harry Potter',
    'Lord Voldemort',
    'Albus Dumbledore',
    'Severus Snape',
    'Sirius Black',
    'Minerva McGonagall',
    'Hermione Granger',
    'Alastor Moody',
    'Remus Lupin',
    'Bellatrix Lestrange'
];

// Store listitems
const listItems = [];

let dragStartIndex;

createList();

// Insert list items into DOM
function createList() {
    [...mostPowerfulWizards]
        .map(a => ({ value: a, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value)
        .forEach((wizard, index) => {
            const listItem = document.createElement('li');

            // listItem.classList.add('right');

            listItem.setAttribute('data-index', index);

            listItem.innerHTML = `
            <span class="number">${index + 1}</span>
            <div class="draggable" draggable="true">
                <p class="wizard-name">${wizard}</p>
                <i class="fas fa-grip-lines"></i>
            </div>
            `;

            listItems.push(listItem);

            draggable_list.appendChild(listItem);
     })

    addEventListeners();
}

function dragStart() {
    // console.log('Event: ', 'dragstart');
}

function dragEnter() {
    // console.log('Event: ', 'dragenter');
}
function dragLeave() {
    // console.log('Event: ', 'dragleave');
}
function dragOver() {
    // console.log('Event: ', 'dragover');
}
function dragDrop() {
    // console.log('Event: ', 'drop');
}

function addEventListeners() {
    const draggables = document.querySelectorAll('.draggable');
    const dragListItems = document.querySelectorAll('.draggable-list li');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart);
    })
    dragListItems.forEach(item => {
        item.addEventListener('dragover', dragOver);
        item.addEventListener('drop', dragDrop);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('dragleave', dragLeave);
    })
}