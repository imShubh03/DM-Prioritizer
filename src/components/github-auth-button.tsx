"use client"

import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

interface GitHubAuthButtonProps {
    isLoading?: boolean
    text?: string
    className?: string
}

export function GitHubAuthButton({
    isLoading = false,
    text = "Continue with GitHub",
    className = "",
}: GitHubAuthButtonProps) {
    const handleGitHubAuth = async () => {
        // In a real implementation, this would redirect to the GitHub OAuth flow
        // For example, with NextAuth.js: signIn("github")

        // For demo purposes, we'll simulate the redirect
        window.location.href = "/api/auth/github"
    }

    return (
        <Button
            variant="outline"
            type="button"
            disabled={isLoading}
            className={`w-full ${className}`}
            onClick={handleGitHubAuth}
        >
            {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    Connecting...
                </span>
            ) : (
                <span className="flex items-center justify-center gap-2">
                    <Github className="h-5 w-5" />
                    {text}
                </span>
            )}
        </Button>
    )
}

