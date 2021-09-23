import { AuthenticateUser } from '../types/types';

const baseUrl = "http://localhost:8000/api/v1"
const usersUrl = "/users"
const authenticateUrl = "/authenticate"

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
    }


}