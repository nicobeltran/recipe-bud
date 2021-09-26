import React, { FC, useState } from 'react';
import { withRouter } from "react-router"
import { AuthContext } from '../context/authcontext';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ErrorMessageConstants, Constants } from '../utils/Constants';
import { Recipe, RecipeProps } from '../types/Recipe';
import RecipeListItem from './RecipeListItem';

const RecipeList: FC<RecipeProps> = ( { recipes }): JSX.Element => { 
    
    const recipeListItems = recipes.map((recipe) => {
        return <RecipeListItem recipe={recipe} />
    })
    
    return (
        <div>
            {recipeListItems}
        </div>
    )
}

export default RecipeList