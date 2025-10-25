import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Eye, Download, Loader2 } from "lucide-react";
import { format } from "date-fns";

interface Application {
  id: string;
  full_name: string;
  email_address: string;
  mobile_number: string;
  course: string;
  student_type: string;
  status: string;
  created_at: string;
  date_of_birth: string;
  id_number: string;
  gender: string;
  county: string;
  guardian_name: string;
  guardian_contact: string;
  allergies?: string;
  pre_existing_conditions?: string;
}

const AdminApplications = () => {
  const { toast } = useToast();
  const [applications, setApplications] = useState<Application[]>([]);
  const [filteredApplications, setFilteredApplications] = useState<Application[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    fetchApplications();
  }, []);

  useEffect(() => {
    filterApplications();
  }, [searchQuery, statusFilter, applications]);

  const fetchApplications = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from("applications")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setApplications(data || []);
    } catch (error: any) {
      console.error("Error fetching applications:", error);
      toast({
        title: "Error",
        description: "Failed to load applications",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const filterApplications = () => {
    let filtered = applications;

    // Filter by status
    if (statusFilter !== "all") {
      filtered = filtered.filter((app) => app.status === statusFilter);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (app) =>
          app.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          app.email_address.toLowerCase().includes(searchQuery.toLowerCase()) ||
          app.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
          app.mobile_number.includes(searchQuery)
      );
    }

    setFilteredApplications(filtered);
  };

  const updateStatus = async (applicationId: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from("applications")
        .update({ status: newStatus })
        .eq("id", applicationId);

      if (error) throw error;

      toast({
        title: "Status Updated",
        description: `Application status changed to ${newStatus}`,
      });

      fetchApplications();
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to update status",
        variant: "destructive",
      });
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, string> = {
      pending: "bg-yellow-100 text-yellow-800",
      under_review: "bg-blue-100 text-blue-800",
      accepted: "bg-green-100 text-green-800",
      rejected: "bg-red-100 text-red-800",
    };

    return (
      <Badge className={variants[status] || variants.pending}>
        {status.replace("_", " ").toUpperCase()}
      </Badge>
    );
  };

  const viewDetails = (application: Application) => {
    setSelectedApplication(application);
    setIsDialogOpen(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <SEOHead title="Admin Applications" robots="noindex, nofollow" canonical="/admin/applications" />
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-card-foreground mb-2">Applications Dashboard</h1>
          <p className="text-muted-foreground">
            Manage and review student applications
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card border border-border rounded-lg p-6 mb-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search by name, email, course..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="under_review">Under Review</SelectItem>
                <SelectItem value="accepted">Accepted</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={fetchApplications} variant="outline">
              Refresh
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <div className="bg-card border border-border rounded-lg p-4">
            <div className="text-2xl font-bold text-primary">{applications.length}</div>
            <div className="text-sm text-muted-foreground">Total Applications</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <div className="text-2xl font-bold text-yellow-600">
              {applications.filter((a) => a.status === "pending").length}
            </div>
            <div className="text-sm text-muted-foreground">Pending</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <div className="text-2xl font-bold text-blue-600">
              {applications.filter((a) => a.status === "under_review").length}
            </div>
            <div className="text-sm text-muted-foreground">Under Review</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <div className="text-2xl font-bold text-green-600">
              {applications.filter((a) => a.status === "accepted").length}
            </div>
            <div className="text-sm text-muted-foreground">Accepted</div>
          </div>
        </div>

        {/* Applications Table */}
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredApplications.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                    No applications found
                  </TableCell>
                </TableRow>
              ) : (
                filteredApplications.map((application) => (
                  <TableRow key={application.id}>
                    <TableCell className="font-medium">{application.full_name}</TableCell>
                    <TableCell className="text-sm">{application.email_address}</TableCell>
                    <TableCell className="text-sm">{application.mobile_number}</TableCell>
                    <TableCell className="text-sm">{application.course}</TableCell>
                    <TableCell>{application.student_type}</TableCell>
                    <TableCell>{getStatusBadge(application.status)}</TableCell>
                    <TableCell className="text-sm">
                      {format(new Date(application.created_at), "MMM dd, yyyy")}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => viewDetails(application)}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Application Details Dialog */}
      {selectedApplication && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Application Details</DialogTitle>
              <DialogDescription>
                Review and manage this application
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
              {/* Status Update */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium mb-1">Current Status</div>
                  {getStatusBadge(selectedApplication.status)}
                </div>
                <Select
                  value={selectedApplication.status}
                  onValueChange={(value) => {
                    updateStatus(selectedApplication.id, value);
                    setSelectedApplication({ ...selectedApplication, status: value });
                  }}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="under_review">Under Review</SelectItem>
                    <SelectItem value="accepted">Accepted</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Personal Info */}
              <div>
                <h3 className="font-semibold text-lg mb-3">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Full Name:</span>
                    <p className="font-medium">{selectedApplication.full_name}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">ID Number:</span>
                    <p className="font-medium">{selectedApplication.id_number}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Date of Birth:</span>
                    <p className="font-medium">
                      {format(new Date(selectedApplication.date_of_birth), "MMMM dd, yyyy")}
                    </p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Gender:</span>
                    <p className="font-medium">{selectedApplication.gender}</p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="font-semibold text-lg mb-3">Contact Information</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Email:</span>
                    <p className="font-medium">{selectedApplication.email_address}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Phone:</span>
                    <p className="font-medium">{selectedApplication.mobile_number}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">County:</span>
                    <p className="font-medium">{selectedApplication.county}</p>
                  </div>
                </div>
              </div>

              {/* Course Info */}
              <div>
                <h3 className="font-semibold text-lg mb-3">Course Details</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Course:</span>
                    <p className="font-medium">{selectedApplication.course}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Student Type:</span>
                    <p className="font-medium">{selectedApplication.student_type}</p>
                  </div>
                </div>
              </div>

              {/* Guardian Info */}
              <div>
                <h3 className="font-semibold text-lg mb-3">Guardian Information</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Guardian Name:</span>
                    <p className="font-medium">{selectedApplication.guardian_name}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Guardian Contact:</span>
                    <p className="font-medium">{selectedApplication.guardian_contact}</p>
                  </div>
                </div>
              </div>

              {/* Medical Info */}
              {(selectedApplication.allergies || selectedApplication.pre_existing_conditions) && (
                <div>
                  <h3 className="font-semibold text-lg mb-3">Medical Information</h3>
                  <div className="space-y-2 text-sm">
                    {selectedApplication.allergies && (
                      <div>
                        <span className="text-muted-foreground">Allergies:</span>
                        <p className="font-medium">{selectedApplication.allergies}</p>
                      </div>
                    )}
                    {selectedApplication.pre_existing_conditions && (
                      <div>
                        <span className="text-muted-foreground">Pre-existing Conditions:</span>
                        <p className="font-medium">{selectedApplication.pre_existing_conditions}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Submission Info */}
              <div className="pt-4 border-t">
                <div className="text-sm text-muted-foreground">
                  Application ID: {selectedApplication.id}
                </div>
                <div className="text-sm text-muted-foreground">
                  Submitted: {format(new Date(selectedApplication.created_at), "MMMM dd, yyyy 'at' hh:mm a")}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default AdminApplications;
