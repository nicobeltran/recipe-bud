class Api::V1::RecipesController < ApplicationController
    def index
        @recipes = Recipe.all
        render json: @recipes
    end

    def show
        @recipe = Recipe.find(params[:id])
        render json:@recipe
    end

    def create
        @recipe = Recipe.new(recipe_params)
        if @recipe.save
            render json: { Done: {}}
        else
            render error: { error: 'Unable to create recipe.'}, status: 400
        end
    end

    private

    def recipe_params
        params.require(:recipe).permit(:name, :user_id)
    end
end
