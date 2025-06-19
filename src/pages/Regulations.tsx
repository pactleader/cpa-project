
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Regulations = () => {
  return (
    <>
      <Helmet>
        <title>Regulations & Policies - CNMI Ports Authority</title>
        <meta name="description" content="Port regulations, policies, and compliance information for CNMI maritime operations." />
      </Helmet>
      
      <Layout>
        <div className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Regulations & Policies</h1>
            <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
              Important regulations, policies, and compliance information for port operations.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Port Regulations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Official port regulations governing maritime operations and vessel management.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Safety Policies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Comprehensive safety policies and procedures for all port activities.
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

export default Regulations;
