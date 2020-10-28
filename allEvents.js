document.addEventListener("DOMContentLoaded", () => {
  const database = new Database();
  displayEvents(database);

  const btnSort = document.getElementById('btnSort');
  const btnFilters = document.getElementById('btnFilters');

  let filterDate = document.getElementById('filterDate');
  let fromDate = document.getElementById('fromDate');
  let toDate = document.getElementById('toDate');

  filterDate.addEventListener('change', e => {
    /*
    if(e.target.checked){
      fromDate.disabled = false;
      toDate.disabled = false;
    } else {
      fromDate.disabled = true;
      toDate.disabled = true;
    }
    */
    fromDate.disabled = !e.target.checked;
    toDate.disabled = !e.target.checked;

  });


  btnSort.addEventListener('click', () => {
    updateSorting ();
    
    displayEvents(database);
  });

  btnFilters.addEventListener('click', () => {
    updateFilters ();
    displayEvents(database);
  });
});

let sorting;
let filters;

function displayEvents(database) {
 
  let events = database.readDataFromStorage();

  let divEventsList = document.getElementById('divEventsList');
  divEventsList.innerHTML = '';

  let tableEventsList = document.createElement('table');
  tableEventsList.id = 'tableEventsList';
  divEventsList.appendChild(tableEventsList);

  let tr1TableEventsL = document.createElement('tr');
  tr1TableEventsL.id = 'tr1TableEventsL';
  tableEventsList.appendChild(tr1TableEventsL);

  let dateThTableEventsL = document.createElement('th');
  dateThTableEventsL.id = 'dateTableEventsL';
  dateThTableEventsL.innerHTML = 'Date';
  tr1TableEventsL.appendChild(dateThTableEventsL);

  let formatThTableEventsL = document.createElement('th');
  formatThTableEventsL.id = 'formatThTableEventsL';
  formatThTableEventsL.innerHTML = 'Format';
  tr1TableEventsL.appendChild(formatThTableEventsL);

  let nameThTableEventsL = document.createElement('th');
  nameThTableEventsL.id = 'nameThTableEventsL';
  nameThTableEventsL.innerHTML = 'Name';
  tr1TableEventsL.appendChild(nameThTableEventsL);


  events.forEach((item) => {              //  skapa en rad för varje event från Events array
    let trTableEventsL = document.createElement('tr');
    trTableEventsL.id = 'trTableEventsL' + item.id;
    tableEventsList.appendChild(trTableEventsL);

    let dateTrTableEventsL = document.createElement('td');
    dateTrTableEventsL.id = 'dateTrTableEventsL' + item.id;
    dateTrTableEventsL.innerHTML = item.date;
    trTableEventsL.appendChild(dateTrTableEventsL);

    let formatTrTableEventsL = document.createElement('td');
    formatTrTableEventsL.id = 'formatThTableEventsL' + item.id;
    formatTrTableEventsL.innerHTML = item.format;
    trTableEventsL.appendChild(formatTrTableEventsL);

    let nameTrTableEventsL = document.createElement('td');
    nameTrTableEventsL.id = 'nameTrTableEventsL' + item.id;
    nameTrTableEventsL.innerHTML = item.name;
    trTableEventsL.appendChild(nameTrTableEventsL);
  });
}

function updateSorting() {
  let name = document.getElementById('byNames');
  if (name.checked) {
    sorting = 'byName';
  } else {
    sorting = 'byDate';
  }
  console.log(sorting); //TEST
}

function updateFilters() {
  let filterDate = document.getElementById('filterDate');
  let fromDate = document.getElementById('fromDate');
  let toDate = document.getElementById('toDate');

  let filterFormat = document.getElementById('filterFormat');
  let filterConference = document.getElementById('filterConference');
  let filterClass = document.getElementById('filterClass');
  let filterNetworking = document.getElementById('filterNetworking');

  filters = {
    date: {
      enabled: filterDate.checked,
      from: fromDate.value,
      to: toDate.value
    },
    format: {
      enabled: filterFormat.checked,
      filterConference: filterConference.checked,
      filterClass: filterClass.checked,
      filterNetworking: filterNetworking.checked,
    }
  }
  console.log(filters); //TEST
}