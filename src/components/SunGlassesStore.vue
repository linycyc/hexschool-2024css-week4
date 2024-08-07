<template>
  <div>
    <div class="serial-items">
      <div class="container">
        <div class="d-flex justify-between box">
          <RouterLink to="/product/optical">OPTICAL</RouterLink>
          <RouterLink to="/product/sun" class="products-link-active"
            >SUNGLASSES</RouterLink
          >
          <RouterLink to="">FUNCTIONAL</RouterLink>
        </div>
      </div>
    </div>

    <div class="d-flex justify-between">
      <picture>
        <source
          srcset="../assets/images/product-header-sm-3.png"
          media="(max-width: 768px)"
        />
        <img src="../assets/images/product-header-3.png" alt="glasses-image" />
      </picture>
      <picture>
        <source
          srcset="../assets/images/product-header-sm-4.png"
          media="(max-width: 768px)"
        />
        <img src="../assets/images/product-header-4.png" alt="glasses-image" />
      </picture>
    </div>

    <div class="sun">
      <div class="container">
        <h2 class="sun-title">Celluloid Combi</h2>
        <h2 class="sun-subtitle">賽璐珞鈦金屬混合鏡框</h2>
        <div class="row">
          <div class="column">
            <div class="card">
              <img src="../assets/images/product-7.png" alt="" />
              <div class="d-flex justify-between">
                <p class="sun-item">BJ41600S</p>
                <p class="sun-item-price">NTD3,490</p>
              </div>
              <div class="d-flex">
                <div
                  class="mr-2"
                  style="width: 24px; height: 24px; background-color: #5f3e2d"
                ></div>
                <div
                  style="width: 24px; height: 24px; background-color: #b75929"
                ></div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <img src="../assets/images/product-8.png" alt="" />
              <div class="d-flex justify-between">
                <p class="sun-item">BJ41600S</p>
                <p class="sun-item-price">NTD3,490</p>
              </div>
              <div class="d-flex">
                <div
                  class="mr-2"
                  style="width: 24px; height: 24px; background-color: #5f3e2d"
                ></div>
                <div
                  style="width: 24px; height: 24px; background-color: #b75929"
                ></div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <img src="../assets/images/product-9.png" alt="" />
              <div class="d-flex justify-between">
                <p class="sun-item">BJ41600S</p>
                <p class="sun-item-price">NTD3,490</p>
              </div>
              <div class="d-flex">
                <div
                  class="mr-2"
                  style="width: 24px; height: 24px; background-color: #5f3e2d"
                ></div>
                <div
                  style="width: 24px; height: 24px; background-color: #b75929"
                ></div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <img src="../assets/images/product-10.png" alt="" />
              <div class="d-flex justify-between">
                <p class="sun-item">BJ41600S</p>
                <p class="sun-item-price">NTD3,490</p>
              </div>
              <div class="d-flex">
                <div
                  class="mr-2"
                  style="width: 24px; height: 24px; background-color: #5f3e2d"
                ></div>
                <div
                  style="width: 24px; height: 24px; background-color: #b75929"
                ></div>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <img src="../assets/images/product-11.png" alt="" />
              <div class="d-flex justify-between">
                <p class="sun-item">BJ41600S</p>
                <p class="sun-item-price">NTD3,490</p>
              </div>
              <div class="d-flex">
                <div
                  class="mr-2"
                  style="width: 24px; height: 24px; background-color: #5f3e2d"
                ></div>
                <div
                  style="width: 24px; height: 24px; background-color: #b75929"
                ></div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <img src="../assets/images/product-12.png" alt="" />
              <div class="d-flex justify-between">
                <p class="sun-item">BJ41600S</p>
                <p class="sun-item-price">NTD3,490</p>
              </div>
              <div class="d-flex">
                <div
                  class="mr-2"
                  style="width: 24px; height: 24px; background-color: #5f3e2d"
                ></div>
                <div
                  style="width: 24px; height: 24px; background-color: #b75929"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div class="pagination-container">
          <ul class="d-flex">
            <li class="pagination">
              <a href="#" class="dark-color">上一頁</a>
            </li>
            <li class="pagination">
              <a href="#" class="dark-color">1</a>
            </li>
            <li class="pagination pagination-active">
              <a href="#" class="dark-color">2</a>
            </li>
            <li class="pagination">
              <a href="#" class="dark-color">3</a>
            </li>
            <li class="pagination">
              <a href="#" class="dark-color">4</a>
            </li>
            <li class="pagination">
              <a href="#" class="dark-color">5</a>
            </li>
            <li class="pagination">
              <a href="#" class="dark-color">下一頁</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.serial-items a {
  width: 33.333%;
  text-decoration: none;
  text-align: center;
  font-size: 32px;
  padding-top: 24px;
  padding-bottom: 24px;
  border-left: 1px solid #dcdcdc;
  border-right: 1px solid #dcdcdc;
  color: black;
}

// .serial-items a:hover {
//   border-bottom: 8px solid #aa0601;
//   padding-bottom: 16px;
// }

.sun {
  margin-top: 80px;
  &-title {
    font-size: 42px;
    text-align: center;
  }
  &-subtitle {
    font-size: 32px;
    text-align: center;
    margin-bottom: 32px;
  }
  &-item {
    font-size: 24px;
  }
  &-item-price {
    color: #aa0601;
    font-size: 24px;
  }
  .column {
    width: 33.333%;
    padding-right: 12px;
    padding-left: 12px;
    margin-bottom: 80px;
  }
}

.products-link-active,
.serial-items a:hover {
  border-bottom: 8px solid #aa0601;
}

.pagination-container {
  display: flex;
  justify-content: center;
  margin: 80px 0px;
}

.pagination {
  a {
    display: block;
    text-decoration: none;
    padding: 12px 16px;
    border: 1px solid #555555;
  }
  &:nth-last-child(1) {
    background-color: #f2f2f2;
  }
}

.pagination:hover,
.pagination-active {
  background-color: #000000;
  a {
    color: #ffffff;
  }
}

/* content */
@media (max-width: 992px) {
  .container {
    max-width: 696px;
    margin: 0 auto;
    flex-wrap: wrap;
  }

  .serial-items .container {
    padding: 0px;
  }

  .serial-items a {
    font-size: 16px;
  }

  .sun {
    margin-top: 40px;
    &-title {
      font-size: 24px;
      text-align: center;
    }
    &-subtitle {
      font-size: 24px;
      text-align: center;
      margin-bottom: 24px;
    }
    &-item {
      font-size: 24px;
    }
    &-item-price {
      color: #aa0601;
      font-size: 24px;
    }
    .column {
      width: 50%;
      padding-right: 12px;
      padding-left: 12px;
      margin-bottom: 24px;
    }
  }

  .pagination-container {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 64px;
  }
}

/* content */
@media (max-width: 768px) {
  .serial-items .container {
    padding: 0px;
  }

  .serial-items a {
    font-size: 16px;
  }

  .sun {
    margin-top: 40px;
    &-title {
      font-size: 24px;
      text-align: center;
    }
    &-subtitle {
      font-size: 24px;
      text-align: center;
      margin-bottom: 24px;
    }
    &-item {
      font-size: 24px;
    }
    &-item-price {
      color: #aa0601;
      font-size: 24px;
    }
    .column {
      width: 100%;
      padding-right: 12px;
      padding-left: 12px;
      margin-bottom: 24px;
    }
    .card {
      display: flex;
      flex-direction: column;
    }
  }

  .pagination-container {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 64px;
  }
}
</style>
