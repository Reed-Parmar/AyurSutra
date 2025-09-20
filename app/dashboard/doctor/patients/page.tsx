"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Eye, Calendar, Phone, Mail } from "lucide-react"

export default function PatientsList() {
  const [searchTerm, setSearchTerm] = useState("")

  const patients = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@email.com",
      phone: "+1 (555) 123-4567",
      age: 35,
      condition: "Digestive Issues",
      status: "Active",
      lastVisit: "2024-03-15",
      nextAppointment: "2024-03-22",
    },
    {
      id: 2,
      name: "Emily Davis",
      email: "emily.davis@email.com",
      phone: "+1 (555) 234-5678",
      age: 28,
      condition: "Stress Management",
      status: "Active",
      lastVisit: "2024-03-14",
      nextAppointment: "2024-03-21",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael.brown@email.com",
      phone: "+1 (555) 345-6789",
      age: 42,
      condition: "Joint Pain",
      status: "Under Treatment",
      lastVisit: "2024-03-13",
      nextAppointment: "2024-03-20",
    },
    {
      id: 4,
      name: "Lisa Wilson",
      email: "lisa.wilson@email.com",
      phone: "+1 (555) 456-7890",
      age: 31,
      condition: "Sleep Disorders",
      status: "Active",
      lastVisit: "2024-03-12",
      nextAppointment: "2024-03-19",
    },
    {
      id: 5,
      name: "David Johnson",
      email: "david.johnson@email.com",
      phone: "+1 (555) 567-8901",
      age: 45,
      condition: "Hypertension",
      status: "Stable",
      lastVisit: "2024-03-10",
      nextAppointment: "2024-03-24",
    },
  ]

  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.condition.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="flex h-screen bg-background">
      <Sidebar userRole="doctor" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Patient Management" userName="Dr. Sarah Johnson" userRole="doctor" />

        <main className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            {/* Header */}
            <div>
              <h2 className="text-2xl font-bold">My Patients</h2>
              <p className="text-muted-foreground">Manage and view all your patients</p>
            </div>

            {/* Search */}
            <Card>
              <CardContent className="pt-6">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search patients by name, condition, or email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Patients Table */}
            <Card>
              <CardHeader>
                <CardTitle>All Patients</CardTitle>
                <CardDescription>
                  {filteredPatients.length} patient{filteredPatients.length !== 1 ? "s" : ""} found
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Patient</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Age</TableHead>
                      <TableHead>Condition</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Visit</TableHead>
                      <TableHead>Next Appointment</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPatients.map((patient) => (
                      <TableRow key={patient.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{patient.name}</p>
                            <p className="text-sm text-muted-foreground">ID: {patient.id}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="flex items-center gap-1 text-sm">
                              <Mail className="h-3 w-3" />
                              {patient.email}
                            </div>
                            <div className="flex items-center gap-1 text-sm">
                              <Phone className="h-3 w-3" />
                              {patient.phone}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{patient.age}</TableCell>
                        <TableCell>{patient.condition}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              patient.status === "Active"
                                ? "default"
                                : patient.status === "Under Treatment"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {patient.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{patient.lastVisit}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1 text-sm">
                            <Calendar className="h-3 w-3" />
                            {patient.nextAppointment}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Link href={`/dashboard/doctor/patients/${patient.id}`}>
                            <Button variant="ghost" size="sm" className="gap-1">
                              <Eye className="h-4 w-4" />
                              View
                            </Button>
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
