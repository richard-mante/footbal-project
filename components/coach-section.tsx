import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Users, Heart } from "lucide-react"

export function CoachSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-slate-800 mb-4">Meet Our Coaches</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Led by experienced professionals who are passionate about developing young athletes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div>
              <h3 className="font-heading text-3xl font-bold text-slate-800 mb-4">Neil Sintim-Aboagye</h3>
              <p className="text-lg font-semibold mb-4" style={{ color: "#E6004C" }}>
                Head Coach
              </p>
              <p className="text-slate-600 leading-relaxed">
                Former American Football player in the German Football League (GFL) and experienced youth coach. Neil
                leads our passionate team of local assistant coaches who are committed to helping kids grow into
                confident, skilled athletes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-slate-50 rounded-xl">
                <Award className="h-8 w-8 mx-auto mb-2" style={{ color: "#E6004C" }} />
                <div className="text-sm font-semibold text-slate-800">GFL Experience</div>
                <div className="text-xs text-slate-600">Professional Player</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-xl">
                <Users className="h-8 w-8 mx-auto mb-2" style={{ color: "#E6004C" }} />
                <div className="text-sm font-semibold text-slate-800">Youth Coach</div>
                <div className="text-xs text-slate-600">Experienced Mentor</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-xl">
                <Heart className="h-8 w-8 mx-auto mb-2" style={{ color: "#E6004C" }} />
                <div className="text-sm font-semibold text-slate-800">Community</div>
                <div className="text-xs text-slate-600">Local Leader</div>
              </div>
            </div>
          </div>

          <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden shadow-xl">
            <img
              src="/images/coach.jpg"
              alt="Neil Sintim-Aboagye - Head Coach"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <Card className="border-primary/20" style={{ backgroundColor: "#f8fafc" }}>
          <CardContent className="p-8 text-center">
            <h4 className="font-heading text-2xl font-bold text-slate-800 mb-4">Who We Are</h4>
            <p className="text-slate-600 leading-relaxed max-w-4xl mx-auto">
              FitLife Concepts Ltd (FLC) launched Ghana's first functional fitness studio, The Circuit Gym, in 2017. Our
              FitKids Program introduces young athletes to dynamic sports like Flag Football in a supportive, structured
              setting. FLC coaches proudly support Elite Sport United senior team — a committed partner in growing
              American Flag Football throughout Ghana.
            </p>
          </CardContent>
        </Card>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="text-white font-semibold px-8 py-4 text-lg transition-all duration-200 hover:scale-105 hover:opacity-90"
            style={{ backgroundColor: "#004A99" }}
            asChild
          >
            <a href="https://forms.gle/78Nk66tnwFMMXVFr5" target="_blank" rel="noopener noreferrer">
              Meet Our Coaching Team
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
