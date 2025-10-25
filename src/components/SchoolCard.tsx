import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

interface SchoolCardProps {
  title: string;
  description: string;
  programCount: number;
  studentCount: string;
  icon: React.ReactNode;
  link: string;
  color: string;
}

const SchoolCard = ({ title, description, programCount, studentCount, icon, link, color }: SchoolCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:border-primary/20">
      <CardHeader>
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center mb-4`}>
          {icon}
        </div>
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-6 line-clamp-3">
          {description}
        </p>
        
        <div className="flex items-center justify-between mb-6 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <BookOpen className="w-4 h-4" />
            <span>{programCount} Programs</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{studentCount} Students</span>
          </div>
        </div>

        <Link to={link}>
          <Button className="w-full group/btn">
            Explore Programs
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default SchoolCard;