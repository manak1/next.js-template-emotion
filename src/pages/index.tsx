import type { NextPage } from "next"

import InputText from "~/components/ui/InputText"
import { useState } from "react"
import UserProfile from "~/components/model/user/UserProfile"
import Link from "next/link"

const Home: NextPage = () => {
  const [value, setValue] = useState("")
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
      <Link href="/api/auth/login">ログイン</Link>
      <Link href="/api/auth/logout">ログアウト</Link>
    </>
  )
}

export default Home
