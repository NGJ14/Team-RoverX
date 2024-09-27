// class SpecialHeader extends HTMLElement {
//   ConnectedCallback() {
//     this.innerHTML = `
//             <div class="nav-container">
//         <nav>
//             <ul>
//                 <div><a href=""><img class="nav-logo" src="./images/logos/roverx-white-logo.png" alt=""></a></div>
//                 <div class="nav-list">
//                     <li><a href="./index.html">HOME</a></li>
//                     <li><a href="./team.html">TEAM</a></li>
//                     <li><a href="./rovers.html">ROVERS</a></li>
//                     <li><a href="./achievements.html">ACHIEVEMENTS</a></li>
//                     <li><a href="./media.html">MEDIA</a></li>
//                     <li><a href="./sponsors.html">SPONSORS</a></li>
//                 </div>
//             </ul>
//         </nav>
//     </div>
//         `
//   }
// }

// class SpecialFooter extends HTMLElement {
//   ConnectedCallback() {
//     this.innerHTML = `
        
//         `
//   }
// }

// customElements.define("special-header", SpecialHeader);
// customElements.define("special-footer", SpecialFooter);


document.getElementById("header").innerHTML = `
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
                Vellore, Tamil Nadu,632014</p>
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