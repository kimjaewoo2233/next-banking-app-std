import Sidebar from "@/components/sidebar"

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <main className="min-h-screen grid grid-cols-5 max-xl:grid-cols-1">
            <Sidebar/>
            {children}
        </main>
    )
}