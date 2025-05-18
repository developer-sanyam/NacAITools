import React, { JSX } from "react"
import { notFound } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  FileText,
  Upload,
  Youtube,
  PresentationIcon,
  GraduationCap,
  Pencil,
  BarChart,
  Info,
  Play,
  Settings,
  History,
} from "lucide-react"

// Define the structure for tool categories
type ToolCategoryKey = "youtube" | "presentation" | "pdf" | "study" | "writer" | "other";
type ToolCategory = {
  icon: JSX.Element;
  color: string;
  textColor: string;
};
const toolCategories: Record<ToolCategoryKey, ToolCategory> = {
  youtube: {
    icon: <Youtube className="h-6 w-6 text-primary" />,
    color: "bg-primary/10",
    textColor: "text-primary",
  },
  presentation: {
    icon: <PresentationIcon className="h-6 w-6 text-chart-2" />,
    color: "bg-chart-2/10",
    textColor: "text-chart-2",
  },
  pdf: {
    icon: <FileText className="h-6 w-6 text-chart-3" />,
    color: "bg-chart-3/10",
    textColor: "text-chart-3",
  },
  study: {
    icon: <GraduationCap className="h-6 w-6 text-chart-4" />,
    color: "bg-chart-4/10",
    textColor: "text-chart-4",
  },
  writer: {
    icon: <Pencil className="h-6 w-6 text-chart-5" />,
    color: "bg-chart-5/10",
    textColor: "text-chart-5",
  },
  other: {
    icon: <BarChart className="h-6 w-6 text-chart-1" />,
    color: "bg-chart-1/10",
    textColor: "text-chart-1",
  },
}

export default async function ToolPage({ params }: { params: Promise<{ category: string; tool: string }> }) {
  const { category, tool } = await params

  // Check if the category exists
  if (!Object.keys(toolCategories).includes(category)) {
    return notFound()
  }

  // Get the category styling
  const categoryStyle = toolCategories[category as ToolCategoryKey]

  // Format the tool name (e.g., "my-awesome-tool" => "My Awesome Tool")
  const formattedToolName = tool
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex items-center">
          <div className={`p-3 rounded-full ${categoryStyle.color} mr-4`}>{categoryStyle.icon}</div>
          <div>
            <h1 className="text-3xl font-bold">{formattedToolName}</h1>
            <p className="text-muted-foreground mt-1">Powerful AI tool to enhance your learning and productivity</p>
          </div>
        </div>

        <Tabs defaultValue="tool" className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="tool" className="flex items-center gap-2">
              <Play className="h-4 w-4" />
              <span>Tool</span>
            </TabsTrigger>
            <TabsTrigger value="how-it-works" className="flex items-center gap-2">
              <Info className="h-4 w-4" />
              <span>How It Works</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center gap-2">
              <History className="h-4 w-4" />
              <span>History</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tool" className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {category === "youtube" && (
                    <>
                      <div className="space-y-2">
                        <label htmlFor="youtube-url" className="text-sm font-medium">
                          YouTube URL
                        </label>
                        <Input id="youtube-url" placeholder="https://www.youtube.com/watch?v=..." className="w-full" />
                      </div>
                      <div className="flex justify-end">
                        <Button>Process Video</Button>
                      </div>
                    </>
                  )}

                  {category === "presentation" && (
                    <>
                      <div className="space-y-2">
                        <label htmlFor="presentation-topic" className="text-sm font-medium">
                          Presentation Topic
                        </label>
                        <Input
                          id="presentation-topic"
                          placeholder="Enter the topic for your presentation"
                          className="w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="presentation-details" className="text-sm font-medium">
                          Additional Details
                        </label>
                        <Textarea
                          id="presentation-details"
                          placeholder="Provide any additional details or requirements for your presentation"
                          className="w-full min-h-[100px]"
                        />
                      </div>
                      <div className="flex justify-end">
                        <Button>Generate Presentation</Button>
                      </div>
                    </>
                  )}

                  {category === "pdf" && (
                    <>
                      <div className="space-y-2">
                        <label htmlFor="pdf-upload" className="text-sm font-medium">
                          Upload PDF
                        </label>
                        <div className="border-2 border-dashed rounded-lg p-8 text-center">
                          <Upload className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground mb-2">
                            Drag and drop your PDF file here, or click to browse
                          </p>
                          <Button variant="outline" size="sm">
                            Browse Files
                          </Button>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <Button>Process PDF</Button>
                      </div>
                    </>
                  )}

                  {category === "study" && (
                    <>
                      <div className="space-y-2">
                        <label htmlFor="study-topic" className="text-sm font-medium">
                          Study Topic
                        </label>
                        <Input id="study-topic" placeholder="Enter the topic you want to study" className="w-full" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="study-details" className="text-sm font-medium">
                          Additional Details
                        </label>
                        <Textarea
                          id="study-details"
                          placeholder="Provide any additional details about your study needs"
                          className="w-full min-h-[100px]"
                        />
                      </div>
                      <div className="flex justify-end">
                        <Button>Generate Study Materials</Button>
                      </div>
                    </>
                  )}

                  {category === "writer" && (
                    <>
                      <div className="space-y-2">
                        <label htmlFor="writing-topic" className="text-sm font-medium">
                          Writing Topic
                        </label>
                        <Input id="writing-topic" placeholder="Enter the topic for your writing" className="w-full" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="writing-details" className="text-sm font-medium">
                          Additional Details
                        </label>
                        <Textarea
                          id="writing-details"
                          placeholder="Provide any additional details or requirements for your writing"
                          className="w-full min-h-[100px]"
                        />
                      </div>
                      <div className="flex justify-end">
                        <Button>Generate Content</Button>
                      </div>
                    </>
                  )}

                  {category === "other" && (
                    <>
                      <div className="space-y-2">
                        <label htmlFor="tool-input" className="text-sm font-medium">
                          Input
                        </label>
                        <Textarea
                          id="tool-input"
                          placeholder="Enter your input for this tool"
                          className="w-full min-h-[100px]"
                        />
                      </div>
                      <div className="flex justify-end">
                        <Button>Process</Button>
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>

            <div className="bg-muted/50 rounded-lg p-6 text-center">
              <p className="text-muted-foreground">Tool output will appear here after processing</p>
            </div>
          </TabsContent>

          <TabsContent value="how-it-works">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <h2 className="text-xl font-semibold">How {formattedToolName} Works</h2>
                <p>
                  This AI-powered tool uses advanced machine learning algorithms to process and analyze your input,
                  providing high-quality results tailored to your specific needs.
                </p>

                <div className="space-y-4 mt-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-full ${categoryStyle.color} shrink-0`}>
                      <span className="font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Input Your Data</h3>
                      <p className="text-muted-foreground">
                        Provide the necessary information or upload your files for processing.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-full ${categoryStyle.color} shrink-0`}>
                      <span className="font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-medium">AI Processing</h3>
                      <p className="text-muted-foreground">
                        Our advanced AI algorithms analyze your input and generate results based on your requirements.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-full ${categoryStyle.color} shrink-0`}>
                      <span className="font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Review and Download</h3>
                      <p className="text-muted-foreground">
                        Review the generated output and download or save it for your use.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <h2 className="text-xl font-semibold">Tool Settings</h2>
                <p className="text-muted-foreground">
                  Customize how this tool works to better suit your specific needs.
                </p>

                <div className="space-y-4 mt-6">
                  <div className="space-y-2">
                    <label htmlFor="output-format" className="text-sm font-medium">
                      Output Format
                    </label>
                    <select
                      id="output-format"
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                    >
                      <option value="text">Text</option>
                      <option value="pdf">PDF</option>
                      <option value="docx">Word Document</option>
                      <option value="markdown">Markdown</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="ai-model" className="text-sm font-medium">
                      AI Model
                    </label>
                    <select id="ai-model" className="w-full rounded-md border border-input bg-background px-3 py-2">
                      <option value="standard">Standard</option>
                      <option value="advanced">Advanced</option>
                      <option value="expert">Expert</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="language" className="text-sm font-medium">
                      Language
                    </label>
                    <select id="language" className="w-full rounded-md border border-input bg-background px-3 py-2">
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                      <option value="zh">Chinese</option>
                      <option value="ja">Japanese</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <Button>Save Settings</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Your History</h2>
                <p className="text-muted-foreground mb-6">
                  View your recent activity with this tool. Sign in to save your history.
                </p>

                <div className="text-center py-8">
                  <History className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">No history available. Sign in to track your activity.</p>
                  <Button variant="outline" className="mt-4">
                    Sign In
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
