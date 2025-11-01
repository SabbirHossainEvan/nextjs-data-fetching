"use client"

import { useSession } from "next-auth/react"

export default function useInfo() {
    const session = useSession()
    return <div>
        <p>
           {Json.stringify(session)} 
        </p>

    </div>
}