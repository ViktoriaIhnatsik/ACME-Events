class Database {

  readDataFromStorage() {
    const stringData = window.localStorage.getItem('Events');
    if (!stringData) {
      return [];
    }
    const data = JSON.parse(stringData);
    return data;
  }

  saveDataToStorage(data) {
    const stringData = JSON.stringify(data);
    return window.localStorage.setItem('Events', stringData);
  }

  removeEvent(id) {
    const events = this.readDataFromStorage(); 
    let newEvents = events.filter((event) => (event.id !== id));
    this.saveDataToStorage(newEvents);           
  }

  addEvent(event) {
    const events = this.readDataFromStorage();
    events.push(event);                  
    this.saveDataToStorage(events);           
  }
}



/* // Get the modal
var modal = document.getElementById("openModal");

// Get the button that opens the modal
var deleteEventBtn = document.getElementById("deleteEventBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
deleteEventBtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} */