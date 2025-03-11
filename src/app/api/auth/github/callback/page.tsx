import { NextResponse } from "next/server"



export async function GET(request: Request) {
    // Get the code and state from the query parameters
    const url = new URL(request.url)
    const code = url.searchParams.get("code")
    const state = url.searchParams.get("state")

    

    // For demo purposes, we'll simulate a successful authentication
    // and redirect to the dashboard

    return NextResponse.redirect(new URL("/dashboard", request.url))
}

