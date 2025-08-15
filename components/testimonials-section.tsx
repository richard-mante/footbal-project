"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Quote } from "lucide-react"
import { useState, useEffect } from "react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Akosua Mensah",
      role: "Parent",
      content:
        "My daughter has gained so much confidence since joining FitLife Concepts. She's learned teamwork and made wonderful friends from different backgrounds.",
      rating: 5,
    },
    {
      name: "Kwame, Age 10",
      role: "Player",
      content:
        "I love flag football! Coach Neil teaches us cool moves and we get to play with kids from all over Accra. It's the best part of my week!",
      rating: 5,
    },
    {
      name: "Sarah Osei",
      role: "Parent",
      content:
        "The inclusive approach is amazing. My son plays alongside sponsored kids and they're all treated equally. It's teaching him valuable life lessons.",
      rating: 5,
    },
    {
      name: "Emmanuel, Age 9",
      role: "Player",
      content:
        "Flag football is so fun! I'm getting faster and stronger, and I love being part of a team. NKONSONKONSON!",
      rating: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-slate-800 mb-4">What Our Community Says</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Hear from parents and kids who are part of our flag football family
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white shadow-xl border-0 overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center">
                <Quote className="h-12 w-12 mx-auto mb-6" style={{ color: "#E6004C" }} />

                <div className="mb-6">
                  <p className="text-xl text-slate-700 leading-relaxed mb-6">"{testimonials[currentIndex].content}"</p>

                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <div>
                    <div className="font-heading text-lg font-semibold text-slate-800">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-slate-800 font-medium" style={{ color: "#E6004C" }}>
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                        index === currentIndex ? "bg-[#E6004C]" : "bg-slate-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="text-white font-semibold px-8 py-4 text-lg transition-all duration-200 hover:scale-105 hover:opacity-90"
            style={{ backgroundColor: "#004A99" }}
            asChild
          >
            <a href="https://forms.gle/78Nk66tnwFMMXVFr5" target="_blank" rel="noopener noreferrer">
              Join Our Community
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
