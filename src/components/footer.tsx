"use client"

import Link from "next/link"
import { Twitter, Facebook, Instagram, Linkedin, Youtube, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-slate-950 text-slate-200">
            <div className="container px-4 md:px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary to-gray-600 flex items-center justify-center">
                                <Image src={"/logo.png"} alt="Logo" width={32} height={32} className="h-6 w-6" />
                            </div>
                            <span className="font-bold text-xl text-white">Nac AI</span>
                        </div>
                        <p className="text-slate-400">
                            Transforming learning with AI-powered tools for students, researchers, and professionals.
                        </p>
                        <div className="flex space-x-3">
                            <Button
                                size="icon"
                                variant="ghost"
                                className="text-slate-400 hover:text-white hover:bg-slate-800 rounded-full h-8 w-8 p-0"
                            >
                                <Twitter className="h-4 w-4" />
                                <span className="sr-only">Twitter</span>
                            </Button>
                            <Button
                                size="icon"
                                variant="ghost"
                                className="text-slate-400 hover:text-white hover:bg-slate-800 rounded-full h-8 w-8 p-0"
                            >
                                <Facebook className="h-4 w-4" />
                                <span className="sr-only">Facebook</span>
                            </Button>
                            <Button
                                size="icon"
                                variant="ghost"
                                className="text-slate-400 hover:text-white hover:bg-slate-800 rounded-full h-8 w-8 p-0"
                            >
                                <Instagram className="h-4 w-4" />
                                <span className="sr-only">Instagram</span>
                            </Button>
                            <Button
                                size="icon"
                                variant="ghost"
                                className="text-slate-400 hover:text-white hover:bg-slate-800 rounded-full h-8 w-8 p-0"
                            >
                                <Linkedin className="h-4 w-4" />
                                <span className="sr-only">LinkedIn</span>
                            </Button>
                            <Button
                                size="icon"
                                variant="ghost"
                                className="text-slate-400 hover:text-white hover:bg-slate-800 rounded-full h-8 w-8 p-0"
                            >
                                <Youtube className="h-4 w-4" />
                                <span className="sr-only">YouTube</span>
                            </Button>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-medium text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-slate-400 hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/tools" className="text-slate-400 hover:text-white transition-colors">
                                    AI Tools
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="text-slate-400 hover:text-white transition-colors">
                                    Pricing
                                </Link>
                            </li>
                            {/* <li>
                                <Link href="/team" className="text-slate-400 hover:text-white transition-colors">
                                    Team
                                </Link>
                            </li> */}
                            <li>
                                <Link href="/blog" className="text-slate-400 hover:text-white transition-colors">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-medium text-white mb-4">Tools</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/tools/youtube" className="text-slate-400 hover:text-white transition-colors">
                                    YouTube Tools
                                </Link>
                            </li>
                            <li>
                                <Link href="/tools/pdf" className="text-slate-400 hover:text-white transition-colors">
                                    PDF Tools
                                </Link>
                            </li>
                            <li>
                                <Link href="/tools/presentation" className="text-slate-400 hover:text-white transition-colors">
                                    Presentation Tools
                                </Link>
                            </li>
                            <li>
                                <Link href="/tools/study" className="text-slate-400 hover:text-white transition-colors">
                                    Study Tools
                                </Link>
                            </li>
                            <li>
                                <Link href="/tools/writer" className="text-slate-400 hover:text-white transition-colors">
                                    Writer Tools
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-medium text-white mb-4">Subscribe</h3>
                        <p className="text-slate-400 mb-4">Stay updated with our latest tools and features</p>
                        <div className="flex space-x-2">
                            <Input type="email" placeholder="Your email" className="bg-slate-800 border-slate-700 text-white" />
                            <Button>
                                <Mail className="h-4 w-4 mr-2" />
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-slate-400 text-sm">© {currentYear} Nac AI. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <Link href="/privacy" className="text-slate-400 hover:text-white text-sm">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-slate-400 hover:text-white text-sm">
                            Terms of Service
                        </Link>
                        <Link href="/contact" className="text-slate-400 hover:text-white text-sm">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
