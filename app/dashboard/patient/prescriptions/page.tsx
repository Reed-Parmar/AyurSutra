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
import { Search, FileText, Clock, CheckCircle, Download, AlertCircle } from "lucide-react"

export default function PatientPrescriptions() {
  const [searchTerm, setSearchTerm] = useState("")

  const prescriptions = [
    {
      id: 1,
      medication: "Triphala Churna",
      dosage: "1 tsp twice daily",
      instructions: "Take with warm water before meals",
      prescribedBy: "Dr. Sarah Johnson",
      dateIssued: "2024-03-15",
      duration: "30 days",
      status: "Active",
      refillsRemaining: 2,
      nextDose: "6:00 PM today",
    },
    {
      id: 2,
      medication: "Ashwagandha Capsules",
      dosage: "2 capsules daily",
      instructions: "Take with milk at bedtime",
      prescribedBy: "Dr. Sarah Johnson",
      dateIssued: "2024-03-10",
      duration: "60 days",
      status: "Active",
      refillsRemaining: 1,
      nextDose: "10:00 PM today",
    },
    {
      id: 3,
      medication: "Hingvastak Churna",
      dosage: "1/2 tsp after meals",
      instructions: "Mix with buttermilk",
      prescribedBy: "Dr. Sarah Johnson",
      dateIssued: "2024-03-01",
      duration: "15 days",
      status: "Completed",
      refillsRemaining: 0,
      nextDose: null,
    },
    {
      id: 4,
      medication: "Avipattikar Churna",
      dosage: "1 tsp at bedtime",
      instructions: "Take with warm water",
      prescribedBy: "Dr. Sarah Johnson",
      dateIssued: "2024-02-15",
      duration: "21 days",
      status: "Completed",
      refillsRemaining: 0,
      nextDose: null,
    },
  ]

  const activePrescriptions = prescriptions.filter((p) => p.status === "Active")
  const completedPrescriptions = prescriptions.filter((p) => p.status === "Completed")

  const filteredPrescriptions = prescriptions.filter((prescription) =>
    prescription.medication.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const medicationReminders = [
    {
      medication: "Triphala Churna",
      nextDose: "6:00 PM today",
      status: "upcoming",
    },
    {
      medication: "Ashwagandha Capsules",
      nextDose: "10:00 PM today",
      status: "upcoming",
    },
  ]

  return (
    <div className="flex h-screen bg-background">
      <Sidebar userRole="patient" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="My Prescriptions" userName="John Smith" userRole="patient" />

        <main className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            {/* Header */}
            <div>
              <h2 className="text-2xl font-bold">My Prescriptions</h2>
              <p className="text-muted-foreground">View and manage your prescribed medications</p>
            </div>

            {/* Medication Reminders */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Medication Reminders
                </CardTitle>
                <CardDescription>Upcoming doses for today</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {medicationReminders.map((reminder, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                      <div>
                        <p className="text-sm font-medium">{reminder.medication}</p>
                        <p className="text-xs text-muted-foreground">Next dose: {reminder.nextDose}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-primary" />
                        <Badge variant="outline">Reminder Set</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Search */}
            <Card>
              <CardContent className="pt-6">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search prescriptions by medication name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Prescriptions Tabs */}
            <Tabs defaultValue="active" className="space-y-4">
              <TabsList>
                <TabsTrigger value="active" className="gap-2">
                  <Clock className="h-4 w-4" />
                  Active ({activePrescriptions.length})
                </TabsTrigger>
                <TabsTrigger value="completed" className="gap-2">
                  <CheckCircle className="h-4 w-4" />
                  Completed ({completedPrescriptions.length})
                </TabsTrigger>
                <TabsTrigger value="all" className="gap-2">
                  <FileText className="h-4 w-4" />
                  All ({filteredPrescriptions.length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="active">
                <Card>
                  <CardHeader>
                    <CardTitle>Active Prescriptions</CardTitle>
                    <CardDescription>Medications you are currently taking</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {activePrescriptions.map((prescription) => (
                        <div key={prescription.id} className="border border-border rounded-lg p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-lg font-semibold">{prescription.medication}</h3>
                              <p className="text-sm text-muted-foreground">Prescribed by {prescription.prescribedBy}</p>
                            </div>
                            <Badge variant="default">{prescription.status}</Badge>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <p>
                                <strong>Dosage:</strong> {prescription.dosage}
                              </p>
                              <p>
                                <strong>Instructions:</strong> {prescription.instructions}
                              </p>
                            </div>
                            <div>
                              <p>
                                <strong>Duration:</strong> {prescription.duration}
                              </p>
                              <p>
                                <strong>Refills Remaining:</strong> {prescription.refillsRemaining}
                              </p>
                              {prescription.nextDose && (
                                <p>
                                  <strong>Next Dose:</strong> {prescription.nextDose}
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="flex justify-end mt-4">
                            <Button variant="outline" size="sm" className="gap-1 bg-transparent">
                              <Download className="h-4 w-4" />
                              Download Prescription
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="completed">
                <Card>
                  <CardHeader>
                    <CardTitle>Completed Prescriptions</CardTitle>
                    <CardDescription>Medications you have finished taking</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Medication</TableHead>
                          <TableHead>Dosage</TableHead>
                          <TableHead>Prescribed By</TableHead>
                          <TableHead>Date Issued</TableHead>
                          <TableHead>Duration</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {completedPrescriptions.map((prescription) => (
                          <TableRow key={prescription.id}>
                            <TableCell className="font-medium">{prescription.medication}</TableCell>
                            <TableCell>{prescription.dosage}</TableCell>
                            <TableCell>{prescription.prescribedBy}</TableCell>
                            <TableCell>{prescription.dateIssued}</TableCell>
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

              <TabsContent value="all">
                <Card>
                  <CardHeader>
                    <CardTitle>All Prescriptions</CardTitle>
                    <CardDescription>Complete history of all your prescriptions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Medication</TableHead>
                          <TableHead>Dosage</TableHead>
                          <TableHead>Prescribed By</TableHead>
                          <TableHead>Date Issued</TableHead>
                          <TableHead>Duration</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredPrescriptions.map((prescription) => (
                          <TableRow key={prescription.id}>
                            <TableCell className="font-medium">{prescription.medication}</TableCell>
                            <TableCell>{prescription.dosage}</TableCell>
                            <TableCell>{prescription.prescribedBy}</TableCell>
                            <TableCell>{prescription.dateIssued}</TableCell>
                            <TableCell>{prescription.duration}</TableCell>
                            <TableCell>
                              <Badge variant={prescription.status === "Active" ? "default" : "secondary"}>
                                {prescription.status}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Button variant="ghost" size="sm" className="gap-1">
                                <Download className="h-4 w-4" />
                                Download
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
