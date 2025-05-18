import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Youtube } from "lucide-react"

const youtubeTools = [
  {
    name: "YouTube Video Summarizer",
    description: "Get concise summaries of YouTube videos to save time and extract key information.",
    slug: "youtube-video-summarizer",
  },
  {
    name: "YouTube Transcript Generator",
    description: "Generate accurate transcripts from YouTube videos in multiple languages.",
    slug: "youtube-transcript-generator",
  },
  {
    name: "YouTube Transcript Downloader",
    description: "Download transcripts from YouTube videos in various formats for offline use.",
    slug: "youtube-transcript-downloader",
  },
  {
    name: "YouTube Subtitle Downloader",
    description: "Extract and download subtitles from YouTube videos in multiple languages and formats.",
    slug: "youtube-subtitle-downloader",
  },
  {
    name: "YouTube Summary with ChatGPT",
    description: "Get AI-powered summaries of YouTube videos using advanced language models.",
    slug: "youtube-summary-with-chatgpt",
  },
]

export default function YouTubeToolsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
          <Youtube className="h-6 w-6 text-primary" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">AI YouTube Tools</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Powerful AI tools to extract, analyze, and transform YouTube content for learning and research
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {youtubeTools.map((tool) => (
          <Card key={tool.slug} className="flex flex-col h-full hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>{tool.name}</CardTitle>
              <CardDescription>{tool.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow"></CardContent>
            <CardFooter>
              <Button asChild className="w-full justify-between group">
                <Link href={`/tools/youtube/${tool.slug}`}>
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
