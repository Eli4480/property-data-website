import { motion } from "framer-motion";
import { Database, ShieldCheck, Globe, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LeadGenSite() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO */}
      <section className="bg-gradient-to-br from-teal-700 to-cyan-800 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Nationwide Property Data Intelligence for Service Providers
            </h1>
            <p className="text-lg opacity-90 mb-8">
              We provide comprehensive, verified property and homeowner data for service providers across all industries. Ownership details, property attributes, and actionable insights — delivered nationwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-yellow-400 text-black font-semibold rounded-2xl px-8 py-6">
                Get Free Sample Data
              </Button>
              <a href="mailto:eli@mell-inv.com" className="inline-flex items-center justify-center rounded-2xl border border-white px-8 py-6 font-semibold hover:bg-white hover:text-teal-800 transition">
                Book via Email
              </a>
              <a href="sms:+13236755644" className="inline-flex items-center justify-center rounded-2xl border border-white px-8 py-6 font-semibold hover:bg-white hover:text-teal-800 transition">
                Text to Schedule Call
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="hidden md:block">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" alt="Home service leads" className="rounded-3xl shadow-2xl" />
          </motion.div>
        </div>
      </section>

      {/* TRUST ICONS */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[{icon: Database, text:"Verified Property Data"},{icon: ShieldCheck, text:"No Contracts"},{icon: CheckCircle, text:"Ownership & Property Insights"},{icon: Globe, text:"Nationwide Coverage"}].map((item, i) => (
          <Card key={i} className="rounded-2xl shadow-sm">
            <CardContent className="p-6 flex items-center gap-4">
              <item.icon className="w-8 h-8 text-teal-700" />
              <p className="font-medium">{item.text}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* WHO WE SERVE */}
      <section className="bg-slate-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Who We Serve</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {["Home Services & Contractors","Mortgage & Lending Companies","Real Estate Investors","Insurance Providers","Solar & Energy Companies","Property Management Firms"].map((industry, i) => (
              <Card key={i} className="rounded-2xl shadow-sm">
                <CardContent className="p-6 text-center">
                  <p className="font-semibold text-lg">{industry}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Property & Ownership Identification","We Verify & Enrich Property Data","You Market, Contact & Close"].map((step, i) => (
              <Card key={i} className="rounded-2xl shadow-md">
                <CardContent className="p-8">
                  <h3 className="font-semibold text-xl mb-3">{i + 1}. {step}</h3>
                  <p className="text-slate-600">Data includes owner name, mailing address, phone, email (when available), property type, equity indicators, and location details.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-cyan-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Flexible Property Data Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="rounded-2xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-2">Bulk Property Data</h3>
                <p className="text-4xl font-bold text-teal-700">$0.30</p>
                <p className="mt-2 text-slate-600">per data record</p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-2">Residential Property Records</h3>
                <p className="text-4xl font-bold text-teal-700">$25–$60</p>
                <p className="mt-2 text-slate-600">per enriched record</p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-2">Commercial & Residential Data</h3>
                <p className="text-4xl font-bold text-teal-700">$20–$45</p>
                <p className="mt-2 text-slate-600">per enriched record</p>
              </CardContent>
            </Card>
          </div>
          <p className="mt-8 font-medium">Free sample property records provided to test data quality. Bulk pricing available for high-volume buyers.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-700 text-white py-24 text-center">
        <p className="mb-4 opacity-90">To book appointments or request custom data builds, email us directly at <a href="mailto:eli@mell-inv.com" className="underline font-semibold">eli@mell-inv.com</a> or text <a href="sms:+13236755644" className="underline font-semibold">(323) 675-5644</a> to schedule a call.</p>
        <h2 className="text-4xl font-bold mb-6">Claim Your Free Sample Data</h2>
        <p className="mb-8 opacity-90">No contracts. No minimums. Just accurate, actionable property intelligence.</p>
        <Button size="lg" className="bg-yellow-400 text-black font-semibold rounded-2xl px-10 py-6">
          Get Started Now
        </Button>
      </section>

      <footer className="text-center text-sm text-slate-500 py-10">
        © 2026 Nationwide Property Data Services
      </footer>
    </div>
  );
}
