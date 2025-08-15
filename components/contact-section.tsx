import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-20" style={{ backgroundColor: "#f8fafc" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-slate-800 mb-4">Join the Team!</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ready to get started? We welcome interested families to register and become part of our Flag Football
            family.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="font-heading text-2xl font-bold text-slate-800 mb-6">Get in Touch</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full" style={{ backgroundColor: "#f1f5f9" }}>
                      <Phone className="h-6 w-6" style={{ color: "#E6004C" }} />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">Phone</div>
                      <div className="text-slate-600">055 823 3373 / 020 088 9588</div>
                      <div className="text-sm" style={{ color: "#004A99" }}>
                        (WhatsApp works best)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full" style={{ backgroundColor: "#f1f5f9" }}>
                      <Mail className="h-6 w-6" style={{ color: "#E6004C" }} />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">Email</div>
                      <div className="text-slate-600">fitlifeconcept@gmail.com</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full" style={{ backgroundColor: "#f1f5f9" }}>
                      <MapPin className="h-6 w-6" style={{ color: "#E6004C" }} />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">Training Locations</div>
                      <div className="text-slate-600">La Townpark, Labone/Labadi, Dzorwulu</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full" style={{ backgroundColor: "#f1f5f9" }}>
                      <Clock className="h-6 w-6" style={{ color: "#E6004C" }} />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">Training Sessions</div>
                      <div className="text-slate-600">Every Tuesday, Wednesday and Friday (September - June)</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full" style={{ backgroundColor: "#f1f5f9" }}>
                      <Instagram className="h-6 w-6" style={{ color: "#E6004C" }} />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">Follow Us</div>
                      <div className="text-slate-600">@thecircuitgymghana</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="font-heading text-2xl font-bold text-slate-800 mb-6">Ready to Register?</h3>
                <p className="text-slate-600 mb-6">
                  Contact us today to secure your child's spot in our next training session. We'll guide you through the
                  registration process and answer any questions you have.
                </p>
                <div className="space-y-4">
                  <Button
                    size="lg"
                    className="w-full text-white font-semibold transition-all duration-200 hover:scale-105 hover:opacity-90"
                    style={{ backgroundColor: "#004A99" }}
                    asChild
                  >
                    <a href="mailto:fitlifeconcept@gmail.com">Contact Us to Register</a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full bg-transparent hover:opacity-90"
                    style={{ borderColor: "#004A99", color: "#004A99" }}
                    asChild
                  >
                    <a href="mailto:fitlifeconcept@gmail.com">Learn More About Sponsorship</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="text-white shadow-lg border-0" style={{ backgroundColor: "#004A99" }}>
              <CardContent className="p-8 text-center">
                <h3 className="font-heading text-2xl font-bold mb-4">NKONSONKONSON</h3>
                <p className="mb-4" style={{ color: "#e0f2fe" }}>
                  In unity lies strength!
                </p>
                <p className="text-sm" style={{ color: "#b3e5fc" }}>
                  Let's build a generation of smart, strong, and socially-minded athletes together!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="text-white font-semibold px-8 py-4 text-lg transition-all duration-200 hover:scale-105 hover:opacity-90"
            style={{ backgroundColor: "#004A99" }}
            asChild
          >
            <a href="mailto:fitlifeconcept@gmail.com">Contact Us Now</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
