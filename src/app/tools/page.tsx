import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Youtube, PresentationIcon, FileText, GraduationCap, Pencil, BarChart } from "lucide-react"

const toolCategories = [
  {
    name: "AI YouTube",
    description: "Tools for YouTube video analysis, transcription, and summarization",
    icon: <Youtube className="h-6 w-6 text-primary" />,
    color: "bg-primary/10",
    path: "/tools/youtube",
  },
  {
    name: "Presentation",
    description: "AI-powered presentation creation and enhancement tools",
    icon: <PresentationIcon className="h-6 w-6 text-chart-2" />,
    color: "bg-chart-2/10",
    path: "/tools/presentation",
  },
  {
    name: "AI PDF",
    description: "Tools for PDF analysis, conversion, and transformation",
    icon: <FileText className="h-6 w-6 text-chart-3" />,
    color: "bg-chart-3/10",
    path: "/tools/pdf",
  },
  {
    name: "Study",
    description: "AI-powered study aids and educational tools",
    icon: <GraduationCap className="h-6 w-6 text-chart-4" />,
    color: "bg-chart-4/10",
    path: "/tools/study",
  },
  {
    name: "Writer",
    description: "AI writing assistance and content creation tools",
    icon: <Pencil className="h-6 w-6 text-chart-5" />,
    color: "bg-chart-5/10",
    path: "/tools/writer",
  },
  {
    name: "AI Tools",
    description: "Additional AI tools for various specialized tasks",
    icon: <BarChart className="h-6 w-6 text-chart-1" />,
    color: "bg-chart-1/10",
    path: "/tools/other",
  },
]

export default function ToolsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">AI Learning Tools</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore our comprehensive collection of AI-powered tools to enhance your learning experience
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {toolCategories.map((category) => (
          <Card key={category.path} className="flex flex-col h-full hover:shadow-md transition-shadow">
            <CardHeader>
              <div className={`inline-flex items-center justify-center p-2 ${category.color} rounded-full mb-4`}>
                {category.icon}
              </div>
              <CardTitle>{category.name}</CardTitle>
              <CardDescription>{category.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow"></CardContent>
            <CardFooter>
              <Button asChild className="w-full justify-between group">
                <Link href={category.path}>
                  Explore Tools
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
