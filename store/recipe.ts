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

function storeData( key: any, value: any, state: any ) {
    state.recipe[key] = value
}


export const getters = {
    recipe( state: any ) {
        return state.recipe
    }
}

export const mutations = {   
    clearState(state: any) {
        state.recipe = {
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
    },
    
    deleteData( state: any, key: any) {
        const recipeKey = key.split('_').shift()
        const id = key.split('_').pop()

        switch (typeof state.recipe[recipeKey]){
            case 'string':
                state.recipe[key] = ''
                break
            
            case 'number':
                state.recipe[key] = undefined
                break

            case 'boolean': 
                state.recipe[ key ] = false
                break

            case 'object':
                state.recipe[ recipeKey ].splice( id, 1 )
                break
        }
    },

    storeTitle( state: any, name: string ) {
        storeData('name', name, state)
        return state
    },

    storeDescription( state: any, description: string ) {
        storeData( 'description', description, state )
    },

    storeCategory( state: any, category: string ) {
        state.recipe.categories.push( category )
    },

    storePreparationTime( state: any, durationTime: string ) {
        storeData( 'durationTime', parseInt( durationTime ), state )
    },

    storeIngredient( state: any, ingredient: string ) {
        state.recipe.ingredients.push( ingredient )
    },    

    storeDiet(state: any, diet: string) {
        switch(diet) {
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

    storeStep(state: any, step: string) {
        state.recipe.steps.push(step)
    },

    storeOption(state: any, option: string) {
        state.recipe.options.push(option)
    },

    storeTool(state: any, tool: string) {
        state.recipe.tools.push(tool)
    },

    storeImageUrl(state: any, imageUrl: string) {
        storeData('imageUrl', imageUrl, state)
    },
}
