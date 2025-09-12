import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Briefcase, Calendar, MessageCircle, UserPlus } from "lucide-react";

interface AlumniCardProps {
  name: string;
  batchYear: string;
  profession: string;
  company: string;
  location: string;
  imageUrl?: string;
  skills: string[];
}

const AlumniCard = ({ 
  name, 
  batchYear, 
  profession, 
  company, 
  location, 
  imageUrl, 
  skills 
}: AlumniCardProps) => {
  return (
    <Card className="group hover:shadow-card-hover transition-smooth cursor-pointer">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          {/* Avatar */}
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 overflow-hidden">
            {imageUrl ? (
              <img 
                src={imageUrl} 
                alt={name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-primary font-semibold text-lg">
                {name.split(' ').map(n => n[0]).join('')}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-smooth">
                  {name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Class of {batchYear}
                </p>
              </div>
              <Badge variant="secondary" className="ml-2">
                {batchYear}
              </Badge>
            </div>

            <div className="mt-2 space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <Briefcase className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="truncate">{profession} at {company}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>{location}</span>
              </div>
            </div>

            {/* Skills */}
            <div className="mt-3 flex flex-wrap gap-1">
              {skills.slice(0, 3).map((skill) => (
                <Badge key={skill} variant="outline" className="text-xs">
                  {skill}
                </Badge>
              ))}
              {skills.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{skills.length - 3} more
                </Badge>
              )}
            </div>

            {/* Actions */}
            <div className="mt-4 flex space-x-2">
              <Button size="sm" variant="outline" className="flex-1">
                <UserPlus className="w-4 h-4 mr-2" />
                Connect
              </Button>
              <Button size="sm" variant="ghost">
                <MessageCircle className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AlumniCard;