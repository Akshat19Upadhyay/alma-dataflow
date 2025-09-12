import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, MapPin, Briefcase, Calendar } from "lucide-react";
import AlumniCard from "@/components/AlumniCard";

const Directory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedIndustry, setSelectedIndustry] = useState("all");

  // Mock alumni data
  const alumni = [
    {
      name: "Sarah Chen",
      batchYear: "2018",
      profession: "Senior Product Manager",
      company: "Google",
      location: "San Francisco, CA",
      skills: ["Product Strategy", "Data Analysis", "Leadership", "Agile", "UX Design"]
    },
    {
      name: "Michael Rodriguez",
      batchYear: "2016", 
      profession: "Startup Founder",
      company: "TechFlow Inc.",
      location: "Austin, TX",
      skills: ["Entrepreneurship", "Fintech", "Blockchain", "Team Building"]
    },
    {
      name: "Dr. Priya Patel",
      batchYear: "2019",
      profession: "Research Scientist",
      company: "MIT Labs",
      location: "Boston, MA", 
      skills: ["AI/ML", "Research", "Python", "Deep Learning", "Academia"]
    },
    {
      name: "James Wilson",
      batchYear: "2020",
      profession: "Software Engineer",
      company: "Microsoft",
      location: "Seattle, WA",
      skills: ["React", "TypeScript", "Cloud Computing", "DevOps"]
    },
    {
      name: "Lisa Zhang",
      batchYear: "2017",
      profession: "Marketing Director", 
      company: "Adobe",
      location: "San Jose, CA",
      skills: ["Digital Marketing", "Brand Strategy", "Content Creation", "Analytics"]
    },
    {
      name: "David Kumar",
      batchYear: "2015",
      profession: "Investment Banker",
      company: "Goldman Sachs",
      location: "New York, NY",
      skills: ["Financial Analysis", "M&A", "Risk Management", "Leadership"]
    },
    {
      name: "Emma Thompson",
      batchYear: "2021",
      profession: "UX Designer",
      company: "Airbnb",
      location: "San Francisco, CA", 
      skills: ["User Research", "Prototyping", "Figma", "Design Systems"]
    },
    {
      name: "Alex Johnson",
      batchYear: "2019",
      profession: "Data Scientist",
      company: "Netflix",
      location: "Los Gatos, CA",
      skills: ["Machine Learning", "Statistics", "Python", "SQL", "Visualization"]
    }
  ];

  const batches = ["all", "2021", "2020", "2019", "2018", "2017", "2016", "2015"];
  const locations = ["all", "San Francisco, CA", "New York, NY", "Seattle, WA", "Austin, TX", "Boston, MA"];
  const industries = ["all", "Technology", "Finance", "Healthcare", "Education", "Marketing"];

  const filteredAlumni = alumni.filter((person) => {
    const matchesSearch = person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         person.profession.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         person.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBatch = selectedBatch === "all" || person.batchYear === selectedBatch;
    const matchesLocation = selectedLocation === "all" || person.location === selectedLocation;
    // Note: Industry filtering would need additional data structure in real implementation
    
    return matchesSearch && matchesBatch && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Alumni Directory
          </h1>
          <p className="text-lg text-muted-foreground">
            Connect with {alumni.length.toLocaleString()}+ alumni from our community
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card rounded-lg shadow-card p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by name, company, or role..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={selectedBatch} onValueChange={setSelectedBatch}>
              <SelectTrigger>
                <Calendar className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Graduation Year" />
              </SelectTrigger>
              <SelectContent>
                {batches.map((batch) => (
                  <SelectItem key={batch} value={batch}>
                    {batch === "all" ? "All Years" : `Class of ${batch}`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger>
                <MapPin className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location === "all" ? "All Locations" : location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
              <SelectTrigger>
                <Briefcase className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Industry" />
              </SelectTrigger>
              <SelectContent>
                {industries.map((industry) => (
                  <SelectItem key={industry} value={industry}>
                    {industry === "all" ? "All Industries" : industry}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Badge variant="secondary">
                {filteredAlumni.length} alumni found
              </Badge>
              {(searchTerm || selectedBatch !== "all" || selectedLocation !== "all" || selectedIndustry !== "all") && (
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedBatch("all");
                    setSelectedLocation("all");
                    setSelectedIndustry("all");
                  }}
                >
                  Clear filters
                </Button>
              )}
            </div>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Advanced Filters
            </Button>
          </div>
        </div>

        {/* Alumni Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAlumni.map((person, index) => (
            <AlumniCard
              key={index}
              name={person.name}
              batchYear={person.batchYear}
              profession={person.profession}
              company={person.company}
              location={person.location}
              skills={person.skills}
            />
          ))}
        </div>

        {filteredAlumni.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
              <Search className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              No alumni found
            </h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria or filters to find alumni.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Directory;