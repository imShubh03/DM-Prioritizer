# DM Prioritizer

This project focuses on providing an intuitive user experience for organizing and prioritizing direct messages, with features like spam connection removal and AI-powered prioritization.

## Features

-   **Intuitive User Experience:** Designed for ease of use and efficient DM management.
-   **Spam Connection Removal:** Automatically identifies and removes spam connections.
-   **Prioritization:** Intelligent prioritization of DMs based on relevance and importance.
-   **User Privacy:** Allows users to integrate their own OpenAI or Claude keys for enhanced privacy and control.
-   **Clean and Modular Code:** Well-structured codebase with proper GitHub commits.
-   **AI Assistance:** Utilizes AI-generated code where appropriate, with a focus on maintainability and evaluation.

## Technologies Used

-   **Next.js:** React framework for building server-rendered applications.
-   **React:** JavaScript library for building user interfaces.
-   **Tailwind CSS:** Utility-first CSS framework for rapid UI development.
-   **Radix UI:** Unstyled, accessible component library.
-   **Lucide React:** Beautifully simple, pixel-perfect icons.
-   **NextAuth:** Authentication for Next.js applications.
-   **TypeScript:** Static typing for improved code quality.
-   **OpenAI/Claude Integration:** (Optional) User-provided API keys for AI functionalities.

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone [repository URL]
    cd dm-prioritizer
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

    Open your browser at `http://localhost:3000` to view the application.

4.  **Build the application:**

    ```bash
    npm run build
    ```

5.  **Start the production server:**

    ```bash
    npm run start
    ```

## Dependencies

```json
{
    "dependencies": {
        "@radix-ui/react-avatar": "^1.1.3",
        "@radix-ui/react-checkbox": "^1.1.4",
        "@radix-ui/react-dropdown-menu": "^2.1.6",
        "@radix-ui/react-label": "^2.1.2",
        "@radix-ui/react-scroll-area": "^1.2.3",
        "@radix-ui/react-select": "^2.1.6",
        "@radix-ui/react-separator": "^1.1.2",
        "@radix-ui/react-slot": "^1.1.2",
        "@radix-ui/react-switch": "^1.1.3",
        "@radix-ui/react-tabs": "^1.1.3",
        "class-variance-authority": "^0.7.1",
        "clsx": "^2.1.1",
        "lucide-react": "^0.479.0",
        "next": "15.2.1",
        "next-auth": "^4.24.11",
        "react": "^19.0.0",
        "react-dom": "^19.0.0",
        "tailwind-merge": "^3.0.2",
        "tailwindcss-animate": "^1.0.7"
    }
}
```

## Development Dependencies

```json
{
    "devDependencies": {
        "@eslint/eslintrc": "^3",
        "@tailwindcss/postcss": "^4",
        "@types/node": "^20",
        "@types/react": "^19",
        "@types/react-dom": "^19",
        "autoprefixer": "^10.4.20",
        "eslint": "^9",
        "eslint-config-next": "15.2.1",
        "postcss": "^8.5.3",
        "tailwindcss": "^4.0.12",
        "typescript": "^5"
    }
}
```

# Contributing

## Contributions are welcome! Please feel free to submit pull requests or open issues for any bugs or feature requests.