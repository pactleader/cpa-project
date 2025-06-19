
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PortTinian = () => {
  return (
    <>
      <Helmet>
        <title>Port of Tinian - CNMI Ports Authority</title>
        <meta name="description" content="Port of Tinian operations, services, and facilities information." />
      </Helmet>
      
      <Layout>
        <div className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Port of Tinian</h1>
            <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
              Strategic cargo and ferry operations connecting Tinian to the Commonwealth network.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Ferry Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Regular ferry connections between Tinian and Saipan, providing essential 
                    inter-island transportation for passengers and vehicles.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cargo Operations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Efficient cargo handling services supporting the economic development and 
                    supply chain needs of Tinian island.
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

export default PortTinian;
