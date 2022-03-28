import { useAuth0 } from "@auth0/auth0-react"
import React, { useEffect, useState } from "react"

const UserProfile: React.VFC = () => {
  const { isAuthenticated, user, isLoading, error, getAccessTokenSilently } =
    useAuth0()
  const [token, setToken] = useState("")

  useEffect(() => {
    const init = async () => {
      if (!isAuthenticated) return
      const token = await getAccessTokenSilently()
      setToken(token)
    }
    init()
  }, [getAccessTokenSilently, isAuthenticated])

  if (isLoading) return <div>loading...</div>

  if (error) return <div>error: {error.message}</div>

  if (!isAuthenticated) return <div>login してね</div>

  return (
    <div>
      {user && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{token}</p>
        </div>
      )}
    </div>
  )
}

export default UserProfile
