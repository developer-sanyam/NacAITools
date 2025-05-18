"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
    Menu,
    X,
    ChevronRight,
    Search,
    // Bell,
    User,
    Star,
    Mail
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
// import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

// Import missing icons
import { Youtube, PresentationIcon, FileText, GraduationCap, Pencil, BarChart } from "lucide-react"
import { ModeToggle } from "./mode_toggle"
import Image from "next/image"

// Define the navigation structure with categories and their tools
const navStructure = {
    "AI YouTube": {
        path: "/tools/youtube",
        icon: <Youtube className="h-5 w-5" />,
        items: [
            "YouTube Video Summarizer",
            "YouTube Transcript Generator",
            "YouTube Transcript Downloader",
            "YouTube Subtitle Downloader",
            "YouTube Summary with ChatGPT",
        ],
    },
    Presentation: {
        path: "/tools/presentation",
        icon: <PresentationIcon className="h-5 w-5" />,
        items: ["AI PPT Maker", "AI Presentation Maker", "AI Slide Generator", "AI Keynote Generator", "AI PPT Summarizer"],
    },
    "AI PDF": {
        path: "/tools/pdf",
        icon: <FileText className="h-5 w-5" />,
        items: [
            "ChatPDF",
            "PDF Summarizer",
            "PDF Reader",
            "PDF Translator",
            "PDF to Markdown",
            "PDF to PNG",
            "PDF to Excel",
            "Word to PDF",
            "Image to PDF",
            "Excel to PDF",
            "PDF to Brainrot",
        ],
    },
    Study: {
        path: "/tools/study",
        icon: <GraduationCap className="h-5 w-5" />,
        items: [
            "AI Study",
            "Ask AI",
            "AI Flashcard Maker",
            "AI Quiz Generator",
            "AI Grader",
            "AI Study Guide Maker",
            "AI Graphing Calculator",
            "AI Math",
            "AI Math Solver",
            "AI Homework Helper",
            "AI Answer Generator",
            "AI Question Generator",
        ],
    },
    Writer: {
        path: "/tools/writer",
        icon: <Pencil className="h-5 w-5" />,
        items: [
            "AI Detector",
            "AI Humanizer",
            "AI Essay Writer",
            "AI Paragraph Generator",
            "AI Idea Generator",
            "AI Notes Generator",
            "AI Story Generator",
            "Paragraph Rewriter",
            "AI Outline Generator",
            "AI Grammar Checker",
        ],
    },
    "AI Tools": {
        path: "/tools/other",
        icon: <BarChart className="h-5 w-5" />,
        items: [
            "AI Summarizer",
            "YouTube Summarizer",
            "PDF Summarizer",
            "PPT Summarizer",
            "Image Summarizer",
            "Video Summarizer",
            "Audio Summarizer",
            "Book Summarizer",
            "Podcast Summarizer",
            "Article Summarizer",
        ],
    },
} as const

type CategoryKey = keyof typeof navStructure

// Helper function to convert tool name to URL path
const toolNameToPath = (category: CategoryKey, toolName: string) => {
    const categoryPath = navStructure[category].path
    const slug = toolName.toLowerCase().replace(/\s+/g, "-")
    return `${categoryPath}/${slug}`
}

// Custom NavigationMenuLink component for tool items
const ToolLink = ({
    category,
    tool,
    onSelect,
}: {
    category: CategoryKey
    tool: string
    onSelect?: () => void
}) => {
    const getToolIcon = (tool: string) => {
        if (tool.toLowerCase().includes("youtube")) {
            return <Youtube className="h-4 w-4" />
        } else if (tool.toLowerCase().includes("pdf")) {
            return <FileText className="h-4 w-4" />
        } else if (tool.toLowerCase().includes("presentation") || tool.toLowerCase().includes("ppt")) {
            return <PresentationIcon className="h-4 w-4" />
        } else if (tool.toLowerCase().includes("study") || tool.toLowerCase().includes("quiz")) {
            return <GraduationCap className="h-4 w-4" />
        } else if (tool.toLowerCase().includes("writer") || tool.toLowerCase().includes("essay")) {
            return <Pencil className="h-4 w-4" />
        } else {
            return <ChevronRight className="h-4 w-4" />
        }
    }

    return (
        <NavigationMenuLink asChild>
            <Link
                href={toolNameToPath(category, tool)}
                className="flex flex-row items-center p-2 rounded-md text-sm text-muted-foreground hover:bg-accent transition-colors relative z-10"
                onClick={onSelect}
            >
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {getToolIcon(tool)}
                </span>
                <span className="group-hover:text-primary transition-colors">{tool}</span>
            </Link>
        </NavigationMenuLink>
    )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")
    const pathname = usePathname()
    const searchRef = useRef<HTMLDivElement>(null)

    // Check if the current path matches a category
    const isActivePath = (path: string) => {
        return pathname?.startsWith(path)
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        const handleClickOutside = (event: MouseEvent) => {
            // Close search when clicking outside
            if (
                searchRef.current &&
                !searchRef.current.contains(event.target as Node) &&
                !(event.target as Element).closest("button")?.getAttribute("data-search")
            ) {
                setSearchOpen(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            window.removeEventListener("scroll", handleScroll)
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [searchOpen])

    const toggleMenu = () => {
        setIsOpen(!isOpen)
        if (searchOpen) setSearchOpen(false)
    }

    const toggleSearch = () => {
        setSearchOpen(!searchOpen)
        if (isOpen) setIsOpen(false)
    }

    // Filter tools based on search query
    const filteredTools = searchQuery
        ? Object.entries(navStructure).flatMap(([category, { items }]) =>
            items
                .filter((item) => item.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((item) => ({
                    category,
                    name: item,
                    path: toolNameToPath(category as CategoryKey, item),
                    icon: navStructure[category as CategoryKey].icon,
                })),
        )
        : []

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled || searchOpen
                ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/40"
                : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2 mr-6">
                            <div className="relative">
                                <motion.div
                                    initial={{ rotate: 0 }}
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                    className="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-gray-600 flex items-center justify-center"
                                >
                                    <Image src={"/logo.png"} alt="Logo" width={32} height={32} className="h-8 w-8" />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                                    className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-chart-2"
                                />
                            </div>
                            <span className="font-bold text-xl">Nac AI</span>
                        </Link>

                        {/* Desktop Navigation using shadcn NavigationMenu */}
                        <NavigationMenu className="hidden lg:flex">
                            <NavigationMenuList>
                                {Object.keys(navStructure).map((category) => (
                                    <NavigationMenuItem key={category}>
                                        <NavigationMenuTrigger
                                            className={cn(
                                                "flex items-center gap-1.5",
                                                isActivePath(navStructure[category as CategoryKey].path) &&
                                                "bg-secondary text-secondary-foreground",
                                            )}
                                        >
                                            <span className="flex items-center gap-1.5">
                                                {navStructure[category as CategoryKey].icon}
                                                {category}
                                            </span>
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <div className="w-full min-w-5xl p-4">
                                                <div className="flex justify-between mb-4">
                                                    <h3 className="text-lg font-medium flex items-center gap-2">
                                                        {navStructure[category as CategoryKey].icon}
                                                        {category} Tools
                                                    </h3>
                                                    <Button variant="ghost" size="sm" asChild className="text-sm">
                                                        <Link href={navStructure[category as CategoryKey].path}>
                                                            View All <ChevronRight className="ml-1 h-3 w-3" />
                                                        </Link>
                                                    </Button>
                                                </div>
                                                <div className="grid grid-cols-3 gap-2">
                                                    {navStructure[category as CategoryKey].items.map((tool) => (
                                                        <ToolLink key={tool} category={category as CategoryKey} tool={tool} />
                                                    ))}
                                                </div>
                                            </div>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                            <NavigationMenuViewport />
                        </NavigationMenu>
                    </div>

                    <div className="flex items-center space-x-2">
                        {/* Search Button */}
                        <Button variant="ghost" size="icon" className="relative" onClick={toggleSearch} data-search="true">
                            <Search className="h-5 w-5" />
                            <span className="sr-only">Search</span>
                            {searchOpen && (
                                <span className="absolute bottom-0 left-1/2 w-1 h-1 bg-primary rounded-full transform -translate-x-1/2 translate-y-0.5"></span>
                            )}
                        </Button>

                        {/* Theme Toggle */}
                        <ModeToggle />

                        {/* Notifications */}
                        {/* <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="relative">
                                    <Bell className="h-5 w-5" />
                                    <span className="sr-only">Notifications</span>
                                    <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-80">
                                <div className="flex items-center justify-between px-4 py-2 border-b">
                                    <span className="font-medium">Notifications</span>
                                    <Badge variant="outline" className="text-xs">
                                        3 new
                                    </Badge>
                                </div>
                                <div className="py-2 px-4 border-b">
                                    <div className="flex items-start gap-3 mb-3">
                                        <span className="bg-primary/10 p-1.5 rounded-full text-primary mt-0.5">
                                            <Star className="h-3.5 w-3.5" />
                                        </span>
                                        <div>
                                            <p className="text-sm">New AI tools available</p>
                                            <p className="text-xs text-muted-foreground">Try our new AI Essay Writer tool</p>
                                            <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="bg-chart-2/10 p-1.5 rounded-full text-chart-2 mt-0.5">
                                            <Bell className="h-3.5 w-3.5" />
                                        </span>
                                        <div>
                                            <p className="text-sm">Your summary is ready</p>
                                            <p className="text-xs text-muted-foreground">YouTube video summary completed</p>
                                            <p className="text-xs text-muted-foreground mt-1">5 hours ago</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-2 px-4 text-center">
                                    <Button variant="ghost" size="sm" className="w-full text-xs">
                                        View all notifications
                                    </Button>
                                </div>
                            </DropdownMenuContent>
                        </DropdownMenu> */}

                        <div className="hidden md:flex items-center space-x-2">
                            {/* <Button variant="ghost" size="sm" className="gap-2">
                                <User className="h-4 w-4" />
                                Sign In
                            </Button> */}
                            <Button size="sm" className="gap-2">
                                Get Started
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>

                        <Button variant="ghost" size="icon" className="lg:hidden" onClick={toggleMenu}>
                            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Search Overlay */}
            <AnimatePresence>
                {searchOpen && (
                    <motion.div
                        ref={searchRef}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 right-0 bg-background border-b shadow-md z-40"
                    >
                        <div className="container mx-auto px-4 md:px-6 py-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="text"
                                    placeholder="Search for tools..."
                                    className="pl-10 w-full"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    autoFocus
                                />
                            </div>

                            {searchQuery && (
                                <div className="mt-4 max-h-[60vh] overflow-y-auto">
                                    {filteredTools.length > 0 ? (
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                                            {filteredTools.map((tool) => (
                                                <Link
                                                    key={tool.path}
                                                    href={tool.path}
                                                    className="flex items-center p-2 rounded-md hover:bg-accent transition-colors relative z-10"
                                                    onClick={() => setSearchOpen(false)}
                                                >
                                                    <span className="mr-2 text-primary">{tool.icon}</span>
                                                    <div>
                                                        <div className="font-medium">{tool.name}</div>
                                                        <div className="text-xs text-muted-foreground">{tool.category}</div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="text-center py-8 text-muted-foreground">
                                            No tools found matching &quot;{searchQuery}&quot;
                                        </div>
                                    )}
                                </div>
                            )}

                            {!searchQuery && (
                                <div className="mt-4">
                                    <h3 className="text-sm font-medium mb-2">Popular Searches</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {[
                                            "YouTube Summarizer",
                                            "PDF to Text",
                                            "AI Essay Writer",
                                            "Study Guide Maker",
                                            "Presentation Generator",
                                        ].map((term) => (
                                            <Button
                                                key={term}
                                                variant="outline"
                                                size="sm"
                                                className="rounded-full text-xs"
                                                onClick={() => setSearchQuery(term)}
                                            >
                                                {term}
                                            </Button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden bg-background border-t overflow-auto max-h-[80vh] z-50"
                    >
                        <div className="container px-4 py-4">
                            <div className="relative mb-4">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="text"
                                    placeholder="Search for tools..."
                                    className="pl-10 w-full"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>

                            {searchQuery ? (
                                <div className="mb-6">
                                    <h3 className="text-sm font-medium mb-2">Search Results</h3>
                                    {filteredTools.length > 0 ? (
                                        <div className="space-y-2">
                                            {filteredTools.map((tool) => (
                                                <Link
                                                    key={tool.path}
                                                    href={tool.path}
                                                    className="flex items-center p-2 rounded-md hover:bg-accent transition-colors relative z-10"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    <span className="mr-2 text-primary">{tool.icon}</span>
                                                    <div>
                                                        <div className="font-medium">{tool.name}</div>
                                                        <div className="text-xs text-muted-foreground">{tool.category}</div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="text-center py-4 text-muted-foreground">
                                            No tools found matching &quot;{searchQuery}&quot;
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="space-y-4 text-start">
                                    {Object.keys(navStructure).map((category) => {
                                        const categoryKey = category as CategoryKey
                                        return (
                                            <NavigationMenu key={category} orientation="vertical" className="w-full">
                                                <NavigationMenuList className="flex-col items-start space-y-2 w-full">
                                                    <NavigationMenuItem className="w-full">
                                                        <NavigationMenuTrigger className="w-full justify-between">
                                                            <span className="flex items-center gap-2">
                                                                {navStructure[categoryKey].icon}
                                                                {category}
                                                            </span>
                                                        </NavigationMenuTrigger>
                                                        <NavigationMenuContent className="w-full left-0">
                                                            <div className="pl-4 space-y-1 border-l-2 border-primary/20 w-full">
                                                                {navStructure[categoryKey].items.map((tool) => (
                                                                    <Link
                                                                        key={tool}
                                                                        href={toolNameToPath(categoryKey, tool)}
                                                                        className="flex items-center py-1.5 text-sm text-muted-foreground hover:text-primary"
                                                                        onClick={() => setIsOpen(false)}
                                                                    >
                                                                        <ChevronRight className="h-3 w-3 mr-2" />
                                                                        {tool}
                                                                    </Link>
                                                                ))}
                                                                <Link
                                                                    href={navStructure[categoryKey].path}
                                                                    className="flex items-center py-2 mt-1 text-sm font-medium text-primary"
                                                                    onClick={() => setIsOpen(false)}
                                                                >
                                                                    View all {category} tools
                                                                </Link>
                                                            </div>
                                                        </NavigationMenuContent>
                                                    </NavigationMenuItem>
                                                </NavigationMenuList>
                                            </NavigationMenu>
                                        )
                                    })}

                                    <div className="pt-4 border-t space-y-2">
                                        <Link
                                            href="/pricing"
                                            className="flex items-center py-2 text-sm font-medium hover:text-primary"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <span className="bg-primary/10 p-1.5 rounded-full text-primary mr-2">
                                                <Star className="h-4 w-4" />
                                            </span>
                                            Pricing
                                        </Link>
                                        <Link
                                            href="/#team"
                                            className="flex items-center py-2 text-sm font-medium hover:text-primary"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <span className="bg-chart-2/10 p-1.5 rounded-full text-chart-2 mr-2">
                                                <User className="h-4 w-4" />
                                            </span>
                                            Team
                                        </Link>
                                        <Link
                                            href="/blog"
                                            className="flex items-center py-2 text-sm font-medium hover:text-primary"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <span className="bg-chart-3/10 p-1.5 rounded-full text-chart-3 mr-2">
                                                <FileText className="h-4 w-4" />
                                            </span>
                                            Blog
                                        </Link>
                                        <Link
                                            href="/contact"
                                            className="flex items-center py-2 text-sm font-medium hover:text-primary"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <span className="bg-chart-4/10 p-1.5 rounded-full text-chart-4 mr-2">
                                                <Mail className="h-4 w-4" />
                                            </span>
                                            Contact
                                        </Link>
                                    </div>
                                </div>
                            )}

                            <div className="pt-4 border-t mt-4">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        <Avatar className="h-8 w-8">
                                            <AvatarFallback>U</AvatarFallback>
                                        </Avatar>
                                        <div className="text-sm">
                                            <p className="font-medium">Guest User</p>
                                            <p className="text-xs text-muted-foreground">Sign in to save your work</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    <Button className="w-full">Get Started</Button>
                                    {/* <Button variant="outline" className="w-full">
                                        Sign In
                                    </Button> */}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Navbar
