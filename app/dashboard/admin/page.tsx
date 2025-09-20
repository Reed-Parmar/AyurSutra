import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { Users, UserCheck, Activity, AlertTriangle } from "lucide-react"

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Users",
      value: "1,234",
      description: "All registered users",
      icon: Users,
      trend: "+12% from last month",
    },
    {
      title: "Active Doctors",
      value: "89",
      description: "Currently active doctors",
      icon: UserCheck,
      trend: "+3% from last month",
    },
    {
      title: "Active Patients",
      value: "1,145",
      description: "Currently active patients",
      icon: Activity,
      trend: "+8% from last month",
    },
    {
      title: "Pending Issues",
      value: "23",
      description: "Requiring attention",
      icon: AlertTriangle,
      trend: "-5% from last month",
    },
  ]

  const recentActivity = [
    { action: "New doctor registered", user: "Dr. Sarah Johnson", time: "2 hours ago" },
    { action: "Patient profile updated", user: "John Smith", time: "4 hours ago" },
    { action: "Admin created", user: "Admin Mike", time: "1 day ago" },
    { action: "System backup completed", user: "System", time: "1 day ago" },
  ]

  return (
    <div className="flex h-screen bg-background">
      <Sidebar userRole="admin" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Admin Dashboard" userName="Super Admin" userRole="admin" />

        <main className="flex-1 overflow-y-auto p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <Card key={stat.title}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                    <Icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <p className="text-xs text-muted-foreground">{stat.description}</p>
                    <p className="text-xs text-primary mt-1">{stat.trend}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest system activities and user actions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">{activity.action}</p>
                        <p className="text-xs text-muted-foreground">{activity.user}</p>
                      </div>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common administrative tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 border border-border rounded-lg hover:bg-muted cursor-pointer transition-colors">
                    <UserCheck className="h-8 w-8 text-primary mb-2" />
                    <h3 className="font-medium">Create Admin</h3>
                    <p className="text-xs text-muted-foreground">Add new administrator</p>
                  </div>
                  <div className="p-4 border border-border rounded-lg hover:bg-muted cursor-pointer transition-colors">
                    <Users className="h-8 w-8 text-primary mb-2" />
                    <h3 className="font-medium">View Users</h3>
                    <p className="text-xs text-muted-foreground">Manage all users</p>
                  </div>
                  <div className="p-4 border border-border rounded-lg hover:bg-muted cursor-pointer transition-colors">
                    <Activity className="h-8 w-8 text-primary mb-2" />
                    <h3 className="font-medium">System Health</h3>
                    <p className="text-xs text-muted-foreground">Check system status</p>
                  </div>
                  <div className="p-4 border border-border rounded-lg hover:bg-muted cursor-pointer transition-colors">
                    <AlertTriangle className="h-8 w-8 text-primary mb-2" />
                    <h3 className="font-medium">View Issues</h3>
                    <p className="text-xs text-muted-foreground">Resolve pending issues</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
