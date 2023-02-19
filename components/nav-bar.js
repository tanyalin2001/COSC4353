// get the nav-bar element
const navBar = document.getElementById('nav-bar');

// set the HTML for the navigation bar
navBar.innerHTML = `
  <header>
    <a href="./index.html"><img src="img/logo.png"></a>
    <nav>
      <i class="fa fa-bars" onclick="showMenu()"></i>
      <div class="nav-links" id="navLinks">
        <i class="fa fa-times" onclick="hideMenu()"></i>
        <ul>
          <li><a href="search.html">SEARCH</a></li>
          <li><a href="posting.html">POST</a></li>
          <li><a href="contact.html">CONTACT</a></li>
          <li><a href="signup.html">SIGN UP</a></li>
          <li><a href="login.html">LOG IN</a></li>
        </ul>
      </div>
    </nav>
  </header>
`;

// get the navLinks element
const navLinks = document.getElementById("navLinks");

// show/hide the navigation menu when the user clicks the menu icon
function showMenu() {
  navLinks.style.right = "0";
}

function hideMenu() {
  navLinks.style.right = "-200px";
}
