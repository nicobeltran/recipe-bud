import { JsxElement } from "typescript";

export interface Recipe {
    id: number,
    name: string,
    created_at: Date,
    updated_at: Date,
    user_id: number
}

export interface RecipeListProps {
    recipes: Array<Recipe>
}

export interface RecipeListItemProps {
    recipe: Recipe
    key: number
}

export interface RecipeRoute {
    id: number
    path: string
    main: any
}
