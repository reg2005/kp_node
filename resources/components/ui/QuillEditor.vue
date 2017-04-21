<template>
    <div class="quill-editor">
        <div class="ui attached segment"
             ref="editor"
             @click.prevent="focusEditor"
             v-on:focus-editor="focusEditor"
             v-on:set-html="setHTML"
             v-on:set-content="setContents">
        </div>
    </div>
</template>
<style lang="scss">
    @import url('https://cdnjs.cloudflare.com/ajax/libs/quill/1.2.0/quill.snow.min.css');

    .quill-editor {
        background: #fff;
    }
    .ql-editor{
        min-height: 300px;
    }
</style>
<script>
    export default {
        props: {
            value: {
                default: ''
            },
            author: {},
            formats: {
                type: Array,
                default: () => [],
            },
            keyBindings: {
                type: Array,
                default: () => [],
            },
            output: {default: 'deslta',},
            keyup: {default: null,},
            config: {
                type: Object,
                default: () => {
                    return {}
                },
            },
        },

        data() {
            return {
                editor: {},
                editorContent: this.value,
                defaultConfig: {
                    modules: {
                        toolbar: [
                            [{'font': []}],
                            [{'header': [1, 2, 3, 4, 5, 6, false]}],
                            ['bold', 'italic', 'underline', 'strike'],
                            ['link', 'image'],
                            ['blockquote', 'code-block'],
                            [
                                {'size': ['small', false, 'large', 'huge']}
                            ],
                            [
                                {'list': 'ordered'}, {'list': 'bullet'}
                            ],
                            [
                                {'script': 'sub'}, {'script': 'super'}
                            ],
                            [
                                {'indent': '-1'}, {'indent': '+1'}
                            ],
                            [
                                {'color': []}, {'background': []}
                            ],
                            [{'align': []}],
                            ['clean'],
                        ],
                    },
                    theme: 'snow',
                },
            }
        },
        beforeDestroy () {
            this.editor = {}
        },
        mounted () {
            if (typeof document == 'undefined') return
            var Quill = require('quill')

            this.editor = new Quill(this.$refs.editor, this.setOptions(this.defaultConfig, this.config))

            this.formats.map((format) => {
                this.editor.addFormat(format.name, format.options)
            })

            if (this.output !== 'delta') {
                this.editor.root.innerHTML = this.editorContent
            } else {
                this.editor.setContents(this.editorContent)
            }

            this.editor.on('text-change', (delta, source) => {
                this.$emit('text-change', this.editor, delta, source)
                this.editorContent = this.editor.root.innerHTML
                this.$emit('input', this.editorContent)

            })

            this.editor.on('selection-change', (range) => {
                this.$emit('selection-change', this.editor, range)
            })

            if (typeof this.author !== 'undefined') {
                this.editor.addModule('authorship', {
                    authorId: this.author,
                })
            }

            if (this.keyBindings.length) {
                const keyboard = this.editor.getModule('keyboard')

                this.keyBindings.map((binding) => {
                    keyboard.addHotkey({key: binding.key, metaKey: true}, binding.method.bind(this))
                })
            }
        },

        methods: {
            setOptions(defaults, properties) {
                for (let property in properties) {
                    if (properties.hasOwnProperty(property)) {
                        if (typeof properties[property] === Object) {
                            defaults[property] = this.setOptions(defaults[property], properties[property]);
                        } else {
                            defaults[property] = properties[property]
                        }
                    }
                }

                return defaults
            },
            focusEditor(e) {
                if (e && e.srcElement) {
                    let classList = e.srcElement.classList, isSegment = false

                    classList.forEach((className) => {
                        if (className === 'segment') {
                            isSegment = true
                            return
                        }
                    })

                    if (!isSegment) return
                }

                this.editor.focus()

                this.editor.setSelection(this.editor.getLength() - 1, this.editor.getLength())
            },
            setContents(content) {
                this.editor.setContents(content)
            },
            setHTML(html) {
                this.editor.root.innerHTML = html
            }
        },
        watch: {
            value (val, oldVal){
                console.log('new value')

                if (val !== this.editor.root.innerHTML) {
                    this.setHTML(val)
                }
            }
        }
    }
</script>