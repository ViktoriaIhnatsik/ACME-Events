class Event {
  constructor() {
    this.eventName = null;
    this.eventDate = null;
    this.eventFormat = null;
    this.eventPicture = null;
    this.eventInfo = null;
    this.eventId = null; //string ?
  }
}




/*

MENU:

Main
All events
About us
Log in


Database (the one in localStorage):
[
  Event,
  Event,
  ...
]

Event:
{
  title: string
  startDate: Date()
  endDate: Date()
  format: "class" | "networking" | "conference"
  description: string
  photos: [
    string, // base64-encoded binary image data
    string,
    ...
  ]
  manager: string // name of the event manager
  participants: [
    string, // name of a participant
    string,
    ...
  ]
}



CRUD page:

1. Table
  - - - - - - - [button Delete]
  - - - - - - - [button Delete]
  ...

2. Form ot create a new record
  [titlle]
  [description]
  etc.
  [Button "Create"]



Events page:e

  [filter 1] [filter 2]

  - - - - - 
  - - - - -
  - - - - -

Filters:

  1. Dropdown with list of month+year ("November 2020", "January 2021"). 
    1.1. Bonus: the dropdown only shows the months that exist in the database.
  2. Dropdown with formats: always three items in there.
    2.1. Bonus: the dropdown only shows existing formats.



metod filter 
metod Add (->User)
metod Delete (->User)

*/