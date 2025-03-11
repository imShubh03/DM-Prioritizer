"use client"

import { useState, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { X, Reply, Star, AlertTriangle, MoreHorizontal, Trash2, Archive } from "lucide-react"
import { mockMessages } from "@/lib/mock-data"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface MessageDetailProps {
    messageId: string
    onClose: () => void
}

export function MessageDetail({ messageId, onClose }: MessageDetailProps) {
    const [message, setMessage] = useState<any>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // In a real app, this would fetch from an API
        const foundMessage = mockMessages.find((msg) => msg.id === messageId)
        setMessage(foundMessage)
        setLoading(false)
    }, [messageId])

    if (loading) {
        return (
            <div className="flex h-full items-center justify-center">
                <div className="text-center">Loading message...</div>
            </div>
        )
    }

    if (!message) {
        return (
            <div className="flex h-full items-center justify-center">
                <div className="text-center">Message not found</div>
            </div>
        )
    }

    return (
        <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b p-4">
                <h3 className="font-semibold">Message Details</h3>
                <Button variant="ghost" size="icon" onClick={onClose}>
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                </Button>
            </div>
            <ScrollArea className="flex-1">
                <div className="p-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Avatar className="h-10 w-10">
                                <AvatarImage src={message.sender.avatar} alt={message.sender.name} />
                                <AvatarFallback>
                                    {message.sender.name
                                        .split(" ")
                                        .map((n: any[]) => n[0])
                                        .join("")
                                        .toUpperCase()}
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <div className="font-semibold">{message.sender.name}</div>
                                <div className="text-sm text-muted-foreground">{message.sender.email}</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="text-sm text-muted-foreground">{message.timestamp}</div>
                            <Button variant="ghost" size="icon">
                                {message.priority ? (
                                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                                ) : (
                                    <Star className="h-4 w-4" />
                                )}
                                <span className="sr-only">Star</span>
                            </Button>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                        <MoreHorizontal className="h-4 w-4" />
                                        <span className="sr-only">More</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>
                                        <Archive className="mr-2 h-4 w-4" />
                                        <span>Archive</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Trash2 className="mr-2 h-4 w-4" />
                                        <span>Delete</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        {message.spam ? (
                                            <>
                                                <AlertTriangle className="mr-2 h-4 w-4" />
                                                <span>Mark as not spam</span>
                                            </>
                                        ) : (
                                            <>
                                                <AlertTriangle className="mr-2 h-4 w-4" />
                                                <span>Mark as spam</span>
                                            </>
                                        )}
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                    <h2 className="mt-6 text-xl font-bold">{message.subject}</h2>
                    <div className="mt-4 space-y-4">
                        <p>{message.content || message.preview}</p>
                        {message.fullContent &&
                            message.fullContent.map((paragraph: string, i: number) => <p key={i}>{paragraph}</p>)}
                    </div>
                </div>
            </ScrollArea>
            <div className="border-t p-4">
                <Button className="w-full">
                    <Reply className="mr-2 h-4 w-4" />
                    Reply
                </Button>
            </div>
        </div>
    )
}

