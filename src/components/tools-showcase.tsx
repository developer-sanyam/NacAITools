import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Youtube, FileText, PresentationIcon, GraduationCap, Pencil, BarChart, ArrowRight, Brain } from "lucide-react"

const toolsData = {
    youtube: [
        "YouTube Video Summarizer",
        "YouTube Transcript Generator",
        "YouTube Transcript Downloader",
        "YouTube Subtitle Downloader",
        "YouTube Summary with ChatGPT",
    ],
    presentation: [
        "AI PPT Maker",
        "AI Presentation Maker",
        "AI Slide Generator",
        "AI Keynote Generator",
        "AI PPT Summarizer",
    ],
    pdf: [
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
    study: [
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
    writer: [
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
    other: [
        "AI Summarizer",
        "AI Diagram",
        "AI Visual Generator",
        "AI Mind Map Generator",
        "AI Sketchnotes Generator",
        "AI Diagram Generator",
        "AI Flowchart Generator",
        "AI Pie Chart Generator",
        "Audio to Text Converter",
        "Video to Text Converter",
        "AI Music Generator",
        "AI Rap Lyrics Generator",
    ],
}

const categoryIcons = {
    youtube: <Youtube className="h-5 w-5" />,
    presentation: <PresentationIcon className="h-5 w-5" />,
    pdf: <FileText className="h-5 w-5" />,
    study: <GraduationCap className="h-5 w-5" />,
    writer: <Pencil className="h-5 w-5" />,
    other: <BarChart className="h-5 w-5" />,
}

const ToolsShowcase = () => {

    return (
        <Tabs defaultValue="youtube" className="w-full">
            <div className="flex justify-center mb-8">
                <TabsList className="w-full max-w-4xl">
                    <TabsTrigger value="youtube" className="flex items-center gap-2">
                        <Youtube className="!h-6 !w-6" />
                        <span className="hidden md:inline">YouTube</span>
                    </TabsTrigger>
                    <TabsTrigger value="presentation" className="flex items-center gap-2">
                        <PresentationIcon className="!h-6 !w-6" />
                        <span className="hidden md:inline">Presentation</span>
                    </TabsTrigger>
                    <TabsTrigger value="pdf" className="flex items-center gap-2">
                        <FileText className="!h-6 !w-6" />
                        <span className="hidden md:inline">PDF</span>
                    </TabsTrigger>
                    <TabsTrigger value="study" className="flex items-center gap-2">
                        <GraduationCap className="!h-6 !w-6" />
                        <span className="hidden md:inline">Study</span>
                    </TabsTrigger>
                    <TabsTrigger value="writer" className="flex items-center gap-2">
                        <Pencil className="!h-6 !w-6" />
                        <span className="hidden md:inline">Writer</span>
                    </TabsTrigger>
                    <TabsTrigger value="other" className="flex items-center gap-2">
                        <BarChart className="!h-6 !w-6" />
                        <span className="hidden md:inline">Other</span>
                    </TabsTrigger>
                </TabsList>
            </div>

            {(Object.keys(toolsData) as Array<keyof typeof toolsData>).map((category) => (
                <TabsContent key={category} value={category} className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {toolsData[category].map((tool, index) => (
                            <motion.div
                                key={tool}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                exit={{ opacity: 0, y: -20 }}
                                layout
                            >
                                <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
                                    <CardHeader className="pb-2">
                                        <div className="flex items-center gap-2">
                                            {categoryIcons[category]}
                                            <CardTitle className="text-lg">{tool}</CardTitle>
                                        </div>
                                        <CardDescription className="mt-2">
                                            Enhance your learning with our powerful {tool.toLowerCase()} tool
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Brain className="h-4 w-4 text-primary" />
                                            <span>AI-powered analysis and generation</span>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button variant="ghost" className="w-full justify-between group">
                                            Try Now
                                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </TabsContent>
            ))}
        </Tabs>
    )
}

export default ToolsShowcase
