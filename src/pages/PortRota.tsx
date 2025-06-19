
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PortRota = () => {
  return (
    <>
      <Helmet>
        <title>Port of Rota - CNMI Ports Authority</title>
        <meta name="description" content="Port of Rota operations, services, and facilities information." />
      </Helmet>
      
      <Layout>
        <div className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Port of Rota</h1>
            <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
              Essential island connectivity and maritime services for the island of Rota.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Island Connectivity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Vital transportation links connecting Rota to the Commonwealth network, 
                    ensuring reliable access to essential goods and services.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Community Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Dedicated port services supporting the unique needs of the Rota community 
                    and preserving the island's cultural heritage.
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

export default PortRota;
