"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, DollarSign } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TransferPage() {
  const [amount, setAmount] = useState("")
  const [fromAccount, setFromAccount] = useState("")
  const [toAccount, setToAccount] = useState("")
  const [recipientName, setRecipientName] = useState("")
  const [recipientAccount, setRecipientAccount] = useState("")
  const [transferType, setTransferType] = useState("internal")
  const { toast } = useToast()

  const handleTransfer = (e: React.FormEvent) => {
    e.preventDefault()

    if (transferType === "internal" && (!amount || !fromAccount || !toAccount)) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      })
      return
    }

    if (transferType === "external" && (!amount || !fromAccount || !recipientName || !recipientAccount)) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      })
      return
    }

    // In a real app, you would connect to your backend here
    toast({
      title: "Transfer Successful",
      description: `$${amount} has been transferred from your ${fromAccount} account.`,
    })

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
                  <Select value={fromAccount} onValueChange={setFromAccount}>
                    <SelectTrigger id="from-account">
                      <SelectValue placeholder="Select account" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="checking">Checking Account (****1234)</SelectItem>
                      <SelectItem value="savings">Savings Account (****5678)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex justify-center">
                  <div className="bg-primary/10 rounded-full p-3">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                </div>

                <TabsContent value="internal" className="mt-0 space-y-2">
                  <Label htmlFor="to-account">To Account</Label>
                  <Select value={toAccount} onValueChange={setToAccount}>
                    <SelectTrigger id="to-account">
                      <SelectValue placeholder="Select account" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="checking">Checking Account (****1234)</SelectItem>
                      <SelectItem value="savings">Savings Account (****5678)</SelectItem>
                    </SelectContent>
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

