"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Brain, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const HeroSection = () => {
    const [currentTool, setCurrentTool] = useState(0)
    const tools = ["YouTube Summarizer", "AI PPT Maker", "PDF Summarizer", "AI Study Guide", "AI Essay Writer"]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTool((prev) => (prev + 1) % tools.length)
        }, 2000)
        return () => clearInterval(interval)
    }, [tools.length])

    const [bubbles, setBubbles] = useState<
        { width: number; height: number; left: string; top: string; delay: number; duration: number }[]
    >([])

    useEffect(() => {
        const generateBubbles = Array.from({ length: 20 }).map(() => ({
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            delay: Math.random() * 5,
            duration: Math.random() * 10 + 10,
        }))
        setBubbles(generateBubbles)
    }, [])


    return (
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                {bubbles.map((bubble, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-primary/10 dark:bg-primary/5"
                        style={{
                            width: bubble.width,
                            height: bubble.height,
                            left: bubble.left,
                            top: bubble.top,
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: [0.1, 0.3, 0.1],
                            scale: [1, 1.2, 1],
                            x: [0, Math.random() * 50 - 25, 0],
                            y: [0, Math.random() * 50 - 25, 0],
                        }}
                        transition={{
                            duration: bubble.duration,
                            repeat: Infinity,
                            delay: bubble.delay,
                        }}
                    />
                ))}
            </div>

            <div className="container relative px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <div className="space-y-4">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 mb-4">
                                <Sparkles className="mr-1 h-3 w-3" />
                                Next-Gen AI Learning Tools
                            </div>
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                                All-in-One AI Learning Assistant
                            </h1>
                            <p className="text-xl text-muted-foreground md:text-2xl">
                                Supercharge your learning with our comprehensive suite of AI tools for students, researchers, and
                                professionals.
                            </p>
                            <div className="h-16 overflow-hidden">
                                <motion.div
                                    animate={{ y: -currentTool * 64 }}
                                    transition={{ ease: "easeInOut", duration: 0.5 }}
                                >
                                    {tools.map((tool, index) => (
                                        <div key={index} className="flex items-center h-16">
                                            <Brain className="mr-2 h-6 w-6 text-primary" />
                                            <span className="text-xl font-medium">{tool}</span>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                <Button size="lg" className="gap-1">
                                    Get Started <ArrowRight className="h-4 w-4 ml-1" />
                                </Button>
                                <Button size="lg" variant="outline">
                                    Explore Tools
                                </Button>
                            </div>
                            <div className="mt-6 flex items-center">
                                <div className="flex -space-x-2">
                                    {[...Array(4)].map((_, i) => (
                                        <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-background overflow-hidden">
                                            <Image
                                                src={`/diverse-group.png`}
                                                alt={`User ${i + 1}`}
                                                width={350}
                                                height={350}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="ml-3 text-sm text-muted-foreground">
                                    <span className="font-medium text-foreground">5,000+</span> users already enhancing their learning
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative rounded-lg overflow-hidden shadow-2xl">
                            <div className="aspect-video relative">
                                <Image
                                    src="/AILearningPlatformDashboard.png"
                                    alt="AI Learning Platform Dashboard"
                                    width={800}
                                    height={600}
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                            </div>

                            {/* Floating UI elements */}
                            <motion.div
                                className="absolute top-8 right-8 bg-white dark:bg-slate-800 rounded-lg shadow-lg p-3 w-40"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                            >
                                <div className="text-xs text-muted-foreground">AI Summary</div>
                                <div className="text-sm font-medium mt-1">Key points extracted from your document</div>
                            </motion.div>

                            <motion.div
                                className="absolute bottom-8 left-8 bg-white dark:bg-slate-800 rounded-lg shadow-lg p-3 w-40"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                            >
                                <div className="text-xs text-muted-foreground">Study Progress</div>
                                <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full mt-2">
                                    <div className="h-full w-3/4 bg-primary rounded-full"></div>
                                </div>
                                <div className="text-xs mt-1 text-right">75% Complete</div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
