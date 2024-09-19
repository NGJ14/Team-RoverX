// REUSABLE-NAVBAR-COMPONENT
const navbar = document.getElementById("reusable-navbar");
navbar.innerHTML = `
  <div class="nav-container">
        <nav>
            <ul>
                <div><a href=""><img class="nav-logo" src="./images/logos/roverx-white-logo.png" alt=""></a></div>
                <div class="nav-list">
                    <li><a href="./index.html">HOME</a></li>
                    <li><a href="./team.html">TEAM</a></li>
                    <li><a href="./rovers.html">ROVERS</a></li>
                    <li><a href="./achievements.html">ACHIEVEMENTS</a></li>
                    <li><a href="./media.html">MEDIA</a></li>
                    <li><a href="./sponsors.html">SPONSORS</a></li>
                </div>
            </ul>
        </nav>
    </div>
`;
document.body.appendChild(navbar.content);


// REUSABLE-FOOTER-COMPONENT
const footer = document.getElementById("reusable-footer");
footer.innerHTML = `
  <div class="footer-section">
        <div class="footer-logo-container">
            <div><img class="footer-logo" src="./images/logos/CreationLabs_logo.png" alt=""></div>
            <div>
                <a href=""><i class="fa-brands fa-linkedin"></i></a>
                <a href=""><i class="fa-brands fa-youtube"></i></a>
                <a href=""><i class="fa-brands fa-instagram"></i></a>
                <a href=""><i class="fa-brands fa-facebook"></i></a>
            </div>
            <div><img class="footer-logo" src="./images/logos/vit_logo.png" alt=""></div>
        </div>
        <div class="copyright-strip">
            &copy; Copyright - Team RoverX 2024
        </div>
    </div>
`;
document.body.appendChild(footer.content);
