// this service would handle authentication in a real application

// Types
export interface User {
    id: string
    name: string
    email: string
    image?: string
    provider: "email" | "github"
    providerAccountId?: string
}

export class AuthService {
    // Check if the user is authenticated
    static isAuthenticated(): boolean {
        // In a real app, this would check for a valid session
        return typeof window !== "undefined" && localStorage.getItem("user") !== null
    }

    // Get the current user
    static getCurrentUser(): User | null {
        // In a real app, this would get the user from the session
        if (typeof window === "undefined") return null

        const userJson = localStorage.getItem("user")
        if (!userJson) return null

        try {
            return JSON.parse(userJson) as User
        } catch (error) {
            return null
        }
    }

    // Sign in with email and password
    static async signInWithEmail(email: string, password: string): Promise<User> {
        // In a real app, this would call an API endpoint

        // For demo purposes, create a mock user
        const user: User = {
            id: "user-1",
            name: "Demo User",
            email,
            provider: "email",
        }

        // Store the user in localStorage (in a real app, this would be handled by a session)
        localStorage.setItem("user", JSON.stringify(user))

        return user
    }

    // Sign in with GitHub
    static async signInWithGitHub(): Promise<void> {
        // In a real app, this would redirect to the GitHub OAuth flow
        // The actual authentication would happen on the server

        // For demo purposes, we'll just redirect to the GitHub auth endpoint
        window.location.href = "/api/auth/github"
    }

    // Sign out
    static async signOut(): Promise<void> {
        // In a real app, this would call an API endpoint to invalidate the session

        // For demo purposes, just remove the user from localStorage
        localStorage.removeItem("user")
    }
}

