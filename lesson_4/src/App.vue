<template>
    <div>
        <LikeHeader></LikeHeader>
        <p>{{ number }}</p>
        <LikeNumber :total-number="number"></LikeNumber>
        <button @click="currentComponent = 'Home'">Home</button>
        <button @click="currentComponent = 'About'">About</button>
        <component :is="currentComponent"></component>
        <div>
            <h2>イベント</h2>
            <p>
                <label for="title">タイトル</label>
                <input id="title" type="text" v-model.lazy="eventData.title">

            </p>
            <p>
                <label for="maxNumber">最大人数</label>
                <input id="maxNumber" type="number" v-model.number="eventData.maxNumber">
            </p>

            <p>{{ eventData.maxNumber }}</p>
            <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate">
            <label for="isPrivate">非公開</label>
            <p> {{eventData.location }} </p>
            <select v-model="eventData.location">
                <option v-for="location in locations" :key="location">
                    {{location}}
                </option>
            </select>
        </div>
    </div>
</template>

<script>
    import LikeHeader from "./components/LikeHeader";
    import About from "./components/About";
    import Home from "./components/Home";


    export default {
        data() {
            return {
                number: 10,
                currentComponent: "Home",
                locations: ['東京', '大阪'],
                eventData: {
                    title: "タイトル",
                    maxNumber: 0,
                    isPrivate: true,
                    location: '東京'
                }
            }
        },
        components: {
            LikeHeader,
            About,
            Home
        }
    }
</script>