"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Users, UserPlus, FileText, Settings, LogOut, Leaf } from "lucide-react"

interface SidebarProps {
  userRole: "admin" | "doctor" | "patient"
}

const sidebarItems = {
  admin: [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard/admin" },
    { icon: UserPlus, label: "Manage Admins", href: "/dashboard/admin/admins" },
    { icon: Users, label: "All Users", href: "/dashboard/admin/users" },
    { icon: Settings, label: "Settings", href: "/dashboard/admin/settings" },
  ],
  doctor: [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard/doctor" },
    { icon: Users, label: "Patients", href: "/dashboard/doctor/patients" },
    { icon: FileText, label: "Prescriptions", href: "/dashboard/doctor/prescriptions" },
    { icon: Settings, label: "Settings", href: "/dashboard/doctor/settings" },
  ],
  patient: [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard/patient" },
    { icon: FileText, label: "Prescriptions", href: "/dashboard/patient/prescriptions" },
    { icon: FileText, label: "Documents", href: "/dashboard/patient/documents" },
    { icon: Settings, label: "Settings", href: "/dashboard/patient/settings" },
  ],
}

export function Sidebar({ userRole }: SidebarProps) {
  const pathname = usePathname()
  const items = sidebarItems[userRole]

  return (
    <div className="flex h-full w-64 flex-col bg-sidebar border-r border-sidebar-border">
      {/* Logo */}
      <div className="flex items-center gap-2 p-6 border-b border-sidebar-border">
        <Leaf className="h-8 w-8 text-sidebar-primary" />
        <span className="text-xl font-bold text-sidebar-foreground">AyurSutra</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link key={item.href} href={item.href}>
              <Button
                variant={isActive ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start gap-3",
                  isActive
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                )}
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </Button>
            </Link>
          )
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-sidebar-border">
        <Link href="/">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent"
          >
            <LogOut className="h-5 w-5" />
            Logout
          </Button>
        </Link>
      </div>
    </div>
  )
}
