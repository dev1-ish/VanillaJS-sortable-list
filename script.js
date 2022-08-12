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
}