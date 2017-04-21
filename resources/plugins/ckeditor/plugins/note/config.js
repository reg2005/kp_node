/**
 * Created by evgeniy on 11.04.17.
 */
import store from '~store'
import Vue from 'vue'
if(typeof window !== 'undefined') {

  CKEDITOR.plugins.add('abbr', {
    icons: 'abbr',
    init: function (editor) {
      // Plugin logic goes here...
      editor.addCommand('abbr', new CKEDITOR.dialogCommand('abbrDialog'));

      editor.ui.addButton('Abbr', {
        label: 'Insert Abbreviation',
        command: 'abbr',
        toolbar: 'insert'
      });

      CKEDITOR.dialog.add('abbrDialog', function (editor) {

         return {
          title: 'Abbreviation Properties',
          minWidth: 400,
          minHeight: 200,

          contents: [
            {
              id: 'tab1',
              label: '',
              title: '',
              elements: [
                {
                  type: 'html',
                  html: '<div id="note-place"><div>'
                }
              ]
            }
          ],
           onShow: function() {
             // "this" is now a CKEDITOR.dialog object.
             // Accessing dialog elements:
             // var Profile = Vue.extend({
             //   render: function (createElement) {
             //     return createElement(
             //       'sdfnote',   // tag name
             //     )
             //   }
             // })
// create an instance of Profile and mount it on an element
//              new Profile().$mount('#note-place')
//              console.log(Vue.component)
//              var component = new Vue({
//                // parent: Vue
//                render: function (createElement) {
//                  return createElement(
//                    'sdfnote',   // tag name
//                  )
//                }
//              }).$mount()
//
//              console.log(component.$el)
//               $('#note-place').html(component.$el)
             // document.getElementById('note-place').appendChild(component.$el)
             store.dispatch('ckeditorNote/showPoupUp', true)
             store.dispatch('ckeditorNote/placePoupUp', $('#note-place'))
           }
        };
      });
    }
  });
}
