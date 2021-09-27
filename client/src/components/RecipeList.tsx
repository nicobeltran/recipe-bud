import { FC } from 'react';
import Col from 'react-bootstrap/Col';
import { RecipeListProps } from '../types/RecipeTypes';
import RecipeListItem from './RecipeListItem';

const RecipeList: FC<RecipeListProps> = ( { recipes }): JSX.Element => { 
    
    const recipeListItems = recipes.map((recipe) => {
        return <RecipeListItem recipe={recipe} key={recipe.id}>
            </RecipeListItem>
    })
    
    return (
        <Col>
            {recipeListItems}
        </Col>
    )
}

export default RecipeList