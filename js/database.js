class Database {

  readDataFromStorage() {
    const stringData = window.localStorage.getItem('Events');
    if (!stringData) {
      return [];
    } // else
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

