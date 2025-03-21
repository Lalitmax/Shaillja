"use client"

import { useState } from "react"
import { Button } from "../components/ui/Button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/Card"
import { Input } from "../components/ui/Input"
import { Label } from "../components/ui/Label"
import { Select, SelectItem } from "../components/ui/Select"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/Tabs"
import { ArrowRight, DollarSign } from "lucide-react"

function Transfer() {
  const [amount, setAmount] = useState("")
  const [fromAccount, setFromAccount] = useState("")
  const [toAccount, setToAccount] = useState("")
  const [recipientName, setRecipientName] = useState("")
  const [recipientAccount, setRecipientAccount] = useState("")
  const [transferType, setTransferType] = useState("internal")

  const handleTransfer = (e) => {
    e.preventDefault()

    if (transferType === "internal" && (!amount || !fromAccount || !toAccount)) {
      alert("Please fill in all fields")
      return
    }

    if (transferType === "external" && (!amount || !fromAccount || !recipientName || !recipientAccount)) {
      alert("Please fill in all fields")
      return
    }

    // In a real app, you would connect to your backend here
    alert(`Transfer Successful: $${amount} has been transferred from your ${fromAccount} account.`)

    // Reset form
    setAmount("")
    setFromAccount("")
    setToAccount("")
    setRecipientName("")
    setRecipientAccount("")
  }

  return (
    <div className="max-w-md mx-auto">
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="text-2xl">Transfer Funds</CardTitle>
          <CardDescription>Send money between accounts or to other people</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="internal" onValueChange={setTransferType}>
            <TabsList className="grid grid-cols-2 mb-6">
              <TabsTrigger value="internal">Between My Accounts</TabsTrigger>
              <TabsTrigger value="external">To Someone Else</TabsTrigger>
            </TabsList>

            <form onSubmit={handleTransfer}>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="from-account">From Account</Label>
                  <Select id="from-account" value={fromAccount} onChange={setFromAccount}>
                    <SelectItem value="default">Select account</SelectItem>
                    <SelectItem value="checking">Checking Account (****1234)</SelectItem>
                    <SelectItem value="savings">Savings Account (****5678)</SelectItem>
                  </Select>
                </div>

                <div className="flex justify-center">
                  <div className="bg-primary/10 rounded-full p-3">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                </div>

                <TabsContent value="internal" className="mt-0 space-y-2">
                  <Label htmlFor="to-account">To Account</Label>
                  <Select id="to-account" value={toAccount} onChange={setToAccount}>
                    <SelectItem value="default">Select account</SelectItem>
                    <SelectItem value="checking">Checking Account (****1234)</SelectItem>
                    <SelectItem value="savings">Savings Account (****5678)</SelectItem>
                  </Select>
                </TabsContent>

                <TabsContent value="external" className="mt-0 space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="recipient-name">Recipient Name</Label>
                    <Input
                      id="recipient-name"
                      placeholder="John Doe"
                      value={recipientName}
                      onChange={(e) => setRecipientName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="recipient-account">Recipient Account Number</Label>
                    <Input
                      id="recipient-account"
                      placeholder="Account number"
                      value={recipientAccount}
                      onChange={(e) => setRecipientAccount(e.target.value)}
                    />
                  </div>
                </TabsContent>

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

                <div className="rounded-lg bg-primary/5 p-4 border border-primary/10">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Available Balance</span>
                    <span className="font-medium">$2,500.00</span>
                  </div>
                </div>
              </div>
            </form>
          </Tabs>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleTransfer}>
            Transfer Funds
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Transfer

