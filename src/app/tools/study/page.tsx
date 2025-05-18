import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, GraduationCap } from "lucide-react"

const studyTools = [
  {
    name: "AI Study",
    description: "Comprehensive AI-powered study assistant for all subjects and learning levels.",
    slug: "ai-study",
  },
  {
    name: "Ask AI",
    description: "Get instant answers to your academic questions with AI-powered explanations.",
    slug: "ask-ai",
  },
  {
    name: "AI Flashcard Maker",
    description: "Generate effective flashcards from your study materials automatically.",
    slug: "ai-flashcard-maker",
  },
  {
    name: "AI Quiz Generator",
    description: "Create customized quizzes to test your knowledge on any subject.",
    slug: "ai-quiz-generator",
  },
  {
    name: "AI Grader",
    description: "Get instant feedback and grading on your assignments and practice tests.",
    slug: "ai-grader",
  },
  {
    name: "AI Study Guide Maker",
    description: "Generate comprehensive study guides for any subject or topic.",
    slug: "ai-study-guide-maker",
  },
  {
    name: "AI Graphing Calculator",
    description: "Advanced graphing calculator with AI assistance for mathematical concepts.",
    slug: "ai-graphing-calculator",
  },
  {
    name: "AI Math",
    description: "Comprehensive math learning and problem-solving assistant.",
    slug: "ai-math",
  },
  {
    name: "AI Math Solver",
    description: "Solve complex math problems with step-by-step explanations.",
    slug: "ai-math-solver",
  },
  {
    name: "AI Homework Helper",
    description: "Get assistance with homework assignments across all subjects.",
    slug: "ai-homework-helper",
  },
  {
    name: "AI Answer Generator",
    description: "Generate detailed answers to academic questions for better understanding.",
    slug: "ai-answer-generator",
  },
  {
    name: "AI Question Generator",
    description: "Create practice questions to test your knowledge on any subject.",
    slug: "ai-question-generator",
  },
  {
    name: "AI Math Video Generator",
    description: "Create explanatory math videos with step-by-step solutions.",
    slug: "ai-math-video-generator",
  },
  {
    name: "Photomath AI",
    description: "Solve math problems by taking a photo with advanced AI recognition.",
    slug: "photomath-ai",
  },
  {
    name: "AI Worksheets",
    description: "Generate customized educational worksheets for any subject.",
    slug: "ai-worksheets",
  },
  {
    name: "AI Worksheet Generator",
    description: "Create tailored worksheets for classroom or self-study use.",
    slug: "ai-worksheet-generator",
  },
  {
    name: "AI Math Worksheets",
    description: "Generate math practice worksheets with customizable difficulty levels.",
    slug: "ai-math-worksheets",
  },
  {
    name: "AI Spelling Worksheets",
    description: "Create spelling practice worksheets tailored to different learning levels.",
    slug: "ai-spelling-worksheets",
  },
  {
    name: "All About Me Worksheet",
    description: "Generate personalized worksheets for self-reflection and personal development.",
    slug: "all-about-me-worksheet",
  },
]

export default function StudyToolsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center p-2 bg-chart-4/10 rounded-full mb-4">
          <GraduationCap className="h-6 w-6 text-chart-4" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">AI Study Tools</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Enhance your learning experience with our comprehensive suite of AI-powered study tools
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {studyTools.map((tool) => (
          <Card key={tool.slug} className="flex flex-col h-full hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>{tool.name}</CardTitle>
              <CardDescription>{tool.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow"></CardContent>
            <CardFooter>
              <Button asChild className="w-full justify-between group">
                <Link href={`/tools/study/${tool.slug}`}>
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
