import React, { FC, useState } from 'react';
import { withRouter } from "react-router"
import { AuthContext } from '../context/authcontext';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ErrorMessageConstants, Constants } from '../utils/Constants';
import { Recipe, RecipeProps } from '../types/Recipe';

const RecipeList: FC<RecipeProps> = ( { recipes }): JSX.Element => {    
    return (
        <div>List</div>
    )
}

export default RecipeList