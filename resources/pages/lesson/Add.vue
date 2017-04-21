<template>
  <div class="">
    <section class="content-header">
      <h1>
        Add new post
      </h1>
      <!--<ol class="breadcrumb">-->
      <!--<li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>-->
      <!--<li><a href="#">Forms</a></li>-->
      <!--<li class="active">General Elements</li>-->
      <!--</ol>-->
    </section>

    <section class="content">
      <div class="row">
        <div class="col-xs-12">


          <div class="box box-primary">
            <!-- /.box-header -->
            <!-- form start -->
            <div class="box-body">
              <div class="form-group">
                <label>Title:</label>
                <input class="form-control" v-model="title">
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Text</label>
                <ckeditor v-model="text" :config="editorConfig"></ckeditor>
              </div>
              <div class="form-group">
                <el-collapse v-model="activeExample" accordion>
                  <el-collapse-item v-for="(example, key) in examples" :title="'Example ' + (key+1)" :key="example" :name="key">
                    <quill-editor v-model="example.text"></quill-editor>
                        <button :disabled="sending" class="btn btn-danger pull-right" @click="removeExample(key)">Remove example</button>
                  </el-collapse-item>
                </el-collapse>
              </div>
              <button :disabled="sending" class="btn btn-success" @click="addExample">Add example</button>

            </div>
            <!-- /.box-body -->

            <div class="box-footer">
              <button :disabled="sending" class="btn btn-primary" @click="save">Save</button>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>

</template>

<script>
  import QuillEditor from '~components/ui/QuillEditor.vue'

  export default {
    layout: 'private',
    components: {
      QuillEditor
    },
    data () {
      return {
        title: '',
        text: '',
        isClient: false,
        examples: [
          {
            text: null,
          }
        ],
        activeExample: 0,
        editorConfig: {
          toolbar: [[ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', 'Abbr' ]],
          height: 300,
          extraPlugins: 'abbr'
        },
        sending: false
      }
    },
    computed: {
      creds () {
        return {
          title: this.title,
          text: this.text,
          example: this.examples
        }
      }
    },
    methods: {
      addExample () {
        this.examples.push({
          text: null,
        })
      },
      removeExample (index) {
        this.examples.splice(index, 1)
      },
      save () {
        this.sending = true
        this.axios.post('crud/post', this.creds).then((res) => {
          this.sending = false
          console.log(res)
        }).catch(() => {
          this.sending = false
        })
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>