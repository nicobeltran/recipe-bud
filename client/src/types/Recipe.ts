export interface Recipe {
    id: number,
    name: string,
    created_at: Date,
    updated_at: Date,
    user_id: number
}

export interface RecipeProps {
    recipes: Array<Recipe>
}

export interface RecipeListItemProps {
    recipe: Recipe
}
