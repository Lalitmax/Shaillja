import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Label } from '../components/ui/Label';
import { Select, SelectItem } from '../components/ui/Select';
import { Fingerprint, Smartphone } from 'lucide-react';

function AadhaarPayment() {
  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [bank, setBank] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionType, setTransactionType] = useState("balance");

  const handleAadhaarPayment = (e) => {
    e.preventDefault();

    if (!aadhaarNumber || !bank) {
      alert("Please fill in all required fields");
      return;
    }

    if (transactionType === "withdrawal" && !amount) {
      alert("Please enter the amount for withdrawal");
      return;
    }

    // In a real app, you would handle the AePS transaction here
    alert(`Your ${transactionType} transaction has been processed successfully.`);
  };

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
                <Select 
                  id="bank" 
                  value={bank} 
                  onChange={setBank}
                >
                  <SelectItem value="default">Select your bank</SelectItem>
                  <SelectItem value="sbi">State Bank of India</SelectItem>
                  <SelectItem value="hdfc">HDFC Bank</SelectItem>
                  <SelectItem value="icici">ICICI Bank</SelectItem>
                  <SelectItem value="axis">Axis Bank</SelectItem>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="transactionType">Transaction Type</Label>
                <Select 
                  id="transactionType" 
                  value={transactionType} 
                  onChange={setTransactionType}
                >
                  <SelectItem value="balance">Balance Inquiry</SelectItem>
                  <SelectItem value="withdrawal">Cash Withdrawal</SelectItem>
                  <SelectItem value="deposit">Cash Deposit</SelectItem>
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
  );
}

export default AadhaarPayment;
