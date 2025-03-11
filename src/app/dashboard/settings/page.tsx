"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { MessageSquare, ArrowLeft, Key, Shield, Bell, User } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SettingsPage() {
    const [openAIKey, setOpenAIKey] = useState("")
    const [claudeKey, setClaudeKey] = useState("")

    return (
        <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
                <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
                    <MessageSquare className="h-6 w-6" />
                    <span>SuperKalam</span>
                </Link>
                <div className="ml-auto flex items-center gap-2">
                    <Button variant="outline" size="sm" asChild>
                        <Link href="/dashboard">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Dashboard
                        </Link>
                    </Button>
                </div>
            </header>
            <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
                </div>
                <Tabs defaultValue="account" className="space-y-4">
                    <TabsList>
                        <TabsTrigger value="account" className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            Account
                        </TabsTrigger>
                        <TabsTrigger value="api-keys" className="flex items-center gap-2">
                            <Key className="h-4 w-4" />
                            API Keys
                        </TabsTrigger>
                        <TabsTrigger value="privacy" className="flex items-center gap-2">
                            <Shield className="h-4 w-4" />
                            Privacy
                        </TabsTrigger>
                        <TabsTrigger value="notifications" className="flex items-center gap-2">
                            <Bell className="h-4 w-4" />
                            Notifications
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="account" className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Account Information</CardTitle>
                                <CardDescription>Update your account details and preferences.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" defaultValue="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" defaultValue="john@example.com" />
                                </div>
                                <Separator />
                                <div className="space-y-2">
                                    <Label htmlFor="language">Language</Label>
                                    <Select defaultValue="en">
                                        <SelectTrigger id="language">
                                            <SelectValue placeholder="Select language" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="en">English</SelectItem>
                                            <SelectItem value="fr">French</SelectItem>
                                            <SelectItem value="de">German</SelectItem>
                                            <SelectItem value="es">Spanish</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Save changes</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>

                    <TabsContent value="api-keys" className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>AI API Keys</CardTitle>
                                <CardDescription>
                                    Add your own AI API keys for enhanced privacy. Your messages will be processed using your own keys.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="openai-key">OpenAI API Key</Label>
                                    <Input
                                        id="openai-key"
                                        type="password"
                                        placeholder="sk-..."
                                        value={openAIKey}
                                        onChange={(e) => setOpenAIKey(e.target.value)}
                                    />
                                    <p className="text-sm text-muted-foreground">
                                        Your OpenAI API key will be used for message classification and spam detection.
                                    </p>
                                </div>
                                <Separator />
                                <div className="space-y-2">
                                    <Label htmlFor="claude-key">Anthropic Claude API Key</Label>
                                    <Input
                                        id="claude-key"
                                        type="password"
                                        placeholder="sk_ant-..."
                                        value={claudeKey}
                                        onChange={(e) => setClaudeKey(e.target.value)}
                                    />
                                    <p className="text-sm text-muted-foreground">
                                        Your Claude API key will be used as an alternative for message processing.
                                    </p>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Save API Keys</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>

                    <TabsContent value="privacy" className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Privacy Settings</CardTitle>
                                <CardDescription>Control how your data is used and processed.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label htmlFor="local-processing">Local Processing</Label>
                                        <p className="text-sm text-muted-foreground">
                                            Process messages locally when possible to enhance privacy
                                        </p>
                                    </div>
                                    <Switch id="local-processing" defaultChecked />
                                </div>
                                <Separator />
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label htmlFor="data-collection">Data Collection</Label>
                                        <p className="text-sm text-muted-foreground">Allow anonymous usage data to improve the service</p>
                                    </div>
                                    <Switch id="data-collection" />
                                </div>
                                <Separator />
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label htmlFor="message-retention">Message Retention</Label>
                                        <p className="text-sm text-muted-foreground">
                                            Control how long messages are stored before automatic deletion
                                        </p>
                                    </div>
                                    <Select defaultValue="90">
                                        <SelectTrigger id="message-retention" className="w-[180px]">
                                            <SelectValue placeholder="Select period" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="30">30 days</SelectItem>
                                            <SelectItem value="60">60 days</SelectItem>
                                            <SelectItem value="90">90 days</SelectItem>
                                            <SelectItem value="180">180 days</SelectItem>
                                            <SelectItem value="forever">Forever</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Save privacy settings</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>

                    <TabsContent value="notifications" className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Notification Preferences</CardTitle>
                                <CardDescription>Configure how and when you receive notifications.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label htmlFor="priority-notifications">Priority Messages</Label>
                                        <p className="text-sm text-muted-foreground">Receive notifications for high-priority messages</p>
                                    </div>
                                    <Switch id="priority-notifications" defaultChecked />
                                </div>
                                <Separator />
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label htmlFor="email-notifications">Email Notifications</Label>
                                        <p className="text-sm text-muted-foreground">Receive email notifications for important messages</p>
                                    </div>
                                    <Switch id="email-notifications" defaultChecked />
                                </div>
                                <Separator />
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label htmlFor="notification-sound">Notification Sound</Label>
                                        <p className="text-sm text-muted-foreground">Play a sound when new messages arrive</p>
                                    </div>
                                    <Switch id="notification-sound" />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Save notification settings</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

