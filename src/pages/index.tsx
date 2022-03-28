import type { NextPage } from "next"

import InputText from "~/components/ui/InputText"
import { useState } from "react"

import { useAuth0 } from "@auth0/auth0-react"
import UserProfile from "~/components/model/user/UserProfile"

const Home: NextPage = () => {
  const [value, setValue] = useState("")
  const { loginWithRedirect, logout } = useAuth0()

  return (
    <>
      <InputText
        value={value}
        onChange={setValue}
        placeholder="入力してね"
        label="ラベル"
        id="入力"
      />
      <UserProfile />
      <button onClick={() => loginWithRedirect()}>login</button>
      <button onClick={() => logout()}>logout</button>
    </>
  )
}

export default Home
