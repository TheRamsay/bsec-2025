"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import {
  LayoutDashboard,
  CreditCard,
  LineChart,
  Target,
  ListOrdered,
  Settings,
  Rss,
} from "lucide-react";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  name?: string;
}

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export function SidebarContent({
  className,
  name = "",
  ...props
}: SidebarNavProps) {
  const pathname = usePathname();

  const navItems = [
    {
      title: "Dashboard",
      href: "/",
      icon: <LayoutDashboard className="mr-2 h-4 w-4" />,
    },
    {
      title: "Transactions",
      href: "/transactions",
      icon: <CreditCard className="mr-2 h-4 w-4" />,
    },
    {
      title: "Standing orders",
      href: "/orders",
      icon: <ListOrdered className="mr-2 h-4 w-4" />,
    },
    {
      title: "Goals",
      href: "/goals",
      icon: <Target className="mr-2 h-4 w-4" />,
    },
    {
      title: "Leaderboard",
      href: "/analytics",
      icon: <LineChart className="mr-2 h-4 w-4" />,
    },
    {
      title: "Feed",
      href: "/feed",
      icon: <Rss className="mr-2 h-4 w-4" />,
    },
  ];

  const bottomNavItems = [
    {
      title: "Settings",
      href: "/settings",
      icon: <Settings className="mr-2 h-4 w-4" />,
    },
  ];

  return (
    <div className={cn("flex flex-1 flex-col", className)} {...props}>
      <div className="flex-1 space-y-6">
        <div className="flex items-center px-3 py-2">
          <Link href="/" className="flex items-center space-x-2">
            <h2 className={`${montserrat.className} text-center text-4xl`}>
              {name}
            </h2>
          </Link>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center rounded-md px-4 py-3 text-base font-medium hover:bg-accent hover:text-accent-foreground",
                pathname === item.href
                  ? "bg-accent text-accent-foreground"
                  : "transparent",
              )}
            >
              {item.icon}
              {item.title}
            </Link>
          ))}
        </nav>
      </div>

      <nav className="space-y-1">
        {bottomNavItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center rounded-md px-4 py-3 text-base font-medium hover:bg-accent hover:text-accent-foreground",
              pathname === item.href
                ? "bg-accent text-accent-foreground"
                : "transparent",
            )}
          >
            {item.icon}
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
