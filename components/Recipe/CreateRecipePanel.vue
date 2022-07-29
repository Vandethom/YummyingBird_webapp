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
                    id='name'
                    type='text' 
                    placeholder='Gratin de citrouille' 
                    name='name'
                    @change='storeTitle'
                />
            </label>
            <label>
                <span>Description :</span>
                <textarea 
                    id='description'
                    type='text' 
                    placeholder='Une souple facile et simple à réaliser...' 
                    name='description'
                    @change='storeDescription'
                />
            </label>
            <label>
                <span>Catégorie :</span>
                <input 
                    id='category'
                    type='text' 
                    placeholder='Méditerranéen' 
                    name='category' 
                />
                <img
                    src='~assets/icons/icon-add.svg'
                    alt='Icon add one'
                    @click='storeCategory'
                />
            </label>
            <label>
                <span>Durée :</span>
                <input 
                    id='durationTime'
                    type='number' 
                    placeholder='45' 
                    name='durationTime'
                    @change='storePreparationTime'
                />
            </label>
            <label>
                <span>Ingrédients :</span>
                <input 
                    id='ingredient'
                    type='text' 
                    placeholder='Gratin de citrouille' 
                    name='ingredient'
                />
                <img
                    src='~assets/icons/icon-add.svg'
                    alt='Icon add one'
                    @click='storeIngredient'
                />
            </label>
            <fieldset>
                <legend>La recette est-elle :</legend>
                <div>
                    <input
                        id='isVegan'
                        type='checkbox'
                        name='isVegan'
                        @click='storeDiet'
                    >
                    <label class='diet-label' for='isVegan'>vegan</label>
                </div>
                <div>
                    <input
                        id='isPorkFree'
                        type='checkbox'
                        name='isPorkFree'
                        @click='storeDiet'
                    >
                    <label class='diet-label' for='isPorkFree'>sans porc</label>
                </div>
                <div>
                    <input
                        id='isGlutenFree'
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
                    id='step'
                    type='text' 
                    placeholder='Découper les légumes en dés...' 
                    name='step' 
                />
                <img
                    src='~assets/icons/icon-add.svg'
                    alt='Icon add one'
                    @click='storeStep'
                />
            </label>
            <label>
                <span>Options :</span>
                <textarea 
                    id='option'
                    type='text' 
                    placeholder='Ajouter un topping de cacahuètes en fin de cuisson...' 
                    name='option' 
                />
                <img
                    src='~assets/icons/icon-add.svg'
                    alt='Icon add one'
                    @click='storeOption'
                />
            </label>
            <label>
                <span>Ustensiles :</span>
                <input 
                    id='tool'
                    type='text' 
                    placeholder='Gratin de citrouille' 
                    name='tool' 
                />
                <img
                    src='~assets/icons/icon-add.svg'
                    alt='Icon add one'
                    @click='storeTool'
                />
            </label>
            <label id='uploadFile-label'>
                <span>Photo :</span>
                <input 
                    id='imageUrl'
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
            
            <button id='create-button' type='submit' class='button' @click='postRecipe'>Publier</button>
        </form>
    </div>
</template>

<script>
    export default {        
        created() {
            // mutation, though unnused variable, is needed as parameter to subscribe()
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            this.unsubscribe = this.$store.subscribe((mutation, state) => {
                this.recipe = state.recipe.recipe.name
            });
        },

        methods: {
            storeTitle (e) {
                this.$store.commit('recipe/storeTitle', e.target.value)
            },

            storeDescription (e) {
                this.$store.commit('recipe/storeDescription', e.target.value)
            },
            
            storeCategory () {
                const category = document.getElementById('category').value
                this.$store.commit('recipe/storeCategory', category)
            },
            
            storePreparationTime (e) {
                this.$store.commit('recipe/storePreparationTime', e.target.value)
            },

            storeIngredient () {
                const ingredient = document.getElementById('ingredient').value
                this.$store.commit('recipe/storeIngredient', ingredient)
            },

            storeDiet (e) {
                const diet = e.target.id
                this.$store.commit('recipe/storeDiet', diet)
            },

            storeStep () {
                const step = document.getElementById('step').value
                this.$store.commit('recipe/storeStep', step)
            },

            storeOption () {
                const option = document.getElementById('option').value
                this.$store.commit('recipe/storeOption', option)
            },

            storeTool () {
                const tool = document.getElementById('tool').value
                this.$store.commit('recipe/storeTool', tool)
            },

            storeImageUrl (e) {
                this.$store.commit('recipe/storeImageUrl', e.target.files[0])
            },

            postRecipe(e) {
                e.preventDefault()
                
                const storedRecipe = this.$store.state.recipe.recipe

                const newRecipe = {
                    authorUuid: "1234567890",
                    ...storedRecipe
                }

                console.log(newRecipe)


                this.$axios.$post('https://nl968j615m.execute-api.eu-west-3.amazonaws.com/dev/recipe', newRecipe)
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    })  
                this.$store.commit('recipe/clearState')
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
                    width: 500px;
                    height: 40px;
                }

                img {
                    width: 34px;
                    height: 34px;
                    cursor: pointer;
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
