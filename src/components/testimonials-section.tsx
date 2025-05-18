"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Graduate Student",
        content:
            "This platform has completely transformed my research process. The AI summarization tools save me hours of reading, and the study guide maker helps me prepare for exams more efficiently.",
        avatar: "/woman-with-glasses.png",
        rating: 5,
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Professor",
        content:
            "I've recommended this platform to all my students. The AI tools help them grasp complex concepts more easily, and the presentation maker has elevated the quality of their assignments.",
        avatar: "/placeholder.png",
        rating: 5,
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        role: "Content Creator",
        content:
            "The YouTube summarizer and transcript tools have been game-changers for my content research. I can quickly extract key insights from hours of video content.",
        avatar: "/latina-woman-smiling.png",
        rating: 4,
    },
    {
        id: 4,
        name: "David Kim",
        role: "High School Student",
        content:
            "The AI study tools helped me improve my grades significantly. The flashcard maker and quiz generator make studying interactive and engaging.",
        avatar: "/placeholder.png",
        rating: 5,
    },
    {
        id: 5,
        name: "Priya Patel",
        role: "Researcher",
        content:
            "The PDF tools are incredibly powerful. I can quickly extract, translate, and summarize information from research papers, saving me countless hours.",
        avatar: "/placeholder.png",
        rating: 5,
    },
    {
        id: 6,
        name: "James Wilson",
        role: "Business Analyst",
        content:
            "The diagram and visualization tools have transformed how I present data to stakeholders. The AI-generated flowcharts and mind maps are professional and insightful.",
        avatar: "/businessman-suit.png",
        rating: 4,
    },
]

const TestimonialsSection = () => {
    const [currentPage, setCurrentPage] = useState(0)
    const isMobile = useMobile()
    const testimonialsPerPage = isMobile ? 1 : 3
    const totalPages = Math.ceil(testimonials.length / testimonialsPerPage)

    const nextPage = useCallback(() => {
        setCurrentPage((prev) => (prev + 1) % totalPages)
    }, [totalPages])

    const prevPage = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            nextPage()
        }, 5000)
        return () => clearInterval(interval)
    }, [currentPage, nextPage])

    const currentTestimonials = testimonials.slice(
        currentPage * testimonialsPerPage,
        (currentPage + 1) * testimonialsPerPage,
    )

    return (
        <section className="py-20 bg-white dark:bg-slate-950">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Users Say</h2>
                    <p className="mt-4 text-muted-foreground md:text-xl">
                        Join thousands of satisfied users who have transformed their learning experience
                    </p>
                </div>

                <div className="relative">
                    <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full bg-background/80 backdrop-blur-sm z-10"
                            onClick={prevPage}
                        >
                            <ChevronLeft className="h-6 w-6" />
                            <span className="sr-only">Previous</span>
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full bg-background/80 backdrop-blur-sm z-10"
                            onClick={nextPage}
                        >
                            <ChevronRight className="h-6 w-6" />
                            <span className="sr-only">Next</span>
                        </Button>
                    </div>

                    <div className="overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentPage}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                            >
                                {currentTestimonials.map((testimonial) => (
                                    <Card key={testimonial.id} className="h-full flex flex-col">
                                        <CardContent className="pt-6 flex-grow">
                                            <div className="flex mb-4">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                            <p className="text-muted-foreground">{testimonial.content}</p>
                                        </CardContent>
                                        <CardFooter className="border-t pt-4">
                                            <div className="flex items-center">
                                                <Avatar className="h-10 w-10 mr-3">
                                                    <AvatarImage src={testimonial.avatar || "/placeholder.png"} alt={testimonial.name} />
                                                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <p className="font-medium">{testimonial.name}</p>
                                                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                                </div>
                                            </div>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex justify-center mt-8">
                        {[...Array(totalPages)].map((_, i) => (
                            <Button
                                key={i}
                                variant="ghost"
                                size="sm"
                                className={`w-2 h-2 rounded-full p-0 mx-1 ${currentPage === i ? "bg-primary" : "bg-muted"}`}
                                onClick={() => setCurrentPage(i)}
                            >
                                <span className="sr-only">Page {i + 1}</span>
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection
