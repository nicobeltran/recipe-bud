import React, { useState } from "react"
import { User } from '../types/types'

interface AuthContextInterface {
    currentUser: User,
    setCurrentUser: React.Dispatch<any>
}

export const AuthContext = React.createContext<AuthContextInterface|null>(null);

export const AuthProvider = ({ user, children } : any) => {
    const[currentUser, setCurrentUser] = useState(user)

    return ( 
        <AuthContext.Provider value={{ currentUser, setCurrentUser}}>
            {children}
        </AuthContext.Provider>
    )
}
