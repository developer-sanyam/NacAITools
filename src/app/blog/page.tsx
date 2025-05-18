import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    title: "How AI is Transforming Education in 2025",
    excerpt:
      "Discover how artificial intelligence is revolutionizing learning experiences and educational outcomes across all levels of education.",
    category: "Education",
    author: "Dr. Sarah Johnson",
    date: "May 12, 2025",
    readTime: "8 min read",
    image: "/placeholder.png",
    slug: "how-ai-is-transforming-education-2025",
  },
  {
    id: 2,
    title: "10 AI Tools Every Student Should Be Using",
    excerpt:
      "From essay writing assistants to study guide generators, these AI tools are changing how students learn and complete assignments.",
    category: "Tools",
    author: "Michael Chen",
    date: "May 8, 2025",
    readTime: "6 min read",
    image: "/placeholder.png",
    slug: "10-ai-tools-every-student-should-use",
  },
  {
    id: 3,
    title: "The Ethics of AI in Academic Settings",
    excerpt:
      "As AI becomes more prevalent in education, important ethical questions arise about fairness, privacy, and the future of learning.",
    category: "Ethics",
    author: "Prof. James Wilson",
    date: "May 5, 2025",
    readTime: "10 min read",
    image: "/placeholder.png",
    slug: "ethics-of-ai-in-academic-settings",
  },
  {
    id: 4,
    title: "How to Use AI to Improve Your Research Process",
    excerpt:
      "Learn how researchers are leveraging AI tools to accelerate discovery, analyze data, and generate insights across disciplines.",
    category: "Research",
    author: "Dr. Emily Rodriguez",
    date: "April 30, 2025",
    readTime: "7 min read",
    image: "/placeholder.png",
    slug: "use-ai-to-improve-research-process",
  },
  {
    id: 5,
    title: "The Future of AI-Generated Content in Academia",
    excerpt:
      "Exploring how AI-generated content is changing academic writing, publishing, and knowledge dissemination.",
    category: "Trends",
    author: "Alex Thompson",
    date: "April 25, 2025",
    readTime: "9 min read",
    image: "/placeholder.png",
    slug: "future-of-ai-generated-content-academia",
  },
  {
    id: 6,
    title: "How Teachers Are Adapting to AI in the Classroom",
    excerpt:
      "Real stories from educators who are finding innovative ways to incorporate AI tools into their teaching practices.",
    category: "Teaching",
    author: "Maria Garcia",
    date: "April 20, 2025",
    readTime: "8 min read",
    image: "/placeholder.png",
    slug: "teachers-adapting-to-ai-classroom",
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">Our Blog</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Insights, tutorials, and updates on AI learning tools and educational technology
        </p>
      </div>

      {/* Featured Post */}
      <div className="mb-16">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-auto">
              <Image
                src={blogPosts[0].image || "/placeholder.png"}
                alt={blogPosts[0].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  {blogPosts[0].category}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
              <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
              <div className="flex items-center text-sm text-muted-foreground mb-6">
                <User className="h-4 w-4 mr-1" />
                <span className="mr-4">{blogPosts[0].author}</span>
                <Calendar className="h-4 w-4 mr-1" />
                <span className="mr-4">{blogPosts[0].date}</span>
                <Clock className="h-4 w-4 mr-1" />
                <span>{blogPosts[0].readTime}</span>
              </div>
              <Button asChild>
                <Link href={`/blog/${blogPosts[0].slug}`}>
                  Read Article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Blog Post Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.slice(1).map((post) => (
          <Card key={post.id} className="flex flex-col h-full overflow-hidden">
            <div className="relative h-48">
              <Image src={post.image || "/placeholder.png"} alt={post.title} fill className="object-cover" />
            </div>
            <CardHeader>
              <div className="mb-2">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  {post.category}
                </span>
              </div>
              <CardTitle className="line-clamp-2">{post.title}</CardTitle>
              <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex items-center text-sm text-muted-foreground">
                <User className="h-4 w-4 mr-1" />
                <span className="mr-4">{post.author}</span>
                <Clock className="h-4 w-4 mr-1" />
                <span>{post.readTime}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" asChild className="w-full justify-between group">
                <Link href={`/blog/${post.slug}`}>
                  Read Article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="mt-20 bg-muted rounded-lg p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-6">
            Subscribe to our newsletter to receive the latest updates, tutorials, and insights on AI learning tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
