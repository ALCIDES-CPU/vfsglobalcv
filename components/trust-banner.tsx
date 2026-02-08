import { ShieldCheck, Globe, Clock, Headphones } from "lucide-react"

const stats = [
  { icon: ShieldCheck, value: "100%", label: "Secure Process" },
  { icon: Globe, value: "50+", label: "Countries Served" },
  { icon: Clock, value: "24hr", label: "Response Time" },
  { icon: Headphones, value: "24/7", label: "Support Available" },
]

export function TrustBanner() {
  return (
    <section className="border-y border-border/60 bg-card py-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <stat.icon className="mb-3 h-8 w-8 text-primary" />
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
