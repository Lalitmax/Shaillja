"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowDown, DollarSign } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function WithdrawPage() {
  const [amount, setAmount] = useState("")
  const [account, setAccount] = useState("")
  const { toast } = useToast()

  const handleWithdraw = (e: React.FormEvent) => {
    e.preventDefault()

    if (!amount || !account) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      })
      return
    }

    // In a real app, you would connect to your backend here
    toast({
      title: "Withdrawal Successful",
      description: `$${amount} has been withdrawn from your ${account} account.`,
    })

    // Reset form
    setAmount("")
    setAccount("")
  }

  return (
    <div className="max-w-md mx-auto">
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="text-2xl">Withdraw Funds</CardTitle>
          <CardDescription>Withdraw money from your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleWithdraw}>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="account">Select Account</Label>
                <Select value={account} onValueChange={setAccount}>
                  <SelectTrigger id="account">
                    <SelectValue placeholder="Select account" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="checking">Checking Account (****1234)</SelectItem>
                    <SelectItem value="savings">Savings Account (****5678)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

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

            <div className="mt-6 flex justify-center">
              <div className="bg-primary/10 rounded-full p-3">
                <ArrowDown className="h-6 w-6 text-primary" />
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <Label>Withdrawal Method</Label>
              <Select defaultValue="cash">
                <SelectTrigger>
                  <SelectValue placeholder="Select method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cash">Cash</SelectItem>
                  <SelectItem value="atm">ATM</SelectItem>
                  <SelectItem value="bank">Bank Transfer</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleWithdraw}>
            Withdraw Funds
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

