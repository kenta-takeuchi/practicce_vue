<template>
    <div>
        <h3>掲示板に投稿する</h3>
        <label for="name">ニックネーム：</label>
        <input id="name" type="text" v-model="name">

        <br><br>

        <label for="comment">コメント：</label>
        <textarea id="comment" v-model="comment"></textarea>

        <br><br>

        <button @click="createComment">コメントをサーバーに送る</button>

        <h2>掲示板</h2>
        <div v-for="post in posts" :key="post.name">
            <br>
            <div>名前：{{ post.name }}</div>
            <div>コメント：{{ post.comment }}</div>
        </div>

    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "Comments",
        data() {
            return {
                name: '',
                comment: '',
                posts: []
            }
        },
        created() {
            axios.get('/comments')
                .then(response => {
                    this.posts = response.data.documents
                }).catch(error => {
                console.log(error)
            })
        },
        methods: {
            createComment() {
                axios.post('/comments', {name: this.name, comment: this.comment})
            }
        }
    }
</script>

<style scoped>

</style>