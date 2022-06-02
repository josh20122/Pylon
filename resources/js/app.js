require('./bootstrap');


import Vue from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue'
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import { Link } from "@inertiajs/inertia-vue"
import ClickCopy from 'vue-directive-copy'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify);

createInertiaApp({
  resolve: async name => {
    let page = (await import(`./Pages/${name}`)).default;

    return page;

  },

  setup({ el, App, props, plugin }) {
    Vue.use(plugin)
      .component("Link", Link)


    new Vue({
      vuetify: new Vuetify({
        icons: {
          iconfont: 'fa', // default - only for display purposes
        },
        theme: {
          themes: {
            light: {
              wait: '#f0f2f1',
              secondary: '#008FD5',
              deepblue: '#004AA1',
              drawer: '#0B2138',
              background2: '#EFF2F6',
              deep2: '#0C2139',
            }
          }
        }
      }),
      render: h => h(App, props),
    }).$mount(el)
  },
})