<template>
  <header class="main-header">
    <div class="container">
      <div class="logo col">
        <a href="https://voxukraine.org/uk/">
          <img
            id="logo"
            src="https://raw.githubusercontent.com/sergesoroka/nuxt-vox/master/_nuxt/img/76693f2.png"
            width="90"
            height="49"
          />
        </a>
      </div>
      <ul class="social-items col">
        <li class="youtube-icon">
          <a href="https://www.youtube.com/channel/UCR6MsnwJpQUJMYbef2vRbvw" target="_blank">
            <i class="fa fa-youtube-play"></i>
          </a>
        </li>
        <li class="fb-icon">
          <a href="https://www.facebook.com/VoxUkraine.Ukranian" target="_blank">
            <i class="fa fa-facebook-f"></i>
          </a>
        </li>
        <li class="fb-icon">
          <a href="https://www.facebook.com/VoxCheck" target="_blank">
            <i class="fa fa-facebook-f"></i>
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #262626;
  height: 4.5rem;
  z-index: 1;
}
i.fa {
  color: #fff;
}

.container {
  margin: 0 auto;
  width: 1250px;
  height: 72px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
#logo {
  margin: 13px 0 0 15px;
}
.social-items {
  text-align: right;
  padding-right: 29px;
}
.social-items li {
  list-style-type: none;
  display: inline;
  font-size: 1.3rem;
  line-height: 56px;
  margin-right: 16px;
}
.fb-icon > a > i:hover, 
.youtube-icon > a > i:hover {
  color: rgb(210, 210, 210);
}
@media (max-width: 425px) {
  .container {
    width: 100%;
  }
  .social-items{
  padding-right: 0 !important;
  }
}
@media (max-width: 1024px) {
  .social-items{
  padding-right: 86px;
  }
}
</style>
