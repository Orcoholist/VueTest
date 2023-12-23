export default {
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    methods: {
       hideDialog() {
           this.$emit('update:show', false)
       }
    },
    mounted() {
        this.$emit('toggled', this.isToggled)
        console.log('mixin mounted');
    }
}