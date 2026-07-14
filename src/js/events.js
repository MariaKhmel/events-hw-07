// const refs = {
//     cordsOutput: document.querySelector('.js-cords'),
//     input:document.querySelector('.js-input'),
//     inputOtput: document.querySelector('.js-output')
// }


// let inputCounter = 0;
// window.addEventListener('mousemove', onMouseMove);
// window.addEventListener('input', onInputChange);

// function onMouseMove(e) {
//     refs.cordsOutput.textContent = `Client X: ${e.clientX}, Client Y:${e.clientY} `
// }

// function onInputChange(e) {
//     inputCounter += 1;
//     refs.inputOtput.textContent = 'Input value: ' + refs.input.value + '.' + 'InputCounter: ' + inputCounter + '.';

// }

const tech = [
  { label: 'HTML' },
  { label: 'CSS' },
  { label: 'JavaScript' },
  { label: 'Node.js' },
  { label: 'React' },
  { label: 'Vue' },
  { label: 'Next.js' },
  { label: 'Mobx' },
  { label: 'Redux' },
  { label: 'React Router' },
  { label: 'GraphQl' },
  { label: 'PostgreSQL' },
  { label: 'MongoDB' },
];

const refs = {
    filter: document.querySelector('#filter'),
    list:document.querySelector('.js-list')
}

const labels = tech.map(el => el.label);

refs.filter.addEventListener('input', () => onFilterChange(labels));

refs.list.innerHTML = createListMarkUp(labels);


function createListMarkUp(labels) {
    if ( labels.length === 0) {
        return ['<li>Nothing found</li>'];
    }
   const list = labels.map(el => `<li>${el}</li>`);
    return list.join('');
}

function onFilterChange(labels) {
    const loweredCaseFilter = refs.filter.value.trim().toLowerCase();
    
    const filteredList = labels.filter(
        function (el) {
        return el.toLowerCase().includes(loweredCaseFilter);   
        })
        
    refs.list.innerHTML = createListMarkUp(filteredList);
}
