"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Brain, Home, Search, ArrowLeft, BookOpen, HelpCircle } from 'lucide-react'
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function NotFound() {
    const router = useRouter()
    const [searchQuery, setSearchQuery] = useState("")
    const [suggestions, setSuggestions] = useState<string[]>([])

    // Simulate AI generating suggestions based on the URL path
    useEffect(() => {
        const aiSuggestions = [
            "YouTube Video Summarizer",
            "AI Study Guide Maker",
            "PDF Summarizer",
            "AI Presentation Maker",
            "AI Essay Writer",
        ]

        // Randomly select 3 suggestions
        const randomSuggestions = [...aiSuggestions]
            .sort(() => 0.5 - Math.random())
            .slice(0, 3)

        setSuggestions(randomSuggestions)
    }, [])

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        if (searchQuery.trim()) {
            router.push(`/tools?search=${encodeURIComponent(searchQuery)}`)
        }
    }

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-muted/30">
            <div className="flex-1 flex items-center justify-center p-4">
                <div className="max-w-3xl w-full text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 flex justify-center"
                    >
                        <div className="relative">
                            <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
                                <Brain className="h-12 w-12 text-primary" />
                            </div>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="absolute -top-2 -right-2 h-10 w-10 rounded-full bg-background border-2 border-primary flex items-center justify-center text-primary font-bold"
                            >
                                404
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4"
                    >
                        Page Not Found
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto"
                    >
                        Oops! Our AI couldn&#39;t locate the page you&#39;re looking for. It might have been moved, deleted, or never existed.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                    >
                        <Button size="lg" asChild>
                            <Link href="/">
                                <Home className="mr-2 h-4 w-4" />
                                Back to Home
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" onClick={() => router.back()}>
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Go Back
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="mb-12"
                    >
                        <h2 className="text-xl font-medium mb-4">Search for what you need</h2>
                        <form onSubmit={handleSearch} className="flex max-w-md mx-auto">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <input
                                    type="text"
                                    placeholder="Search AI tools..."
                                    className="flex h-10 w-full rounded-l-md border border-input bg-background px-3 py-2 pl-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                            <Button type="submit" className="rounded-l-none">Search</Button>
                        </form>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <h2 className="text-xl font-medium mb-4">AI Suggested Tools</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                            {suggestions.map((suggestion, index) => (
                                <motion.div
                                    key={suggestion}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                                >
                                    <Link
                                        href={`/tools?search=${encodeURIComponent(suggestion)}`}
                                        className="block p-4 bg-card border rounded-lg hover:bg-accent transition-colors text-center"
                                    >
                                        <BookOpen className="h-5 w-5 mb-2 mx-auto text-primary" />
                                        <span>{suggestion}</span>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.5 }}
                        className="mt-12 text-muted-foreground"
                    >
                        <p>Need help finding something?</p>
                        <Link href="/contact" className="inline-flex items-center text-primary hover:underline mt-1">
                            <HelpCircle className="h-4 w-4 mr-1" />
                            Contact our support team
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
