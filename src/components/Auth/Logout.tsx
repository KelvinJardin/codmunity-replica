'use client';

import { signOut } from "next-auth/react"

export default function Logout() {
    return <button
        style={{ backgroundColor: "#333", color: "#fff", padding: "0.5rem 1rem", border: "none", borderRadius: "0.25rem" }}
        onClick={() => signOut()}
    >Logout</button>
}
