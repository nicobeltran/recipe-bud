import { FC } from 'react'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { RecipeListItemProps } from '../types/RecipeTypes';
import './RecipeListItem.css'
import { Link, useRouteMatch } from 'react-router-dom';

const RecipeListItem: FC<RecipeListItemProps> = ({ recipe }) : JSX.Element => {

    const createdDate = new Date(recipe.created_at);
    let match = useRouteMatch();

    return (
        <Link to={`${match.path}/${recipe.id}`}>
            <Container className="recipeListItem">
                <Row>
                    <h2>{recipe.name}</h2>
                </Row>
                <Row>
                    <p>Added {`${createdDate.getMonth()}/${createdDate.getDate()}/${createdDate.getFullYear()}`}</p>
                </Row>
            </Container>
        </Link>
        
    )
}

export default RecipeListItem;