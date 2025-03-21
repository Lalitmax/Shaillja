"use client"

import { useState } from "react"
import { Button } from "../components/ui/Button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/Card"
import { Input } from "../components/ui/Input"
import { Label } from "../components/ui/Label"
import { Select, SelectItem } from "../components/ui/Select"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/Tabs"
import { ArrowUp, DollarSign, Upload } from "lucide-react"

function Deposit() {
  const [amount, setAmount] = useState("")
  const [account, setAccount] = useState("")
  const [depositMethod, setDepositMethod] = useState("cash")

  const handleDeposit = (e) => {
    e.preventDefault()

    if (!amount || !account) {
      alert("Please fill in all fields")
      return
    }

    // In a real app, you would connect to your backend here
    alert(`Deposit Successful: $${amount} has been deposited to your ${account} account.`)

    // Reset form
    setAmount("")
    setAccount("")
  }

  return (
    <div className="max-w-md mx-auto">
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="text-2xl">Deposit Funds</CardTitle>
          <CardDescription>Add money to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="cash" onValueChange={setDepositMethod}>
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="cash">Cash</TabsTrigger>
              <TabsTrigger value="check">Check</TabsTrigger>
              <TabsTrigger value="transfer">Transfer</TabsTrigger>
            </TabsList>

            <form onSubmit={handleDeposit}>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="account">Select Account</Label>
                  <Select id="account" value={account} onChange={setAccount}>
                    <SelectItem value="default">Select account</SelectItem>
                    <SelectItem value="checking">Checking Account (****1234)</SelectItem>
                    <SelectItem value="savings">Savings Account (****5678)</SelectItem>
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

                <TabsContent value="check" className="mt-0">
                  <div className="space-y-2">
                    <Label htmlFor="check-image">Upload Check Image</Label>
                    <div className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:bg-primary/5">
                      <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
                      <p className="text-xs text-muted-foreground mt-1">PNG, JPG up to 10MB</p>
                      <Input id="check-image" type="file" className="hidden" />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="transfer" className="mt-0">
                  <div className="space-y-2">
                    <Label htmlFor="from-account">From Account</Label>
                    <Select id="from-account">
                      <SelectItem value="default">Select external account</SelectItem>
                      <SelectItem value="external1">External Bank (****9012)</SelectItem>
                      <SelectItem value="external2">Credit Union (****3456)</SelectItem>
                    </Select>
                  </div>
                </TabsContent>

                <div className="mt-6 flex justify-center">
                  <div className="bg-primary/10 rounded-full p-3">
                    <ArrowUp className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </div>
            </form>
          </Tabs>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleDeposit}>
            Deposit Funds
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Deposit

