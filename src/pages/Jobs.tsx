import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign, 
  Building2, 
  Search,
  Filter,
  ExternalLink,
  Bookmark,
  Users
} from "lucide-react";

const Jobs = () => {
  const jobs = [
    {
      id: 1,
      title: "Senior Product Manager",
      company: "Google",
      location: "San Francisco, CA",
      type: "Full-time",
      level: "Senior",
      salary: "$180k - $250k",
      postedBy: "Sarah Chen '18",
      postedDate: "2 days ago",
      description: "Lead product strategy and development for consumer-facing applications with millions of users.",
      skills: ["Product Strategy", "Data Analysis", "Leadership", "Agile"],
      remote: false,
      featured: true
    },
    {
      id: 2,
      title: "Software Engineer - Frontend",
      company: "Microsoft",
      location: "Seattle, WA", 
      type: "Full-time",
      level: "Mid-level",
      salary: "$130k - $180k",
      postedBy: "James Wilson '20",
      postedDate: "1 week ago",
      description: "Build and maintain user interfaces for Microsoft Teams and Office applications.",
      skills: ["React", "TypeScript", "Azure", "JavaScript"],
      remote: true,
      featured: false
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "Netflix",
      location: "Los Gatos, CA",
      type: "Full-time", 
      level: "Mid-level",
      salary: "$150k - $200k",
      postedBy: "Alex Johnson '19",
      postedDate: "3 days ago",
      description: "Apply machine learning to improve content recommendation algorithms and user experience.",
      skills: ["Python", "Machine Learning", "Statistics", "SQL"],
      remote: false,
      featured: true
    },
    {
      id: 4,
      title: "Marketing Manager",
      company: "Adobe",
      location: "San Jose, CA",
      type: "Full-time",
      level: "Mid-level", 
      salary: "$110k - $140k",
      postedBy: "Lisa Zhang '17",
      postedDate: "5 days ago",
      description: "Drive marketing campaigns for Creative Cloud products and lead cross-functional initiatives.",
      skills: ["Digital Marketing", "Analytics", "Campaign Management", "Adobe Creative Suite"],
      remote: true,
      featured: false
    },
    {
      id: 5,
      title: "Investment Banking Analyst",
      company: "Goldman Sachs",
      location: "New York, NY",
      type: "Full-time",
      level: "Entry-level",
      salary: "$150k - $200k",
      postedBy: "David Kumar '15",
      postedDate: "1 week ago", 
      description: "Support M&A transactions and financial modeling for Fortune 500 clients.",
      skills: ["Financial Modeling", "Excel", "PowerPoint", "Valuation"],
      remote: false,
      featured: false
    },
    {
      id: 6,
      title: "UX Designer",
      company: "Airbnb",
      location: "San Francisco, CA",
      type: "Full-time",
      level: "Mid-level",
      salary: "$120k - $160k", 
      postedBy: "Emma Thompson '21",
      postedDate: "4 days ago",
      description: "Design intuitive user experiences for host and guest-facing products across web and mobile.",
      skills: ["User Research", "Prototyping", "Figma", "Design Systems"],
      remote: true,
      featured: true
    }
  ];

  const jobTypes = ["All", "Full-time", "Part-time", "Contract", "Internship"];
  const jobLevels = ["All", "Entry-level", "Mid-level", "Senior", "Executive"];
  const locations = ["All", "Remote", "San Francisco, CA", "New York, NY", "Seattle, WA", "Austin, TX"];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Job Board
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover career opportunities shared by our alumni community
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card rounded-lg shadow-card p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search jobs, companies, skills..."
                className="pl-10"
              />
            </div>

            <Select defaultValue="All">
              <SelectTrigger>
                <Briefcase className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Job Type" />
              </SelectTrigger>
              <SelectContent>
                {jobTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select defaultValue="All">
              <SelectTrigger>
                <Users className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Experience Level" />
              </SelectTrigger>
              <SelectContent>
                {jobLevels.map((level) => (
                  <SelectItem key={level} value={level}>
                    {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select defaultValue="All">
              <SelectTrigger>
                <MapPin className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <Badge variant="secondary">
              {jobs.length} jobs available
            </Badge>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
              <Button size="sm">
                Post a Job
              </Button>
            </div>
          </div>
        </div>

        {/* Featured Jobs */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Featured Opportunities</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {jobs.filter(job => job.featured).map((job) => (
              <Card key={job.id} className="hover:shadow-card-hover transition-smooth border-l-4 border-l-accent">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{job.type}</Badge>
                        <Badge variant="outline">{job.level}</Badge>
                        {job.remote && <Badge className="bg-success text-success-foreground">Remote</Badge>}
                      </div>
                      <CardTitle className="text-xl mb-1">{job.title}</CardTitle>
                      <div className="flex items-center text-muted-foreground mb-2">
                        <Building2 className="w-4 h-4 mr-1" />
                        <span className="font-medium">{job.company}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Bookmark className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {job.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="w-4 h-4 mr-2" />
                      {job.salary}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {job.postedDate}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      {job.postedBy}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {job.skills.slice(0, 4).map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1">
                      Apply Now
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                    <Button variant="outline">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Jobs */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">All Positions</h2>
          <div className="space-y-4">
            {jobs.filter(job => !job.featured).map((job) => (
              <Card key={job.id} className="hover:shadow-card-hover transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">{job.type}</Badge>
                        <Badge variant="outline">{job.level}</Badge>
                        {job.remote && <Badge className="bg-success text-success-foreground">Remote</Badge>}
                      </div>
                      
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {job.title}
                      </h3>
                      
                      <div className="flex items-center text-muted-foreground mb-2">
                        <Building2 className="w-4 h-4 mr-1" />
                        <span className="font-medium mr-4">{job.company}</span>
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="mr-4">{job.location}</span>
                        <DollarSign className="w-4 h-4 mr-1" />
                        <span>{job.salary}</span>
                      </div>
                      
                      <p className="text-muted-foreground mb-3 line-clamp-1">
                        {job.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {job.skills.slice(0, 3).map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.postedDate} • Posted by {job.postedBy}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2 ml-6">
                      <Button variant="ghost" size="sm">
                        <Bookmark className="w-4 h-4" />
                      </Button>
                      <Button size="sm">
                        Apply
                      </Button>
                    </div>
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

export default Jobs;