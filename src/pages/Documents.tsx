
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, Upload } from "lucide-react";

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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Download and submit required permits for port operations and vessel management.
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
                    Ut enim ad minim veniam, quis nostrud exercitation. Interactive forms for vessel landing requests and berth reservations.
                  </p>
                  <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors inline-flex items-center">
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
                    Duis aute irure dolor in reprehenderit. Forms and documentation required for cargo handling and customs procedures.
                  </p>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors inline-flex items-center">
                    <Download className="w-4 h-4 mr-2" />
                    Access Forms
                  </button>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Document Categories</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <h4 className="font-semibold text-blue-900 mb-2">Vessel Operations</h4>
                  <p className="text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-blue-900 mb-2">Cargo Handling</h4>
                  <p className="text-gray-600 text-sm">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-blue-900 mb-2">Safety Compliance</h4>
                  <p className="text-gray-600 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit.
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-blue-900 mb-2">Environmental</h4>
                  <p className="text-gray-600 text-sm">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Documents;
