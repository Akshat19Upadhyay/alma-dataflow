import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Calendar, 
  Briefcase, 
  MessageCircle, 
  TrendingUp, 
  Star,
  ArrowRight,
  UserCheck,
  MapPin
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-alumni.jpg";

const Home = () => {
  const stats = [
    { label: "Active Alumni", value: "12,500+", icon: Users },
    { label: "Success Stories", value: "8,200+", icon: Star },
    { label: "Job Placements", value: "3,400+", icon: Briefcase },
    { label: "Mentorship Matches", value: "2,100+", icon: UserCheck },
  ];

  const recentEvents = [
    {
      title: "Annual Alumni Gala 2024",
      date: "Dec 15, 2024",
      location: "Grand Ballroom",
      attendees: 450,
    },
    {
      title: "Tech Career Workshop",
      date: "Nov 28, 2024", 
      location: "Innovation Center",
      attendees: 120,
    },
    {
      title: "Networking Mixer",
      date: "Nov 22, 2024",
      location: "Alumni Lounge",
      attendees: 85,
    },
  ];

  const featuredAlumni = [
    {
      name: "Sarah Chen",
      role: "Senior Product Manager",
      company: "Google",
      batch: "2018",
      achievement: "Led product launch reaching 10M+ users"
    },
    {
      name: "Michael Rodriguez",
      role: "Startup Founder",
      company: "TechFlow Inc.",
      batch: "2016",
      achievement: "Raised $50M Series B funding"
    },
    {
      name: "Dr. Priya Patel",
      role: "Research Scientist", 
      company: "MIT",
      batch: "2019",
      achievement: "Published breakthrough AI research"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Connect. <span className="text-accent">Engage</span>. Grow.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Join our thriving community of alumni, students, and innovators. 
            Build meaningful connections and advance your career together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Join the Community
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
              Explore Directory
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Alumni */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Celebrating our alumni who are making a difference in their fields and communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredAlumni.map((alumni) => (
              <Card key={alumni.name} className="hover:shadow-card-hover transition-smooth">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{alumni.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{alumni.role}</p>
                      <p className="text-sm text-primary font-medium">{alumni.company}</p>
                    </div>
                    <Badge variant="secondary">'{alumni.batch}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground italic">
                    "{alumni.achievement}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/directory">
                View All Alumni
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Events */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Upcoming Events
              </h2>
              <p className="text-lg text-muted-foreground">
                Join us for networking, learning, and celebration opportunities.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/events">View All Events</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentEvents.map((event) => (
              <Card key={event.title} className="hover:shadow-card-hover transition-smooth">
                <CardHeader>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      {event.attendees} attending
                    </div>
                  </div>
                  <Button size="sm" className="w-full mt-4">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Connect with Your Alumni Community?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Join thousands of alumni who are already networking, mentoring, and growing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Create Your Profile
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Browse Directory
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;