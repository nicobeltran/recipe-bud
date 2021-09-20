class Api::V1::IngredientsController < ApplicationController
    before_action :find_ingredient, only: [:show, :update, :destroy]

    def index
        @ingredients = Ingredient.all
        render json: @ingredients
    end

    def show
        render json: @ingredient
    end

    def create
        @ingredient = Ingredient.new(ingredient_params)
        if @ingredient.save
            render json: { Done: {}}
        else
            render json: { error: 'Unable to create ingredient.'}, status: 400
        end
    end

    def destroy
        if @ingredient
            @ingredient.destroy
            render json: { message: 'Ingredient removed successfully.'}, status: 200
        else
            render json: { error: 'Unable to remove ingredient.'}, status: 400
        end
    end

    private

    def ingredient_params
        params.require(:ingredient).permit(:quantity, :item, :uom, :recipe_id)
    end

    def find_ingredient
        @ingredient = Ingredient.find(params[:id])
    end
end
