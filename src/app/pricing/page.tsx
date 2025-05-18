import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Powerful Features, Affordable Plans
              </h1>
              <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto">
                Choose the plan that best fits your needs and start enhancing your learning experience today
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {/* Free Plan */}
              <Card className="h-full flex flex-col border-2 border-slate-200 dark:border-slate-800">
                <CardHeader>
                  <CardTitle className="text-2xl">Free Plan</CardTitle>
                  <CardDescription>Perfect for getting started</CardDescription>
                  <div className="mt-4 text-4xl font-bold">$0</div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                      <span>Activated upon login — no credit card required</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                      <span>Includes 15 quotas per month to try all features</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                      <span>Access to basic AI tools</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                      <span>Standard quality outputs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                      <span>Community support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>

              {/* Unlimited Plan */}
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
                  <p className="text-sm text-muted-foreground mt-2">Enjoy 50% off within 24 hours after signing up</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                      <span>Unlimited access to all AI tools</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                      <span>Priority processing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                      <span>High-quality outputs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                      <span>Save and export in multiple formats</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                      <span>Email support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="default">
                    Subscribe Now
                  </Button>
                </CardFooter>
              </Card>

              {/* Team Plan */}
              <Card className="h-full flex flex-col border-2 border-slate-200 dark:border-slate-800">
                <CardHeader>
                  <CardTitle className="text-2xl">Team Plan</CardTitle>
                  <CardDescription>For teams and organizations</CardDescription>
                  <div className="mt-4 text-4xl font-bold">
                    $24.99<span className="text-lg font-normal">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                      <span>Save more when you subscribe with friends</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                      <span>Perfect for schools, research groups, and teams</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                      <span>Unlimited access for up to 5 team members</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                      <span>Team management dashboard</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                      <span>Priority support with dedicated account manager</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline">
                    Contact Sales
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-20">
              <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium mb-2">Can I switch plans later?</h3>
                    <p className="text-muted-foreground">
                      Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes will take effect at the
                      start of your next billing cycle.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Is there a student discount?</h3>
                    <p className="text-muted-foreground">
                      Yes, we offer a 20% discount for verified students. Contact our support team with your student ID
                      for verification.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">What payment methods do you accept?</h3>
                    <p className="text-muted-foreground">
                      We accept all major credit cards, PayPal, and select regional payment methods.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium mb-2">Can I get a refund?</h3>
                    <p className="text-muted-foreground">
                      We offer a 7-day money-back guarantee for all paid plans. If you&#39;re not satisfied, contact our
                      support team within 7 days of purchase.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Do you offer custom enterprise plans?</h3>
                    <p className="text-muted-foreground">
                      Yes, we offer custom enterprise solutions for larger organizations. Contact our sales team to
                      discuss your specific requirements.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">How do the quotas work?</h3>
                    <p className="text-muted-foreground">
                      Each AI tool usage consumes one quota. Free users get 15 quotas per month, while paid plans have
                      unlimited quotas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
