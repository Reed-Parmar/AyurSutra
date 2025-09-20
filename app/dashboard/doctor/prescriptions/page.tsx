"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, FileText, Calendar, User } from "lucide-react"

export default function PrescriptionsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const allPrescriptions = [
    {
      id: 1,
      patient: "John Smith",
      medication: "Triphala Churna",
      dosage: "1 tsp twice daily",
      date: "2024-03-15",
      duration: "30 days",
      status: "Active",
    },
    {
      id: 2,
      patient: "Emily Davis",
      medication: "Ashwagandha Capsules",
      dosage: "2 capsules daily",
      date: "2024-03-14",
      duration: "60 days",
      status: "Active",
    },
    {
      id: 3,
      patient: "Michael Brown",
      medication: "Yograj Guggulu",
      dosage: "2 tablets twice daily",
      date: "2024-03-13",
      duration: "45 days",
      status: "Active",
    },
    {
      id: 4,
      patient: "Lisa Wilson",
      medication: "Saraswatarishta",
      dosage: "15ml twice daily",
      date: "2024-03-12",
      duration: "30 days",
      status: "Completed",
    },
    {
      id: 5,
      patient: "David Johnson",
      medication: "Arjunarishta",
      dosage: "20ml twice daily",
      date: "2024-03-10",
      duration: "90 days",
      status: "Active",
    },
  ]

  const recentPrescriptions = allPrescriptions.filter((p) => p.status === "Active").slice(0, 5)
  const completedPrescriptions = allPrescriptions.filter((p) => p.status === "Completed")

  const filteredPrescriptions = allPrescriptions.filter(
    (prescription) =>
      prescription.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prescription.medication.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="flex h-screen bg-background">
      <Sidebar userRole="doctor" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Prescriptions" userName="Dr. Sarah Johnson" userRole="doctor" />

        <main className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            {/* Header */}
            <div>
              <h2 className="text-2xl font-bold">Prescription Management</h2>
              <p className="text-muted-foreground">View and manage all patient prescriptions</p>
            </div>

            {/* Search */}
            <Card>
              <CardContent className="pt-6">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search prescriptions by patient name or medication..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Prescriptions Tabs */}
            <Tabs defaultValue="all" className="space-y-4">
              <TabsList>
                <TabsTrigger value="all" className="gap-2">
                  <FileText className="h-4 w-4" />
                  All Prescriptions ({filteredPrescriptions.length})
                </TabsTrigger>
                <TabsTrigger value="active" className="gap-2">
                  <Calendar className="h-4 w-4" />
                  Active ({recentPrescriptions.length})
                </TabsTrigger>
                <TabsTrigger value="completed" className="gap-2">
                  <User className="h-4 w-4" />
                  Completed ({completedPrescriptions.length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <Card>
                  <CardHeader>
                    <CardTitle>All Prescriptions</CardTitle>
                    <CardDescription>Complete list of all prescriptions you've issued</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Patient</TableHead>
                          <TableHead>Medication</TableHead>
                          <TableHead>Dosage</TableHead>
                          <TableHead>Date Issued</TableHead>
                          <TableHead>Duration</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredPrescriptions.map((prescription) => (
                          <TableRow key={prescription.id}>
                            <TableCell className="font-medium">{prescription.patient}</TableCell>
                            <TableCell>{prescription.medication}</TableCell>
                            <TableCell>{prescription.dosage}</TableCell>
                            <TableCell>{prescription.date}</TableCell>
                            <TableCell>{prescription.duration}</TableCell>
                            <TableCell>
                              <Badge variant={prescription.status === "Active" ? "default" : "secondary"}>
                                {prescription.status}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="active">
                <Card>
                  <CardHeader>
                    <CardTitle>Active Prescriptions</CardTitle>
                    <CardDescription>Currently active prescriptions requiring monitoring</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Patient</TableHead>
                          <TableHead>Medication</TableHead>
                          <TableHead>Dosage</TableHead>
                          <TableHead>Date Issued</TableHead>
                          <TableHead>Duration</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {recentPrescriptions.map((prescription) => (
                          <TableRow key={prescription.id}>
                            <TableCell className="font-medium">{prescription.patient}</TableCell>
                            <TableCell>{prescription.medication}</TableCell>
                            <TableCell>{prescription.dosage}</TableCell>
                            <TableCell>{prescription.date}</TableCell>
                            <TableCell>{prescription.duration}</TableCell>
                            <TableCell>
                              <Badge variant="default">{prescription.status}</Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="completed">
                <Card>
                  <CardHeader>
                    <CardTitle>Completed Prescriptions</CardTitle>
                    <CardDescription>Historical prescriptions that have been completed</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Patient</TableHead>
                          <TableHead>Medication</TableHead>
                          <TableHead>Dosage</TableHead>
                          <TableHead>Date Issued</TableHead>
                          <TableHead>Duration</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {completedPrescriptions.map((prescription) => (
                          <TableRow key={prescription.id}>
                            <TableCell className="font-medium">{prescription.patient}</TableCell>
                            <TableCell>{prescription.medication}</TableCell>
                            <TableCell>{prescription.dosage}</TableCell>
                            <TableCell>{prescription.date}</TableCell>
                            <TableCell>{prescription.duration}</TableCell>
                            <TableCell>
                              <Badge variant="secondary">{prescription.status}</Badge>
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
