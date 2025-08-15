import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Heart, Trophy, Shield } from "lucide-react"

export function AboutSection() {
  const benefits = [
    {
      icon: Heart,
      title: "Confidence",
      description: "Kids grow self-esteem on and off the field",
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "Build communication and cooperation skills",
    },
    {
      icon: Trophy,
      title: "Strategic Thinking",
      description: "Learn to think and act fast",
    },
    {
      icon: Shield,
      title: "Safety",
      description: "Non-contact sport with lower injury risk",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-slate-800 mb-4">Why FitLife Concepts?</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            It's more than just a sport — it's a life lesson. We believe in sports for all, bringing together kids from
            all backgrounds to learn, train, and play side by side.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-slate-800 mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-slate-50 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-heading text-3xl font-bold text-slate-800 mb-6">What is Flag Football?</h3>
              <div className="space-y-4 text-slate-600">
                <p>
                  Flag Football is a non-contact version of American Football where players pull flags instead of
                  tackling. It's fast-paced, strategic, and fun — perfect for kids who want to move, play, and learn
                  teamwork.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>5 players per team
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    No tackling - only flag pulling
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Scoring by running, throwing, or kicking the ball
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Safe and beginner friendly, for boys & girls
                  </li>
                </ul>
              </div>
            </div>
            <div className="aspect-video bg-slate-100 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/flag-football-kids.jpg"
                alt="Kids playing flag football on the field"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
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
