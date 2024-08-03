<script setup>
import Header from "./Header.vue";
</script>

<template>
  <Header />
  <div>
    <div class="intro">
      <div class="container">
        <h2 class="intro-title">用專業的心，做專業的事</h2>
        <div class="row">
          <div class="column">
            <div class="card">
              <img src="../assets/images/home-section2-1.png" alt="" />
              <h3>單一價格</h3>
              <p>無論任何度數皆不需追加費用即可擁有適合自己的薄型球面鏡片。</p>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <img src="../assets/images/home-section2-2.png" alt="" />
              <h3>單一價格</h3>
              <p>
                為了您的寶貴時間著想，以豐富專業知識與技術將結帳到交件的時間縮減至最快
                20 分鐘即可完成。
              </p>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <img src="../assets/images/home-section2-3.png" alt="" />
              <h3>單一價格</h3>
              <p>
                我們提供長達 120
                天的保固售後服務，不限會員資格皆享有免費深層保養及專業維修服務。
              </p>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <img src="../assets/images/home-sectioin2-4.png" alt="" />
              <h3>單一價格</h3>
              <p>使用世界知名頂級品牌，抗UV、防汙鍍膜薄型非球面鏡片。</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="classic">
      <div class="container">
        <h2 class="classic-title">經典系列鏡框</h2>
        <div class="row">
          <div class="column">
            <div class="card">
              <img src="../assets/images/home-section3-1.png" alt="" />
              <h2 class="italic">OPTICAL</h2>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <img src="../assets/images/home-section3-2.png" alt="" />
              <h2 class="italic">SUNGLASSES</h2>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <img src="../assets/images/home-section3-3.png" alt="" />
              <h2 class="italic">FUNCTIONAL</h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="design"
      style="background: url(src/assets/images/index-bg.png)"
    >
      <div class="container">
        <h2 class="design-title">聯名設計鏡框</h2>
        <div class="row">
          <div class="column">
            <div class="card">
              <picture>
                <!-- 當螢幕寬度少於600px時，替換圖片 -->
                <source
                  srcset="../assets/images/home-section4-1-sm.png"
                  media="(max-width: 576px)"
                />
                <!-- 預設圖片，通常是桌面版本 -->
                <img src="../assets/images/home-section4-1.png" alt="Logo" />
              </picture>
              <h2 class="italic">DOUBLE A+</h2>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <picture>
                <!-- 當螢幕寬度少於600px時，替換圖片 -->
                <source
                  srcset="../assets/images/home-section4-2-sm.png"
                  media="(max-width: 576px)"
                />
                <!-- 預設圖片，通常是桌面版本 -->
                <img src="../assets/images/home-section4-2.png" alt="Logo" />
              </picture>
              <h2 class="italic">YOUTH</h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="customer">
      <div class="container">
        <h2 class="customer-title">顧客推薦</h2>
        <div class="row">
          <div class="column">
            <div class="card">
              <img
                src="../assets/images/home-section5-1.png"
                alt="Logo"
                class="mb-4"
              />
              <div class="p-4">
                <p class="mb-2">Jessy</p>
                <p class="mb-18">眼鏡品質優良，下次還會想來這邊購買！</p>
                <time class="date">2021/06/20</time>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <img
                src="../assets/images/home-section5-2.png"
                alt="Logo"
                class="mb-4"
              />
              <div class="p-4">
                <p class="mb-2">凱倫</p>
                <p class="mb-18">
                  做工細緻、鏡架很輕盈，待久也不會覺得有負擔，推薦給大家！
                </p>
                <time class="date">2021/04/18</time>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <img
                src="../assets/images/home-section5-3.png"
                alt="Logo"
                class="mb-4"
              />
              <div class="p-4">
                <p class="mb-2">悠悠</p>
                <p class="mb-18">
                  謝謝客服人員的詳細回答，成功買到了喜歡的眼鏡，下次會再回購！
                </p>
                <time class="date">2020/12/25</time>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <img
                src="../assets/images/home-section5-4.png"
                alt="Logo"
                class="mb-4"
              />
              <div class="p-4">
                <p class="mb-2">Kyuan</p>
                <p class="mb-18">服務很好，品質沒有任何問題，非常喜歡。</p>
                <time class="date">2020/10/31</time>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="contact">
      <div class="container">
        <div class="content">
          <h2>聯絡我們</h2>
          <p class="desc">
            我們相當重視您的意見，若您有任何疑問，可先參考「常見問題」，若仍有任何問題，請填妥以下資料，我們會在近期與您聯繫。
          </p>
          <div class="input-name mt-4">
            <label for="name" class="mb-2">姓名</label>
            <input type="text" id="name" placeholder="林大名" />
          </div>

          <div class="input-phone mt-4">
            <lable for="phone" class="mb-2">連絡電話</lable>
            <input type="text" id="phone" placeholder="0912345678" />
          </div>

          <div class="input-mail mt-4">
            <lable for="mail" class="mb-2">電子郵件</lable>
            <input type="text" id="mail" placeholder="xxx@gmail.com" />
          </div>

          <div class="input-response mt-4">
            <lable for="response" class="mb-2">意見反應</lable>
            <textarea id="response" placeholder="請輸入"></textarea>
          </div>
          <div class="d-flex mt-4">
            <input type="checkbox" class="p-1" />
            <p>
              我同意隱私權政策，並同意依隱私權政策中所述的方式處理自己的資料。
            </p>
          </div>

          <div class="submit">
            <a href="#" class="submit-item">送出</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.italic {
  font-style: italic;
}

.intro {
  background-color: #fbf2f2;
  display: flex;
}

.intro .container {
  padding-top: 80px;
  padding-bottom: 80px;
}

.intro-title {
  font-size: 48px;
  color: #650300;
  text-align: center;
  font-weight: bold;
}

.intro .column {
  width: 25%;
  padding-right: 12px;
  padding-left: 12px;
}

.intro .card h3 {
  font-size: 24px;
  font-weight: bold;
  color: #650300;
  text-align: center;
  margin-bottom: 8px;
}

.intro .card img {
  width: 84px;
  height: 84px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 32px;
  margin-bottom: 24px;
  padding: 8px;
}

.classic .container {
  padding-top: 80px;
  padding-bottom: 80px;
}

.classic-title {
  font-size: 48px;
  color: #650300;
  text-align: center;
  font-weight: bold;
  margin-bottom: 48px;
}

.classic .column {
  text-align: center;
  width: 33.333%;
  padding-right: 12px;
  padding-left: 12px;
}

.classic .card img {
  width: 416px;
  height: 416px;
  margin-bottom: 8px;
}

.classic .card h2 {
  font-weight: bold;
  text-align: center;
}

.design .container {
  padding-top: 80px;
  padding-bottom: 80px;
}

.design-title {
  font-size: 48px;
  color: #ffffff;
  text-align: center;
  font-weight: bold;
  margin-bottom: 48px;
}

.design .column {
  width: 50%;
  padding-right: 0px;
  padding-left: 0px;
}

.design .card h2 {
  text-align: center;
  font-weight: bold;
  background-color: #ffffff;
  padding: 8px 0px;
}

.customer .container {
  padding-top: 80px;
  padding-bottom: 80px;
}

.customer-title {
  font-size: 48px;
  text-align: center;
  color: #650300;
  font-weight: bold;
  margin-bottom: 48px;
}

.customer .column {
  width: 25%;
  padding-left: 12px;
  padding-right: 12px;
}

.customer .card {
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 6px #00000029;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  height: 100%;
}

.customer .date {
  color: #707070;
}

.contact {
  background-color: #fbf2f2;
}

.contact .container {
  padding-top: 80px;
  padding-bottom: 80px;
}

.contact h2 {
  text-align: center;
  font-weight: bold;
  color: #650300;
  margin-bottom: 48px;
}

.contact .content {
  width: 636px;
  margin: auto;
  padding: 0px;
}

.contact .content input[type="text"] {
  width: 100%;
}

.contact .content input[type="checkbox"] {
  width: 24px;
  height: 24px;
}

.contact .content .desc {
  font-size: 20px;
  margin-bottom: 8px;
}

::placeholder {
  opacity: 0.2;
  padding-left: 12px;
  padding-top: 6px;
}

.input-name input {
  height: 36px;
}

.input-phone input {
  height: 36px;
}

.input-mail input {
  height: 36px;
}

.input-response textarea {
  height: 136px;
  width: 100%;
  resize: none;
}

.input-response ::placeholder {
  vertical-align: top;
}

.card .italic {
  color: var(--primary);
}

.submit {
  display: flex;
  justify-content: center;
  margin-top: 48px;
}

.submit-item {
  width: 416px;
  text-align: center;
  background-color: var(--primary);
  padding: 6px 12px;
  font-size: 20px;
  text-decoration: none;
  color: white;
  display: block;
}

/* content */
@media (max-width: 992px) {
  .container {
    max-width: 696px;
    margin: 0 auto;
    flex-wrap: wrap;
  }

  .intro .column {
    width: 50%;
  }

  .classic-title {
    font-size: 48px;
  }

  .classic .container {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .classic .column {
    width: 100%;
  }

  .design-title {
    margin-bottom: 24px;
  }

  .design .column {
    width: 100%;
    padding-right: 12px;
    padding-left: 12px;
    margin-top: 24px;
  }

  .customer .container {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  .customer .column {
    width: 50%;
  }

  .customer .card {
    margin-top: 24px;
    height: auto;
  }

  .contact .content {
    padding: 0px 60px;
  }

  .submit-item {
    width: 326px;
  }
}

/* content */
@media (max-width: 768px) {
  .intro-title {
    font-size: 24px;
  }

  .intro .container {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .intro .column {
    width: 100%;
  }

  .classic-title {
    font-size: 24px;
  }

  .classic .container {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .classic .column {
    width: 100%;
  }

  .classic .card img {
    height: 348px;
  }

  .design .container {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .design-title {
    font-size: 24px;
    color: #ffffff;
    text-align: center;
    font-weight: bold;
    margin-bottom: 0px;
  }

  .design .card {
    margin-top: 24px;
  }

  .design .column {
    width: 100%;
    padding-right: 12px;
    padding-left: 12px;
  }

  .customer .container {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .customer-title {
    font-size: 24px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .customer .column {
    width: 100%;
  }

  .customer .card {
    margin-top: 16px;
    height: auto;
  }

  .contact .container {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .contact .content {
    max-width: 100%;
    margin: auto;
    padding: 0px;
  }

  .contact-title {
    font-size: 24px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .submit {
    max-width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 24px;
  }
}
</style>
