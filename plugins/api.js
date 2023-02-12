import Vue from 'vue'
import axios from 'axios'

class Api {
  constructor( store ) {
      this.$store = store
  }

  async createRecipe ( newRecipe ) {
    try {
      const payload = await axios.post( 'https://nl968j615m.execute-api.eu-west-3.amazonaws.com/dev/recipe', newRecipe )
      return payload  

    } catch ( error ) {
      console.log( error )
    }
  }

  async getAllRecipes () {
    const recipes = await axios.get( 'https://nl968j615m.execute-api.eu-west-3.amazonaws.com/dev/recipes' )

    return recipes
  }

  async getRecipe ( uuid ) {
    const recipe = await axios.get( `https://nl968j615m.execute-api.eu-west-3.amazonaws.com/dev/recipe/${uuid}` )

    return recipe.data
  }
}

export default ({ store }) => {
    const api = new Api( store )

    Vue.prototype.$api = api
    Vue.$api = api
}