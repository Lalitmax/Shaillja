"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { ModeToggle } from "./ModeToggle"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const routes = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/transactions", label: "Transaction History" },
  ]

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <header className=" flex items-center justify-center px-2 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
          <Link to="/" className="font-bold text-xl hidden md:inline-block">
            Shaillja
          </Link>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm lg:hidden">
            <div className="fixed inset-y-0 left-0 w-[240px] sm:w-[300px] bg-background p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <Link to="/" className="font-bold text-xl" onClick={() => setIsOpen(false)}>
                Shaillja
                </Link>
                <button
                  className="rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="mt-8 flex flex-col gap-4">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    to={route.href}
                    className={`text-sm font-medium transition-colors hover:text-primary ${isActive(route.href) ? "text-primary" : "text-muted-foreground"
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {route.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              to={route.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive(route.href) ? "text-primary" : "text-muted-foreground"
                }`}
            >
              {route.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

export default Navbar

