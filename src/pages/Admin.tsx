import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Calendar, 
  Briefcase, 
  MessageCircle, 
  TrendingUp, 
  Download,
  Settings,
  UserPlus,
  Mail,
  BarChart3,
  Activity
} from "lucide-react";

const Admin = () => {
  const stats = [
    {
      title: "Total Alumni",
      value: "12,487",
      change: "+124 this month",
      icon: Users,
      color: "text-primary"
    },
    {
      title: "Active Users",
      value: "8,234",
      change: "+5.2% from last month",
      icon: Activity,
      color: "text-success"
    },
    {
      title: "Events This Year",
      value: "47",
      change: "+12 from last year",
      icon: Calendar,
      color: "text-accent"
    },
    {
      title: "Job Postings",
      value: "156",
      change: "+23 this month",
      icon: Briefcase,
      color: "text-primary"
    }
  ];

  const recentActivities = [
    {
      type: "User Registration",
      description: "Emma Thompson (Class of 2021) joined the platform",
      timestamp: "2 hours ago",
      icon: UserPlus
    },
    {
      type: "Event Creation",
      description: "Tech Career Workshop Series event was created",
      timestamp: "4 hours ago", 
      icon: Calendar
    },
    {
      type: "Job Posting",
      description: "Senior Product Manager role posted by Sarah Chen",
      timestamp: "6 hours ago",
      icon: Briefcase
    },
    {
      type: "Forum Activity", 
      description: "New discussion thread in Entrepreneurship forum",
      timestamp: "8 hours ago",
      icon: MessageCircle
    }
  ];

  const engagementData = [
    { metric: "Profile Completion Rate", value: "87%", trend: "+3%" },
    { metric: "Event Participation", value: "64%", trend: "+8%" },
    { metric: "Directory Search Usage", value: "92%", trend: "+12%" },
    { metric: "Mentorship Matching", value: "78%", trend: "+5%" }
  ];

  const topAlumni = [
    { name: "Sarah Chen", connections: 234, events: 12, posts: 28 },
    { name: "Michael Rodriguez", connections: 198, events: 8, posts: 15 },
    { name: "Dr. Priya Patel", connections: 167, events: 15, posts: 22 },
    { name: "James Wilson", connections: 145, events: 6, posts: 18 },
    { name: "Lisa Zhang", connections: 132, events: 10, posts: 14 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Admin Dashboard
            </h1>
            <p className="text-lg text-muted-foreground">
              Alumni platform analytics and management overview
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export Data
            </Button>
            <Button>
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title} className="hover:shadow-card-hover transition-smooth">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <p className="text-xs text-success">
                    {stat.change}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Engagement Metrics */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                Engagement Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {engagementData.map((item) => (
                  <div key={item.metric} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">{item.metric}</p>
                      <p className="text-sm text-muted-foreground">Current performance</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{item.value}</div>
                      <div className="text-sm text-success">{item.trend}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="w-5 h-5 mr-2" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => {
                  const Icon = activity.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground">
                          {activity.type}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                          {activity.description}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {activity.timestamp}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top Alumni */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              Most Active Alumni
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Name</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Connections</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Events Attended</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Forum Posts</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {topAlumni.map((alumni, index) => (
                    <tr key={alumni.name} className="border-b border-border hover:bg-muted/50">
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-sm font-medium text-primary">
                              {alumni.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <span className="font-medium text-foreground">{alumni.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-muted-foreground">{alumni.connections}</td>
                      <td className="py-3 px-4 text-muted-foreground">{alumni.events}</td>
                      <td className="py-3 px-4 text-muted-foreground">{alumni.posts}</td>
                      <td className="py-3 px-4">
                        <Button size="sm" variant="outline">
                          <Mail className="w-4 h-4 mr-2" />
                          Contact
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;