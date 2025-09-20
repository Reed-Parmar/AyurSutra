"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
  ArrowLeft,
  User,
  Calendar,
  Phone,
  Mail,
  MapPin,
  AlertTriangle,
  FileText,
  Upload,
  Download,
  Plus,
} from "lucide-react"

export default function PatientProfile() {
  const params = useParams()
  const patientId = params.id
  const [newPrescription, setNewPrescription] = useState("")

  // Mock patient data - in real app, fetch based on patientId
  const patient = {
    id: patientId,
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "+1 (555) 123-4567",
    age: 35,
    address: "123 Main St, City, State 12345",
    condition: "Digestive Issues",
    status: "Active",
    joinDate: "2024-01-15",
    lastVisit: "2024-03-15",
    nextAppointment: "2024-03-22",
  }

  const patientHistory = [
    {
      date: "2024-03-15",
      type: "Consultation",
      description: "Follow-up for digestive issues. Patient reports improvement in symptoms.",
      doctor: "Dr. Sarah Johnson",
      treatment: "Continued herbal medicine regimen",
    },
    {
      date: "2024-03-01",
      type: "Treatment",
      description: "Started Panchakarma therapy for digestive system cleansing.",
      doctor: "Dr. Sarah Johnson",
      treatment: "Panchakarma - 7 day program",
    },
    {
      date: "2024-02-15",
      type: "Initial Assessment",
      description: "Patient presented with chronic digestive issues, bloating, and irregular bowel movements.",
      doctor: "Dr. Sarah Johnson",
      treatment: "Diagnostic consultation",
    },
  ]

  const allergies = [
    { allergen: "Peanuts", severity: "Severe", reaction: "Anaphylaxis", dateIdentified: "2020-05-15" },
    { allergen: "Shellfish", severity: "Moderate", reaction: "Hives, swelling", dateIdentified: "2019-08-22" },
    { allergen: "Dust Mites", severity: "Mild", reaction: "Sneezing, runny nose", dateIdentified: "2018-03-10" },
  ]

  const prescriptions = [
    {
      date: "2024-03-15",
      medication: "Triphala Churna",
      dosage: "1 tsp twice daily",
      duration: "30 days",
      instructions: "Take with warm water before meals",
      status: "Active",
    },
    {
      date: "2024-03-01",
      medication: "Hingvastak Churna",
      dosage: "1/2 tsp after meals",
      duration: "15 days",
      instructions: "Mix with buttermilk",
      status: "Completed",
    },
    {
      date: "2024-02-15",
      medication: "Avipattikar Churna",
      dosage: "1 tsp at bedtime",
      duration: "21 days",
      instructions: "Take with warm water",
      status: "Completed",
    },
  ]

  const documents = [
    { name: "Lab Results - March 2024", type: "Lab Report", date: "2024-03-10", size: "2.4 MB" },
    { name: "X-Ray - Abdomen", type: "Imaging", date: "2024-02-28", size: "5.1 MB" },
    { name: "Previous Medical Records", type: "Medical History", date: "2024-01-15", size: "1.8 MB" },
  ]

  return (
    <div className="flex h-screen bg-background">
      <Sidebar userRole="doctor" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Patient Profile" userName="Dr. Sarah Johnson" userRole="doctor" />

        <main className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            {/* Back Button */}
            <Link href="/dashboard/doctor/patients">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Patients
              </Button>
            </Link>

            {/* Patient Info Header */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 rounded-full p-3">
                      <User className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{patient.name}</CardTitle>
                      <CardDescription>Patient ID: {patient.id}</CardDescription>
                    </div>
                  </div>
                  <Badge variant={patient.status === "Active" ? "default" : "secondary"}>{patient.status}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{patient.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{patient.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Age: {patient.age}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Next: {patient.nextAppointment}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Patient Details Tabs */}
            <Tabs defaultValue="history" className="space-y-4">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="history">Patient History</TabsTrigger>
                <TabsTrigger value="allergies">Allergies & Conditions</TabsTrigger>
                <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
              </TabsList>

              <TabsContent value="history">
                <Card>
                  <CardHeader>
                    <CardTitle>Patient History</CardTitle>
                    <CardDescription>Complete medical history and past visits</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {patientHistory.map((entry, index) => (
                        <div key={index} className="border border-border rounded-lg p-4">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <Badge variant="outline">{entry.type}</Badge>
                              <span className="text-sm text-muted-foreground">{entry.date}</span>
                            </div>
                            <span className="text-sm text-muted-foreground">{entry.doctor}</span>
                          </div>
                          <p className="text-sm mb-2">{entry.description}</p>
                          <p className="text-sm text-primary">Treatment: {entry.treatment}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="allergies">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5" />
                      Allergies & Medical Conditions
                    </CardTitle>
                    <CardDescription>Known allergies and medical conditions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Allergen</TableHead>
                          <TableHead>Severity</TableHead>
                          <TableHead>Reaction</TableHead>
                          <TableHead>Date Identified</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {allergies.map((allergy, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{allergy.allergen}</TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  allergy.severity === "Severe"
                                    ? "destructive"
                                    : allergy.severity === "Moderate"
                                      ? "secondary"
                                      : "outline"
                                }
                              >
                                {allergy.severity}
                              </Badge>
                            </TableCell>
                            <TableCell>{allergy.reaction}</TableCell>
                            <TableCell>{allergy.dateIdentified}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="prescriptions">
                <div className="space-y-6">
                  {/* Add New Prescription */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Plus className="h-5 w-5" />
                        Add New Prescription
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="medication">Medication</Label>
                          <Input id="medication" placeholder="Enter medication name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="dosage">Dosage</Label>
                          <Input id="dosage" placeholder="Enter dosage" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="instructions">Instructions</Label>
                        <Textarea
                          id="instructions"
                          placeholder="Enter detailed instructions for the patient"
                          value={newPrescription}
                          onChange={(e) => setNewPrescription(e.target.value)}
                        />
                      </div>
                      <Button>Add Prescription</Button>
                    </CardContent>
                  </Card>

                  {/* Existing Prescriptions */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Prescription History</CardTitle>
                      <CardDescription>All prescriptions for this patient</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Medication</TableHead>
                            <TableHead>Dosage</TableHead>
                            <TableHead>Duration</TableHead>
                            <TableHead>Instructions</TableHead>
                            <TableHead>Status</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {prescriptions.map((prescription, index) => (
                            <TableRow key={index}>
                              <TableCell>{prescription.date}</TableCell>
                              <TableCell className="font-medium">{prescription.medication}</TableCell>
                              <TableCell>{prescription.dosage}</TableCell>
                              <TableCell>{prescription.duration}</TableCell>
                              <TableCell>{prescription.instructions}</TableCell>
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
                </div>
              </TabsContent>

              <TabsContent value="documents">
                <div className="space-y-6">
                  {/* Upload Documents */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Upload className="h-5 w-5" />
                        Upload Documents
                      </CardTitle>
                      <CardDescription>Upload medical documents, lab reports, or images</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                        <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-sm text-muted-foreground mb-2">
                          Drag and drop files here, or click to browse
                        </p>
                        <Button variant="outline">Choose Files</Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Existing Documents */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5" />
                        Patient Documents
                      </CardTitle>
                      <CardDescription>All uploaded documents for this patient</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {documents.map((doc, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 border border-border rounded-lg"
                          >
                            <div className="flex items-center gap-3">
                              <FileText className="h-5 w-5 text-muted-foreground" />
                              <div>
                                <p className="text-sm font-medium">{doc.name}</p>
                                <p className="text-xs text-muted-foreground">
                                  {doc.type} • {doc.date} • {doc.size}
                                </p>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm" className="gap-1">
                              <Download className="h-4 w-4" />
                              Download
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
