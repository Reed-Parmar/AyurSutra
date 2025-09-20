import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Users, Shield, Heart } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Leaf className="h-12 w-12 text-primary mr-3" />
            <h1 className="text-4xl font-bold text-foreground">AyurSutra</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ayurveda-inspired healthcare management platform connecting doctors, patients, and administrators
          </p>
        </div>

        {/* Login Options */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Patient Portal</CardTitle>
              <CardDescription>
                Access your medical records, prescriptions, and manage your health journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/login/patient">
                <Button className="w-full" size="lg">
                  Patient Login
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Doctor Portal</CardTitle>
              <CardDescription>Manage patients, prescriptions, and provide comprehensive care</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/login/doctor">
                <Button className="w-full" size="lg">
                  Doctor Login
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Admin Portal</CardTitle>
              <CardDescription>System administration and user management capabilities</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/login/admin">
                <Button className="w-full" size="lg">
                  Admin Login
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Features */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-semibold mb-8 text-foreground">Holistic Healthcare Management</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium mb-2">Ayurvedic Approach</h3>
              <p className="text-sm text-muted-foreground">Traditional wisdom meets modern technology</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium mb-2">Patient Care</h3>
              <p className="text-sm text-muted-foreground">Comprehensive health record management</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium mb-2">Doctor Tools</h3>
              <p className="text-sm text-muted-foreground">Advanced patient management system</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium mb-2">Secure Platform</h3>
              <p className="text-sm text-muted-foreground">HIPAA compliant and secure</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
