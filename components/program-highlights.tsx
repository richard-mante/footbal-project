import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Users, Star } from "lucide-react"

export function ProgramHighlights() {
  return (
    <section className="py-20" style={{ backgroundColor: "#f8fafc" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-slate-800 mb-4">Our Program Highlights</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Structured training sessions designed to build skills, confidence, and lasting friendships
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-6">
              <Calendar className="h-12 w-12 mx-auto mb-4" style={{ color: "#E6004C" }} />
              <h3 className="font-heading text-lg font-semibold text-slate-800 mb-2">Weekly Training</h3>
              <p className="text-slate-600 text-sm">Every Tuesday, Wednesday and Friday</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-6">
              <MapPin className="h-12 w-12 mx-auto mb-4" style={{ color: "#E6004C" }} />
              <h3 className="font-heading text-lg font-semibold text-slate-800 mb-2">Prime Locations</h3>
              <p className="text-slate-600 text-sm">La Townpark, Labone/Labadi, Dzorwulu</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-6">
              <Users className="h-12 w-12 mx-auto mb-4" style={{ color: "#E6004C" }} />
              <h3 className="font-heading text-lg font-semibold text-slate-800 mb-2">Inclusive Teams</h3>
              <p className="text-slate-600 text-sm">Paid & sponsored kids together</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-6">
              <Star className="h-12 w-12 mx-auto mb-4" style={{ color: "#E6004C" }} />
              <h3 className="font-heading text-lg font-semibold text-slate-800 mb-2">Expert Coaching</h3>
              <p className="text-slate-600 text-sm">Professional & local coaches</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="font-heading text-3xl font-bold text-slate-800 mb-4">
              Our Team Structure: Inclusive & Impactful
            </h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We believe in sports for all. Our program brings together paid member kids and sponsored community kids
              from underserved backgrounds.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center p-6 bg-slate-50 rounded-2xl">
              <div
                className="text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
                style={{ backgroundColor: "#004A99" }}
              >
                P
              </div>
              <h4 className="font-heading text-xl font-semibold text-slate-800 mb-2">Paid Member Kids</h4>
              <p className="text-slate-600">Families fund their child's participation and help sponsor others</p>
            </div>

            <div className="text-center p-6 bg-slate-50 rounded-2xl">
              <div
                className="text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
                style={{ backgroundColor: "#004A99" }}
              >
                S
              </div>
              <h4 className="font-heading text-xl font-semibold text-slate-800 mb-2">Sponsored Community Kids</h4>
              <p className="text-slate-600">From underserved backgrounds, participation made possible by memberships</p>
            </div>
          </div>

          <div className="text-center mt-8 p-6 bg-slate-50 rounded-2xl">
            <p className="text-lg font-medium text-slate-800">
              Every child learns, trains, and plays side by side, regardless of their background.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
