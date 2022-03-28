import { Auth0Provider } from "@auth0/auth0-react"
import type { AppProps } from "next/app"
import "sanitize.css"
import config from "~/assets/scripts/config"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Auth0Provider
      domain={config.auth0Domain ?? ""}
      clientId={config.auth0ClientId ?? ""}
      redirectUri={"http://localhost:3000"}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  )
}

export default MyApp
