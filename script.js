document.getElementById("header").innerHTML = `
  <div class="nav-container">
    <nav>
        <ul>
            <div><a href=""><img class="nav-logo" src="./images/logos/roverx-white-logo.png" alt=""></a></div>
            <div class="nav-list">
                <li><a class="ACTIVEhome" href="./index.html">HOME</a></li>
                <li><a class="ACTIVErovers" href="./rovers.html">ROVERS</a></li>
                <li><a class="ACTIVEachievements" href="./achievements.html">ACHIEVEMENTS</a></li>
                <div class="dropdown">
                    <button class="dropbtn">TEAM 
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <a href="./team-2024.html">2024</a>
                        <a href="./team-2023.html">2023</a>
                        <a href="./team-2022.html">2022</a>
                        <a href="./team-2021.html">2021</a>
                        <a href="./team-2020.html">2020</a>
                        <a href="./team-2019.html">2019</a>
                        <a href="./team-2018.html">2018</a>
                        <a href="./team-2017.html">2017</a>
                        <a href="./team-2016.html">2016</a>
                        <a href="./team-2015.html">2015</a>
                </div>
  </div> 
                <li><a class="ACTIVEgallery" href="./gallery.html">GALLERY</a></li>
                <li><a class="ACTIVEsponsor" href="./sponsors.html">SPONSORS</a></li>
            </div>
        </ul>
    </nav>
</div>
  `;
document.getElementById("footer").innerHTML = `
<div class="contact-section">
        <div>
            <p class="text-white d-flex mb-1">
                <a href="tel:7972829035">
                    +91-7972829035
                    <br>
                    Aishwary Dixit
                    <br>
                    Team Captain
                </a>
            </p>
        </div>
        <div>
            <p>
                Creation Labs, <br>
                Vellore Institute of Technology,<br>
                Vellore, Tamil Nadu - 632014</p>
        </div>
        <div>
            <p>
                <a href="mailto:roverteam.vit@gmail.com">
                    roverteam.vit@gmail.com
                </a>
                <br>
                <a href="mailto:teamroverx@vit.ac.in">
                    teamroverx@vit.ac.in
                </a>
            </p>
        </div>
    </div>
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