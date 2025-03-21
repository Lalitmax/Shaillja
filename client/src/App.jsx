import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Withdraw from "./pages/Withdraw"
import Deposit from "./pages/Deposit"
import Transfer from "./pages/Transfer"
import QRCode from "./pages/QRCode"
import Transactions from "./pages/Transactions"
import { ThemeProvider } from "./components/ThemeProvider"
import "./index.css"
import AadhaarPayment from "./pages/AadhaarPayment"

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/withdraw" element={<Withdraw />} />
              <Route path="/deposit" element={<Deposit />} />
              <Route path="/transfer" element={<Transfer />} />
              <Route path="/aadhaarPayment" element={<AadhaarPayment />} />
              <Route path="/transactions" element={<Transactions />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </Router>
  )
}

export default App

