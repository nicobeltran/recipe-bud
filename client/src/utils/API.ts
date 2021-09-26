import { AuthenticateUser, NewUser } from '../types/User';

const baseUrl = "http://localhost:8000/api/v1"
const usersUrl = "/users"
const authenticateUrl = "/authenticate"
const recipesUrl = "/recipes"

export default {

    login: (data : AuthenticateUser) => {
        return fetch(`${baseUrl}${usersUrl}${authenticateUrl}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)})
            .then(response => response.json())
            .catch((error) => {
            })
    },
    signup: (data: NewUser) => {
      return fetch(`${baseUrl}${usersUrl}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)})
        .then(response => response.json())
        .catch((error) => {
        })
    },
    getUserRecipes: (user_id: number) => {
      return fetch(`${baseUrl}${usersUrl}/${user_id}${recipesUrl}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }})
        .then(response => response.json())
        .catch((error) => {
        })
    }
}