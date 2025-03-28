import { createContext } from "react"

const UserContext = createContext(null);

export default function Auth({children}) {

    const user = {
        name: "user12"
    }

  return (
    <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>
  )
}
