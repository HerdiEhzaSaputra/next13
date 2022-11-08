import '../styles/globals.css'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <html lang="en">
            <head />
            <body className="bg-white dark:bg-gray-900">
                <main>
                    { children }
                </main>
            </body>
        </html>
    )
}
