import { useState } from "react";
import { Search, Bell, User, ChevronDown, TrendingUp, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

const marketData = [
  { pair: "EUR/USD", price: "1.0847", change: "+0.0023", positive: true },
  { pair: "GBP/USD", price: "1.2634", change: "-0.0015", positive: false },
  { pair: "USD/JPY", price: "149.82", change: "+0.34", positive: true },
  { pair: "AUD/USD", price: "0.6542", change: "-0.0008", positive: false },
];

export function TradingHeader() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="fixed top-0 right-0 left-0 md:left-60 z-30 h-16 bg-card/80 backdrop-blur-md border-b border-border/20">
      <div className="flex h-full items-center justify-between px-4 md:px-6">
        {/* Market Ticker */}
        <div className="hidden lg:flex items-center space-x-6 flex-1">
          {marketData.map((item) => (
            <div key={item.pair} className="flex items-center space-x-2 text-sm">
              <span className="font-medium text-foreground">{item.pair}</span>
              <span className="text-foreground/80">{item.price}</span>
              <div className={`flex items-center space-x-1 ${
                item.positive ? 'text-trading-profit' : 'text-trading-loss'
              }`}>
                {item.positive ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                <span className="text-xs">{item.change}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search currencies, strategies..."
              className="pl-10 bg-muted/50 border-0 focus:bg-muted"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Credit Display */}
          <div className="hidden sm:flex items-center space-x-2 px-3 py-1.5 bg-gradient-glass backdrop-blur-sm rounded-lg border border-border/20">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground">2,153</span>
            <span className="text-xs text-muted-foreground">credits</span>
          </div>

          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="h-5 w-5" />
            <Badge
              variant="destructive"
              className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
            >
              3
            </Badge>
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-gradient-primary flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
                <div className="hidden sm:block text-left">
                  <p className="text-sm font-medium text-foreground">John Trader</p>
                  <p className="text-xs text-muted-foreground">Pro Plan</p>
                </div>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile Settings</DropdownMenuItem>
              <DropdownMenuItem>Account Balance</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}