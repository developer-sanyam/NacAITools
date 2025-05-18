import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Shield, Lock, Eye } from "lucide-react"

export default function PrivacyPolicyPage() {
  const lastUpdated = "May 10, 2025"

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground">Last Updated: {lastUpdated}</p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
          <p>
            At Nac AI, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you use our platform and services. Please read this privacy policy
            carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>

          <h2>Information We Collect</h2>
          <p>We collect information that you provide directly to us when you:</p>
          <ul>
            <li>Create an account or user profile</li>
            <li>Use our AI tools and services</li>
            <li>Upload content for processing (documents, videos, etc.)</li>
            <li>Communicate with us via contact forms, email, or other methods</li>
            <li>Subscribe to our newsletter</li>
            <li>Respond to surveys or questionnaires</li>
            <li>Make purchases through our platform</li>
          </ul>

          <p>The types of information we may collect include:</p>
          <ul>
            <li>Personal identifiers (name, email address, phone number)</li>
            <li>Account credentials</li>
            <li>Payment information (processed securely through our payment processors)</li>
            <li>Content you upload for processing</li>
            <li>Usage data and interaction with our services</li>
            <li>Device information and IP address</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect for various purposes, including to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Process and complete transactions</li>
            <li>Send you technical notices, updates, security alerts, and support messages</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Develop new products and services</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
            <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
            <li>Personalize and improve your experience</li>
          </ul>

          <h2>Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to fulfill the purposes outlined in this
            privacy policy, unless a longer retention period is required or permitted by law. User content processed by
            our AI tools is retained for 90 days by default, after which it is automatically deleted from our systems.
            Premium users can adjust retention settings or manually delete content at any time.
          </p>

          <h2>Data Security</h2>
          <p>
            We have implemented appropriate technical and organizational security measures designed to protect the
            security of any personal information we process. However, despite our safeguards and efforts to secure your
            information, no electronic transmission over the Internet or information storage technology can be
            guaranteed to be 100% secure.
          </p>

          <h2>Sharing Your Information</h2>
          <p>We may share information in the following situations:</p>
          <ul>
            <li>With service providers who perform services on our behalf</li>
            <li>To comply with legal obligations</li>
            <li>To protect and defend our rights and property</li>
            <li>With your consent or at your direction</li>
            <li>With business partners, with your consent</li>
            <li>In connection with a business transaction such as a merger or acquisition</li>
          </ul>

          <h2>Your Privacy Rights</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
          <ul>
            <li>Right to access personal information we hold about you</li>
            <li>Right to request correction of inaccurate information</li>
            <li>Right to request deletion of your information</li>
            <li>Right to object to processing of your information</li>
            <li>Right to data portability</li>
            <li>Right to withdraw consent</li>
          </ul>
          <p>To exercise these rights, please contact us using the information provided at the end of this policy.</p>

          <h2>Children&#39;s Privacy</h2>
          <p>
            Our services are not intended for individuals under the age of 13. We do not knowingly collect personal
            information from children under 13. If you are a parent or guardian and believe your child has provided us
            with personal information, please contact us.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update our privacy policy from time to time. We will notify you of any changes by posting the new
            privacy policy on this page and updating the &quot;Last Updated&quot; date. You are advised to review this privacy
            policy periodically for any changes.
          </p>

          <h2>Contact Us</h2>
          <p>If you have questions or comments about this privacy policy, please contact us at:</p>
          <p>
            Nac AI
            <br />
            123 AI Innovation Center
            <br />
            San Francisco, CA 94105
            <br />
            privacy@ailearnpro.com
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">Data Protection</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We employ industry-standard security measures to protect your personal information from unauthorized
                access, alteration, disclosure, or destruction.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/security">
                  Learn About Our Security <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-chart-2/10 p-2 rounded-full">
                  <Lock className="h-5 w-5 text-chart-2" />
                </div>
                <CardTitle className="text-lg">Your Choices</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                You have control over your data. Manage your privacy settings, opt out of communications, or request
                deletion of your information.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/account/privacy">
                  Manage Privacy Settings <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-2 rounded-full mt-1">
              <Eye className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Cookie Policy</h3>
              <p className="text-muted-foreground mb-4">
                Our website uses cookies to enhance your browsing experience, analyze site traffic, and personalize
                content. By continuing to use our site, you consent to our use of cookies in accordance with our Cookie
                Policy.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/cookies">
                  View Cookie Policy <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            For additional information about our privacy practices or to exercise your rights, please contact us.
          </p>
          <Button asChild>
            <Link href="/contact">Contact Our Privacy Team</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
