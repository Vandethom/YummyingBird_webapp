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
            image : { type: String, default: '' },
            title: { type: String, default: '' },
            description: { type: String, default: '' },
            duration: { type: Number, required: true },
            glutenfree: { type: Boolean },
            porkfree: { type: Boolean },
            vegan: { type: Boolean }
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