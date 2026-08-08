import axios from 'axios'
import React, { createContext,useEffect,useState,useContext } from 'react'
import { authDataContext } from './authDataContext'

export const UserDataContext = createContext()

const UserContext = ({children}) => {
    const [userData, setUserData] = useState("")
    const {serverUrl} = useContext(authDataContext)

    const getCurrentUser = async () => {
        try {
            const result = await axios.post(serverUrl + '/api/user/getcurrentuser',{}, {withCredentials:true})
            
            setUserData(result.data)
            console.log(result.data)
        } catch (error) {
            setUserData(null)
            console.log(error)
            
        }

    }

    useEffect(() => {
        getCurrentUser()
    },[])

    const value = {
        userData, setUserData,getCurrentUser
    }
  return (

    <div>
        <UserDataContext.Provider value={value}>
            {children}
        </UserDataContext.Provider>
      
    </div>
  )
}

export default UserContext
