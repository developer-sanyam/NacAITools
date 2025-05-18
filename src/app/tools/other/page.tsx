import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, BarChart } from "lucide-react"

const otherTools = [
  {
    name: "AI Summarizer",
    description: "Generate concise summaries of any text content with AI assistance.",
    slug: "ai-summarizer",
  },
  {
    name: "YouTube Summarizer",
    description: "Get quick summaries of YouTube videos to extract key information.",
    slug: "youtube-summarizer",
  },
  {
    name: "PDF Summarizer",
    description: "Create concise summaries of PDF documents for faster review.",
    slug: "pdf-summarizer",
  },
  {
    name: "PPT Summarizer",
    description: "Extract key points from PowerPoint presentations for quick review.",
    slug: "ppt-summarizer",
  },
  {
    name: "Image Summarizer",
    description: "Generate text descriptions and summaries of image content.",
    slug: "image-summarizer",
  },
  {
    name: "Video Summarizer",
    description: "Create concise summaries of video content across various platforms.",
    slug: "video-summarizer",
  },
  {
    name: "Audio Summarizer",
    description: "Generate text summaries from audio content like podcasts and lectures.",
    slug: "audio-summarizer",
  },
  {
    name: "Book Summarizer",
    description: "Get comprehensive summaries of books to extract key insights.",
    slug: "book-summarizer",
  },
  {
    name: "Podcast Summarizer",
    description: "Create text summaries of podcast episodes for quick review.",
    slug: "podcast-summarizer",
  },
  {
    name: "Article Summarizer",
    description: "Generate concise summaries of articles and blog posts.",
    slug: "article-summarizer",
  },
  {
    name: "Word Summarizer",
    description: "Create summaries of Word documents with AI assistance.",
    slug: "word-summarizer",
  },
  {
    name: "Text Summarizer",
    description: "Generate concise summaries of any text content.",
    slug: "text-summarizer",
  },
  {
    name: "AI Diagram",
    description: "Create professional diagrams with AI assistance.",
    slug: "ai-diagram",
  },
  {
    name: "AI Visual Generator",
    description: "Generate visual content for presentations and documents.",
    slug: "ai-visual-generator",
  },
  {
    name: "AI Mind Map Generator",
    description: "Create comprehensive mind maps for any topic or concept.",
    slug: "ai-mind-map-generator",
  },
  {
    name: "AI Sketchnotes Generator",
    description: "Generate visual notes with illustrations for better retention.",
    slug: "ai-sketchnotes-generator",
  },
  {
    name: "AI Diagram Generator",
    description: "Create professional diagrams for various purposes.",
    slug: "ai-diagram-generator",
  },
  {
    name: "AI Flowchart Generator",
    description: "Generate clear flowcharts to visualize processes and workflows.",
    slug: "ai-flowchart-generator",
  },
  {
    name: "AI Pie Chart Generator",
    description: "Create customized pie charts for data visualization.",
    slug: "ai-pie-chart-generator",
  },
  {
    name: "AI ER Diagram Generator",
    description: "Generate entity-relationship diagrams for database design.",
    slug: "ai-er-diagram-generator",
  },
  {
    name: "AI Sequence Diagram Generator",
    description: "Create sequence diagrams to visualize process flows and interactions.",
    slug: "ai-sequence-diagram-generator",
  },
  {
    name: "AI Infographic Generator",
    description: "Create engaging infographics to present information visually.",
    slug: "ai-infographic-generator",
  },
  // Additional tools
  {
    name: "Learn Platform",
    description: "Comprehensive learning platform with AI-powered features.",
    slug: "learn-platform",
  },
  {
    name: "YouTube Summary",
    description: "Get detailed summaries of YouTube videos for better understanding.",
    slug: "youtube-summary",
  },
  {
    name: "BiliBili Summary",
    description: "Generate summaries of BiliBili videos with key points extraction.",
    slug: "bilibili-summary",
  },
  {
    name: "Coursera Summary",
    description: "Get concise summaries of Coursera courses and lectures.",
    slug: "coursera-summary",
  },
  {
    name: "Udemy Summary",
    description: "Create summaries of Udemy courses for quick review.",
    slug: "udemy-summary",
  },
  {
    name: "Audio to Text Converter",
    description: "Convert audio files to accurate text transcriptions.",
    slug: "audio-to-text-converter",
  },
  {
    name: "Video to Text Converter",
    description: "Extract text content from video files with high accuracy.",
    slug: "video-to-text-converter",
  },
  {
    name: "YouTube to Text Converter",
    description: "Convert YouTube video content to text transcriptions.",
    slug: "youtube-to-text-converter",
  },
  {
    name: "PDF to Markdown Converter",
    description: "Convert PDF documents to clean Markdown format.",
    slug: "pdf-to-markdown-converter",
  },
  {
    name: "AI Music Generator",
    description: "Create original music with AI composition assistance.",
    slug: "ai-music-generator",
  },
  {
    name: "AI Rap Lyrics Generator",
    description: "Generate creative rap lyrics with customizable themes and styles.",
    slug: "ai-rap-lyrics-generator",
  },
  {
    name: "AI Podcast Generator",
    description: "Create podcast scripts and content with AI assistance.",
    slug: "ai-podcast-generator",
  },
  {
    name: "Sticky Notes Generator",
    description: "Generate digital sticky notes for organization and reminders.",
    slug: "sticky-notes-generator",
  },
  {
    name: "Chat & Ask DeepSeek R1 & V3",
    description: "Advanced AI chat interface for complex queries and learning assistance.",
    slug: "chat-ask-deepseek",
  },
]

export default function OtherToolsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center p-2 bg-chart-1/10 rounded-full mb-4">
          <BarChart className="h-6 w-6 text-chart-1" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">Additional AI Tools</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover our diverse collection of specialized AI tools for various tasks and needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherTools.map((tool) => (
          <Card key={tool.slug} className="flex flex-col h-full hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>{tool.name}</CardTitle>
              <CardDescription>{tool.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow"></CardContent>
            <CardFooter>
              <Button asChild className="w-full justify-between group">
                <Link href={`/tools/other/${tool.slug}`}>
                  Try Now
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
