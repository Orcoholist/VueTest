<template>
    <input class="input" type="text" @input="updateInput" :value="modelValue">
</template>

<script>
export default {
    name: 'my-input',
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>


<style>
.input {
    width: 100%;
    padding: 10px 15px;
    border: 1px solid teal;
    margin-top: 15px;
}
</style>