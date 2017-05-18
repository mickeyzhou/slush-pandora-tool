import Vue from 'vue';
import Page from './page.vue';

new Vue({
  el: 'div#page',
  template: '<page></page>',
  components: { Page },
  replace: false
});