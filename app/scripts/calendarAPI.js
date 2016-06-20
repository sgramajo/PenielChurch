var CLIENT_ID = '760245657777-u7e9c2eggp059rolf81040o5h6lf7pit.apps.googleusercontent.com';
var SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];
var  CALENDARID = "potsh8cvmjmjl0tcbqcahpuorc@group.calendar.google.com";
var APIKEY = "";
function checkAuth() {
 gapi.auth.authorize(
   {
     'client_id': CLIENT_ID,
     'scope': SCOPES.join(' '),
     'immediate': true
   }, handleAuthResult);
}

/* function for handling authorozation of server */

function handleAuthResult(authResult) {
 var authorizeDiv = document.getElementById('authorize-div');
 if (authResult && !authResult.error) {
   // Hide auth UI, then load client library.
   authorizeDiv.style.display = 'none';
   loadCalendarApi();
 } else {
   // Show auth UI, allowing the user to initiate authorization by
   // clicking authorize button.
   authorizeDiv.style.display = 'inline';
 }
}

 /*the response function to user click */

function handleAuthClick(event) {
 gapi.auth.authorize({
   client_id: CLIENT_ID,
   scope: SCOPES,
   immediate: false
 },handleAuthResult);
 return false;
}

  /*loading client library */

function loadCalendarApi() {
 gapi.client.load('calendar', 'v3', listUpcomingEvents);
}

    /*print out the results of users calendar response*/

function listUpcomingEvents() {
 var request = gapi.client.calendar.events.list({
   'calendarId': 'potsh8cvmjmjl0tcbqcahpuorc@group.calendar.google.com',
   'timeMin': (new Date()).toISOString(),
   'showDeleted': false,
   'singleEvents': true,
   'maxResults': 20,
   'orderBy': 'startTime'
 });

 request.execute(function(resp) {
   var events = resp.items;
   appendPre('The up comming events in your calendar are:'+ '\n'+'\n');

   if (events.length > 0) {
     for (var i = 0; i < events.length; i++) {

       var event = events[i];
       var when = event.start.dateTime;

       if (!when) {
         when = event.start.date;
       }
       appendPre(event.summary + ' ('+' '+ when +' '+ ')' + '\n');
     }
   } else {
     appendPre('No upcoming events found.');
   }

 });
}

   /* this will return the out put to body as its next node */

function appendPre(message) {
  var pre = document.getElementById('output');
  var textContent = document.createTextNode(message + '\n');
  pre.appendChild(textContent);
}
