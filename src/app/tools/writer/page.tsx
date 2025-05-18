import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Pencil } from "lucide-react"

const writerTools = [
  {
    name: "AI Detector",
    description: "Identify AI-generated content with high accuracy to ensure authenticity.",
    slug: "ai-detector",
  },
  {
    name: "AI Humanizer",
    description: "Transform AI-generated content to sound more natural and human-written.",
    slug: "ai-humanizer",
  },
  {
    name: "AI Essay Writer",
    description: "Generate well-structured essays on any topic with customizable parameters.",
    slug: "ai-essay-writer",
  },
  {
    name: "AI Paragraph Generator",
    description: "Create coherent paragraphs for any writing project with AI assistance.",
    slug: "ai-paragraph-generator",
  },
  {
    name: "AI Idea Generator",
    description: "Get creative writing prompts and ideas for your next project.",
    slug: "ai-idea-generator",
  },
  {
    name: "AI Notes Generator",
    description: "Create comprehensive notes from lectures, books, or other learning materials.",
    slug: "ai-notes-generator",
  },
  {
    name: "AI Story Generator",
    description: "Create engaging stories with customizable plots, characters, and settings.",
    slug: "ai-story-generator",
  },
  {
    name: "Paragraph Rewriter",
    description: "Rewrite paragraphs to improve clarity, style, or avoid plagiarism.",
    slug: "paragraph-rewriter",
  },
  {
    name: "AI Outline Generator",
    description: "Create structured outlines for essays, articles, or research papers.",
    slug: "ai-outline-generator",
  },
  {
    name: "AI Grammar Checker",
    description: "Identify and correct grammar, spelling, and style issues in your writing.",
    slug: "ai-grammar-checker",
  },
]

export default function WriterToolsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center p-2 bg-chart-5/10 rounded-full mb-4">
          <Pencil className="h-6 w-6 text-chart-5" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">AI Writer Tools</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Enhance your writing with our powerful AI-powered tools for content creation and improvement
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {writerTools.map((tool) => (
          <Card key={tool.slug} className="flex flex-col h-full hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>{tool.name}</CardTitle>
              <CardDescription>{tool.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow"></CardContent>
            <CardFooter>
              <Button asChild className="w-full justify-between group">
                <Link href={`/tools/writer/${tool.slug}`}>
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
