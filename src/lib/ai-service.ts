"use client"

// This service would handle interactions with AI models for message processing
export class AIService {
    private static apiKey: string | null = null
    private static provider: "openai" | "claude" | null = null

    // Set the API key and provider
    static setAPIKey(key: string, provider: "openai" | "claude") {
        this.apiKey = key
        this.provider = provider
    }

    // Check if an API key is set
    static hasAPIKey(): boolean {
        return !!this.apiKey
    }

    // Analyze a message to determine if it's spam
    static async analyzeForSpam(messageContent: string): Promise<boolean> {
        // If no API key is set, use a simple heuristic
        if (!this.apiKey) {
            return this.simpleSpamCheck(messageContent)
        }

        // In a real app, this would call the OpenAI or Claude API
        // For demo purposes, we'll use the simple check
        return this.simpleSpamCheck(messageContent)
    }

    // Determine message priority
    static async analyzePriority(messageContent: string, senderEmail: string): Promise<boolean> {
        // If no API key is set, use a simple heuristic
        if (!this.apiKey) {
            return this.simplePriorityCheck(messageContent)
        }

        // In a real app, this would call the OpenAI or Claude API
        // For demo purposes, we'll use the simple check
        return this.simplePriorityCheck(messageContent)
    }

    // Categorize a message
    static async categorizeMessage(messageContent: string): Promise<string[]> {
        // If no API key is set, return empty categories
        if (!this.apiKey) {
            return []
        }

        // In a real app, this would call the OpenAI or Claude API
        // For demo purposes, we'll return some dummy categories
        return ["Work", "Project"]
    }

    // Simple spam detection heuristic
    private static simpleSpamCheck(content: string): boolean {
        const spamKeywords = [
            "win",
            "winner",
            "prize",
            "lottery",
            "million",
            "discount",
            "free",
            "urgent",
            "verify",
            "account",
            "limited",
            "click",
            "offer",
            "cheap",
            "buy now",
            "exclusive",
            "congratulations",
            "selected",
            "viagra",
            "medication",
        ]

        const contentLower = content.toLowerCase()
        const hasSpamKeywords = spamKeywords.some((keyword) => contentLower.includes(keyword.toLowerCase()))

        // Check for excessive capitalization
        const uppercaseRatio =
            content.split("").filter((c) => c === c.toUpperCase() && c.match(/[A-Z]/)).length / content.length
        const hasExcessiveCaps = uppercaseRatio > 0.3 && content.length > 20

        return hasSpamKeywords || hasExcessiveCaps
    }

    // Simple priority detection heuristic
    private static simplePriorityCheck(content: string): boolean {
        const priorityKeywords = [
            "urgent",
            "important",
            "asap",
            "deadline",
            "critical",
            "priority",
            "attention",
            "required",
            "action",
            "immediate",
            "emergency",
        ]

        const contentLower = content.toLowerCase()
        return priorityKeywords.some((keyword) => contentLower.includes(keyword.toLowerCase()))
    }
}

