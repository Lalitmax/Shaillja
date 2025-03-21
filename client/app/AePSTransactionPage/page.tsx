"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Fingerprint, User, Smartphone } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function AadhaarPaymentPage() {
  const [aadhaarNumber, setAadhaarNumber] = useState("")
  const [bank, setBank] = useState("")
  const [amount, setAmount] = useState("")
  const [transactionType, setTransactionType] = useState("balance")
  const { toast } = useToast()

  const handleAadhaarPayment = (e: React.FormEvent) => {
    e.preventDefault()

    if (!aadhaarNumber || !bank) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    if (transactionType === "withdrawal" && !amount) {
      toast({
        title: "Error",
        description: "Please enter the amount for withdrawal",
        variant: "destructive",
      })
      return
    }

    // In a real app, you would handle the AePS transaction here
    toast({
      title: "Transaction Successful",
      description: `Your ${transactionType} transaction has been processed successfully.`,
    })
  }

  return (
    <div className="max-w-md mx-auto">
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="text-2xl">Aadhaar Enabled Payment System (AePS)</CardTitle>
          <CardDescription>Perform transactions using your Aadhaar number</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAadhaarPayment}>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="aadhaarNumber">Aadhaar Number</Label>
                <div className="relative">
                  <Fingerprint className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    id="aadhaarNumber"
                    type="text"
                    placeholder="Enter your Aadhaar number"
                    className="pl-10"
                    value={aadhaarNumber}
                    onChange={(e) => setAadhaarNumber(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bank">Select Bank</Label>
                <Select value={bank} onValueChange={setBank}>
                  <SelectTrigger id="bank">
                    <SelectValue placeholder="Select your bank" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sbi">State Bank of India</SelectItem>
                    <SelectItem value="hdfc">HDFC Bank</SelectItem>
                    <SelectItem value="icici">ICICI Bank</SelectItem>
                    <SelectItem value="axis">Axis Bank</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="transactionType">Transaction Type</Label>
                <Select value={transactionType} onValueChange={setTransactionType}>
                  <SelectTrigger id="transactionType">
                    <SelectValue placeholder="Select transaction type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="balance">Balance Inquiry</SelectItem>
                    <SelectItem value="withdrawal">Cash Withdrawal</SelectItem>
                    <SelectItem value="deposit">Cash Deposit</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {transactionType === "withdrawal" && (
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount</Label>
                  <div className="relative">
                    <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      id="amount"
                      type="number"
                      placeholder="Enter amount"
                      className="pl-10"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                </div>
              )}

              <Button className="w-full" type="submit">
                {transactionType === "balance" ? "Check Balance" : "Proceed"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}