const popularEvents = [
    new Event(1, "event 1", "November 19, 2020", "class", "images/confHacaton .png", "The world’s largest API Integration hackathon. API World is produced and owned by DevNetwork, the worlds developer event community and producer of leading conferences for the developer, engineering & IT industries. By registering for this event, you are opting into DevNetwork email updates and one-time email-based promotions from top-level API World 2020 sponsors including exclusive invitations to API World 2020 parties and partner events. These updates will notify you about API World 2020 news, as well as announcements about DevNetwork events and services. You can opt out of DevNetwork email updates at any time."),
    new Event(2, "event 2", "November 20, 2020", "class", "images/conDevConf.jpeg", "About this Event. DeveloperWeek Global is produced and owned by DevNetwork, the world's developer event community and producer of leading conferences for the developer, engineering & IT industries. DeveloperWeek Global is produced and owned by DevNetwork, the world's developer event community and producer of leading conferences for the developer, engineering & IT industries. By registering for this event, you are opting into DevNetwork email updates and one-time email-based promotions from top-level DeveloperWeek Global 2020 sponsors including exclusive invitations to DeveloperWeek Global 2020 parties and partner events. These updates will notify you about DeveloperWeek Global 2020 news, as well as announcements about DevNetwork events and services."),
    new Event(3, "event 3", "November 21, 2020", "class", "images/confAIDevWorld.jpeg", "About this Event. DeveloperWeek Global is produced and owned by DevNetwork, the world's developer event community and producer of leading conferences for the developer, engineering & IT industries. DeveloperWeek Global is produced and owned by DevNetwork, the world's developer event community and producer of leading conferences for the developer, engineering & IT industries. By registering for this event, you are opting into DevNetwork email updates and one-time email-based promotions from top-level DeveloperWeek Global 2020 sponsors including exclusive invitations to DeveloperWeek Global 2020 parties and partner events. These updates will notify you about DeveloperWeek Global 2020 news, as well as announcements about DevNetwork events and services."),
    new Event(4, "event 4", "November 22, 2020", "class", "images/classIntrToHack.jpeg", "About this Event. DeveloperWeek Global is produced and owned by DevNetwork, the world's developer event community and producer of leading conferences for the developer, engineering & IT industries. DeveloperWeek Global is produced and owned by DevNetwork, the world's developer event community and producer of leading conferences for the developer, engineering & IT industries. By registering for this event, you are opting into DevNetwork email updates and one-time email-based promotions from top-level DeveloperWeek Global 2020 sponsors including exclusive invitations to DeveloperWeek Global 2020 parties and partner events. These updates will notify you about DeveloperWeek Global 2020 news, as well as announcements about DevNetwork events and services.")
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
      const database = new Database();
      let events = database.readDataFromStorage();
      if (events.length == 0) {
        database.saveDataToStorage(popularEvents);
        events = popularEvents;
      }
      
      let eventsContainer = document.getElementById('mainContent');
      eventsContainer.innerHTML = '';
      // for each event from localStorage
      events.forEach((item) => {
      eventDiv = document.createElement('div');
      eventDiv.setAttribute('class', 'photo');
      eventDiv.setAttribute('id', 'Conf1');
      eventsContainer.appendChild(eventDiv);
  
      let img = document.createElement('img');
      img.setAttribute('class', 'photo');
      img.setAttribute('src', item.img);
      eventDiv.appendChild(img);
    });
  });
  