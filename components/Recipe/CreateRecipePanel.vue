<template>
    <div class='createRecipe-container'>
        <div class='create-recipe-header'>
            <h2>Ajouter une recette</h2>
            <div class='buttons'>
                <button class='create-button button' @click='postRecipe'>Publier</button>
                <button id='preview-button' class='button'>Prévisualiser</button>
            </div>
        </div>
        <form enctype='multipart/form-data' @submit.prevent='preventer'>
            <Input 
                :id=' "name-input" '
                :type=' "text" '
                :placeholder=' "Gratin de citrouille" '
                :name=' "name" '
                :event='storeTitle'
            />
            <Input 
                :id=' "description-input" '
                :type=' "text" '
                :placeholder=' "Une recette onctueuse à manger chaud ou froid." '
                :name=' "description" '
                :event='storeDescription'
            />
            <Input 
                :id=' "category-input" '
                :type=' "text" '
                :placeholder=' "Méditerranéen" '
                :name=' "category" '
                :event='storeCategory'
            />
            <Input 
                :id=' "durationTime-input" '
                :type=' "number" '
                :placeholder=' 45 '
                :name=' "durationTime" '
                :event='storePreparationTime'
            />   
            <Input 
                :id=' "ingredient-input" '
                :type=' "text" '
                :placeholder=' "Potimarron" '
                :name=' "ingredient" '
                :event='storeIngredient'
            />   
            <Input 
                :name=' "diet" '
            />
            <Input 
                :id=' "step-input" '
                :type=' "text" '
                :placeholder=' "Découper les légumes en dés..." '
                :name=' "step" '
                :event='storeStep'
            />
            <Input 
                :id=' "option-input" '
                :type=' "text" '
                :placeholder=' "Ajouter un topping de cacahuètes en fin de cuisson..." '
                :name=' "option" '
                :event='storeOption'
            />
            <Input 
                :id=' "tool-input" '
                :type=' "text" '
                :placeholder=' "Marmite" '
                :name=' "tool" '
                :event='storeTool'
            />
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
        </form>
    </div>
</template>

<script>
    import Input from './utils/Input.vue'

    export default {
        components: {
            Input
        },

        created() {
            // mutation, though unnused variable, is needed as parameter to subscribe()
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            this.unsubscribe = this.$store.subscribe( ( mutation, state ) => {
                this.recipe = state.recipe.recipe.name
            });
        },

        methods: {
            addInput( e ) {
                const key = e.target.name         
            },

            preventer( e ) {
                e.preventDefault()
            },


            async postRecipe() {
                const storedRecipe = this.$store.state.recipe.recipe
                const newRecipe = {
                        authorUuid: this.$auth.id,
                        ...storedRecipe
                    }

                await this.$api.createRecipe( newRecipe )

                this.$store.commit( 'recipe/clearState' )
                this.$router.push( '/' )
            }
        }
    }
</script>

<style lang='scss' scoped>
    .createRecipe-container {
        margin-left: 22vw;
        
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

                .create-button {
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
        // form {
        //     label:not(.diet-label) {
        //         display: grid;
        //         grid-template-columns: minmax(5vw, max-content) minmax(8vw, max-content) 20%;
        //         place-items: center left;
        //         margin-top: 24px;
        //         font-family: 'Barlow Condensed';
        //         font-size: 20px;
        //         font-weight: bold;

                

        //         input, textarea {
        //             padding-left: 16px;
        //             background-color: #B6D8F2;
        //             border: none;
        //             border-radius: 6px;
        //             font-family: 'Barlow Light';
        //             font-size: 16px;
        //             margin: 4px 10px 0 6px;
        //         }

        //         textarea {
        //             padding: 16px;
        //             width: 300px;
        //         }

        //         input {
        //             width: 315px;
        //             height: 40px;
        //         }

        //         img {
        //             width: 34px;
        //             height: 34px;
        //             cursor: pointer;
        //         }

        //         .input-measureUnit {
        //             display: grid;
        //             grid-template-columns: 72px 40px 56px;
        //             place-items: center;

        //             input {
        //                 width: 60px;
        //             }

        //             .measure-unit {
        //                 margin-top: 4px;
        //                 background: #5784BA;
        //                 color: #F2F2F2;
        //                 width: 44px;
        //                 height: 42px;
        //                 border-radius: 0 6px 6px 0;

        //                 .unit-option {
        //                     font-size: 16px;
        //                 }
        //             }
        //         }
        //     }

        //     fieldset {
        //         margin-top: 18px;
                
        //         legend {
        //             margin-top: 24px;
        //             font-family: 'Barlow Condensed';
        //             font-size: 20px;
        //             font-weight: bold;
        //         }
                   
        //     }
        //     #durationTime, #category, #ingredients, #imageUrl {
        //         width: 150px;
        //     }

        //     #uploadFile-label {
        //         display: grid;
        //         grid-template-columns: 60px 60px;
        //         place-items: center;
        //         width: 140px;
        //         height: 40px;
        //         margin-left: 5.5vw;
        //         padding-left: 16px;
        //         background-color: #B6D8F2;
        //         border: none;
        //         border-radius: 6px;
        //         font-family: 'Barlow Light';
        //         font-size: 14px;
        //         cursor: pointer;

        //         input {
        //             display: none;
        //         }
        //     }
        // }

        @media only screen and (max-width: 900px) {
            input {
                max-width: 60vw;
            }
        }
    }
</style>
