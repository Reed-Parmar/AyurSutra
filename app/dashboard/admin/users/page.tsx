"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, MoreHorizontal, Users, UserCheck } from "lucide-react"

export default function AllUsers() {
  const [searchTerm, setSearchTerm] = useState("")

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      email: "sarah@ayursutra.com",
      specialization: "Ayurvedic Medicine",
      status: "Active",
      patients: 45,
      joined: "2024-01-15",
    },
    {
      id: 2,
      name: "Dr. Raj Patel",
      email: "raj@ayursutra.com",
      specialization: "Panchakarma",
      status: "Active",
      patients: 32,
      joined: "2024-02-20",
    },
    {
      id: 3,
      name: "Dr. Priya Sharma",
      email: "priya@ayursutra.com",
      specialization: "Herbal Medicine",
      status: "Inactive",
      patients: 28,
      joined: "2024-03-10",
    },
  ]

  const patients = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@email.com",
      age: 35,
      condition: "Digestive Issues",
      status: "Active",
      lastVisit: "2024-03-15",
      doctor: "Dr. Sarah Johnson",
    },
    {
      id: 2,
      name: "Emily Davis",
      email: "emily.davis@email.com",
      age: 28,
      condition: "Stress Management",
      status: "Active",
      lastVisit: "2024-03-14",
      doctor: "Dr. Raj Patel",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael.brown@email.com",
      age: 42,
      condition: "Joint Pain",
      status: "Inactive",
      lastVisit: "2024-02-28",
      doctor: "Dr. Priya Sharma",
    },
    {
      id: 4,
      name: "Lisa Wilson",
      email: "lisa.wilson@email.com",
      age: 31,
      condition: "Sleep Disorders",
      status: "Active",
      lastVisit: "2024-03-16",
      doctor: "Dr. Sarah Johnson",
    },
  ]

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.condition.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="flex h-screen bg-background">
      <Sidebar userRole="admin" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="All Users" userName="Super Admin" userRole="admin" />

        <main className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            {/* Header */}
            <div>
              <h2 className="text-2xl font-bold">User Management</h2>
              <p className="text-muted-foreground">View and manage all doctors and patients in the system</p>
            </div>

            {/* Search */}
            <Card>
              <CardContent className="pt-6">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search users by name, email, or specialization..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Users Tabs */}
            <Tabs defaultValue="doctors" className="space-y-4">
              <TabsList>
                <TabsTrigger value="doctors" className="gap-2">
                  <UserCheck className="h-4 w-4" />
                  Doctors ({filteredDoctors.length})
                </TabsTrigger>
                <TabsTrigger value="patients" className="gap-2">
                  <Users className="h-4 w-4" />
                  Patients ({filteredPatients.length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="doctors">
                <Card>
                  <CardHeader>
                    <CardTitle>All Doctors</CardTitle>
                    <CardDescription>
                      {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? "s" : ""} found
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Specialization</TableHead>
                          <TableHead>Patients</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Joined</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredDoctors.map((doctor) => (
                          <TableRow key={doctor.id}>
                            <TableCell className="font-medium">{doctor.name}</TableCell>
                            <TableCell>{doctor.email}</TableCell>
                            <TableCell>{doctor.specialization}</TableCell>
                            <TableCell>{doctor.patients}</TableCell>
                            <TableCell>
                              <Badge variant={doctor.status === "Active" ? "default" : "secondary"}>
                                {doctor.status}
                              </Badge>
                            </TableCell>
                            <TableCell>{doctor.joined}</TableCell>
                            <TableCell>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="patients">
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
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Age</TableHead>
                          <TableHead>Condition</TableHead>
                          <TableHead>Doctor</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Last Visit</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredPatients.map((patient) => (
                          <TableRow key={patient.id}>
                            <TableCell className="font-medium">{patient.name}</TableCell>
                            <TableCell>{patient.email}</TableCell>
                            <TableCell>{patient.age}</TableCell>
                            <TableCell>{patient.condition}</TableCell>
                            <TableCell>{patient.doctor}</TableCell>
                            <TableCell>
                              <Badge variant={patient.status === "Active" ? "default" : "secondary"}>
                                {patient.status}
                              </Badge>
                            </TableCell>
                            <TableCell>{patient.lastVisit}</TableCell>
                            <TableCell>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
