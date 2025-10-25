import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Import gallery images
import heavyMachineryTraining from "@/assets/gallery/heavy-machinery-training.jpg";
import classroomTraining from "@/assets/gallery/classroom-training.jpg";
import automotiveMechanics from "@/assets/gallery/automotive-mechanics.jpg";
import studentsGroup from "@/assets/gallery/students-group.jpg";
import studentsTrainingGroup from "@/assets/gallery/students-training-group.jpg";
import constructionTraining from "@/assets/gallery/construction-training.jpg";
import electricalInstallation from "@/assets/gallery/electrical-installation.jpg";
import forkliftTraining from "@/assets/forklift-training.jpg";
import mechanicTraining from "@/assets/mechanic-training.jpg";
import rollerTraining from "@/assets/roller-training.jpg";
import sportsTraining from "@/assets/sports-training.jpg";
import sportsField from "@/assets/sports-field.jpg";
import communityService from "@/assets/community-service.jpg";
import communityService02 from "@/assets/community-service-02.jpg";
import drivingPractical from "@/assets/driving-practical.jpg";
import electricalWiringWorkshop from "@/assets/gallery/electrical-wiring-workshop.jpg";
import electricalPracticalTraining from "@/assets/gallery/electrical-practical-training.jpg";
import rollerOperatorTraining from "@/assets/gallery/roller-operator-training.jpg";
import excavatorBackhoeTraining from "@/assets/gallery/excavator-backhoe-training.jpg";
import heavyEquipmentFieldTraining from "@/assets/gallery/heavy-equipment-field-training.jpg";
import backhoeOperationDemo from "@/assets/gallery/backhoe-operation-demo.jpg";
import roadRollerTraining from "@/assets/gallery/road-roller-training.jpg";
import plantOperatorFieldSession from "@/assets/gallery/plant-operator-field-session.jpg";
import ipmttiSchoolVan from "@/assets/gallery/ipmtti-school-van.jpg";
import graduationRollerDemo from "@/assets/gallery/graduation-roller-demo.jpg";
import graduationCampusDemo from "@/assets/gallery/graduation-campus-demo.jpg";
import graduationCeremony from "@/assets/gallery/graduation-ceremony.jpg";
import graduationStudentsCeremony from "@/assets/gallery/graduation-students-ceremony.jpg";
import graduationSpeaker from "@/assets/gallery/graduation-speaker.jpg";
import graduationGroupOutdoor from "@/assets/gallery/graduation-group-outdoor.jpg";
import campusBuilding from "@/assets/gallery/campus-building.jpg";
import loaderFieldTraining from "@/assets/gallery/loader-field-training.jpg";
import equipmentYardAerial from "@/assets/gallery/equipment-yard-aerial.jpg";
import graduationCelebration from "@/assets/gallery/graduation-celebration.jpg";
import mechanicsPracticalTraining from "@/assets/gallery/mechanics-practical-training.jpg";
import rollerOperatorField from "@/assets/gallery/roller-operator-field.jpg";
import graduationBalloons from "@/assets/gallery/graduation-balloons.jpg";
import graduationStudentsCloseup from "@/assets/gallery/graduation-students-closeup.jpg";
import graduationMachineryDemo from "@/assets/gallery/graduation-machinery-demo.jpg";
import graduationCeremonyFull from "@/assets/gallery/graduation-ceremony-full.jpg";
import graduationBannerDisplay from "@/assets/gallery/graduation-banner-display.jpg";
import frontLoaderTraining from "@/assets/gallery/front-loader-training.jpg";
import motorGraderTraining from "@/assets/gallery/motor-grader-training.jpg";
import frontLoaderOperation from "@/assets/gallery/front-loader-operation.jpg";
import excavatorOperatorCabin from "@/assets/gallery/excavator-operator-cabin.jpg";
import graduationCertificateCeremony from "@/assets/gallery/graduation-certificate-ceremony.jpg";
import excavatorFemaleOperator from "@/assets/gallery/excavator-female-operator.jpg";

interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  alt: string;
  title: string;
  category: string;
}

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const galleryItems: GalleryItem[] = [
    // Course Photos First - Spread Different Courses
    {
      id: 'st1',
      type: 'image',
      src: heavyMachineryTraining,
      alt: 'Students working on heavy machinery with safety equipment',
      title: 'Heavy Machinery Training',
      category: 'students'
    },
    {
      id: 'st13',
      type: 'image',
      src: mechanicTraining,
      alt: 'Instructor teaching engine mechanics to students',
      title: 'Mechanics Training Workshop',
      category: 'students'
    },
    {
      id: 'st15',
      type: 'image',
      src: electricalInstallation,
      alt: 'Electrical installation training in workshop',
      title: 'Electrical Installation Training',
      category: 'students'
    },
    {
      id: 'st2',
      type: 'image',
      src: rollerTraining,
      alt: 'Student operating heavy roller on training field',
      title: 'Heavy Roller Operation',
      category: 'students'
    },
    {
      id: 'st14',
      type: 'image',
      src: automotiveMechanics,
      alt: 'Students working on automotive engine maintenance',
      title: 'Automotive Mechanics Workshop',
      category: 'students'
    },
    {
      id: 'st16',
      type: 'image',
      src: constructionTraining,
      alt: 'Construction training practical session',
      title: 'Construction Skills Training',
      category: 'students'
    },
    {
      id: 'st4',
      type: 'image',
      src: forkliftTraining,
      alt: 'Student operating forklift during practical training session',
      title: 'Forklift Operation Training',
      category: 'students'
    },
    {
      id: 'st32',
      type: 'image',
      src: mechanicsPracticalTraining,
      alt: 'Mechanics practical hands-on engine training',
      title: 'Mechanics Practical Training',
      category: 'students'
    },
    {
      id: 'st17',
      type: 'image',
      src: electricalWiringWorkshop,
      alt: 'Electrical wiring installation workshop with circuit boards',
      title: 'Electrical Wiring Workshop',
      category: 'students'
    },
    {
      id: 'st6',
      type: 'image',
      src: rollerOperatorTraining,
      alt: 'Student operating CAT roller during field training',
      title: 'Road Roller Operation Training',
      category: 'students'
    },
    {
      id: 'st7',
      type: 'image',
      src: excavatorBackhoeTraining,
      alt: 'Excavator and backhoe training session in the field',
      title: 'Excavator & Backhoe Training',
      category: 'students'
    },
    {
      id: 'st3',
      type: 'image',
      src: drivingPractical,
      alt: 'IPMTTI driving school practical training vehicle',
      title: 'Driving School Training',
      category: 'students'
    },
    {
      id: 'st18',
      type: 'image',
      src: electricalPracticalTraining,
      alt: 'Hands-on electrical practical training session',
      title: 'Electrical Practical Training',
      category: 'students'
    },
    {
      id: 'st8',
      type: 'image',
      src: heavyEquipmentFieldTraining,
      alt: 'Heavy equipment field training with multiple machines',
      title: 'Heavy Equipment Field Training',
      category: 'students'
    },
    {
      id: 'st35',
      type: 'image',
      src: frontLoaderTraining,
      alt: 'Front loader training in muddy field conditions',
      title: 'Front Loader Operation Training',
      category: 'students'
    },
    {
      id: 'st36',
      type: 'image',
      src: motorGraderTraining,
      alt: 'Motor grader operation training in field',
      title: 'Motor Grader Training',
      category: 'students'
    },
    {
      id: 'st37',
      type: 'image',
      src: frontLoaderOperation,
      alt: 'Student operating front loader during practical session',
      title: 'Front Loader Practical Session',
      category: 'students'
    },
    {
      id: 'st38',
      type: 'image',
      src: excavatorOperatorCabin,
      alt: 'Student in excavator operator cabin during training',
      title: 'Excavator Cabin Operation',
      category: 'students'
    },
    {
      id: 'st39',
      type: 'image',
      src: excavatorFemaleOperator,
      alt: 'Female student operating excavator - women in plant operation',
      title: 'Women in Heavy Machinery Training',
      category: 'students'
    },
    {
      id: 'st9',
      type: 'image',
      src: backhoeOperationDemo,
      alt: 'Backhoe operation demonstration on training grounds',
      title: 'Backhoe Operation Demo',
      category: 'students'
    },
    {
      id: 'st10',
      type: 'image',
      src: roadRollerTraining,
      alt: 'Road roller compaction training practical session',
      title: 'Road Roller Training',
      category: 'students'
    },
    {
      id: 'st33',
      type: 'image',
      src: rollerOperatorField,
      alt: 'Roller operator practical field training session',
      title: 'Roller Field Training',
      category: 'students'
    },
    {
      id: 'st11',
      type: 'image',
      src: plantOperatorFieldSession,
      alt: 'Plant operator field practical session with heavy equipment',
      title: 'Plant Operator Field Session',
      category: 'students'
    },
    {
      id: 'st5',
      type: 'image',
      src: studentsGroup,
      alt: 'Group photo of students in safety gear with training equipment',
      title: 'Plant Operation Training Cohort',
      category: 'students'
    },
    {
      id: 'st12',
      type: 'image',
      src: studentsTrainingGroup,
      alt: 'Students attending training session in classroom',
      title: 'Classroom Training Session',
      category: 'students'
    },
    {
      id: 'st19',
      type: 'image',
      src: classroomTraining,
      alt: 'Theory class on heavy equipment operation',
      title: 'Heavy Equipment Theory Class',
      category: 'students'
    },
    
    // Campus Life & Facilities
    {
      id: 'fac1',
      type: 'image',
      src: campusBuilding,
      alt: 'Modern IPMTTI campus building with equipment',
      title: 'IPMTTI Main Campus',
      category: 'facilities'
    },
    {
      id: 'fac2',
      type: 'image',
      src: equipmentYardAerial,
      alt: 'Aerial view of heavy equipment training yard',
      title: 'Equipment Training Yard',
      category: 'facilities'
    },
    {
      id: 'fac3',
      type: 'image',
      src: ipmttiSchoolVan,
      alt: 'IPMTTI school van with plant operator training graphics',
      title: 'School Transport',
      category: 'facilities'
    },
    {
      id: 'fac4',
      type: 'image',
      src: loaderFieldTraining,
      alt: 'Loader training equipment on practice field',
      title: 'Equipment Training Field',
      category: 'facilities'
    },
    {
      id: 'life2',
      type: 'image',
      src: sportsTraining,
      alt: 'Students participating in sports activities on campus',
      title: 'Campus Sports Activities',
      category: 'campus-life'
    },
    {
      id: 'life3',
      type: 'image',
      src: sportsField,
      alt: 'IPMTTI sports field for student recreation and wellness',
      title: 'Recreation Sports Field',
      category: 'campus-life'
    },
    {
      id: 'life4',
      type: 'image',
      src: communityService,
      alt: 'IPMTTI students engaged in community service activities',
      title: 'Community Service Initiative',
      category: 'campus-life'
    },
    {
      id: 'life5',
      type: 'image',
      src: communityService02,
      alt: 'Students giving back to the local community',
      title: 'Community Outreach Program',
      category: 'campus-life'
    },
    
    // Graduation & Ceremonies (at the bottom)
    {
      id: 'ev1',
      type: 'image',
      src: graduationCertificateCeremony,
      alt: 'Graduate receiving certificate during IPMTTI graduation ceremony',
      title: 'Certificate Presentation Ceremony',
      category: 'events'
    },
    {
      id: 'ev2',
      type: 'image',
      src: graduationCeremony,
      alt: 'IPMTTI graduation ceremony with students in caps and gowns',
      title: 'Graduation Ceremony',
      category: 'events'
    },
    {
      id: 'ev3',
      type: 'image',
      src: graduationStudentsCeremony,
      alt: 'Graduating students celebrating their achievement',
      title: 'Graduation Students Celebration',
      category: 'events'
    },
    {
      id: 'ev4',
      type: 'image',
      src: graduationSpeaker,
      alt: 'Guest speaker addressing graduates at IPMTTI ceremony',
      title: 'Graduation Commencement Speech',
      category: 'events'
    },
    {
      id: 'ev5',
      type: 'image',
      src: graduationGroupOutdoor,
      alt: 'Graduates posing outdoors after the ceremony',
      title: 'Graduate Group Photo',
      category: 'events'
    },
    {
      id: 'ev6',
      type: 'image',
      src: graduationRollerDemo,
      alt: 'Graduate demonstrating roller operation skills at graduation',
      title: 'Graduation Skills Demonstration',
      category: 'events'
    },
    {
      id: 'ev7',
      type: 'image',
      src: graduationCampusDemo,
      alt: 'Campus machinery demonstration during graduation event',
      title: 'Graduation Campus Demo',
      category: 'events'
    },
    {
      id: 'ev8',
      type: 'image',
      src: graduationCelebration,
      alt: 'Graduates celebrating achievement with machinery training',
      title: 'Graduation Skills Showcase',
      category: 'events'
    },
    {
      id: 'ev8',
      type: 'image',
      src: graduationBalloons,
      alt: 'Graduation celebration with balloons toss ceremony',
      title: 'Graduation Balloon Toss Celebration',
      category: 'events'
    },
    {
      id: 'ev9',
      type: 'image',
      src: graduationStudentsCloseup,
      alt: 'Close-up of graduating students in caps and gowns',
      title: 'Class of 2024 Graduates',
      category: 'events'
    },
    {
      id: 'ev10',
      type: 'image',
      src: graduationMachineryDemo,
      alt: 'Machinery demonstration during graduation ceremony',
      title: 'Graduation Machinery Skills Display',
      category: 'events'
    },
    {
      id: 'ev11',
      type: 'image',
      src: graduationCeremonyFull,
      alt: 'Full graduation ceremony tent with attendees and graduates',
      title: 'Graduation Ceremony Full View',
      category: 'events'
    },
    {
      id: 'ev12',
      type: 'image',
      src: graduationBannerDisplay,
      alt: 'Congratulations graduands class of 2024 banner display',
      title: 'Graduation Banner - Class of 2024',
      category: 'events'
    }
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'students', label: 'Students & Learning' },
    { id: 'events', label: 'Events & Ceremonies' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'campus-life', label: 'Campus Life' }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const handlePrevious = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
    const previousIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
    setSelectedItem(filteredItems[previousIndex]);
  };

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
    const nextIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
    setSelectedItem(filteredItems[nextIndex]);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="IPMTTI Photo Gallery - Campus Life & Training Facilities"
        description="Explore photos of IPMTTI campus, training facilities, students in action, graduation ceremonies, and our modern equipment. See our hands-on technical training programs in Thika, Kenya."
        keywords="IPMTTI gallery, technical training photos, heavy plant operation training, mechanics workshop, campus facilities Thika, graduation ceremony, student life Kenya"
        canonical="/gallery"
      />
      {/* JSON-LD: Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ipmtti.co.ke" },
              { "@type": "ListItem", "position": 2, "name": "Gallery", "item": "https://ipmtti.co.ke/gallery" }
            ]
          })
        }}
      />
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
              Campus Life & Training in Action
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
              Experience the vibrant learning environment at IPMTTI through our photo and video gallery. See our state-of-the-art facilities, hands-on training sessions, and the journey of our students as they develop technical expertise.
            </p>
            
            {/* News & Events Link */}
            <div className="mt-6">
              <a 
                href="/plant-operator-training"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold text-lg transition-colors"
              >
                📰 View Latest Blogs
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={activeCategory === category.id ? "default" : "outline"}
                className="transition-all duration-200"
                aria-label={`Filter by ${category.label}`}
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Masonry Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <Card
                key={item.id}
                className="group overflow-hidden cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative overflow-hidden aspect-square bg-muted">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="eager"
                    decoding="async"
                    width="400"
                    height="400"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-semibold text-lg mb-1">
                        {item.title}
                      </h3>
                      <p className="text-white/80 text-sm capitalize">
                        {item.category.replace('-', ' ')}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No items found in this category.</p>
            </div>
          )}
        </div>
      </main>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
          role="dialog"
          aria-label="Image lightbox"
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedItem(null);
            }}
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </Button>

          <Button 
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 rounded-full p-3 md:p-4"
            onClick={(e) => {
              e.stopPropagation();
              handlePrevious();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>

          <Button 
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 rounded-full p-3 md:p-4"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </Button>

          <div 
            className="max-w-7xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedItem.src}
              alt={selectedItem.alt}
              className="w-full h-full object-contain rounded-lg"
              loading="eager"
              decoding="async"
            />
            <div className="text-center mt-4">
              <h3 className="text-white text-xl font-semibold mb-2">
                {selectedItem.title}
              </h3>
              <p className="text-white/70 capitalize">
                {selectedItem.category.replace('-', ' ')}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
