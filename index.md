---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Внешний сайт"
  text: "Документация ffin.life"
  tagline: Все для фронта
  actions:
    - theme: brand
      text: Что за проект?
      link: /guide/what-is
    - theme: alt
      text: API
      link: /docs/api
  image:
    src: /fun-logo.png
    alt: Life + Nuxt

features:
  - title: Node version
    details: 18.18.0
  - title: Nuxt version
    details: ^3.7.4
  - title: Vuetify version
    details: ^3.3.20
---

<style>
  .image-src {
    border-radius: 50%;
    mask-image: linear-gradient(300deg, rgb(0 0 0 / 100%), transparent);
    -webkit-box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.5);
    -moz-box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.5);
    box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.5);
  }
</style>