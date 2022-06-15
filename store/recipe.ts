export const state = {
    recipe: {
        uuid: '',
        authorUuid: '34ae65c3-426d-4327-8dbc-78bca22197fa',

        title: '',
        description: '',
        categories: [],
        preparationTime: 0,
        ingredients: [],

        vegan: false,
        glutenFree: false,
        porkFree: false,

        steps: [],
        options: [],
        tools: [],
        imageUrl: ''
    }
}


function storeData(key: any, value: any, state: any) {
    state.recipe[key] = value
}


export const mutations = {    
    storeTitle(state: any, title: string) {
        storeData('title', title, state)
        state.count += 1
        return state
    },

    storeDescription(state: any, description: string) {
        storeData('description', description, state)
    },

    storeCategory(state: any, category: string) {
        state.recipe.categories.push(category)
    },

    storePreparationTime(state: any, preparationTime: string) {
        storeData('preparationTime', parseInt(preparationTime), state)
    },

    storeIngredient(state: any, ingredient: string) {
        state.recipe.ingredients.push(ingredient)
    },    

    storeDiet(state: any, diet: string) {
        switch(diet) {
            case diet = 'vegan':
                state.recipe.vegan = !state.recipe.vegan
                break
            case diet = 'glutenFree':
                state.recipe.glutenFree = !state.recipe.glutenFree
                break
            case diet = 'porkFree':
                state.recipe.porkFree = !state.recipe.porkFree
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
    
    setUuid(state: any, uuid: string) {
        storeData('uuid', uuid, state)
    }
}
