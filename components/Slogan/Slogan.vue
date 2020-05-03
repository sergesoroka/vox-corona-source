<template>
  <div class="container">
    <h1 class="slogan">
      Лише
      <span class="bold">актуальна</span> та
      <span class="bold">перевірена</span> інформація про коронавірус
    </h1>
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSdlr0tok_3eYFdfb9gK-b8uU_cRz5SG2yPhfBk-ozO1P7KLUg/viewform"
      target="_blank"
    >
      <button class="subscr">Повідомити про фейк</button>
    </a>
  </div>
</template>
<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 240px;
}
.subscr {
  height: 61px;
  width: 240px;
  margin-top: 122px;
  text-transform: uppercase;
  background-color: #f5e52e;
  border: none;
  font-weight: 700;
  font-size: 18px;
  text-align: right;
  padding: 0 55px;
  border-radius: 6px;
  letter-spacing: 0.2px;
  cursor: pointer;
}
.slogan {
  margin-top: 6rem;
  padding: 15px 16px;
  font-weight: 700;
  font-size: 27px;
  width: 65%;
  border-left: 20px solid #f5e52f;

  text-transform: uppercase;
  letter-spacing: 0.4px;
}
.bold {
  font-weight: 700;
}
.subscr:hover {
  background-color: #00baf1;
}

@media (max-width: 425px) {
  .container {
    display: grid;
    grid-template-columns: 100%;
  }
  .slogan {
    width: 100%;
  }

  .subscr {
    height: 83px;
    width: 269px;
    margin: 0 auto 26px auto;
    text-align: center;
  }
}
</style>
