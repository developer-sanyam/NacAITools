import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, PresentationIcon } from "lucide-react"

const presentationTools = [
  {
    name: "AI PPT Maker",
    description: "Create professional PowerPoint presentations automatically with AI-generated content and design.",
    slug: "ai-ppt-maker",
  },
  {
    name: "AI Presentation Maker",
    description: "Generate complete presentations with just a few prompts, including content, design, and visuals.",
    slug: "ai-presentation-maker",
  },
  {
    name: "AI Slide Generator",
    description: "Create individual slides or entire decks with AI-powered content and formatting.",
    slug: "ai-slide-generator",
  },
  {
    name: "AI Keynote Generator",
    description: "Build impressive keynote presentations with AI assistance for content and visual elements.",
    slug: "ai-keynote-generator",
  },
  {
    name: "AI PPT Summarizer",
    description: "Extract key points and create concise summaries from existing PowerPoint presentations.",
    slug: "ai-ppt-summarizer",
  },
]

export default function PresentationToolsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center p-2 bg-chart-2/10 rounded-full mb-4">
          <PresentationIcon className="h-6 w-6 text-chart-2" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">AI Presentation Tools</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Create stunning presentations, slides, and visual content with our AI-powered presentation tools
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {presentationTools.map((tool) => (
          <Card key={tool.slug} className="flex flex-col h-full hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>{tool.name}</CardTitle>
              <CardDescription>{tool.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow"></CardContent>
            <CardFooter>
              <Button asChild className="w-full justify-between group">
                <Link href={`/tools/presentation/${tool.slug}`}>
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
