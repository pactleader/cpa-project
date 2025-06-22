import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ImageSlider from "@/components/ImageSlider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Ship, Anchor, MapPin, Clock, Users, TrendingUp, ArrowRight, Play, Pause, Plane } from "lucide-react";

const Index = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);
  
  const stats = [{
    label: "Vessels Served Monthly",
    value: "150+",
    icon: Ship
  }, {
    label: "Cargo Handled (Tons)",
    value: "50K+",
    icon: Anchor
  }, {
    label: "Islands Connected",
    value: "3",
    icon: MapPin
  }, {
    label: "Years of Service",
    value: "25+",
    icon: Clock
  }];
  const quickActions = [{
    title: "Ferry Schedules",
    description: "Check inter-island ferry times",
    href: "/",
    color: "bg-blue-500"
  }, {
    title: "Landing Request",
    description: "Submit vessel landing request",
    href: "/documents",
    color: "bg-green-500"
  }, {
    title: "Port Status",
    description: "Real-time port operations",
    href: "/port-saipan",
    color: "bg-purple-500"
  }, {
    title: "Contact Harbor",
    description: "Reach our operations team",
    href: "/contact",
    color: "bg-orange-500"
  }];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat(prev => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [stats.length]);
  
  return (
    <>
      <Helmet>
        <title>CNMI Ports Authority - Gateway to the Pacific</title>
        <meta name="description" content="Official website of the Commonwealth of the Northern Mariana Islands Ports Authority. Connecting the Pacific through maritime excellence." />
      </Helmet>
      
      <Layout>
        {/* Hero Section with Video Background */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-8 md:py-12">
          {/* Video Background Layer */}
          <div className="absolute inset-0">
            {/* Simulated video background with animated elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600"></div>
            
            {/* Animated airplanes */}
            <div className="absolute inset-0">
              <Plane className="absolute text-white opacity-20 w-12 h-12 animate-[fly-across_15s_linear_infinite]" style={{
                top: '20%',
                left: '-5%',
                animationDelay: '0s'
              }} />
              <Plane className="absolute text-white opacity-15 w-8 h-8 animate-[fly-across_20s_linear_infinite]" style={{
                top: '30%',
                left: '-5%',
                animationDelay: '7s'
              }} />
              <Plane className="absolute text-white opacity-25 w-10 h-10 animate-[fly-across_18s_linear_infinite]" style={{
                top: '15%',
                left: '-5%',
                animationDelay: '12s'
              }} />
            </div>

            {/* Animated cargo ships */}
            <div className="absolute inset-0">
              <Ship className="absolute text-white opacity-20 w-16 h-16 animate-[sail-across_25s_linear_infinite]" style={{
                bottom: '25%',
                left: '-8%',
                animationDelay: '0s'
              }} />
              <Ship className="absolute text-white opacity-15 w-12 h-12 animate-[sail-across_30s_linear_infinite]" style={{
                bottom: '35%',
                left: '-8%',
                animationDelay: '10s'
              }} />
              <Ship className="absolute text-white opacity-25 w-14 h-14 animate-[sail-across_28s_linear_infinite]" style={{
                bottom: '20%',
                left: '-8%',
                animationDelay: '18s'
              }} />
            </div>

            {/* Moving clouds */}
            <div className="absolute inset-0">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-white opacity-10 rounded-full animate-[drift_20s_linear_infinite]"
                  style={{
                    width: `${80 + Math.random() * 120}px`,
                    height: `${40 + Math.random() * 60}px`,
                    left: `${-10 + Math.random() * 120}%`,
                    top: `${10 + Math.random() * 40}%`,
                    animationDelay: `${Math.random() * 20}s`,
                    animationDuration: `${15 + Math.random() * 10}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
          
          {/* Video overlay */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
          
          {/* Animated background particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white opacity-30 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              ></div>
            ))}
          </div>

          {/* Content overlay */}
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Gateway to the Pacific
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-blue-100 leading-relaxed px-2">
                Connecting the Commonwealth through world-class maritime services and sustainable port operations
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 md:mb-12">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 px-6 md:px-8 py-3 w-full sm:w-auto">
                  <Ship className="w-5 h-5 mr-2" />
                  Explore Our Ports
                </Button>
                <Button variant="outline" size="lg" className="border-white text-blue-900 hover:text-blue-900 transform hover:scale-105 transition-all duration-300 px-6 md:px-8 py-3 bg-gray-100 w-full sm:w-auto">
                  <Users className="w-5 h-5 mr-2" />
                  Our Services
                </Button>
              </div>

              {/* Animated Stats Counter */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className={`p-3 md:p-4 rounded-lg backdrop-blur-sm transition-all duration-500 transform ${
                        currentStat === index 
                          ? 'bg-white/20 scale-110 border-2 border-white/30' 
                          : 'bg-white/10 hover:bg-white/15'
                      }`}
                    >
                      <Icon className={`w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 transition-colors duration-500 ${
                        currentStat === index ? 'text-yellow-300' : 'text-blue-200'
                      }`} />
                      <div className="text-lg md:text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs md:text-sm text-blue-200">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Featured Video Section */}
        <section className="py-12 md:py-20 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Featured Content</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Experience Our Ports</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Discover the maritime excellence that connects our islands
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl group">
                <div className="aspect-video bg-gradient-to-br from-blue-900 to-blue-600 flex items-center justify-center">
                  <div className="text-center">
                    <Button
                      size="lg"
                      onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                      className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/50 rounded-full p-4 md:p-6 transform group-hover:scale-110 transition-all duration-300"
                    >
                      {isVideoPlaying ? <Pause className="w-6 h-6 md:w-8 md:h-8" /> : <Play className="w-6 h-6 md:w-8 md:h-8 ml-1" />}
                    </Button>
                    <p className="text-white mt-4 text-base md:text-lg">Port Operations Overview</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions with Enhanced Design */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Quick Actions</h2>
              <p className="text-lg md:text-xl text-gray-600">Everything you need at your fingertips</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickActions.map((action, index) => (
                <Link key={index} to={action.href} className="group">
                  <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                    <div className={`h-2 ${action.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                    <CardHeader className="pb-3">
                      <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-4 transform group-hover:rotate-12 transition-transform duration-300`}>
                        <ArrowRight className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-lg group-hover:text-blue-600 transition-colors duration-300">
                        {action.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                        {action.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Image Slider */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Ports in Action</h2>
              <p className="text-lg md:text-xl text-gray-600">Witness the daily operations that keep our islands connected</p>
            </div>
            <div className="relative">
              <ImageSlider />
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none rounded-lg"></div>
            </div>
          </div>
        </section>

        {/* Interactive Tabs Section */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Explore Our Services</h2>
              <p className="text-lg md:text-xl text-gray-600">Comprehensive maritime solutions for the Pacific region</p>
            </div>

            <Tabs defaultValue="cargo" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-6 md:mb-8 bg-white shadow-lg">
                <TabsTrigger value="cargo" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-sm md:text-base">
                  Cargo Operations
                </TabsTrigger>
                <TabsTrigger value="passenger" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-sm md:text-base">
                  Passenger Services
                </TabsTrigger>
                <TabsTrigger value="commercial" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-sm md:text-base">
                  Commercial Fleet
                </TabsTrigger>
              </TabsList>

              <TabsContent value="cargo" className="mt-6 md:mt-8">
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-6 md:p-8">
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Advanced Cargo Handling</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          State-of-the-art equipment and experienced personnel ensure efficient cargo operations across all three islands.
                        </p>
                        <div className="flex items-center text-blue-600">
                          <TrendingUp className="w-5 h-5 mr-2" />
                          <span className="font-semibold">50,000+ tons handled monthly</span>
                        </div>
                      </div>
                      <div className="h-48 md:h-64 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                        <Ship className="w-16 md:w-24 h-16 md:h-24 text-white opacity-80" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="passenger" className="mt-6 md:mt-8">
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-6 md:p-8">
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Inter-Island Ferry Service</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          Reliable and comfortable ferry connections between Saipan, Tinian, and Rota for residents and visitors.
                        </p>
                        <div className="flex items-center text-green-600">
                          <Users className="w-5 h-5 mr-2" />
                          <span className="font-semibold">Daily scheduled departures</span>
                        </div>
                      </div>
                      <div className="h-48 md:h-64 bg-gradient-to-br from-green-600 to-green-800 rounded-lg flex items-center justify-center">
                        <Users className="w-16 md:w-24 h-16 md:h-24 text-white opacity-80" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="commercial" className="mt-6 md:mt-8">
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-6 md:p-8">
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Commercial Fleet Support</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          Comprehensive support services for commercial vessels including maintenance, fuel, and logistics coordination.
                        </p>
                        <div className="flex items-center text-purple-600">
                          <Anchor className="w-5 h-5 mr-2" />
                          <span className="font-semibold">24/7 port operations</span>
                        </div>
                      </div>
                      <div className="h-48 md:h-64 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
                        <Anchor className="w-16 md:w-24 h-16 md:h-24 text-white opacity-80" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Index;
