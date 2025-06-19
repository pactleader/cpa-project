
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Documents = () => {
  return (
    <>
      <Helmet>
        <title>Documents & Forms - CNMI Ports Authority</title>
        <meta name="description" content="Access important documents, permits, and forms for CNMI port services." />
      </Helmet>
      
      <Layout>
        <div className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Documents & Forms</h1>
            <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
              Access important documents, permits, and interactive forms for port services.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Port Permits</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Download and submit required permits for port operations and vessel management.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Landing Requests</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Interactive forms for vessel landing requests and berth reservations.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cargo Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Forms and documentation required for cargo handling and customs procedures.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Documents;
