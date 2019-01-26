
console.log("Connected")

function updateSamps() {

    // Grab parameters from the form. This function only runs when clicking the button on the form. 
    nSamples = document.getElementById("nSamples").value;
    start    = document.getElementById("start").value;
    end      = document.getElementById("end").value;
    
    // Prevent input from being incorrect. 
    nSamples = Number(nSamples)
    if(nSamples > 1) {
        nSamples = 1;
    } else if(nSamples < .01) {
        nSamples = .01;
    };

    // Create new link to update HTML.
    var ggTail = "http://www.drenr.com:8000/get_flights_plot?n=" + String(nSamples);
    // Add start date
    ggTail = ggTail + "&from=" + start;
    // Add end date
    ggTail = ggTail + "&to=" + end;
    // Update image. 
    document.getElementById("ggplot").src=ggTail;
}

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }



  // Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'http://drenr.com:8000/get_flights', true);

request.onload = function () {
  // Begin accessing JSON data here
  // Begin accessing JSON data here
        var data = JSON.parse(this.response);

        console.log(data);
  }


// Send request
request.send();

