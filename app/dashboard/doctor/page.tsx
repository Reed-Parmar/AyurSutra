import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { Users, Calendar, FileText, Activity, TrendingUp, Clock } from "lucide-react"

export default function DoctorDashboard() {
  const stats = [
    {
      title: "Total Patients",
      value: "156",
      description: "Active patients under care",
      icon: Users,
      trend: "+12 this month",
    },
    {
      title: "Today's Appointments",
      value: "8",
      description: "Scheduled consultations",
      icon: Calendar,
      trend: "2 completed",
    },
    {
      title: "Prescriptions",
      value: "23",
      description: "Issued this week",
      icon: FileText,
      trend: "+5 from last week",
    },
    {
      title: "Patient Recovery",
      value: "94%",
      description: "Success rate this month",
      icon: TrendingUp,
      trend: "+2% improvement",
    },
  ]

  const todayAppointments = [
    { time: "09:00 AM", patient: "John Smith", condition: "Follow-up consultation", status: "completed" },
    { time: "10:30 AM", patient: "Emily Davis", condition: "Initial assessment", status: "completed" },
    { time: "02:00 PM", patient: "Michael Brown", condition: "Treatment review", status: "upcoming" },
    { time: "03:30 PM", patient: "Lisa Wilson", condition: "Panchakarma consultation", status: "upcoming" },
    { time: "04:45 PM", patient: "David Johnson", condition: "Herbal medicine review", status: "upcoming" },
  ]

  const recentPatients = [
    { name: "John Smith", lastVisit: "Today", condition: "Digestive Issues", status: "Improving" },
    { name: "Emily Davis", lastVisit: "Yesterday", condition: "Stress Management", status: "Stable" },
    { name: "Michael Brown", lastVisit: "2 days ago", condition: "Joint Pain", status: "Under Treatment" },
    { name: "Lisa Wilson", lastVisit: "3 days ago", condition: "Sleep Disorders", status: "Improving" },
  ]

  return (
    <div className="flex h-screen bg-background">
      <Sidebar userRole="doctor" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Doctor Dashboard" userName="Dr. Sarah Johnson" userRole="doctor" />

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
            {/* Today's Appointments */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Today's Schedule
                </CardTitle>
                <CardDescription>Your appointments for today</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {todayAppointments.map((appointment, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="text-sm font-medium text-primary">{appointment.time}</div>
                        <div>
                          <p className="text-sm font-medium">{appointment.patient}</p>
                          <p className="text-xs text-muted-foreground">{appointment.condition}</p>
                        </div>
                      </div>
                      <div
                        className={`px-2 py-1 rounded-full text-xs ${
                          appointment.status === "completed"
                            ? "bg-primary/10 text-primary"
                            : "bg-secondary/10 text-secondary-foreground"
                        }`}
                      >
                        {appointment.status}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Patients */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Recent Patients
                </CardTitle>
                <CardDescription>Latest patient interactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentPatients.map((patient, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">{patient.name}</p>
                        <p className="text-xs text-muted-foreground">{patient.condition}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">{patient.lastVisit}</p>
                        <p className="text-xs text-primary">{patient.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
