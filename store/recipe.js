export const state = () => ({
    recipe: {
        name: '',

        description: '',
        categories: [],
        durationTime: 0,
        ingredients: [],

        isVegan: false,
        isGlutenFree: false,
        isPorkFree: false,

        steps: [],
        options: [],
        tools: [],

        imageUrl: ''
    }
})

function storeData( key, value, state ) {
    state.recipe[key] = value
}

const defaultRecipeState = () => ({
    name: '',
    
    description: '',
    categories: [],
    durationTime: 0,
    ingredients: [],

    isVegan: false,
    isGlutenFree: false,
    isPorkFree: false,

    steps: [],
    options: [],
    tools: [],

    imageUrl: ''
})

export const getters = {
    recipe(state) {
        return state.recipe
    }
}

export const mutations = {
    set( state, recipe ) {
        state.recipe = recipe
    }
}

export const actions = {
    clearState( state ) {
        state.recipe = defaultRecipeState
    },

    deleteData( state, key ) {
        const recipeKey = key.split( '_' ).shift()
        const id = key.split( '_' ).pop()

        switch ( typeof state.recipe[ recipeKey ] ){
            case 'string':
                state.recipe[ key ] = defaultRecipeState[ key ]
                break
            
            case 'number':
                state.recipe[ key ] = undefined
                break

            case 'boolean': 
                state.recipe[ key ] = !state.recipe[ key ]
                break

            case 'object':
                state.recipe[ recipeKey ].splice( id, 1 )
                break
        }
    },

    storeName( state, name ) {
        state.recipe.name = name
        return state
    },

    storeDescription( state, description ) {
        storeData( 'description', description, state )
    },

    storeCategory( state, category ) {
        state.recipe.categories.push( category )
    },

    storePreparationTime( state, durationTime ) {
        storeData( 'durationTime', parseInt( durationTime ), state )
    },

    storeIngredient( state, ingredient ) {
        state.recipe.ingredients.push( ingredient )
    },    

    storeDiet( state, diet ) {
        switch( diet ) {
            case diet = 'isVegan':
                state.recipe.isVegan = !state.recipe.isVegan
                break
            case diet = 'isGlutenFree':
                state.recipe.isGlutenFree = !state.recipe.isGlutenFree
                break
            case diet = 'isPorkFree':
                state.recipe.isPorkFree = !state.recipe.isPorkFree
                break
        }
    },

    storeStep( state, step ) {
        state.recipe.steps.push( step )
    },

    storeOption( state, option ) {
        state.recipe.options.push( option )
    },

    storeTool( state, tool ) {
        state.recipe.tools.push( tool )
    },

    storeImageUrl( state, imageUrl ) {
        storeData( 'imageUrl', imageUrl, state )
    },
}
