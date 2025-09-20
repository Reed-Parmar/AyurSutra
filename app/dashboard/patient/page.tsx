import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { Badge } from "@/components/ui/badge"
import { Heart, Calendar, FileText, Bell, Activity, Clock, AlertCircle } from "lucide-react"

export default function PatientDashboard() {
  const stats = [
    {
      title: "Active Prescriptions",
      value: "3",
      description: "Currently prescribed medications",
      icon: FileText,
      trend: "2 new this month",
    },
    {
      title: "Upcoming Appointments",
      value: "2",
      description: "Scheduled consultations",
      icon: Calendar,
      trend: "Next: March 22",
    },
    {
      title: "Health Score",
      value: "85%",
      description: "Overall wellness indicator",
      icon: Heart,
      trend: "+5% improvement",
    },
    {
      title: "Treatment Days",
      value: "45",
      description: "Days in current treatment",
      icon: Activity,
      trend: "15 days remaining",
    },
  ]

  const upcomingAppointments = [
    {
      date: "March 22, 2024",
      time: "10:30 AM",
      doctor: "Dr. Sarah Johnson",
      type: "Follow-up Consultation",
      status: "confirmed",
    },
    {
      date: "March 29, 2024",
      time: "02:00 PM",
      doctor: "Dr. Sarah Johnson",
      type: "Treatment Review",
      status: "pending",
    },
  ]

  const recentActivity = [
    {
      type: "prescription",
      title: "New prescription added",
      description: "Triphala Churna - 1 tsp twice daily",
      time: "2 hours ago",
      icon: FileText,
    },
    {
      type: "appointment",
      title: "Appointment confirmed",
      description: "Follow-up consultation on March 22",
      time: "1 day ago",
      icon: Calendar,
    },
    {
      type: "document",
      title: "Lab results uploaded",
      description: "Blood test results from March 15",
      time: "3 days ago",
      icon: FileText,
    },
    {
      type: "reminder",
      title: "Medication reminder",
      description: "Time to take your evening medication",
      time: "5 days ago",
      icon: Bell,
    },
  ]

  const notifications = [
    {
      type: "appointment",
      title: "Upcoming Appointment",
      message: "You have an appointment with Dr. Sarah Johnson tomorrow at 10:30 AM",
      priority: "high",
      time: "1 hour ago",
    },
    {
      type: "medication",
      title: "Medication Reminder",
      message: "Don't forget to take your Triphala Churna before dinner",
      priority: "medium",
      time: "3 hours ago",
    },
    {
      type: "results",
      title: "Lab Results Available",
      message: "Your recent blood test results are now available for review",
      priority: "low",
      time: "1 day ago",
    },
  ]

  return (
    <div className="flex h-screen bg-background">
      <Sidebar userRole="patient" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="My Health Dashboard" userName="John Smith" userRole="patient" />

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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Upcoming Appointments */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Upcoming Appointments
                </CardTitle>
                <CardDescription>Your scheduled consultations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                      <div>
                        <p className="text-sm font-medium">{appointment.type}</p>
                        <p className="text-xs text-muted-foreground">{appointment.doctor}</p>
                        <p className="text-xs text-muted-foreground">
                          {appointment.date} at {appointment.time}
                        </p>
                      </div>
                      <Badge variant={appointment.status === "confirmed" ? "default" : "secondary"}>
                        {appointment.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Recent Notifications
                </CardTitle>
                <CardDescription>Important updates and reminders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.map((notification, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 border border-border rounded-lg">
                      <div
                        className={`p-1 rounded-full ${
                          notification.priority === "high"
                            ? "bg-destructive/10"
                            : notification.priority === "medium"
                              ? "bg-primary/10"
                              : "bg-muted"
                        }`}
                      >
                        {notification.type === "appointment" ? (
                          <Calendar className="h-3 w-3" />
                        ) : notification.type === "medication" ? (
                          <Clock className="h-3 w-3" />
                        ) : (
                          <AlertCircle className="h-3 w-3" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{notification.title}</p>
                        <p className="text-xs text-muted-foreground">{notification.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Recent Activity
              </CardTitle>
              <CardDescription>Your latest health-related activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="bg-primary/10 rounded-full p-2">
                      <activity.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.title}</p>
                      <p className="text-xs text-muted-foreground">{activity.description}</p>
                    </div>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
