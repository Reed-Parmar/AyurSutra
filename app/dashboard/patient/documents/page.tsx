"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, FileText, Download, Eye, Upload, ImageIcon, FileSpreadsheet, Calendar } from "lucide-react"

export default function PatientDocuments() {
  const [searchTerm, setSearchTerm] = useState("")

  const documents = [
    {
      id: 1,
      name: "Blood Test Results - March 2024",
      type: "Lab Report",
      category: "lab",
      date: "2024-03-15",
      size: "2.4 MB",
      uploadedBy: "Dr. Sarah Johnson",
      description: "Complete blood count and metabolic panel results",
    },
    {
      id: 2,
      name: "X-Ray - Chest",
      type: "Imaging",
      category: "imaging",
      date: "2024-03-10",
      size: "5.1 MB",
      uploadedBy: "Dr. Sarah Johnson",
      description: "Chest X-ray for respiratory assessment",
    },
    {
      id: 3,
      name: "Prescription - Triphala Churna",
      type: "Prescription",
      category: "prescription",
      date: "2024-03-15",
      size: "0.8 MB",
      uploadedBy: "Dr. Sarah Johnson",
      description: "Prescription for digestive health treatment",
    },
    {
      id: 4,
      name: "Treatment Plan - Digestive Health",
      type: "Treatment Plan",
      category: "treatment",
      date: "2024-02-28",
      size: "1.2 MB",
      uploadedBy: "Dr. Sarah Johnson",
      description: "Comprehensive treatment plan for digestive issues",
    },
    {
      id: 5,
      name: "Medical History Summary",
      type: "Medical Record",
      category: "medical",
      date: "2024-01-15",
      size: "3.5 MB",
      uploadedBy: "Dr. Sarah Johnson",
      description: "Complete medical history and previous treatments",
    },
    {
      id: 6,
      name: "Insurance Card - Front & Back",
      type: "Insurance",
      category: "insurance",
      date: "2024-01-15",
      size: "1.1 MB",
      uploadedBy: "John Smith",
      description: "Health insurance card documentation",
    },
  ]

  const getDocumentIcon = (category: string) => {
    switch (category) {
      case "imaging":
        return ImageIcon
      case "lab":
        return FileSpreadsheet
      case "prescription":
        return FileText
      default:
        return FileText
    }
  }

  const filteredDocuments = documents.filter(
    (doc) =>
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.type.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const labReports = documents.filter((doc) => doc.category === "lab")
  const imagingReports = documents.filter((doc) => doc.category === "imaging")
  const prescriptions = documents.filter((doc) => doc.category === "prescription")
  const treatmentPlans = documents.filter((doc) => doc.category === "treatment")

  return (
    <div className="flex h-screen bg-background">
      <Sidebar userRole="patient" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="My Documents" userName="John Smith" userRole="patient" />

        <main className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            {/* Header */}
            <div>
              <h2 className="text-2xl font-bold">My Medical Documents</h2>
              <p className="text-muted-foreground">Access all your medical records and documents</p>
            </div>

            {/* Upload Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Upload Documents
                </CardTitle>
                <CardDescription>Upload your own medical documents or insurance information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground mb-2">Drag and drop files here, or click to browse</p>
                  <p className="text-xs text-muted-foreground mb-4">Supported formats: PDF, JPG, PNG, DOC (Max 10MB)</p>
                  <Button variant="outline">Choose Files</Button>
                </div>
              </CardContent>
            </Card>

            {/* Search */}
            <Card>
              <CardContent className="pt-6">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search documents by name or type..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Documents Tabs */}
            <Tabs defaultValue="all" className="space-y-4">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="all">All ({filteredDocuments.length})</TabsTrigger>
                <TabsTrigger value="lab">Lab Reports ({labReports.length})</TabsTrigger>
                <TabsTrigger value="imaging">Imaging ({imagingReports.length})</TabsTrigger>
                <TabsTrigger value="prescriptions">Prescriptions ({prescriptions.length})</TabsTrigger>
                <TabsTrigger value="treatment">Treatment ({treatmentPlans.length})</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <Card>
                  <CardHeader>
                    <CardTitle>All Documents</CardTitle>
                    <CardDescription>Complete list of all your medical documents</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {filteredDocuments.map((doc) => {
                        const IconComponent = getDocumentIcon(doc.category)
                        return (
                          <div
                            key={doc.id}
                            className="flex items-center justify-between p-4 border border-border rounded-lg"
                          >
                            <div className="flex items-center gap-4">
                              <div className="bg-primary/10 rounded-lg p-2">
                                <IconComponent className="h-6 w-6 text-primary" />
                              </div>
                              <div>
                                <h3 className="font-medium">{doc.name}</h3>
                                <p className="text-sm text-muted-foreground">{doc.description}</p>
                                <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                                  <span className="flex items-center gap-1">
                                    <Calendar className="h-3 w-3" />
                                    {doc.date}
                                  </span>
                                  <span>{doc.size}</span>
                                  <span>Uploaded by {doc.uploadedBy}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline">{doc.type}</Badge>
                              <Button variant="ghost" size="sm" className="gap-1">
                                <Eye className="h-4 w-4" />
                                View
                              </Button>
                              <Button variant="ghost" size="sm" className="gap-1">
                                <Download className="h-4 w-4" />
                                Download
                              </Button>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="lab">
                <Card>
                  <CardHeader>
                    <CardTitle>Lab Reports</CardTitle>
                    <CardDescription>Blood tests, urine tests, and other laboratory results</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {labReports.map((doc) => (
                        <div
                          key={doc.id}
                          className="flex items-center justify-between p-4 border border-border rounded-lg"
                        >
                          <div className="flex items-center gap-4">
                            <div className="bg-primary/10 rounded-lg p-2">
                              <FileSpreadsheet className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-medium">{doc.name}</h3>
                              <p className="text-sm text-muted-foreground">{doc.description}</p>
                              <p className="text-xs text-muted-foreground mt-1">
                                {doc.date} • {doc.size}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm" className="gap-1">
                              <Eye className="h-4 w-4" />
                              View
                            </Button>
                            <Button variant="ghost" size="sm" className="gap-1">
                              <Download className="h-4 w-4" />
                              Download
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="imaging">
                <Card>
                  <CardHeader>
                    <CardTitle>Imaging Reports</CardTitle>
                    <CardDescription>X-rays, MRIs, CT scans, and other medical imaging</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {imagingReports.map((doc) => (
                        <div
                          key={doc.id}
                          className="flex items-center justify-between p-4 border border-border rounded-lg"
                        >
                          <div className="flex items-center gap-4">
                            <div className="bg-primary/10 rounded-lg p-2">
                              <ImageIcon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-medium">{doc.name}</h3>
                              <p className="text-sm text-muted-foreground">{doc.description}</p>
                              <p className="text-xs text-muted-foreground mt-1">
                                {doc.date} • {doc.size}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm" className="gap-1">
                              <Eye className="h-4 w-4" />
                              View
                            </Button>
                            <Button variant="ghost" size="sm" className="gap-1">
                              <Download className="h-4 w-4" />
                              Download
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="prescriptions">
                <Card>
                  <CardHeader>
                    <CardTitle>Prescription Documents</CardTitle>
                    <CardDescription>Digital copies of your prescriptions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {prescriptions.map((doc) => (
                        <div
                          key={doc.id}
                          className="flex items-center justify-between p-4 border border-border rounded-lg"
                        >
                          <div className="flex items-center gap-4">
                            <div className="bg-primary/10 rounded-lg p-2">
                              <FileText className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-medium">{doc.name}</h3>
                              <p className="text-sm text-muted-foreground">{doc.description}</p>
                              <p className="text-xs text-muted-foreground mt-1">
                                {doc.date} • {doc.size}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm" className="gap-1">
                              <Eye className="h-4 w-4" />
                              View
                            </Button>
                            <Button variant="ghost" size="sm" className="gap-1">
                              <Download className="h-4 w-4" />
                              Download
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="treatment">
                <Card>
                  <CardHeader>
                    <CardTitle>Treatment Plans</CardTitle>
                    <CardDescription>Your treatment plans and care instructions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {treatmentPlans.map((doc) => (
                        <div
                          key={doc.id}
                          className="flex items-center justify-between p-4 border border-border rounded-lg"
                        >
                          <div className="flex items-center gap-4">
                            <div className="bg-primary/10 rounded-lg p-2">
                              <FileText className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-medium">{doc.name}</h3>
                              <p className="text-sm text-muted-foreground">{doc.description}</p>
                              <p className="text-xs text-muted-foreground mt-1">
                                {doc.date} • {doc.size}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm" className="gap-1">
                              <Eye className="h-4 w-4" />
                              View
                            </Button>
                            <Button variant="ghost" size="sm" className="gap-1">
                              <Download className="h-4 w-4" />
                              Download
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
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
