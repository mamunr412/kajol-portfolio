import { 
  Zap, 
  Shield, 
  HeartHandshake, 
  Lightbulb, 
  Clock, 
  Award 
} from "lucide-react"

const reasons = [
  {
    icon: Zap,
    title: "Proven Results",
    description: "Track record of delivering measurable growth for podcasts across various niches.",
  },
  {
    icon: Shield,
    title: "Data-Driven Approach",
    description: "Every strategy is backed by analytics and industry best practices.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Service",
    description: "Tailored solutions that align with your unique podcast goals and brand.",
  },
  {
    icon: Lightbulb,
    title: "Industry Expertise",
    description: "Deep understanding of podcast platforms, algorithms, and audience behavior.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Quick response times and efficient project delivery without compromising quality.",
  },
  {
    icon: Award,
    title: "5-Star Reputation",
    description: "Consistently rated 5 stars by clients for quality and professionalism.",
  },
]

export function WhyChooseMe() {
  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Me</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-6 text-balance">
              The Right Partner for Your Podcast Growth
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Choosing the right marketing partner can make all the difference in your 
              podcast&apos;s success. Here&apos;s why podcasters trust me with their growth.
            </p>

            <div className="space-y-6">
              {reasons.slice(0, 3).map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{reason.title}</h3>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* More Reasons */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="space-y-6">
              {reasons.slice(3).map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{reason.title}</h3>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-primary/20 border-2 border-card flex items-center justify-center text-xs font-semibold text-primary"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-foreground">50+ Happy Clients</p>
                  <p className="text-sm text-muted-foreground">Join our success stories</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
