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
                    </div>
                </div> 
                <li><a class="ACTIVEgallery" href="./gallery.html">GALLERY</a></li>
                <li><a class="ACTIVEsponsor" href="./sponsors.html">SPONSORS</a></li>
            </div>
        </ul>
    </nav>
</div>
  `;

document.getElementById("navbar").innerHTML = `
<div class="nav2">
        <input type="checkbox" id="check">
        <label for="check" class="checkbtn">
            <i class="fas fa-bars"></i>
        </label>
        <a href="./index.html"><img src="./images/logos/roverx-white-logo.png" alt=""></a>
        <ul>
            <li><a class="nav2menu ACTIVEhome" href="./index.html">HOME</a></li>
            <li><a class="nav2menu ACTIVErovers" href="./rovers.html">ROVERS</a></li>
            <li><a class="nav2menu ACTIVEachievements" href="./achievements.html">ACHIEVEMENTS</a></li>
            <li><a class="nav2menu ACTIVEgallery" href="./gallery.html">GALLERY</a></li>
            <li><a class="nav2menu ACTIVEsponsor" href="./sponsors.html">SPONSORS</a></li>
            <li>
                <div class="dropdown2">
                    <button class="nav2menu dropbtn2">TEAM
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown2-content">
                        <a class="navYear" href="./team-2024.html">2024</a>
                        <a class="navYear" href="./team-2023.html">2023</a>
                        <a class="navYear" href="./team-2022.html">2022</a>
                        <a class="navYear" href="./team-2021.html">2021</a>
                        <a class="navYear" href="./team-2020.html">2020</a>
                        <a class="navYear" href="./team-2019.html">2019</a>
                    </div>
                </div>
            </li>
        </ul>
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
            <a href="https://www.linkedin.com/company/teamroverx/"><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://www.youtube.com/@teamroverx"><i class="fa-brands fa-youtube"></i></a>
            <a href="https://www.instagram.com/teamroverx/"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://www.facebook.com/teamroverx/"><i class="fa-brands fa-facebook"></i></a>
        </div>
        <div><img class="footer-logo" src="./images/logos/vit_logo.png" alt=""></div>
    </div>
    <div class="copyright-strip">
        &copy; Copyright - Team RoverX 2024
    </div>
</div>    
`;
