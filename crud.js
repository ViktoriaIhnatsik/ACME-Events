document.addEventListener("DOMContentLoaded", () => {
  const database = new Database();
  const btnAddEvent = document.getElementById('btnAddEvent');

  btnAddEvent.addEventListener('click', () => {
    submitFormToCreate(database);
  });

  showEventsTable(database);
});

function submitFormToCreate(database) {
  let inpEventId = document.getElementById('eventId');
  let id = inpEventId.value;
  inpEventId.value = '';

  let inpEventName = document.getElementById('eventName');
  let name = inpEventName.value;
  inpEventName.value = '';

  let inpEventDate = document.getElementById('eventDate');
  let date = inpEventDate.value;
  inpEventDate.value = '';

  let eventConference = document.getElementById('eventConference');
  let eventClass = document.getElementById('eventClass');

  let format;
  if (eventConference.checked) {
    format = 'conference';
  } else if (eventClass.checked) {
    format = 'class';
  } else {
    format = 'networking';
  }

  let eventSynops = document.getElementById('eventSynops');
  let synopsis = eventSynops.value;
  //eventSynops.value = '';
  synopsis = ''; 

  let eventInfo = document.getElementById('eventInfo');
  let info = eventInfo.value;
  eventInfo.value = '';

  let event = new Event(id, name, date, format, sinopsis, info, "");

  console.log(event); //TEST
  database.addEvent(event);
  showEventsTable(database);
}

function showEventsTable(database) {

  let events = database.readDataFromStorage();

  let tableContainer = document.getElementById('tableContainer');
  tableContainer.innerHTML = '';

  let tableEventToDelete = document.createElement('table');
  tableEventToDelete.id = 'tableEventToDelete';
  tableContainer.appendChild(tableEventToDelete);

  let tr1TableETD = document.createElement('tr');
  tr1TableETD.id = 'tr1TableETD';
  tableEventToDelete.appendChild(tr1TableETD);

  let numThTableETD = document.createElement('th');
  numThTableETD.id = 'numThTableETD';
  tr1TableETD.appendChild(numThTableETD);

  let idThTableETD = document.createElement('th');
  idThTableETD.id = 'idThTableETD';
  idThTableETD.innerHTML = 'Id';
  tr1TableETD.appendChild(idThTableETD);

  let dateThTableETD = document.createElement('th');
  dateThTableETD.id = 'dateThTableETD';
  dateThTableETD.innerHTML = 'Date';
  tr1TableETD.appendChild(dateThTableETD);

  let nameThTableETD = document.createElement('th');
  nameThTableETD.id = 'nameThTableETD';
  nameThTableETD.innerHTML = 'Name';
  tr1TableETD.appendChild(nameThTableETD);


  events.forEach((item) => {              //  skapa en rad för varje event från Events array
    let trTableETD = document.createElement('tr');
    trTableETD.id = 'trTableETD' + item.id;
    tableEventToDelete.appendChild(trTableETD);

    let numTdTableETD = document.createElement('td'); // if we want count events TODO - !
    numTdTableETD.id = 'numThTableETD' + item.id;
    trTableETD.appendChild(numTdTableETD);

    let idTdTableETD = document.createElement('td');
    idTdTableETD.id = 'idThTableETD' + item.id;
    idTdTableETD.innerHTML = item.id;
    trTableETD.appendChild(idTdTableETD);

    let dateTdTableETD = document.createElement('td');
    dateTdTableETD.id = 'dateThTableETD' + item.id;
    dateTdTableETD.innerHTML = item.date;
    trTableETD.appendChild(dateTdTableETD);

    let nameTdTableETD = document.createElement('td');
    nameTdTableETD.id = 'nameThTableETD' + item.id;
    nameTdTableETD.innerHTML = item.name;
    trTableETD.appendChild(nameTdTableETD);
    
    //buttons "delete"!
    let btnDeleteEvent = document.createElement('button');
    btnDeleteEvent.id = 'btnDeleteEvent' + item.id;
    btnDeleteEvent.innerHTML = 'Delete';
    trTableETD.appendChild(btnDeleteEvent);
    btnDeleteEvent.addEventListener('click', () => {
      database.removeEvent(item.id);
      tableEventToDelete.removeChild(trTableETD);
    })
  }); 

}