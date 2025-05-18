"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Twitter, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const leadershipData = [
    {
        id: "ceo",
        name: "Jinank Thakker",
        role: "Founder & CEO",
        bio: "Jinank Thakker is a seasoned technology leader with deep expertise in Information Technology, Market Risk analysis, and Agile project delivery. With a strong record of optimizing business processes, he consistently enhances efficiency, reduces operational costs, and boosts productivity — all within lean budgets and tight deadlines.\n\nJinank specializes in validating the technical feasibility of business requirements and implementing high-performance solutions. He is passionate about leveraging innovative technologies to drive business value and performance.\n\nAs the driving force behind Nac TranscriptPro, Jinank is focused on building a trusted brand, expanding the customer base, and nurturing long-term relationships with key clients. His strengths lie in analytical thinking, database architecture, data modelling, and advanced query optimisation.",
        imageSrc: "/male-ceo-headshot.png",
        twitterHandle: "jinankthakker",
        linkedinUrl: "https://linkedin.com/in/jinankthakker",
    },
    {
        id: "developer",
        name: "Sanyam Jain",
        role: "Lead Developer",
        bio: "Sanyam Jain is an innovative software engineer with expertise in AI and machine learning technologies. He leads the development of our cutting-edge AI learning tools, ensuring they're both powerful and user-friendly.\n\nWith a background in computer science and a passion for educational technology, Sanyam has been instrumental in creating our comprehensive suite of AI tools that transform how people learn and process information.\n\nHis technical expertise spans across multiple domains including natural language processing, computer vision, and data analysis, allowing our platform to offer diverse AI capabilities for various learning needs.",
        imageSrc: "/male-developer-headshot.png",
        twitterHandle: "sanyamjain",
        linkedinUrl: "https://linkedin.com/in/sanyamjain",
    },
]

const LeadershipSection = () => {
    return (
        <section id="team" className="py-20">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Leadership</h2>
                    <p className="mt-4 text-muted-foreground md:text-xl">The visionaries behind our AI learning platform</p>
                </div>

                <Tabs defaultValue="ceo" className="w-full">
                    <div className="flex justify-center mb-8">
                        <TabsList>
                            <TabsTrigger value="ceo">CEO & Founder</TabsTrigger>
                            <TabsTrigger value="developer">Lead Developer</TabsTrigger>
                        </TabsList>
                    </div>

                    {leadershipData.map((leader) => (
                        <TabsContent key={leader.id} value={leader.id} className="mt-0">
                            <Card className="border-none shadow-none">
                                <CardContent className="p-0">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5 }}
                                            className="relative"
                                        >
                                            <div className="aspect-square relative rounded-lg overflow-hidden">
                                                <Image
                                                    src={leader.imageSrc || "/placeholder.png"}
                                                    alt={leader.name}
                                                    width={500}
                                                    height={500}
                                                    className="object-cover w-full h-full"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                            </div>
                                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                                <h3 className="text-2xl font-bold">{leader.name}</h3>
                                                <p className="text-white/80">{leader.role}</p>
                                                <div className="flex mt-2 space-x-2">
                                                    <Button
                                                        size="icon"
                                                        variant="ghost"
                                                        className="bg-white/20 hover:bg-white/30 text-white rounded-full h-8 w-8 p-0"
                                                    >
                                                        <Twitter className="h-4 w-4" />
                                                        <span className="sr-only">Twitter</span>
                                                    </Button>
                                                    <Button
                                                        size="icon"
                                                        variant="ghost"
                                                        className="bg-white/20 hover:bg-white/30 text-white rounded-full h-8 w-8 p-0"
                                                    >
                                                        <Linkedin className="h-4 w-4" />
                                                        <span className="sr-only">LinkedIn</span>
                                                    </Button>
                                                    <Button
                                                        size="icon"
                                                        variant="ghost"
                                                        className="bg-white/20 hover:bg-white/30 text-white rounded-full h-8 w-8 p-0"
                                                    >
                                                        <Mail className="h-4 w-4" />
                                                        <span className="sr-only">Email</span>
                                                    </Button>
                                                </div>
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: 0.2 }}
                                        >
                                            <h3 className="text-2xl font-bold mb-4">{leader.name}</h3>
                                            <h4 className="text-xl text-muted-foreground mb-6">{leader.role}</h4>

                                            <div className="space-y-4 text-muted-foreground">
                                                {leader.bio.split("\n\n").map((paragraph, index) => (
                                                    <p key={index}>{paragraph}</p>
                                                ))}
                                            </div>

                                            <div className="mt-8 flex space-x-4">
                                                <Button variant="outline" className="gap-2">
                                                    <Twitter className="h-4 w-4" />@{leader.twitterHandle}
                                                </Button>
                                                <Button variant="outline" className="gap-2">
                                                    <Linkedin className="h-4 w-4" />
                                                    LinkedIn
                                                </Button>
                                            </div>
                                        </motion.div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    )
}

export default LeadershipSection
