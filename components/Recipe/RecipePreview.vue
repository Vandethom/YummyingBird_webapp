<template>
<div>
    <div v-show='recipe' class='preview-container'>
        <PreviewValue :id='"title"' :value='recipe.name' :type=' "title" '/>
        <PreviewValue :value='recipe.description' :type=' "text" '/>
        <div v-show='recipe.categories.length > 0' class='preview-value'>
            <ul>
                <h4>Catégories:</h4>
                <PreviewValue v-for='category in recipe.categories' :id='"categories_" + recipe.categories.indexOf(category, fromIndex)' :key='category' :value='category' :type=' "arrayElement" ' />
            </ul>
        </div>
        <PreviewValue :value=recipe.durationTime :type='"text"'/>
        <div v-show='recipe.ingredients.length > 0' class='preview-value'>
            <ul>
                <h4>Ingrédients:</h4>
                <PreviewValue v-for='ingredient in recipe.ingredients' :key='ingredient' :value='ingredient' :type=' "arrayElement" ' />

            </ul>
        </div>
        <div v-show='recipe.isVegan || recipe.isPorkFree || recipe.isGlutenFree' class='preview-value'>
            <p>La recette est sans :</p> 
            <ul>
                <li v-if='recipe.isVegan'>
                    Viande
                    <button id='vegan' @click='deleteValue'>x</button>
                    <button><img class='icon-edit' src='@/assets/icons/icon_edit.svg'></button>
                </li>
                <li v-if='recipe.isPorkFree'>
                    Porc
                    <button id='porkFree' @click='deleteValue'>x</button>
                    <button><img class='icon-edit' src='@/assets/icons/icon_edit.svg'></button>
                </li>
                <li v-if='recipe.isGlutenFree'>
                    Gluten
                    <button id='glutenFree' @click='deleteValue'>x</button>
                    <button><img class='icon-edit' src='@/assets/icons/icon_edit.svg'></button>
                </li>
            </ul>
        </div>
        <div v-show='recipe.tools.length > 0' class='preview-value'>
            <ul>
                <h4>Ustensiles:</h4>
                <PreviewValue v-for='tool in recipe.tools' :key='tool' :value='tool' :type=' "arrayElement" ' />
            </ul>
        </div>
        <div v-show='recipe.steps.length > 0' class='preview-value'>
            <ul>
                <h4>Etapes de préparation:</h4>
                <PreviewValue v-for='step in recipe.steps' :key='step' :value='step' :type=' "arrayElement" ' />

            </ul>
        </div>
        <div v-show='recipe.options.length > 0' class='preview-value'>
            <ul>
                <h4>Options et astuces:</h4>
                <PreviewValue v-for='option in recipe.options' :key='option' :value='option' :type=' "arrayElement" ' />

            </ul>
        </div>
        <!-- <div v-show='recipe.photo' class='preview-value'>
            <img :src="recipe.imageUrl" alt="Photo of the recipe">
        </div>
        <p v-if='recipe.imageUrl'>{{ recipe.imageUrl }}</p> -->
        
    </div>
    <div id='open-menu-arrow'>
            <img class='arrow' src="@/assets/icons/icon_arrow_left.svg" alt="arrow to left" @click='openPreview'>
        </div>
    </div>
</template>

<script>
    import { gsap } from 'gsap'
    import PreviewValue from './PreviewValue.vue'

    export default {
        components: {
            PreviewValue
        },

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
            openPreview() {
                const sliderName = document.getElementById('open-menu-arrow') || document.getElementById('close-menu-arrow')
                
                if (sliderName.id === 'open-menu-arrow') {
                    gsap.to('.preview-container', {
                        'transform': 'translateX(10%)'
                    })
                    gsap.to('.arrow', {
                        'transform': 'rotate(180deg)',
                        'duration': 0
                    })

                    sliderName.id = 'close-menu-arrow'

                } else {
                    gsap.to('.preview-container, #close-menu-arrow', {
                        'transform': 'translateX(95%)'
                    })
                    gsap.to('.arrow', {
                        'transform': 'rotate(360deg)',
                        'duration': 0
                    })

                    sliderName.id = 'open-menu-arrow'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .preview-container {
        background: #5784BA;
        width: 30vw;
        position: relative;
        padding: 16px;
        right: -120px;
        border-radius: 7px 0 0 7px;
        transform: translateX(97%);
    }

    #open-menu-arrow, #close-menu-arrow {
            display: grid;
            place-items: center;
            position: relative;
            margin: 40px -60px;
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

    @media only screen and (max-width: 1440px) {
        .preview-container {
            display: none;
        }
    }
</style>