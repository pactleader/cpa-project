
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Download, Upload, ExternalLink, Search, Filter, Clock, CheckCircle } from "lucide-react";
import LandingRequestForm from "@/components/LandingRequestForm";

const Documents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const documentSections = [
    {
      id: "permits",
      icon: FileText,
      title: "Port Permits",
      description: "Download and submit required permits for port operations and vessel management.",
      color: "blue",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=200&fit=crop",
      downloadCount: "1,250+",
      lastUpdated: "Dec 15, 2024"
    },
    {
      id: "landing",
      icon: Upload,
      title: "Landing Requests",
      description: "Interactive forms for vessel landing requests and berth reservations.",
      color: "green",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=200&fit=crop",
      downloadCount: "890+",
      lastUpdated: "Dec 12, 2024"
    },
    {
      id: "cargo",
      icon: FileText,
      title: "Cargo Documentation",
      description: "Forms and documentation required for cargo handling and customs procedures.",
      color: "purple",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop",
      downloadCount: "2,100+",
      lastUpdated: "Dec 10, 2024"
    },
    {
      id: "ada",
      icon: FileText,
      title: "CPA ADA - Section 504 Policy",
      description: "Access the CNMI Ports Authority ADA Section 504 Policy document.",
      color: "orange",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=200&fit=crop",
      link: "https://cnmiports.com/ada_policy_2022.pdf",
      downloadCount: "456+",
      lastUpdated: "Dec 8, 2024"
    },
    {
      id: "regulations",
      icon: FileText,
      title: "CPA Rules and Regulations - Title 40",
      description: "Access the complete CNMI Ports Authority rules and regulations under Title 40.",
      color: "red",
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=200&fit=crop",
      link: "https://www.cnmilaw.org/admin.php#gsc.tab=0",
      downloadCount: "789+",
      lastUpdated: "Dec 5, 2024"
    }
  ];

  const documentCategories = [
    { id: "all", name: "All Documents", count: 25 },
    { id: "permits", name: "Permits & Licenses", count: 8 },
    { id: "forms", name: "Interactive Forms", count: 6 },
    { id: "policies", name: "Policies & Regulations", count: 7 },
    { id: "procedures", name: "Operational Procedures", count: 4 }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; button: string; badge: string } } = {
      blue: { bg: "bg-blue-100", text: "text-blue-600", button: "bg-blue-600 hover:bg-blue-700", badge: "bg-blue-100 text-blue-800" },
      green: { bg: "bg-green-100", text: "text-green-600", button: "bg-green-600 hover:bg-green-700", badge: "bg-green-100 text-green-800" },
      purple: { bg: "bg-purple-100", text: "text-purple-600", button: "bg-purple-600 hover:bg-purple-700", badge: "bg-purple-100 text-purple-800" },
      orange: { bg: "bg-orange-100", text: "text-orange-600", button: "bg-orange-600 hover:bg-orange-700", badge: "bg-orange-100 text-orange-800" },
      red: { bg: "bg-red-100", text: "text-red-600", button: "bg-red-600 hover:bg-red-700", badge: "bg-red-100 text-red-800" }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <>
      <Helmet>
        <title>Documents & Forms - CNMI Ports Authority</title>
        <meta name="description" content="Access important documents, permits, and forms for CNMI port services." />
      </Helmet>
      
      <Layout>
        {/* Enhanced Hero Section */}
        <div 
          className="relative bg-blue-900 text-white py-32"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1200&h=600&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-blue-800/80"></div>
          
          {/* Animated elements */}
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white opacity-20 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              ></div>
            ))}
          </div>

          <div className="relative container mx-auto px-4 text-center">
            <div className="animate-fade-in">
              <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-4 py-2">
                Digital Resources
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Documents & Forms
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                Access important documents, permits, and interactive forms for all port services and operations.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Search and Filter Section */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search documents..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-600 font-medium">Filter:</span>
                  <div className="flex flex-wrap gap-2">
                    {documentCategories.map((category) => (
                      <Button
                        key={category.id}
                        variant={activeFilter === category.id ? "default" : "outline"}
                        size="sm"
                        onClick={() => setActiveFilter(category.id)}
                        className="transition-all duration-300"
                      >
                        {category.name}
                        <Badge variant="secondary" className="ml-2 text-xs">
                          {category.count}
                        </Badge>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Document Cards */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {documentSections.map((section) => {
                const Icon = section.icon;
                const colors = getColorClasses(section.color);
                
                return (
                  <Card key={section.id} className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={section.image}
                        alt={section.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center backdrop-blur-sm`}>
                          <Icon className={`w-6 h-6 ${colors.text}`} />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between text-white text-sm">
                          <div className="flex items-center">
                            <Download className="w-4 h-4 mr-1" />
                            {section.downloadCount} downloads
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {section.lastUpdated}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300">
                        {section.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {section.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        {section.link ? (
                          <a 
                            href={section.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`${colors.button} text-white px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300 inline-flex items-center font-medium`}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Document
                          </a>
                        ) : section.id === "landing" ? (
                          <button 
                            className={`${colors.button} text-white px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300 inline-flex items-center font-medium`}
                            onClick={() => document.getElementById('landing-form')?.scrollIntoView({ behavior: 'smooth' })}
                          >
                            <Upload className="w-4 h-4 mr-2" />
                            Submit Request
                          </button>
                        ) : (
                          <button className={`${colors.button} text-white px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300 inline-flex items-center font-medium`}>
                            <Download className="w-4 h-4 mr-2" />
                            Download Forms
                          </button>
                        )}
                        
                        <Badge className={colors.badge}>
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Updated
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Enhanced Document Categories with Tabs */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Document Categories</h3>
                <p className="text-xl text-gray-600">Organized resources for easy access</p>
              </div>

              <Tabs defaultValue="vessel" className="w-full">
                <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 bg-gray-100">
                  <TabsTrigger value="vessel">Vessel Operations</TabsTrigger>
                  <TabsTrigger value="cargo">Cargo Handling</TabsTrigger>
                  <TabsTrigger value="safety">Safety Compliance</TabsTrigger>
                  <TabsTrigger value="environmental">Environmental</TabsTrigger>
                </TabsList>

                <TabsContent value="vessel" className="mt-8">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                          <h4 className="text-2xl font-bold text-blue-900 mb-4">Vessel Operations</h4>
                          <p className="text-gray-600 mb-6 leading-relaxed">
                            Forms and permits for vessel operations and port access including landing requests, berth reservations, and navigation clearances.
                          </p>
                          <div className="flex items-center text-blue-600">
                            <CheckCircle className="w-5 h-5 mr-2" />
                            <span className="font-semibold">Digital submission available</span>
                          </div>
                        </div>
                        <div className="h-64 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                          <FileText className="w-24 h-24 text-white opacity-80" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="cargo" className="mt-8">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                          <h4 className="text-2xl font-bold text-purple-900 mb-4">Cargo Handling</h4>
                          <p className="text-gray-600 mb-6 leading-relaxed">
                            Documentation for cargo handling and customs procedures including manifests, inspection forms, and logistics coordination.
                          </p>
                          <div className="flex items-center text-purple-600">
                            <CheckCircle className="w-5 h-5 mr-2" />
                            <span className="font-semibold">Customs integration</span>
                          </div>
                        </div>
                        <div className="h-64 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
                          <Upload className="w-24 h-24 text-white opacity-80" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="safety" className="mt-8">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                          <h4 className="text-2xl font-bold text-red-900 mb-4">Safety Compliance</h4>
                          <p className="text-gray-600 mb-6 leading-relaxed">
                            Safety regulations and compliance documentation ensuring maritime safety standards across all port operations.
                          </p>
                          <div className="flex items-center text-red-600">
                            <CheckCircle className="w-5 h-5 mr-2" />
                            <span className="font-semibold">SOLAS compliant</span>
                          </div>
                        </div>
                        <div className="h-64 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center">
                          <ExternalLink className="w-24 h-24 text-white opacity-80" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="environmental" className="mt-8">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                          <h4 className="text-2xl font-bold text-green-900 mb-4">Environmental</h4>
                          <p className="text-gray-600 mb-6 leading-relaxed">
                            Environmental protection policies and procedures ensuring sustainable port operations and marine ecosystem protection.
                          </p>
                          <div className="flex items-center text-green-600">
                            <CheckCircle className="w-5 h-5 mr-2" />
                            <span className="font-semibold">EPA certified</span>
                          </div>
                        </div>
                        <div className="h-64 bg-gradient-to-br from-green-600 to-green-800 rounded-lg flex items-center justify-center">
                          <FileText className="w-24 h-24 text-white opacity-80" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Enhanced Landing Request Form */}
            <div id="landing-form" className="mb-12">
              <LandingRequestForm />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Documents;
