<template>
    <div class='recipe-card'>
        <img :src="`${image}`" alt="">
        <div class='recipe-informations'>
            <h2>{{ title }}</h2>
            <p>{{ description }}</p>
            <p>{{ duration }} min</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            image : { type: String, required: true },
            title: { type: String, required: true },
            description: { type: String, required: true },
            duration: { type: Number, required: true },
            glutenfree: { type: Boolean, required: true },
            porkfree: { type: Boolean, required: true },
            vegan: { type: Boolean, required: true }
        }
    }
</script>

<style lang="scss" scoped>
    .recipe-card {
        width: 34vw;
        height: 25vh;
        background-color: #f1efef;
        display: flex;

        .recipe-informations {
            display: grid;
            place-items: center;
            margin: auto;
            grid-template-rows: 10px 150px 10px;
        }
    }
</style>