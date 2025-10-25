import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Heart, Mail, Download, Share2 } from "lucide-react"

export default function DonationSuccessPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="text-center border-border">
          <CardContent className="p-12">
            <div className="w-20 h-20 bg-coral-bg rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-coral" />
            </div>

            <h1 className="font-serif text-3xl font-bold text-foreground mb-4">Thank You for Your Donation!</h1>

            <p className="text-lg text-muted-foreground mb-8">
              Your generous contribution of <strong>$100</strong> will help us continue bringing quality physiotherapy
              care to communities that need it most.
            </p>

            <div className="bg-primary/5 p-6 rounded-lg mb-8">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Heart className="w-5 h-5 text-primary" />
                <span className="font-semibold text-primary">Your Impact</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your $100 donation funds one patient screening and assessment, helping someone take the first step
                toward recovery.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>A receipt has been sent to your email address</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Download className="w-4 h-4" />
                <span>Tax-deductible receipt available for download</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/impact">View Our Impact</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/">Return Home</Link>
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Help us spread the word about our mission</p>
              <div className="flex justify-center gap-2">
                <Button variant="ghost" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
