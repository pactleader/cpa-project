
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, Upload, ExternalLink } from "lucide-react";
import LandingRequestForm from "@/components/LandingRequestForm";

const Documents = () => {
  return (
    <>
      <Helmet>
        <title>Documents & Forms - CNMI Ports Authority</title>
        <meta name="description" content="Access important documents, permits, and forms for CNMI port services." />
      </Helmet>
      
      <Layout>
        <div 
          className="relative bg-blue-900 text-white py-24"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1200&h=600&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-blue-900 opacity-80"></div>
          <div className="relative container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Documents & Forms</h1>
            <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
              Access important documents, permits, and interactive forms for all port services and operations.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <FileText className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle>Port Permits</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <img 
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=200&fit=crop" 
                    alt="Port permits documentation"
                    className="w-full h-32 object-cover rounded mb-4"
                  />
                  <p className="text-gray-600 mb-4">
                    Download and submit required permits for port operations and vessel management.
                  </p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors inline-flex items-center">
                    <Download className="w-4 h-4 mr-2" />
                    Download Forms
                  </button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Upload className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle>Landing Requests</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=200&fit=crop" 
                    alt="Landing request forms"
                    className="w-full h-32 object-cover rounded mb-4"
                  />
                  <p className="text-gray-600 mb-4">
                    Interactive forms for vessel landing requests and berth reservations.
                  </p>
                  <button 
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors inline-flex items-center"
                    onClick={() => document.getElementById('landing-form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Submit Request
                  </button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <FileText className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle>Cargo Documentation</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop" 
                    alt="Cargo documentation"
                    className="w-full h-32 object-cover rounded mb-4"
                  />
                  <p className="text-gray-600 mb-4">
                    Forms and documentation required for cargo handling and customs procedures.
                  </p>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors inline-flex items-center">
                    <Download className="w-4 h-4 mr-2" />
                    Access Forms
                  </button>
                </CardContent>
              </Card>
            </div>

            {/* Additional Document Sections */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <FileText className="w-8 h-8 text-orange-600" />
                  </div>
                  <CardTitle>CPA ADA - Section 504 Policy</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <img 
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=200&fit=crop" 
                    alt="ADA Policy documentation"
                    className="w-full h-32 object-cover rounded mb-4"
                  />
                  <p className="text-gray-600 mb-4">
                    Access the CNMI Ports Authority ADA Section 504 Policy document.
                  </p>
                  <a 
                    href="https://cnmiports.com/ada_policy_2022.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors inline-flex items-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Policy
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <FileText className="w-8 h-8 text-red-600" />
                  </div>
                  <CardTitle>CPA Rules and Regulations - Title 40</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <img 
                    src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=200&fit=crop" 
                    alt="Rules and regulations documentation"
                    className="w-full h-32 object-cover rounded mb-4"
                  />
                  <p className="text-gray-600 mb-4">
                    Access the complete CNMI Ports Authority rules and regulations under Title 40.
                  </p>
                  <a 
                    href="https://www.cnmilaw.org/admin.php#gsc.tab=0" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors inline-flex items-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Regulations
                  </a>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Document Categories</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <h4 className="font-semibold text-blue-900 mb-2">Vessel Operations</h4>
                  <p className="text-gray-600 text-sm">
                    Forms and permits for vessel operations and port access.
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-blue-900 mb-2">Cargo Handling</h4>
                  <p className="text-gray-600 text-sm">
                    Documentation for cargo handling and customs procedures.
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-blue-900 mb-2">Safety Compliance</h4>
                  <p className="text-gray-600 text-sm">
                    Safety regulations and compliance documentation.
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-blue-900 mb-2">Environmental</h4>
                  <p className="text-gray-600 text-sm">
                    Environmental protection policies and procedures.
                  </p>
                </div>
              </div>
            </div>

            {/* Landing Request Form */}
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
