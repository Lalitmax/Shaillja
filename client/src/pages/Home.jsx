"use client"
import { ArrowRight, CreditCard, DollarSign, Fingerprint, RefreshCw } from "lucide-react"
import { Button } from "../components/ui/Button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/Card"
import { NavLink } from "react-router-dom"

function Home() {
  const cardData = [
    { title: "Withdraw", icon: <DollarSign />, text: "Withdraw funds from your account quickly and securely.", link: "/withdraw" },
    { title: "Deposit", icon: <CreditCard />, text: "Add funds to your account from various sources.", link: "/deposit" },
    { title: "Transfer", icon: <RefreshCw />, text: "Send money to friends, family, or businesses instantly.", link: "/transfer" },
    { title: "Aeps", icon: <Fingerprint />, text: "Withdraw or Deposit using Aadhaar Enabled Payment System.", link: "/aadhaarPayment" }
  ];

  return (
    <div className="space-y-8">
      <section className="md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Welcome to Your Digital Banking
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
              Secure, fast, and convenient banking at your fingertips. Manage your finances with ease.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cardData.map((card, index) => (
              <Card key={index} className="bg-primary/5 border-primary/10">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-8 w-8 text-primary mb-2">{card.icon}</div>
                  <p className="text-sm text-gray-400">{card.text}</p>
                </CardContent>
                <CardFooter>
                  <NavLink to={card.link} className="w-full">
                    <Button variant="ghost" size="sm" className="w-full">
                      {card.title} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </NavLink>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
