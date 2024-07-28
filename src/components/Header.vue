<template>
  <header class="banner">
    <div class="container d-flex">
      <div class="ml-auto">
        <div class="banner-title">
          <p>Promise-Desert 2020 早春系列</p>
          <h1>看得清，才能看得遠</h1>
        </div>
        <div class="d-flex justify-end mt-1">
          <a href="#" class="btn">立即購買</a>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.banner {
  background: url("../assets/images/home-header.png");
  height: 787px;
  background-size: cover;
  background-position: center;
}

.banner-title {
  margin-top: 296px;
}

.banner-title p {
  font-size: 36px;
  color: #650300;
  text-align: right;
}

.banner-title h1 {
  font-size: 64px;
  color: #650300;
  text-align: right;
  font-weight: bold;
}

.btn {
  background-color: var(--primary);
  text-align: center;
  padding: 6px 12px;
  font-size: 20px;
  text-decoration: none;
  color: white;
  display: block;
}

/* banner */
@media (max-width: 767px) {
  .container {
    max-width: 696px;
    margin: 0 auto;
    flex-wrap: wrap;
  }

  .banner {
    background: url("../assets/images/home-header-sm.png");
    background-size: cover;
    background-position: center;
  }
}

/* banner */
@media (max-width: 576px) {
  .banner {
    background: url("../assets/images/home-header-sm.png");
    height: 396px;
    background-size: cover;
    background-position: center;
  }

  .banner-title {
    margin-top: 144px;
  }

  .banner-title p {
    font-size: 16px;
    color: #650300;
    text-align: right;
  }

  .banner-title h1 {
    font-size: 24px;
    color: #650300;
    text-align: right;
    font-weight: bold;
  }
}
</style>
