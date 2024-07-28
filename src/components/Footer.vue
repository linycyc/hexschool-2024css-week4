<template>
  <footer class="footer">
    <div class="container">
      <div class="d-flex justify-between">
        <div>
          <ul class="footer-items">
            <li class="mr-12"><a href="#">首頁</a></li>
            <li class="mr-12"><a href="#">系列鏡框</a></li>
            <li class="mr-12"><a href="#">門市據點</a></li>
            <li class="mr-12"><a href="#">部落格</a></li>
            <li><a href="#">常見問題</a></li>
          </ul>
          <div class="footer-contact-phone">
            <span class="material-symbols-outlined"> call </span>
            <p>0800-000-000</p>
          </div>
          <div class="footer-contact-mail">
            <span class="material-symbols-outlined"> mail </span>
            <p>glasses@business.com</p>
          </div>
        </div>
        <!-- icons -->
        <div class="community">
          <a href="#"
            ><img
              src="../assets/images/ic-social-fb.png"
              alt=""
              class="ic-social-fb"
          /></a>
          <a href="#"
            ><img
              src="../assets/images/ic_social_ig.png"
              alt=""
              class="ic-social-ig"
          /></a>
          <a href="#"
            ><img src="../assets/images/ic_social_line.png" alt=""
          /></a>
        </div>
      </div>
      <div class="copyright">
        <p>Copyright © 2020 Glasses.All rights reserved.</p>
        <ul class="terms">
          <li class="privacy-terms">隱私權政策</li>
          <li class="service-terms">服務條款</li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--primary);
}

.footer p {
  color: white;
}

.footer li {
  color: white;
}

.footer a {
  color: white;
  text-decoration: none;
  display: block;
}

.footer-items {
  display: flex;
  margin-bottom: 36px;
  margin-top: 60px;
}

.footer-contact-phone {
  display: flex;
  margin-bottom: 8px;
}

.footer-contact-phone p {
  font-size: 36px;
}

.footer-contact-phone span {
  padding: 6px;
  font-size: 36px;
  margin-right: 16px;
}

.footer-contact-mail {
  display: flex;
  margin-bottom: 32px;
}

.footer-contact-mail p {
  font-size: 36px;
}

.footer-contact-mail span {
  padding: 6px;
  font-size: 36px;
  margin-right: 16px;
}

.community {
  display: flex;
  margin-top: 48px;
}

.community img {
  width: 48px;
  height: 48px;
}

.ic-social-fb {
  margin-right: 32px;
}

.ic-social-ig {
  margin-right: 32px;
}

.copyright {
  display: flex;
  justify-content: space-between;
  padding-top: 32px;
  padding-bottom: 32px;
  border-top: 1px solid white;
}

.privacy-terms {
  margin-right: 48px;
}

.terms {
  display: flex;
}

/* footer */
@media (max-width: 767px) {
  .container {
    max-width: 696px;
    margin: 0 auto;
    flex-wrap: wrap;
  }

  .community img {
    width: 40px;
    height: 40px;
  }

  .ic-social-fb {
    margin-right: 16px;
  }

  .ic-social-ig {
    margin-right: 16px;
  }
}

/* footer */
@media (max-width: 576px) {
  .footer-items {
    display: none;
    margin-top: 24px;
  }

  .footer-contact-phone {
    display: flex;
    margin-top: 24px;
  }

  .footer-contact-phone p {
    font-size: 16px;
  }

  .footer-contact-phone span {
    padding: 3px;
    font-size: 18px;
    margin-right: 12px;
  }

  .footer-contact-mail p {
    font-size: 16px;
  }

  .footer-contact-mail span {
    padding: 3px;
    font-size: 18px;
    margin-right: 12px;
  }

  .community {
    display: flex;
    margin-top: 24px;
  }

  .community img {
    width: 24px;
    height: 24px;
  }

  .ic-social-fb {
    margin-right: 8px;
  }

  .ic-social-ig {
    margin-right: 8px;
  }

  .copyright {
    flex-direction: column;
    padding-top: 16px;
    padding-bottom: 24px;
  }

  .terms {
    display: block;
  }

  .privacy-terms {
    margin-top: 8px;
  }

  .service-terms {
    margin-top: 8px;
  }
}

.material-symbols-outlined {
  color: white;
}
</style>
