<template>
  <div class="con">
    <h3 class="links-head">Корисні матеріали</h3>
    <ul class="useful-links-list">
      <li>
        <a href="https://covid19.com.ua/">Урядовий сайт про коронавірус</a>
      </li>
      <li>
        <a href="https://moz.gov.ua/koronavirus-2019-ncov">Інформація щодо коронавірусу МОЗ</a>
      </li>
      <li>
        <a
          href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
        >Все про коронавірус від ВООЗ</a>
      </li>
      <li>
        <a
          href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
        >Як вберегтись від коронавірусу - поради ВООЗ</a>
      </li>
      <li>
        <a
          href="https://phc.org.ua/kontrol-zakhvoryuvan/inshi-infekciyni-zakhvoryuvannya/koronavirusna-infekciya-covid-19"
        >Інформація про коронавірус від Центру громадського здоров'я</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.useful-links-list {
  padding: 4px 0 0 16px;
  margin: 0;
}
.useful-links-list li {
  font-size: 0.98rem;
  margin-bottom: 3px;
  line-height: 17px;
  padding: 3px 0;
  list-style-type: none;
}

.useful-links-list li a {
  text-decoration: none;
  color: rgb(59, 59, 59);
}

.useful-links-list li a:hover {
  color: rgb(154, 154, 154);
}
.links-head {
  margin: 10px 0 3px 16px;
}
@media (max-width: 425px) {}
</style>