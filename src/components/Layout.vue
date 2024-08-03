<script setup>
import Footer from "./Footer.vue";
</script>

<template>
  <nav class="nav">
    <div class="container d-flex">
      <div class="logo">
        <a href="#">
          <img src="../assets/images/logo-white.png" alt="" class="logo-img" />
        </a>
      </div>
      <ul class="d-flex justify-between ml-auto">
        <li>
          <RouterLink to="/product/optical" class="nav-item mr-16"
            >系列鏡框</RouterLink
          >
        </li>
        <li><a href="#" class="mr-16 nav-item">門市據點</a></li>
        <li><a href="#" class="mr-16 nav-item">部落格</a></li>
        <li><a href="#" class="nav-item">常見問題</a></li>
      </ul>
    </div>
  </nav>
  <RouterView />
  <Footer />
</template>

<style scoped>
.logo-img {
  margin: 12px 0px;
  height: 48px;
  width: 80px;
}

.nav {
  background-color: var(--primary);
}

.nav .nav-item {
  text-decoration: none;
  color: #ffffff;
  display: block;
  padding: 25px 0px;
  text-align: center;
}

.nav .nav-item:hover {
  border-bottom: 2px solid white;
  padding-bottom: 23px;
}

/* nav */
@media (max-width: 767px) {
  .container {
    max-width: 696px;
    margin: 0 auto;
    flex-wrap: wrap;
    /* padding: 0px; */
  }
}

/* nav */
@media (max-width: 576px) {
  .container {
    /* max-width: 348px; */
    margin: 0 auto;
    flex-wrap: wrap;
    /* padding: 0px; */
  }

  .nav .nav-item {
    text-decoration: none;
    color: #ffffff;
    display: block;
    padding: 12px 48px;
    margin: 0px;
  }

  .nav .nav-item:hover {
    border-bottom: none;
    padding-bottom: 12px;
  }

  .nav .nav-item:active {
    background-color: var(--bd-light);
    color: var(--secondary);
  }

  .nav ul {
    flex-wrap: wrap;
    margin: 0px -12px;
  }

  .nav ul li {
    width: 50%;
    border: 1px solid white;
  }

  .logo {
    padding-left: 12px;
  }
}
</style>
