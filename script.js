const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))

function openCity(evt, cityName) {
    // Declare all variables
    let i, tabcontent, tablinks;
  
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
  
  
  };
  
  document.getElementById("defaultOpen").click();

  function navporfolio(evt, seccionportfolio) {
    // Declare all variables
    let icont, tabcontent2, portafoliolink;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent2 = document.getElementsByClassName("tabcontent2");
    for (icont = 0; icont < tabcontent2.length; icont++) {
      tabcontent2[icont].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    portafoliolink = document.getElementsByClassName("portafoliolink");
    for (icont = 0; icont < portafoliolink.length; icont++) {
      portafoliolink[icont].className = portafoliolink[icont].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(seccionportfolio).style.display = "block";
    evt.currentTarget.className += " active";

    
  
  
  };

  

  
  
  document.getElementById("portfoliodefaultOpen").click();