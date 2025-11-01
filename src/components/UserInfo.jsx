"use client"

import { useSession } from "next-auth/react"

export default function useInfo() {
    const session = useSession()
    return session.data?.user ?? null
}