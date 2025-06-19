
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import ImageSlider from "@/components/ImageSlider";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Ship, FileText, Phone } from "lucide-react";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>CNMI Ports Authority - Connecting the Commonwealth</title>
        <meta name="description" content="Official website of the Commonwealth of the Northern Mariana Islands Ports Authority. Port operations for Saipan, Tinian, and Rota." />
        <meta name="keywords" content="CNMI, Ports Authority, Saipan, Tinian, Rota, Maritime, Cargo, Ferry, Northern Mariana Islands" />
      </Helmet>
      
      <Layout>
        <ImageSlider />
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Welcome to CNMI Ports Authority
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The Commonwealth of the Northern Mariana Islands Ports Authority operates and maintains 
                maritime facilities across Saipan, Tinian, and Rota, serving as vital gateways for 
                commerce, tourism, and inter-island connectivity.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Ship className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>Port Operations</CardTitle>
                  <CardDescription>
                    Comprehensive maritime services including cargo handling, passenger ferry operations, and vessel management.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/port-saipan">
                    <Button className="w-full">
                      View Port Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <FileText className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>Documents & Forms</CardTitle>
                  <CardDescription>
                    Access important documents, permits, and interactive forms for port services and operations.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/documents">
                    <Button className="w-full">
                      Access Documents
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Phone className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>Contact & Support</CardTitle>
                  <CardDescription>
                    Get in touch with our team for inquiries, support, or general information about our services.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/contact">
                    <Button className="w-full">
                      Contact Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">Our Ports</h3>
                <p className="text-xl mb-8 text-blue-100">
                  Three strategic locations serving the Commonwealth's maritime needs with modern facilities and professional services.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <Link to="/port-saipan" className="text-blue-100 hover:text-white transition-colors">
                      Port of Saipan - Main commercial and passenger hub
                    </Link>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <Link to="/port-tinian" className="text-blue-100 hover:text-white transition-colors">
                      Port of Tinian - Strategic cargo and ferry operations
                    </Link>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <Link to="/port-rota" className="text-blue-100 hover:text-white transition-colors">
                      Port of Rota - Essential island connectivity
                    </Link>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-blue-100">Port Operations</div>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="text-3xl font-bold mb-2">3</div>
                  <div className="text-blue-100">Active Ports</div>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-blue-100">Years of Service</div>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-blue-100">Commonwealth Coverage</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12">Latest News & Updates</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Port Modernization Project</CardTitle>
                  <CardDescription>December 15, 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Major infrastructure improvements begin at Saipan Port to enhance cargo capacity and efficiency.
                  </p>
                  <Link to="/news" className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Enhanced Ferry Services</CardTitle>
                  <CardDescription>December 10, 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    New scheduling system improves inter-island ferry reliability and passenger experience.
                  </p>
                  <Link to="/news" className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Environmental Initiative</CardTitle>
                  <CardDescription>December 5, 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    CNMI Ports Authority launches green port initiative to reduce environmental impact.
                  </p>
                  <Link to="/news" className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Index;
