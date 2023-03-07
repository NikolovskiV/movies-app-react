import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './footer.css';

const Footer = () => {
  return (
    <footer class="footer-distributed">
      <div class="footer-left">
        <h3>
          PopCorn<span>Movies</span>
        </h3>

        <p class="footer-links">
          <a href="/" class="link-1">
            Home
          </a>

          <a href="/">Blog</a>

          <a href="/">Pricing</a>

          <a href="/">About</a>

          <a href="/">Faq</a>

          <a href="/">Contact</a>
        </p>

        <p class="footer-company-name">PopCorn Movies © 2023</p>
      </div>

      <div class="footer-center">
        <div>
          <i class="fa fa-map-marker"></i>
          <p>
            <span>Kopparvägen 25</span> 17672 Järfälla Stockholm, Sweden
          </p>
        </div>

        <div>
          <i class="fa fa-phone"></i>
          <p>+ 46 70 0484 114</p>
        </div>

        <div>
          <i class="fa fa-envelope"></i>
          <p>
            <a href="mailto:support@company.com">info@nikolovski.se</a>
          </p>
        </div>
      </div>

      <div class="footer-right">
        <p class="footer-company-about">
          <span>About PopCorn Movies</span>
          The best website for online movies. You can watch here all your famous
          and new movies with UHD pictures. You are welcome to try our website!
        </p>

        <div class="footer-icons">
          <a href="/">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="/">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="/">
            <i class="fa fa-linkedin"></i>
          </a>
          <a href="/">
            <i class="fa fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
