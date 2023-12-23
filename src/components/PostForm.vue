<template>
    <form @submit.prevent>
        <h4>Создать пост</h4>
        <my-input v-focus v-model="post.title" type="text" placeholder="Название" />
        <my-input v-model="post.body" type="text" placeholder="Описание" />
        <my-button style="align-self: flex-end; margin-top: 15px;" @click="createPost">Создать</my-button>
    </form>
</template>

<script>

export default {
    data() {
        return {
            post: {
                title: '',
                body: ''
            }
        }
    },
    methods: {
        createPost() {
            this.post.id = Date.now()
            this.$emit('create', this.post)
            this.post = {
                title: '',
                body: ''
            }
        }
    }
}
</script>

<style>
form {
    display: flex;
    flex-direction: column;
}
</style>



<!-- old  
            v-bind:value="post.title" @input="post.title = $event.target.value" 
             v-bind:value="post.body" @input="post.body = $event.target.value" 
        --> 