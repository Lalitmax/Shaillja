import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, CreditCard, DollarSign, QrCode, RefreshCw } from "lucide-react"

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="py-12 md:py-24">
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
            <Card className="bg-primary/5 border-primary/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Withdraw</CardTitle>
              </CardHeader>
              <CardContent>
                <DollarSign className="h-8 w-8 text-primary mb-2" />
                <p className="text-sm text-gray-400">Withdraw funds from your account quickly and securely.</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="w-full" asChild>
                  <Link href="/withdraw">
                    Withdraw <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-primary/5 border-primary/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Aeps</CardTitle>
              </CardHeader>
              <CardContent>
                <RefreshCw className="h-8 w-8 text-primary mb-2" />
                <p className="text-sm text-gray-400">Aadhaar Enabled Payment System.</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="w-full" asChild>
                  <Link href="/AePSTransactionPage">
                    Aeps <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-primary/5 border-primary/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Deposit</CardTitle>
              </CardHeader>
              <CardContent>
                <CreditCard className="h-8 w-8 text-primary mb-2" />
                <p className="text-sm text-gray-400">Add funds to your account from various sources.</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="w-full" asChild>
                  <Link href="/deposit">
                    Deposit <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-primary/5 border-primary/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Transfer</CardTitle>
              </CardHeader>
              <CardContent>
                <RefreshCw className="h-8 w-8 text-primary mb-2" />
                <p className="text-sm text-gray-400">Send money to friends, family, or businesses instantly.</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="w-full" asChild>
                  <Link href="/transfer">
                    Transfer <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-primary/5 border-primary/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">QR Code</CardTitle>
              </CardHeader>
              <CardContent>
                <QrCode className="h-8 w-8 text-primary mb-2" />
                <p className="text-sm text-gray-400">Generate QR codes for quick and easy payments.</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="w-full" asChild>
                  <Link href="/qr-code">
                    Generate <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

