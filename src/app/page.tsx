"use client"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import HeroSection from "@/components/hero-section"
import ToolsShowcase from "@/components/tools-showcase"
import TestimonialsSection from "@/components/testimonials-section"
import AffiliatedBrands from "@/components/affiliated-brands"
// import LeadershipSection from "@/components/leadership-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* AI Tools Showcase */}
        <section id="tools" className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Comprehensive AI Tools Collection
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Discover our extensive range of AI-powered tools to enhance your learning experience
              </p>
              <Button asChild className="mt-6">
                <Link href="/tools">Browse All Tools</Link>
              </Button>
            </div>

            <ToolsShowcase />
          </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Affiliated Brands */}
        <AffiliatedBrands />

        {/* Leadership Section */}
        {/* <LeadershipSection /> */}

        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Powerful Features, Affordable Plans
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl">Choose the plan that best fits your needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {/* Free Plan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col border-2 border-slate-200 dark:border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-2xl">Free Plan</CardTitle>
                    <CardDescription>Perfect for getting started</CardDescription>
                    <div className="mt-4 text-4xl font-bold">$0</div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                        <span>Activated upon login — no credit card required</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                        <span>Includes 15 quotas per month to try all features</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>

              {/* Unlimited Plan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col border-2 border-primary relative">
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm font-medium rounded-bl-lg">
                    Popular
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">Unlimited Plan</CardTitle>
                    <CardDescription>For individual power users</CardDescription>
                    <div className="mt-4 text-4xl font-bold">
                      $9.99<span className="text-lg font-normal">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                        <span>Enjoy 50% off within 24 hours after signing up</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                        <span>Unlock unlimited access to all tools</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                        <span>Boost your productivity with no limits</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant="default">
                      Subscribe Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>

              {/* Team Plan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col border-2 border-slate-200 dark:border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-2xl">Team Plan</CardTitle>
                    <CardDescription>For teams and organizations</CardDescription>
                    <div className="mt-4 text-4xl font-bold">
                      $24.99<span className="text-lg font-normal">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                        <span>Save more when you subscribe with friends</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                        <span>Perfect for schools, research groups, and teams</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                        <span>Priority support and team management features</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant="outline">
                      Contact Sales <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your Learning Experience?
              </h2>
              <p className="mt-4 md:text-xl max-w-3xl mx-auto">
                Join thousands of students, researchers, and professionals who have already enhanced their productivity
                with our AI tools.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" variant="secondary">
                  Try for Free
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white hover:bg-white hover:text-primary"
                >
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
