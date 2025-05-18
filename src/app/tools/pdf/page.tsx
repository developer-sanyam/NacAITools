import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, FileText } from "lucide-react"

const pdfTools = [
  {
    name: "ChatPDF",
    description: "Have interactive conversations with your PDF documents using AI.",
    slug: "chatpdf",
  },
  {
    name: "PDF Summarizer",
    description: "Generate concise summaries of PDF documents to extract key information quickly.",
    slug: "pdf-summarizer",
  },
  {
    name: "PDF Reader",
    description: "Advanced PDF reader with AI-powered features for better document navigation and understanding.",
    slug: "pdf-reader",
  },
  {
    name: "PDF Translator",
    description: "Translate PDF documents between multiple languages while preserving formatting.",
    slug: "pdf-translator",
  },
  {
    name: "PDF to Markdown",
    description: "Convert PDF documents to clean, formatted Markdown for easy editing and integration.",
    slug: "pdf-to-markdown",
  },
  {
    name: "PDF to PNG",
    description: "Convert PDF pages to high-quality PNG images with customizable settings.",
    slug: "pdf-to-png",
  },
  {
    name: "PDF to Excel",
    description: "Extract tables and data from PDFs and convert them to Excel spreadsheets.",
    slug: "pdf-to-excel",
  },
  {
    name: "Word to PDF",
    description: "Convert Word documents to PDF format with perfect formatting preservation.",
    slug: "word-to-pdf",
  },
  {
    name: "Image to PDF",
    description: "Convert images to PDF documents with customizable layout options.",
    slug: "image-to-pdf",
  },
  {
    name: "Excel to PDF",
    description: "Convert Excel spreadsheets to PDF documents with formatting intact.",
    slug: "excel-to-pdf",
  },
  {
    name: "PDF to Brainrot",
    description: "Transform PDF content into engaging, memorable learning materials.",
    slug: "pdf-to-brainrot",
  },
]

export default function PDFToolsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center p-2 bg-chart-3/10 rounded-full mb-4">
          <FileText className="h-6 w-6 text-chart-3" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">AI PDF Tools</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Powerful AI tools to analyze, convert, and transform PDF documents for better productivity
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pdfTools.map((tool) => (
          <Card key={tool.slug} className="flex flex-col h-full hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>{tool.name}</CardTitle>
              <CardDescription>{tool.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow"></CardContent>
            <CardFooter>
              <Button asChild className="w-full justify-between group">
                <Link href={`/tools/pdf/${tool.slug}`}>
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
