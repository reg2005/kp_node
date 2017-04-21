import Vue from 'vue'



import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, {
  i18n: function (path, options) {
    console.log('lang path', path, 'options:', options)
  }
})

Vue.directive('img', {
  bind: (el, binding, vnode) => {
    var img = new Image();
    img.src = binding.value;

    img.onload = () => {
      el.src = binding.value;
      //
      $(el)
        .css('opacity', 0)
        .animate({opacity: 1}, 1000)
    };
  }
});

// Vue.component('form-errors', require('../components/ui/FormErrors.vue'))
Vue.component('demo-component', require('../components/ui/DemoComponent.vue'))
Vue.component('ckeditor', require('vue-ckeditor2/src/ckeditor.vue'))
Vue.component('sdfnote', require('./ckeditor/plugins/note/Note.vue'))

import './ckeditor/plugins/note/config'
