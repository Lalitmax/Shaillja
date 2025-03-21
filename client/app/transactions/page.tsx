"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowDown, ArrowUp, Search, Download } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

// Sample transaction data
const transactions = [
  {
    id: "1",
    date: "2023-04-01",
    description: "Grocery Store",
    amount: -120.5,
    type: "debit",
    category: "Shopping",
    account: "Checking",
  },
  {
    id: "2",
    date: "2023-04-02",
    description: "Salary Deposit",
    amount: 3500.0,
    type: "credit",
    category: "Income",
    account: "Checking",
  },
  {
    id: "3",
    date: "2023-04-03",
    description: "Electric Bill",
    amount: -85.2,
    type: "debit",
    category: "Utilities",
    account: "Checking",
  },
  {
    id: "4",
    date: "2023-04-05",
    description: "Transfer to Savings",
    amount: -500.0,
    type: "transfer",
    category: "Transfer",
    account: "Checking",
  },
  {
    id: "5",
    date: "2023-04-05",
    description: "Transfer from Checking",
    amount: 500.0,
    type: "transfer",
    category: "Transfer",
    account: "Savings",
  },
  {
    id: "6",
    date: "2023-04-10",
    description: "Restaurant",
    amount: -65.3,
    type: "debit",
    category: "Dining",
    account: "Checking",
  },
  {
    id: "7",
    date: "2023-04-15",
    description: "ATM Withdrawal",
    amount: -200.0,
    type: "withdrawal",
    category: "Cash",
    account: "Checking",
  },
  {
    id: "8",
    date: "2023-04-20",
    description: "Interest",
    amount: 12.5,
    type: "credit",
    category: "Income",
    account: "Savings",
  },
]

export default function TransactionsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [accountFilter, setAccountFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")

  // Filter transactions based on search and filters
  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch = transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesAccount = accountFilter === "all" || transaction.account.toLowerCase() === accountFilter.toLowerCase()
    const matchesType = typeFilter === "all" || transaction.type.toLowerCase() === typeFilter.toLowerCase()

    return matchesSearch && matchesAccount && matchesType
  })

  // Format date to more readable format
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Transaction History</h1>
          <p className="text-muted-foreground">View and manage your transaction history</p>
        </div>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export Transactions
        </Button>
      </div>

      <Card className="mb-8">
        <CardHeader className="pb-3">
          <CardTitle>Filters</CardTitle>
          <CardDescription>Narrow down your transaction history</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="search">Search</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="search"
                  placeholder="Search transactions..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="account">Account</Label>
              <Select value={accountFilter} onValueChange={setAccountFilter}>
                <SelectTrigger id="account">
                  <SelectValue placeholder="All Accounts" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Accounts</SelectItem>
                  <SelectItem value="checking">Checking</SelectItem>
                  <SelectItem value="savings">Savings</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="type">Transaction Type</Label>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger id="type">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="credit">Deposits</SelectItem>
                  <SelectItem value="debit">Payments</SelectItem>
                  <SelectItem value="transfer">Transfers</SelectItem>
                  <SelectItem value="withdrawal">Withdrawals</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Account</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTransactions.length > 0 ? (
                filteredTransactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>{formatDate(transaction.date)}</TableCell>
                    <TableCell>{transaction.description}</TableCell>
                    <TableCell>{transaction.account}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{transaction.category}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <span
                        className={`flex items-center justify-end ${transaction.amount > 0 ? "text-green-500" : "text-red-500"}`}
                      >
                        {transaction.amount > 0 ? (
                          <ArrowUp className="h-4 w-4 mr-1" />
                        ) : (
                          <ArrowDown className="h-4 w-4 mr-1" />
                        )}
                        ${Math.abs(transaction.amount).toFixed(2)}
                      </span>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                    No transactions found matching your filters.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

