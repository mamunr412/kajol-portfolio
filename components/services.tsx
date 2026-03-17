import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { 
  Mic, 
  TrendingUp, 
  Share2, 
  BarChart3, 
  MessageSquare, 
  Search,
  Globe,
  Megaphone
} from "lucide-react"

const services = [
  {
    icon: TrendingUp,
    title: "Podcast Growth Strategy",
    description: "Custom growth plans tailored to your podcast niche, target audience, and goals.",
  },
  {
    icon: Share2,
    title: "Social Media Promotion",
    description: "Strategic content creation and promotion across all major social platforms.",
  },
  {
    icon: Search,
    title: "Podcast SEO",
    description: "Optimize your podcast for discoverability on Apple, Spotify, and search engines.",
  },
  {
    icon: Megaphone,
    title: "Launch Campaigns",
    description: "Comprehensive launch strategies to maximize your podcast debut impact.",
  },
  {
    icon: MessageSquare,
    title: "Audience Engagement",
    description: "Build loyal listener communities with engagement strategies that convert.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Data-driven insights to track progress and optimize your growth strategy.",
  },
  {
    icon: Globe,
    title: "Cross-Promotion",
    description: "Connect with other podcasters for mutually beneficial promotion opportunities.",
  },
  {
    icon: Mic,
    title: "Content Consultation",
    description: "Expert advice on content structure, episode formats, and listener retention.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Services</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">
            Comprehensive Podcast Marketing Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to grow your podcast audience and build a thriving show.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
