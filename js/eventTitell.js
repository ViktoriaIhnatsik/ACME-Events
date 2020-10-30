document.addEventListener("DOMContentLoaded", () => {
    let params = new URLSearchParams(document.location.search.substring(1));
    let eventId = params.get("id");
    console.log(eventId);
    const database = new Database();
    let events = database.readDataFromStorage();
    let event = events.find(e => e.id == eventId);
    if (event) {
        let eventContent = document.getElementById("eventContent");
        let photoDiv = document.createElement("div");
        photoDiv.setAttribute("class", "bigPhoto");
        photoDiv.setAttribute("data-title", event.name);
        photoDiv.setAttribute("id", "p1");
        let img = document.createElement('img');
        img.setAttribute('class', 'photo');
        img.setAttribute('src', event.img);
        photoDiv.appendChild(img);
        eventContent.appendChild(photoDiv);

        let eventFormatDiv = document.createElement("div");
        eventFormatDiv.setAttribute("class", "eventFormat");
        eventFormatDiv.innerText = event.format;
        eventContent.appendChild(eventFormatDiv);

        let eventNameDiv = document.createElement("div");
        eventNameDiv.setAttribute("class", "eventName");
        eventNameDiv.setAttribute("id", "text1");
        eventNameDiv.innerText = event.name;
        eventContent.appendChild(eventNameDiv);

        let eventDateDiv = document.createElement("div");
        eventDateDiv.setAttribute("class", "eventDate");
        eventDateDiv.setAttribute("id", "date1");
        eventDateDiv.innerText = event.date;
        eventContent.appendChild(eventDateDiv);

        let eventInfoDiv = document.createElement("div");
        eventInfoDiv.setAttribute("class", "eventInfo");
        eventInfoDiv.setAttribute("id", "info1");
        eventInfoDiv.innerHTML = event.info;
        eventContent.appendChild(eventInfoDiv);

        let registerButton = document.createElement("button");
        registerButton.setAttribute("id", "btnRegist");
        registerButton.innerText = "Register event";
        registerButton.addEventListener("click", (e) => {
            console.log("register event button clicked")
        });
        eventContent.appendChild(registerButton);        
    }
});