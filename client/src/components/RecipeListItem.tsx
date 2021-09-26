import { FC } from 'react'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { RecipeListItemProps } from '../types/Recipe';

const RecipeListItem: FC<RecipeListItemProps> = ({ recipe }) : JSX.Element => {

    const createdDate = new Date(recipe.created_at);

    return (
        <Container> 
            <Row>
                <h2>{recipe.name}</h2>
            </Row>
            <Row>
                <p>Added {`${createdDate.getMonth()}/${createdDate.getDate()}/${createdDate.getFullYear()}`}</p>
            </Row>
        </Container>
    )
}

export default RecipeListItem;