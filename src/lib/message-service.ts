"use client"

import { mockMessages } from "./mock-data"

// Types
export interface Message {
    id: string
    sender: {
        name: string
        email: string
        avatar?: string
    }
    subject: string
    preview: string
    content?: string
    fullContent?: string[]
    timestamp: string
    read: boolean
    priority: boolean
    spam: boolean
}

// In a real app, this would interact with a backend API
export class MessageService {
    // Get all messages
    static async getMessages(): Promise<Message[]> {
        // Simulate API call
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(mockMessages)
            }, 500)
        })
    }

    // Get messages by category
    static async getMessagesByCategory(category: "all" | "priority" | "spam"): Promise<Message[]> {
        // Simulate API call
        return new Promise((resolve) => {
            setTimeout(() => {
                let filteredMessages = [...mockMessages]

                if (category === "priority") {
                    filteredMessages = filteredMessages.filter((msg) => msg.priority)
                } else if (category === "spam") {
                    filteredMessages = filteredMessages.filter((msg) => msg.spam)
                }

                resolve(filteredMessages)
            }, 500)
        })
    }

    // Get a single message by ID
    static async getMessage(id: string): Promise<Message | null> {
        // Simulate API call
        return new Promise((resolve) => {
            setTimeout(() => {
                const message = mockMessages.find((msg) => msg.id === id) || null
                resolve(message)
            }, 300)
        })
    }

    // Mark a message as read
    static async markAsRead(id: string): Promise<boolean> {
        // Simulate API call
        return new Promise((resolve) => {
            setTimeout(() => {
                // In a real app, this would update the database
                resolve(true)
            }, 200)
        })
    }

    // Mark a message as priority/not priority
    static async togglePriority(id: string, isPriority: boolean): Promise<boolean> {
        // Simulate API call
        return new Promise((resolve) => {
            setTimeout(() => {
                // In a real app, this would update the database
                resolve(true)
            }, 200)
        })
    }

    // Mark a message as spam/not spam
    static async toggleSpam(id: string, isSpam: boolean): Promise<boolean> {
        // Simulate API call
        return new Promise((resolve) => {
            setTimeout(() => {
                // In a real app, this would update the database
                resolve(true)
            }, 200)
        })
    }

    // Delete a message
    static async deleteMessage(id: string): Promise<boolean> {
        // Simulate API call
        return new Promise((resolve) => {
            setTimeout(() => {
                // In a real app, this would update the database
                resolve(true)
            }, 200)
        })
    }

    // Archive a message
    static async archiveMessage(id: string): Promise<boolean> {
        // Simulate API call
        return new Promise((resolve) => {
            setTimeout(() => {
                // In a real app, this would update the database
                resolve(true)
            }, 200)
        })
    }
}

