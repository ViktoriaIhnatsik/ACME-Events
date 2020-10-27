document.addEventListener("DOMContentLoaded", () => {
  const database = new Database();

  const btnFilters = document.getElementById('btnFilters');
  const lblAllEvents = document.getElementById('lblAllEvents');
  const lblUpcomEvents = document.getElementById('lblUpcomEvents');

  const lblOctober = document.getElementById('lblOctober');
  const lblNovember = document.getElementById('lblNovember');
  const lblDecember = document.getElementById('lblDecember');

  const lblConference = document.getElementById('lblConference');
  const lblClass = document.getElementById('lblClass');
  const lblNetworking = document.getElementById('lblNetworking');

  getEventsTable(database);

});

function getEventsTable(database) {

  let events = database.readDataFromStorage();

  let divEventsList = document.getElementById('divEventsList');
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