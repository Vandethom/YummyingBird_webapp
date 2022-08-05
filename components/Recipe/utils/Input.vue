<template>
    <label v-if=' name === "name" || name === "description" || name === "durationTime" '>
        <span>{{ name }} :</span>
        <input 
            :id='id'
            :type='type' 
            :placeholder='placeholder' 
            :name='name'
            @change='storeData'
            @keyup.enter='addInput'
        />
    </label>

    <label v-else-if=' name === "category" || name === "step" || name === "option" || name === "tool" '>
        <span>{{ name }} :</span>
        <input 
            :id='id'
            :type='type'
            :placeholder='placeholder' 
            :name='name'
        />
        <img src='~/assets/icons/button_round_add.svg' :name='name' class='button-add-one' @click='storeData'/>
    </label>

    <label v-else-if=' name === "ingredient" '>
        <span>Ingrédients :</span>
        <input 
            :id='id'
            :type='type' 
            :placeholder='placeholder' 
            :name='name'
        />
        <div class='input-measureUnit'>
            <input
                id='ingredient-measure-input'
                type="number"
                placeholder=0
                name='ingredientQuantity'
            >
            <select id='measure-unit' class='measure-unit' name='measureUnit'>
                <option id='g-unit' class='unit-option' value='g'>g</option>
                <option id='kg-unit' class='unit-option' value='kg'>kg</option>
                <option id='ml-unit' class='unit-option' value='ml'>ml</option>
                <option id='cl-unit' class='unit-option' value='cl'>cl</option>
                <option id='ts-unit' class='unit-option' value='ts'>ts</option>
            </select>
            <img src='~/assets/icons/button_round_add.svg' :name='name' class='button-add-one' @click='storeData'/>
        </div>
    </label>

    <fieldset v-else-if=' name === "diet" '>
        <legend>La recette est-elle :</legend>
        <div>
            <input
                id='isVegan-input'
                type='checkbox'
                name='isVegan'
                @click='storeDiet'
            >
            <label class='diet-label' for='isVegan'>vegan</label>
        </div>
        <div>
            <input
                id='isPorkFree-input'
                type='checkbox'
                name='isPorkFree'
                @click='storeDiet'
            >
            <label class='diet-label' for='isPorkFree'>sans porc</label>
        </div>
        <div>
            <input
                id='isGlutenFree-input'
                type='checkbox'
                name='isGlutenFree'
                @click='storeDiet'
            >
            <label class='diet-label' for='isGlutenFree'>sans gluten</label>
        </div>
    </fieldset>
</template>

<script>
    export default {
        props: {
            'id': {
                type: String,
                default: ''
            },
            'name': {
                type: String,
                default: ''
            },
            'placeholder': {
                type: String,
                default: ''
            },
            'type': {
                type: String,
                default: ''
            },
            'event': {
                type: Function,
                default: console.log(undefined)
            }
        },

        methods: {
            storeData ( e ) {
                const key = e.target.name
                
                switch ( key ) {
                    case 'name':
                        this.storeTitle( e )
                        break

                    case 'description':
                        this.storeDescription( e )
                        break

                    case 'durationTime':
                        this.storePreparationTime( e )
                        break

                    case 'category':
                        this.storeCategory()
                        break

                    case 'ingredient':
                        this.storeIngredient()
                        break

                    case 'diet':
                        this.storeDiet( e )
                        break

                    case 'step':
                        this.storeStep()
                        break

                    case 'option':
                        this.storeOption()
                        break

                    case 'tool':
                        this.storeTool()
                        break

                    case 'imageUrl':
                        this.storeImageUrl()
                        break
                }
            },

            storeTitle (e) {
                this.$store.commit( 'recipe/storeTitle', e.target.value )
            },

            storeDescription (e) {
                this.$store.commit( 'recipe/storeDescription', e.target.value )
            },
            
            storeCategory () {
                const category = document.getElementById( 'category-input' ).value
                this.$store.commit( 'recipe/storeCategory', category )
            },
            
            storePreparationTime (e) {
                this.$store.commit( 'recipe/storePreparationTime', e.target.value )
            },

            storeIngredient () {
                const ingredientName = document.getElementById( 'ingredient-input' ).value
                const unit = document.getElementById('measure-unit').value
                const measure = document.getElementById( 'ingredient-measure-input' ).value
                const ingredient = {
                    [ingredientName]: `${measure}${unit}`
                }
                
                this.$store.commit( 'recipe/storeIngredient', ingredient )
            },

            storeDiet (e) {
                const diet = e.target.id
                this.$store.commit( 'recipe/storeDiet', diet )
            },

            storeStep () {
                const step = document.getElementById('step-input').value
                this.$store.commit( 'recipe/storeStep', step )
            },

            storeOption () {
                const option = document.getElementById( 'option-input' ).value
                this.$store.commit( 'recipe/storeOption', option )
            },

            storeTool () {
                const tool = document.getElementById( 'tool-input' ).value
                this.$store.commit( 'recipe/storeTool', tool )
            },

            storeImageUrl (e) {
                this.$store.commit( 'recipe/storeImageUrl', e.target.files[0].name )
            },
        }
    }
</script>

<style lang="scss" scoped>
    label:not(.diet-label) {
        display: grid;
        grid-template-columns: minmax(5vw, max-content) minmax(8vw, max-content) 20%;
        place-items: center left;
        margin-top: 24px;
        font-family: 'Barlow Condensed';
        font-size: 20px;
        font-weight: bold;

        

        input, textarea {
            padding-left: 16px;
            background-color: #B6D8F2;
            border: none;
            border-radius: 6px;
            font-family: 'Barlow Light';
            font-size: 16px;
            margin: 4px 10px 0 6px;
        }

        textarea {
            padding: 16px;
            width: 300px;
        }

        input {
            width: 315px;
            height: 40px;
        }

        img {
            width: 34px;
            height: 34px;
            cursor: pointer;
        }

        .input-measureUnit {
            display: grid;
            grid-template-columns: 72px 40px 56px;
            place-items: center;

            input {
                width: 60px;
            }

            .measure-unit {
                margin-top: 4px;
                background: #5784BA;
                color: #F2F2F2;
                width: 44px;
                height: 42px;
                border-radius: 0 6px 6px 0;

                .unit-option {
                    font-size: 16px;
                }
            }
        }
    }

    fieldset {
        margin-top: 18px;
        
        legend {
            margin-top: 24px;
            font-family: 'Barlow Condensed';
            font-size: 20px;
            font-weight: bold;
        }
            
    }
    #durationTime, #category, #ingredients, #imageUrl {
        width: 150px;
    }

    #uploadFile-label {
        display: grid;
        grid-template-columns: 60px 60px;
        place-items: center;
        width: 140px;
        height: 40px;
        margin-left: 5.5vw;
        padding-left: 16px;
        background-color: #B6D8F2;
        border: none;
        border-radius: 6px;
        font-family: 'Barlow Light';
        font-size: 14px;
        cursor: pointer;

        input {
            display: none;
        }
    }
</style>