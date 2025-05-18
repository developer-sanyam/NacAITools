import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, FileText, Scale, AlertCircle } from "lucide-react"

export default function TermsOfServicePage() {
  const lastUpdated = "May 10, 2025"

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">Terms of Service</h1>
          <p className="text-xl text-muted-foreground">Last Updated: {lastUpdated}</p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
          <p>
            Welcome to Nac AI. These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Nac AI
            website, applications, and services (collectively, the &quot;Services&quot;). Please read these Terms carefully before
            using our Services.
          </p>

          <p>
            By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do
            not agree to these Terms, you may not access or use the Services.
          </p>

          <h2>1. Account Registration</h2>
          <p>
            To access certain features of the Services, you may be required to register for an account. You agree to
            provide accurate, current, and complete information during the registration process and to update such
            information to keep it accurate, current, and complete.
          </p>
          <p>
            You are responsible for safeguarding your account credentials and for all activities that occur under your
            account. You agree to notify us immediately of any unauthorized use of your account or any other breach of
            security.
          </p>

          <h2>2. Subscription and Payments</h2>
          <p>
            Some of our Services are available on a subscription basis. You agree to pay all fees associated with your
            chosen subscription plan. All payments are non-refundable except as expressly set forth in these Terms or as
            required by applicable law.
          </p>
          <p>
            Subscription fees are billed in advance on a monthly or annual basis, depending on your selected billing
            cycle. Your subscription will automatically renew at the end of each billing period unless you cancel it
            before the renewal date.
          </p>
          <p>
            We reserve the right to change our subscription fees upon reasonable notice. Such notice may be provided at
            any time by posting the changes to the Nac AI website or via email.
          </p>

          <h2>3. User Content</h2>
          <p>
            Our Services allow you to upload, submit, store, send, or receive content (&quot;User Content&quot;). You retain
            ownership of any intellectual property rights that you hold in that User Content.
          </p>
          <p>
            By uploading User Content, you grant Nac AI a worldwide, royalty-free, non-exclusive license to use,
            host, store, reproduce, modify, create derivative works, communicate, publish, publicly perform, publicly
            display, and distribute such User Content for the limited purpose of providing the Services to you and as
            otherwise permitted by our Privacy Policy.
          </p>
          <p>
            You are solely responsible for your User Content and the consequences of sharing it. You represent and
            warrant that:
          </p>
          <ul>
            <li>You own or have the necessary rights to use and authorize us to use your User Content</li>
            <li>
              Your User Content does not violate the rights of any third party, including intellectual property rights
              and privacy rights
            </li>
            <li>Your User Content complies with these Terms and all applicable laws and regulations</li>
          </ul>

          <h2>4. Prohibited Uses</h2>
          <p>You agree not to use the Services:</p>
          <ul>
            <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
            <li>
              To transmit, or procure the sending of, any advertising or promotional material, including any &quot;junk
              mail,&quot; &quot;chain letter,&quot; &quot;spam,&quot; or any other similar solicitation
            </li>
            <li>
              To impersonate or attempt to impersonate Nac AI, an Nac AI employee, another user, or any other
              person or entity
            </li>
            <li>
              To engage in any other conduct that restricts or inhibits anyone&#39;s use or enjoyment of the Services, or
              which may harm Nac AI or users of the Services
            </li>
            <li>
              To attempt to circumvent any technological measure implemented by Nac AI to protect the Services
            </li>
            <li>To use the Services for any illegal or unauthorized purpose</li>
          </ul>

          <h2>5. Intellectual Property Rights</h2>
          <p>
            The Services and their entire contents, features, and functionality (including but not limited to all
            information, software, text, displays, images, video, and audio, and the design, selection, and arrangement
            thereof) are owned by Nac AI, its licensors, or other providers of such material and are protected by
            United States and international copyright, trademark, patent, trade secret, and other intellectual property
            or proprietary rights laws.
          </p>
          <p>
            These Terms permit you to use the Services for your personal, non-commercial use only. You must not
            reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish,
            download, store, or transmit any of the material on our Services, except as follows:
          </p>
          <ul>
            <li>
              Your computer may temporarily store copies of such materials in RAM incidental to your accessing and
              viewing those materials
            </li>
            <li>
              You may store files that are automatically cached by your Web browser for display enhancement purposes
            </li>
            <li>
              You may print or download one copy of a reasonable number of pages of the website for your own personal,
              non-commercial use and not for further reproduction, publication, or distribution
            </li>
          </ul>

          <h2>6. Termination</h2>
          <p>
            We may terminate or suspend your account and access to the Services immediately, without prior notice or
            liability, for any reason whatsoever, including without limitation if you breach these Terms.
          </p>
          <p>
            Upon termination, your right to use the Services will immediately cease. If you wish to terminate your
            account, you may simply discontinue using the Services or contact us to request account deletion.
          </p>

          <h2>7. Disclaimer of Warranties</h2>
          <p>
            THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
            IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, Nac AI DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED,
            INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
            NON-INFRINGEMENT.
          </p>
          <p>
            Nac AI DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE
            CORRECTED, OR THAT THE SERVICES OR THE SERVERS THAT MAKE THEM AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL
            COMPONENTS.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL Nac AI, ITS AFFILIATES, OR THEIR LICENSORS,
            SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY
            LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SERVICES, INCLUDING
            ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
          </p>

          <h2>9. Changes to Terms</h2>
          <p>
            We may revise and update these Terms from time to time at our sole discretion. All changes are effective
            immediately when we post them, and apply to all access to and use of the Services thereafter.
          </p>
          <p>
            Your continued use of the Services following the posting of revised Terms means that you accept and agree to
            the changes. You are expected to check this page frequently so you are aware of any changes.
          </p>

          <h2>10. Governing Law and Jurisdiction</h2>
          <p>
            These Terms and any dispute or claim arising out of or related to them, their subject matter, or their
            formation shall be governed by and construed in accordance with the laws of the State of California, without
            giving effect to any choice or conflict of law provision or rule.
          </p>
          <p>
            Any legal suit, action, or proceeding arising out of, or related to, these Terms or the Services shall be
            instituted exclusively in the federal courts of the United States or the courts of the State of California,
            in each case located in San Francisco County. You waive any and all objections to the exercise of
            jurisdiction over you by such courts and to venue in such courts.
          </p>

          <h2>11. Contact Information</h2>
          <p>If you have any questions about these Terms, please contact us at:</p>
          <p>
            Nac AI
            <br />
            123 AI Innovation Center
            <br />
            San Francisco, CA 94105
            <br />
            legal@ailearnpro.com
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-primary/10 p-2 rounded-full">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">Privacy Policy</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Our Privacy Policy describes how we handle the information you provide to us when you use our Services.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/privacy">
                  View Privacy Policy <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-chart-2/10 p-2 rounded-full">
                  <Scale className="h-5 w-5 text-chart-2" />
                </div>
                <CardTitle className="text-lg">Acceptable Use Policy</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Our Acceptable Use Policy outlines the permitted and prohibited uses of our Services.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/acceptable-use">
                  View Acceptable Use Policy <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-2 rounded-full mt-1">
              <AlertCircle className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Important Notice</h3>
              <p className="text-muted-foreground mb-4">
                By using Nac AI, you acknowledge that you have read and understood these Terms of Service and agree
                to be bound by them. If you do not agree to these Terms, please do not use our Services.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/contact">
                  Contact Legal Team <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            For questions or concerns about these Terms of Service, please contact our legal team.
          </p>
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
