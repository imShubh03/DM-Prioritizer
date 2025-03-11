"use client"

import { useState, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Checkbox } from "@/components/ui/checkbox"
import { Star, AlertTriangle } from "lucide-react"
import { cn } from "@/lib/utils"
import { mockMessages } from "@/lib/mock-data"

interface Message {
    id: string
    sender: {
        name: string
        email: string
        avatar?: string
    }
    subject: string
    preview: string
    timestamp: string
    read: boolean
    priority: boolean
    spam: boolean
}

interface MessageListProps {
    onSelectMessage: (id: string) => void
    filter?: "priority" | "spam"
}

export function MessageList({ onSelectMessage, filter }: MessageListProps) {
    const [messages, setMessages] = useState<Message[]>([])
    const [selectedMessages, setSelectedMessages] = useState<Set<string>>(new Set())

    useEffect(() => {
        // In a real app, this would fetch from an API
        let filteredMessages = [...mockMessages]

        if (filter === "priority") {
            filteredMessages = filteredMessages.filter((msg) => msg.priority)
        } else if (filter === "spam") {
            filteredMessages = filteredMessages.filter((msg) => msg.spam)
        }

        setMessages(filteredMessages)
    }, [filter])

    const toggleMessageSelection = (id: string) => {
        const newSelected = new Set(selectedMessages)
        if (newSelected.has(id)) {
            newSelected.delete(id)
        } else {
            newSelected.add(id)
        }
        setSelectedMessages(newSelected)
    }

    const handleMessageClick = (id: string) => {
        // Mark as read
        setMessages(messages.map((msg) => (msg.id === id ? { ...msg, read: true } : msg)))
        onSelectMessage(id)
    }

    return (
        <ScrollArea className="h-[calc(100vh-10rem)]">
            <div className="divide-y">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={cn(
                            "flex items-center gap-2 p-4 hover:bg-muted/50 cursor-pointer",
                            message.read ? "bg-background" : "bg-muted/20",
                        )}
                        onClick={() => handleMessageClick(message.id)}
                    >
                        <Checkbox
                            checked={selectedMessages.has(message.id)}
                            onCheckedChange={() => toggleMessageSelection(message.id)}
                            onClick={(e) => e.stopPropagation()}
                            className="mr-2"
                        />
                        <Avatar className="h-9 w-9">
                            <AvatarImage src={message.sender.avatar} alt={message.sender.name} />
                            <AvatarFallback>
                                {message.sender.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")
                                    .toUpperCase()}
                            </AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1 flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                                <span className={cn("font-medium", !message.read && "font-semibold")}>{message.sender.name}</span>
                                <span className="text-xs text-muted-foreground">{message.timestamp}</span>
                                {message.priority && <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />}
                                {message.spam && <AlertTriangle className="h-4 w-4 text-red-500" />}
                            </div>
                            <div className="truncate font-medium">{message.subject}</div>
                            <div className="truncate text-sm text-muted-foreground">{message.preview}</div>
                        </div>
                        {!message.read && (
                            <Badge variant="secondary" className="ml-auto">
                                New
                            </Badge>
                        )}
                    </div>
                ))}
            </div>
        </ScrollArea>
    )
}

