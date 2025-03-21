"use client"

import { useState } from "react"
import { Button } from "../components/ui/Button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/Card"
import { Input } from "../components/ui/Input"
import { Label } from "../components/ui/Label"
import { Select, SelectItem } from "../components/ui/Select"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/Tabs"
import { Switch } from "../components/ui/Switch"
import { DollarSign, Download, QrCode } from "lucide-react"

function QRCodePage() {
  const [amount, setAmount] = useState("")
  const [account, setAccount] = useState("")
  const [qrType, setQrType] = useState("dynamic")
  const [description, setDescription] = useState("")
  const [qrGenerated, setQrGenerated] = useState(false)
  const [isExpiring, setIsExpiring] = useState(false)

  const handleGenerateQR = (e) => {
    e.preventDefault()

    if (qrType === "dynamic" && (!amount || !account)) {
      alert("Please fill in all required fields")
      return
    }

    if (qrType === "static" && !account) {
      alert("Please select an account")
      return
    }

    // In a real app, you would generate a QR code here
    setQrGenerated(true)
    alert("QR Code Generated Successfully")
  }

  return (
    <div className="max-w-md mx-auto">
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="text-2xl">QR Code Generator</CardTitle>
          <CardDescription>Create QR codes for receiving payments</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="dynamic" onValueChange={setQrType}>
            <TabsList className="grid grid-cols-2 mb-6">
              <TabsTrigger value="dynamic">Dynamic QR</TabsTrigger>
              <TabsTrigger value="static">Static QR</TabsTrigger>
            </TabsList>

            <form onSubmit={handleGenerateQR}>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="account">Receiving Account</Label>
                  <Select id="account" value={account} onChange={setAccount}>
                    <SelectItem value="default">Select account</SelectItem>
                    <SelectItem value="checking">Checking Account (****1234)</SelectItem>
                    <SelectItem value="savings">Savings Account (****5678)</SelectItem>
                  </Select>
                </div>

                <TabsContent value="dynamic" className="mt-0 space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="amount">Amount</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        id="amount"
                        type="number"
                        placeholder="0.00"
                        className="pl-10"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description (Optional)</Label>
                    <Input
                      id="description"
                      placeholder="Payment for..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch checked={isExpiring} onCheckedChange={setIsExpiring} id="expiry" />
                    <Label htmlFor="expiry">Set expiration date</Label>
                  </div>
                </TabsContent>

                <TabsContent value="static" className="mt-0">
                  <div className="rounded-lg bg-primary/5 p-4 border border-primary/10">
                    <p className="text-sm text-muted-foreground">
                      A static QR code will be linked to your account without a specific amount. The sender will need to
                      enter the amount during payment.
                    </p>
                  </div>
                </TabsContent>

                {qrGenerated && (
                  <div className="flex flex-col items-center justify-center p-6 border rounded-lg">
                    <QrCode className="h-32 w-32 text-primary mb-4" />
                    <p className="text-sm text-center text-muted-foreground mb-4">
                      {qrType === "dynamic"
                        ? `QR code for $${amount || "0.00"} to ${account || "your account"}`
                        : `QR code for payments to ${account || "your account"}`}
                    </p>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download QR Code
                    </Button>
                  </div>
                )}
              </div>
            </form>
          </Tabs>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleGenerateQR}>
            Generate QR Code
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default QRCodePage

