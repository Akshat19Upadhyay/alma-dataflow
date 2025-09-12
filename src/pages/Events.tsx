import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  Star, 
  ExternalLink,
  Filter,
  Search
} from "lucide-react";
import { Input } from "@/components/ui/input";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Annual Alumni Gala 2024",
      date: "December 15, 2024",
      time: "6:00 PM - 11:00 PM",
      location: "Grand Ballroom, Marriott Downtown",
      description: "Join us for an elegant evening of celebration, networking, and recognition of outstanding alumni achievements.",
      attendees: 450,
      maxAttendees: 500,
      category: "Networking",
      featured: true,
      price: "$125",
      image: "/api/placeholder/400/200"
    },
    {
      id: 2,
      title: "Tech Career Workshop Series",
      date: "November 28, 2024",
      time: "2:00 PM - 5:00 PM", 
      location: "Innovation Center, Campus",
      description: "Interactive workshops covering AI, cloud computing, and emerging technologies with industry leaders.",
      attendees: 120,
      maxAttendees: 150,
      category: "Professional Development",
      featured: false,
      price: "Free",
      image: "/api/placeholder/400/200"
    },
    {
      id: 3,
      title: "Young Alumni Networking Mixer",
      date: "November 22, 2024",
      time: "7:00 PM - 10:00 PM",
      location: "Alumni Lounge, Student Center", 
      description: "Casual networking event for alumni graduated within the last 10 years. Great food, drinks, and connections!",
      attendees: 85,
      maxAttendees: 100,
      category: "Networking",
      featured: false,
      price: "$25",
      image: "/api/placeholder/400/200"
    },
    {
      id: 4,
      title: "Entrepreneurship Panel & Pitch Night",
      date: "December 5, 2024",
      time: "6:30 PM - 9:00 PM",
      location: "Business School Auditorium",
      description: "Hear from successful alumni entrepreneurs and watch student startups pitch to a panel of investors.",
      attendees: 200,
      maxAttendees: 250,
      category: "Entrepreneurship",
      featured: true,
      price: "Free",
      image: "/api/placeholder/400/200"
    },
    {
      id: 5,
      title: "Healthcare Alumni Reunion",
      date: "January 12, 2025",
      time: "12:00 PM - 4:00 PM",
      location: "Medical Center Conference Room",
      description: "Special reunion for healthcare professionals. CME credits available.",
      attendees: 65,
      maxAttendees: 80,
      category: "Reunion",
      featured: false,
      price: "$50",
      image: "/api/placeholder/400/200"
    },
    {
      id: 6,
      title: "Global Alumni Virtual Summit",
      date: "January 20, 2025",
      time: "9:00 AM - 4:00 PM EST",
      location: "Virtual Event",
      description: "Connect with alumni worldwide in this virtual summit featuring keynotes, breakout sessions, and networking.",
      attendees: 1200,
      maxAttendees: 2000,
      category: "Virtual",
      featured: true,
      price: "Free",
      image: "/api/placeholder/400/200"
    }
  ];

  const categories = ["All", "Networking", "Professional Development", "Entrepreneurship", "Reunion", "Virtual"];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Alumni Events
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover upcoming events, workshops, and networking opportunities in our community
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card rounded-lg shadow-card p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search events..."
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant={category === "All" ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Featured Events */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Featured Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.filter(event => event.featured).map((event) => (
              <Card key={event.id} className="hover:shadow-card-hover transition-smooth overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-primary to-accent"></div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{event.category}</Badge>
                        <Star className="w-4 h-4 text-accent" />
                      </div>
                      <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">{event.price}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      {event.attendees} / {event.maxAttendees} registered
                    </div>
                  </div>

                  <Button className="w-full">
                    Register Now
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Events */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">All Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.filter(event => !event.featured).map((event) => (
              <Card key={event.id} className="hover:shadow-card-hover transition-smooth">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline">{event.category}</Badge>
                    <div className="text-right">
                      <div className="font-bold text-primary">{event.price}</div>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="truncate">{event.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      {event.attendees} registered
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      Register
                    </Button>
                    <Button size="sm" variant="outline">
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;