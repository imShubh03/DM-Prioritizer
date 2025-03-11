"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, Settings, LogOut, Inbox, AlertTriangle, Star, Archive, Trash2, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { MessageList } from "@/components/message-list"
import { MessageDetail } from "@/components/message-detail"

export default function DashboardPage() {
    const [selectedMessage, setSelectedMessage] = useState<string | null>(null)

    return (
        <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
                <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
                    <MessageSquare className="h-6 w-6" />
                    <span>SuperKalam</span>
                </Link>
                <div className="relative ml-auto flex-1 max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search messages..."
                        className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                    />
                </div>
                <Button variant="ghost" size="icon" asChild>
                    <Link href="/dashboard/settings">
                        <Settings className="h-5 w-5" />
                        <span className="sr-only">Settings</span>
                    </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                    <Link href="/login">
                        <LogOut className="h-5 w-5" />
                        <span className="sr-only">Log out</span>
                    </Link>
                </Button>
            </header>
            <div className="grid flex-1 md:grid-cols-[240px_1fr] lg:grid-cols-[240px_1fr_300px]">
                <div className="hidden border-r md:block">
                    <div className="flex h-full max-h-screen flex-col gap-2">
                        <div className="flex h-14 items-center border-b px-4 lg:h-[60px]">
                            <h2 className="font-semibold">Inbox</h2>
                        </div>
                        <div className="flex-1 overflow-auto py-2">
                            <nav className="grid items-start px-2 text-sm font-medium">
                                <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary hover:bg-muted">
                                    <Inbox className="h-4 w-4" />
                                    <span>All Messages</span>
                                    <Badge className="ml-auto">24</Badge>
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
                                >
                                    <Star className="h-4 w-4" />
                                    <span>Priority</span>
                                    <Badge variant="outline" className="ml-auto">
                                        7
                                    </Badge>
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
                                >
                                    <AlertTriangle className="h-4 w-4" />
                                    <span>Spam</span>
                                    <Badge variant="outline" className="ml-auto">
                                        3
                                    </Badge>
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
                                >
                                    <Archive className="h-4 w-4" />
                                    <span>Archived</span>
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
                                >
                                    <Trash2 className="h-4 w-4" />
                                    <span>Trash</span>
                                </Link>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <Tabs defaultValue="all" className="flex-1">
                        <div className="flex items-center justify-between px-4 py-2 md:px-6 md:py-4">
                            <TabsList>
                                <TabsTrigger value="all" className="text-zinc-600 dark:text-zinc-200">
                                    All
                                </TabsTrigger>
                                <TabsTrigger value="priority" className="text-zinc-600 dark:text-zinc-200">
                                    Priority
                                </TabsTrigger>
                                <TabsTrigger value="spam" className="text-zinc-600 dark:text-zinc-200">
                                    Spam
                                </TabsTrigger>
                            </TabsList>
                            <div className="hidden md:flex items-center gap-2">
                                <Button variant="outline" size="sm">
                                    <Archive className="mr-2 h-4 w-4" />
                                    Archive
                                </Button>
                                <Button variant="outline" size="sm">
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    Delete
                                </Button>
                            </div>
                        </div>
                        <Separator />
                        <TabsContent value="all" className="flex-1 p-0">
                            <MessageList onSelectMessage={setSelectedMessage} />
                        </TabsContent>
                        <TabsContent value="priority" className="flex-1 p-0">
                            <MessageList onSelectMessage={setSelectedMessage} filter="priority" />
                        </TabsContent>
                        <TabsContent value="spam" className="flex-1 p-0">
                            <MessageList onSelectMessage={setSelectedMessage} filter="spam" />
                        </TabsContent>
                    </Tabs>
                </div>
                {selectedMessage ? (
                    <div className="hidden border-l lg:block">
                        <MessageDetail messageId={selectedMessage} onClose={() => setSelectedMessage(null)} />
                    </div>
                ) : (
                    <div className="hidden border-l lg:block">
                        <div className="flex h-full items-center justify-center p-8 text-center">
                            <div>
                                <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground" />
                                <h3 className="mt-4 text-lg font-medium">No message selected</h3>
                                <p className="mb-4 mt-2 text-sm text-muted-foreground">
                                    Select a message from your inbox to view its contents.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

