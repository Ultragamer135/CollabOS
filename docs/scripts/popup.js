    // get the popup
    var popup = document.getElementById("popup");
            
    // get the button that opens the popup
    var btn = document.getElementById("openPopup");
    
    // get the button that closed the popup
    var span = document.getElementsByClassName("close")[0];
    
    // open the popup when the user clicks the button
    btn.onclick = function() {
      popup.style.display = "block";
    }
    
    // when user clicks on close button, close the popup
    span.onclick = function() {
      popup.style.display = "none";
    }
    
    // when the user clicks somewhere other than the popup, the popup gets sad and leaves
    window.onclick = function(event) {
      if (event.target == popup) {
        popup.style.display = "none";
      }
    }