document.addEventListener("DOMContentLoaded", () => {
  const btnAddEvent = document.getElementById('btnAddEvent');

  btnAddEvent.addEventListener('click', () => { 
    submitFormToCreate();
  });

  getEventsTable();
});

function submitFormToCreate() {
  let inpEventId = document.getElementById('eventId');
  let id = inpEventId.value;

  let inpEventName = document.getElementById('eventName');
  let name = inpEventName.value;

  let inpEventDate = document.getElementById('eventDate');
  let date = inpEventDate.value;

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
  
  let eventInfo = document.getElementById('eventInfo');
  let info = eventInfo.value;

  let event = new Event(id, name, date, format, info);

  console.log(event); //TEST
  database.addEvent(event);
}

function getEventsTable () {
  let divDeleteEvent = document.getElementById('divDeleteEvent');
  let tableEventToDelete = document.createElement('table');
  tableEventToDelete.id = 'tableEventToDelete';
  divDeleteEvent.appendChild(tableEventToDelete);
  
  let trTableETD = document.createElement('tr');
  trTableETD.id = 'trTableETD';
  tableEventToDelete.appendChild(trTableETD);
  
  let numThTableETD = document.createElement('th');
  numThTableETD.id = 'numThTableETD';
  trTableETD.appendChild(numThTableETD);

  let idThTableETD = document.createElement('th');
  idThTableETD.id = 'idThTableETD';
  trTableETD.appendChild(idThTableETD);

  let dateThTableETD = document.createElement('th');
  dateThTableETD.id = 'dateThTableETD';
  trTableETD.appendChild(dateThTableETD);

  let nameThTableETD = document.createElement('th');
  nameThTableETD.id = 'nameThTableETD';
  trTableETD.appendChild(nameThTableETD);

}