window.onscroll = function() {myFunction()};
  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }
$(document).ready(function(){
    $(".owl-wrapper").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:  false,
        autoplaySpeed: 2000, 
        arrows: false,
        dots:true,
        infinite:true,
        responsive: [
            {
                breakpoint: 739,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll:1,
                    autoplay: true,
                    dots:true,
                    infinite:true,
                    autoplaySpeed:2000,
                }
            },
        ]
    });
  });
  function openpage(evt, royalty) {
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
    document.getElementById(royalty).style.display = "block";
    evt.currentTarget.className += " active";
  }
  document.getElementById("defaultOpen").click();
  window.onscroll = function() {myFunction()};
  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }