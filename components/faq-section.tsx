"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "What age groups can participate?",
      answer:
        "Our flag football program is designed for boys and girls ages 7-12. We group kids by age and skill level to ensure everyone has a great experience.",
    },
    {
      question: "Is flag football safe for my child?",
      answer:
        "Flag football is a non-contact sport where players pull flags instead of tackling. This significantly reduces the risk of injury while still providing all the excitement and skill development of traditional football.",
    },
    {
      question: "What does the sponsorship program mean?",
      answer:
        "When you register your child as a paid member, you're also helping sponsor a child from an underserved background. All kids train and play together as equals, creating a truly inclusive environment.",
    },
    {
      question: "What equipment does my child need?",
      answer:
        "We provide all necessary equipment including flags, footballs, and cones. Your child just needs to wear comfortable athletic clothing, cleats, and bring a water bottle.",
    },
    {
      question: "How experienced are the coaches?",
      answer:
        "Our head coach Neil Sintim-Aboagye is a former professional player in the German Football League with extensive youth coaching experience. He leads a team of passionate local assistant coaches.",
    },
    {
      question: "Can I watch the training sessions?",
      answer:
        "Yes! Parents are welcome to watch training sessions. We encourage family involvement and love having supportive spectators cheering on all the kids.",
    },
    {
      question: "What if my child has never played football before?",
      answer:
        "Perfect! Our program is designed for beginners. We start with basic skills and gradually build up to more advanced techniques. Every child progresses at their own pace.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about joining our flag football program
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-slate-50 rounded-lg px-6 border-0">
                <AccordionTrigger
                  className="font-heading text-left text-lg font-semibold text-slate-800 transition-colors hover:text-slate-600"
                  style={{ "--hover-color": "#004A99" } as React.CSSProperties}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pt-2">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="text-white font-semibold px-8 py-4 text-lg transition-all duration-200 hover:scale-105 hover:opacity-90"
            style={{ backgroundColor: "#004A99" }}
            asChild
          >
            <a href="mailto:fitlifeconcept@gmail.com">Get Your Questions Answered</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
