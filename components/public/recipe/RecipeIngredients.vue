<template>
    <div>
        <h2>Ingrédients</h2>
        <div v-for='ingredient in ingredients' :key='ingredient' class="ingredients">
            <p>{{ ingredient }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            ingredients: {
                type: Array,
                default() { 
                    return [] }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>