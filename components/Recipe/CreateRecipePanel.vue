<template>
    <div class='createRecipe-container'>
        <div class='create-recipe-header'>
            <h2>Ajouter une recette</h2>
            <div class='buttons'>
                <button id='create-button' class='button' @click='postRecipe'>Publier</button>
                <button id='preview-button' class='button'>Prévisualiser</button>
            </div>
        </div>
        <form enctype='multipart/form-data' @submit.prevent='submitForm'>
            <label>
                <span>Titre :</span>
                <input 
                    id='name-input'
                    type='text' 
                    placeholder='Gratin de citrouille' 
                    name='name'
                    @change='storeTitle'
                />
            </label>
            <label>
                <span>Description :</span>
                <textarea 
                    id='description-input'
                    type='text' 
                    placeholder='Une souple facile et simple à réaliser...' 
                    name='description'
                    @change='storeDescription'
                />
            </label>
            <label>
                <span>Catégorie :</span>
                <input 
                    id='category-input'
                    type='text' 
                    placeholder='Méditerranéen' 
                    name='category' 
                />
                <img src='~/assets/icons/button_round_add.svg' class='button-add-one' @click='storeCategory'/>
            </label>
            <label>
                <span>Durée :</span>
                <input 
                    id='durationTime-input'
                    type='number' 
                    placeholder='45' 
                    name='durationTime'
                    @change='storePreparationTime'
                />
            </label>
            <label>
                <span>Ingrédients :</span>
                <input 
                    id='ingredient-input'
                    type='text' 
                    placeholder='Gratin de citrouille' 
                    name='ingredient'
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
                    <img src='~/assets/icons/button_round_add.svg' class='button-add-one' @click='storeIngredient'/>
                </div>
            </label>
            <fieldset>
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
            <label>
                <span>Etapes :</span>
                <textarea 
                    id='step-input'
                    type='text' 
                    placeholder='Découper les légumes en dés...' 
                    name='step' 
                />                
                <img src='~/assets/icons/button_round_add.svg' class='button-add-one' @click='storeStep'/>
            </label>
            <label>
                <span>Options :</span>
                <textarea 
                    id='option-input'
                    type='text' 
                    placeholder='Ajouter un topping de cacahuètes en fin de cuisson...' 
                    name='option' 
                />
                <img src='~/assets/icons/button_round_add.svg' class='button-add-one' @click='storeOption'/>
            </label>
            <label>
                <span>Ustensiles :</span>
                <input 
                    id='tool-input'
                    type='text' 
                    placeholder='Gratin de citrouille' 
                    name='tool' 
                />
                <img src='~/assets/icons/button_round_add.svg' class='button-add-one' @click='storeTool'/>
            </label>
            <label id='uploadFile-label'>
                <span>Photo :</span>
                <input 
                    id='imageUrl-input'
                    type='file'
                    name='imageUrl' 
                    accept='image/png, image/jpg, image/jpeg'
                    @change='storeImageUrl'
                />
                <img
                    src='~assets/icons/icon_uploadFile.png'
                    alt='File uploading icon'
                >
            </label>
            
            <button id='create-button' type='submit' class='button' @preventDefault='postRecipe'>Publier</button>
        </form>
    </div>
</template>

<script>
    export default {
        computed: {
            /*
                    Change input Ids to avoid confusion with preview ids bearing the same name
                    Create function to uncheck checkbox whenever corresponding value is deleted in preview
             */
        },

        created() {
            // mutation, though unnused variable, is needed as parameter to subscribe()
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            this.unsubscribe = this.$store.subscribe( ( mutation, state ) => {
                this.recipe = state.recipe.recipe.name
            });
        },

        methods: {
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

            async postRecipe() {
                const storedRecipe = this.$store.state.recipe.recipe
                const newRecipe = {
                        authorUuid: this.$auth.id,
                        ...storedRecipe
                    }

                await this.$api.createRecipe( newRecipe )

                // this.$store.commit( 'recipe/clearState' )
                this.$router.push( '/' )
            }
        }
    }
</script>

<style lang='scss' scoped>
    .createRecipe-container {
        margin-left: 25vw;
        
        .create-recipe-header {
            display: flex;
            align-items: center;
            justify-content: space-evenly;

            h2 {
                font-family: 'Barlow SemiCondensed';
                font-size: 32px;
                font-weight: bold;
                text-align: center;
            }
    
            .buttons {
                .button {
                    border-radius: 6px;
                    width: 140px;
                    height: 50px;
                    border: none;
                    font-family: 'Barlow Condensed';
                    font-size: 22px;
                    cursor: pointer;
                }

                #create-button {
                    background-color: #5784BA;
                }

                #preview-button {
                    margin-left: 14px;
                    background-color: #F7F6CF;
                }
            }
        }

        .button-add-one {
            margin: 4px 12px;
        }
        form {
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
        }

        @media only screen and (max-width: 900px) {
            input {
                max-width: 60vw;
            }
        }
    }
</style>
