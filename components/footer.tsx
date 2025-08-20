import { Instagram, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading text-2xl font-bold mb-4">
              FitLife Concepts Ltd
            </h3>
            <p className="text-slate-300 mb-4">
              Ghana's first functional fitness studio, now bringing flag
              football to young athletes across Accra.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-slate-700 p-2 rounded-full hover:bg-emerald-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="tel:0558233373"
                className="bg-slate-700 p-2 rounded-full hover:bg-emerald-600 transition-colors"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href="mailto:fitlifeconcept@gmail.com"
                className="bg-slate-700 p-2 rounded-full hover:bg-emerald-600 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a
                  href="#about"
                  className="hover:text-emerald-400 transition-colors"
                >
                  About Flag Football
                </a>
              </li>
              <li>
                <a
                  href="#program"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Program Highlights
                </a>
              </li>
              <li>
                <a
                  href="#coaches"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Our Coaches
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-emerald-400 transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">
              Contact Info
            </h4>
            <div className="space-y-2 text-slate-300">
              <ul className="text-white">
                <li> Dzorwulu / Ghana Gas,</li>
                <li> Labadi / MacDaniel park</li>
              </ul>
              <p>055 823 3373 / 020 088 9588</p>
              <p>fitlifeconcept@gmail.com</p>
              <p style={{ color: "#E6004C" }} className="flex gap-2">
                Training: Dzorwulu: Tue & Thu, Labadi: Wed
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © 2025 FitLife Concepts Ltd. All rights reserved. | Proudly designed
            by SCYNETT.
          </p>
        </div>
      </div>
    </footer>
  );
}
