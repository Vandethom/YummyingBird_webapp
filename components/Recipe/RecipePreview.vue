<template>
    <div v-show='recipe' class='preview-container'>
        <div v-show='recipe.title' class='preview-value'>
            <h2>{{ recipe.title }}</h2>
            <button id='title' @click='deleteValue'>x</button>
            <button><img class='icon-edit' src='@/assets/icons/icon_edit.svg'></button>
        </div>
        <div v-show='recipe.description' class='preview-value'>
            <p>{{ recipe.description }}</p>
            <button id='description' @click='deleteValue'>x</button>
            <button><img class='icon-edit' src='@/assets/icons/icon_edit.svg'></button>
        </div>
        <div v-show='recipe.categories' class='preview-value'>
            <ul>
                <h4>Catégories:</h4>
                <li v-for='category in recipe.categories' :id='"category"+index' :key='category'>
                    {{ category }}
                    <button :id='"categories_" + recipe.categories.indexOf(category, fromIndex)' @click='deleteValue'>x</button>
                    <button><img class='icon-edit' src='@/assets/icons/icon_edit.svg'></button>
                </li>
            </ul>
        </div>
        <div v-show='recipe.preparationTime' class='preview-value'>
            <p>Durée de préparation : {{ recipe.preparationTime }} min</p>
            <button id='preparationTime' @click='deleteValue'>x</button>
            <button><img class='icon-edit' src='@/assets/icons/icon_edit.svg'></button>
        </div>
        <div v-show='recipe.ingredients' class='preview-value'>
            <ul>
                <h4>Ingrédients:</h4>
                <li v-for='ingredient in recipe.ingredients' :key='ingredient'>
                    {{ ingredient }}
                    <button :id='"ingredients_" + recipe.ingredients.indexOf(ingredient, fromIndex)' @click='deleteValue'>x</button>
                    <button><img class='icon-edit' src='@/assets/icons/icon_edit.svg'></button>
                </li>
            </ul>
        </div>
        <div v-show='recipe.vegan || recipe.porkFree || recipe.glutenFree' class='preview-value'>
            <p>La recette est sans :</p> 
            <ul>
                <li v-if='recipe.vegan'>
                    Viande
                    <button id='vegan' @click='deleteValue'>x</button>
                    <button><img class='icon-edit' src='@/assets/icons/icon_edit.svg'></button>
                </li>
                <li v-if='recipe.porkFree'>
                    Porc
                    <button id='porkFree' @click='deleteValue'>x</button>
                    <button><img class='icon-edit' src='@/assets/icons/icon_edit.svg'></button>
                </li>
                <li v-if='recipe.glutenFree'>
                    Gluten
                    <button id='glutenFree' @click='deleteValue'>x</button>
                    <button><img class='icon-edit' src='@/assets/icons/icon_edit.svg'></button>
                </li>
            </ul>
        </div>
        <div v-show='recipe.tools' class='preview-value'>
            <ul>
                <h4>Ustensiles:</h4>
                <li v-for='tool in recipe.tools' :key='tool'>
                    {{ tool }}
                    <button :id='"tools_" + recipe.tools.indexOf(tool, fromIndex)' @click='deleteValue'>x</button>
                    <button><img class='icon-edit' src='@/assets/icons/icon_edit.svg'></button>
                </li>
            </ul>
        </div>
        <div v-show='recipe.steps' class='preview-value'>
            <ul>
                <h4>Etapes de préparation:</h4>
                <li v-for='step in recipe.steps' :key='step'>
                    {{ step }}   
                    <button :id='"steps_" + recipe.steps.indexOf(step, fromIndex)' @click='deleteValue'>x</button>
                    <button><img class='icon-edit' src='@/assets/icons/icon_edit.svg'></button>
                </li>
            </ul>
        </div>
        <div v-show='recipe.options' class='preview-value'>
            <ul>
                <h4>Options et astuces:</h4>
                <li v-for='option in recipe.options' :key='option'>
                    {{ option }}
                    <button :id='"options_" + recipe.options.indexOf(option, fromIndex)' @click='deleteValue'>x</button>
                    <button><img class='icon-edit' src='@/assets/icons/icon_edit.svg'></button>
                </li>
            </ul>
        </div>
        <!-- <div v-show='recipe.photo' class='preview-value'>
            <img :src="recipe.imageUrl" alt="Photo of the recipe">
        </div>
        <p v-if='recipe.imageUrl'>{{ recipe.imageUrl }}</p> -->
        <div class='open-menu-arrow'>
            <img src="@/assets/icons/icon_arrow_left.svg" alt="arrow to left" @click='openPreview'>
        </div>
    </div>
</template>

<script>
    import { gsap } from 'gsap'

    export default {
        'computed': {
            recipe() {
                return this.$store.state.recipe.recipe
            }
        },

        created() {
            // mutation, though unnused variable, is needed as parameter to subscribe()
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            this.unsubscribe = this.$store.subscribe((mutation, state) => {
                this.recipe = state.recipe.recipe.title
            });
        },

        methods: {
            deleteValue(e) {
                const value = e.target.id
                
                this.$store.commit('recipe/deleteData', value)
            },

            openPreview() {
                gsap.to('.preview-container', {
                    'transform': 'translateX(10%)'
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .preview-container {
        background: #5784BA;
        position: relative;
        padding: 16px;
        right: 0;
        border-radius: 7px 0 0 7px;
        transform: translateX(97%);

        .preview-value {
            display: grid;
            grid-template-columns: 1fr auto auto;
            place-items: center;
            width: 32vw;
            margin-right: 80px;

            button {
                display: grid;
                place-items: center;
                margin-left: 8px;
                width: 25px;
                height: 25px;
            }

            .icon-edit {
                margin: auto;
                width: 13px;
                height: 13px;
            }

            ul {
                list-style-type: none;

                li {
                    display: flex;
                    margin-bottom: 6px;
                    display: grid;
                    grid-template-columns: 1fr auto auto;
                }
            }
        }

        .open-menu-arrow {
            display: grid;
            place-items: center;
            position: relative;
            top: -75%;
            left: -50px;
            width: 80px;
            height: 120px;
            background: #5784BA;
            border-radius: 7px;
            transition: transform 0.3s ease;
            animation-fill-mode: repeat;

            &:hover {
                transform: translateX(-10px);
                filter: drop-shadow(10px 10px 30px #5784BA);
            }

            img {
                width: 80px;
                height: 80px;
                filter: contrast(100%);
            }
        }
    }

    @media only screen and (max-width: 1440px) {
        .preview-container {
            display: none;
        }
    }

</style>