'use client';

import { signIn } from "next-auth/react"

export function GithubSignIn() {
    return <button
        style={{ backgroundColor: "#333", color: "#fff", padding: "0.5rem 1rem", border: "none", borderRadius: "0.25rem" }}
        onClick={() => signIn("github")}
    >Login</button>
}
