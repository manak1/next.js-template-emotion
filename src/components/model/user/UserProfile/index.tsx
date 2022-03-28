import { useUser } from "@auth0/nextjs-auth0"
import Image from "next/image"
import React from "react"

const UserProfile: React.VFC = () => {
  const { user, error, isLoading } = useUser()
  console.log(user)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  return (
    <div>
      {user && (
        <div>
          <Image
            src={user.picture ?? ""}
            width={400}
            height={400}
            alt={user.name ?? ""}
          />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  )
}

export default UserProfile
