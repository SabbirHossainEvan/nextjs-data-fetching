import { SessionProvider } from "next-auth/react"

export default function NextAuthSessionPro({children}) {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}