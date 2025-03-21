import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card"
import { Shield, Clock, Zap, Users } from "lucide-react"

function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">About Our Banking App</h1>
        <p className="text-lg text-muted-foreground">
          We're committed to providing secure, fast, and convenient banking services to our customers.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
        <Card className="bg-primary/5 border-primary/10">
          <CardHeader className="pb-2">
            <Shield className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Secure Banking</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              State-of-the-art security measures to protect your financial information and transactions.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/10">
          <CardHeader className="pb-2">
            <Clock className="h-8 w-8 text-primary mb-2" />
            <CardTitle>24/7 Access</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Access your accounts and perform transactions anytime, anywhere through our digital platform.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/10">
          <CardHeader className="pb-2">
            <Zap className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Fast Transfers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Quick and efficient money transfers between accounts and to other banks.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/10">
          <CardHeader className="pb-2">
            <Users className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Customer Support</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Dedicated customer support team ready to assist you with any banking needs.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
        <p className="text-muted-foreground mb-6">
          Our mission is to provide accessible, secure, and innovative banking solutions that empower our customers to
          achieve their financial goals. We believe in transparency, integrity, and building long-term relationships
          with our customers.
        </p>

        <h2 className="text-2xl font-bold mb-6 mt-12">Our History</h2>
        <p className="text-muted-foreground mb-6">
          Founded in 2010, our banking app has grown from a small fintech startup to a trusted financial partner for
          thousands of customers. We've continuously evolved our platform to incorporate the latest technologies and
          security measures while maintaining our commitment to exceptional customer service.
        </p>

        <h2 className="text-2xl font-bold mb-6 mt-12">Our Values</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Customer-centric approach in everything we do</li>
          <li>Unwavering commitment to security and privacy</li>
          <li>Innovation that makes banking simpler and more accessible</li>
          <li>Transparency in our operations and communications</li>
          <li>Integrity in all our business practices</li>
        </ul>
      </div>
    </div>
  )
}

export default About

