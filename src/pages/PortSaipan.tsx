
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PortSaipan = () => {
  return (
    <>
      <Helmet>
        <title>Port of Saipan - CNMI Ports Authority</title>
        <meta name="description" content="Port of Saipan operations, services, and facilities information." />
      </Helmet>
      
      <Layout>
        <div className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Port of Saipan</h1>
            <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
              The main commercial and passenger hub serving the Commonwealth of the Northern Mariana Islands.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Port Operations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    The Port of Saipan operates 24/7 providing comprehensive maritime services including cargo handling, 
                    passenger ferry operations, and vessel management.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Facilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Modern port facilities equipped with state-of-the-art cargo handling equipment and 
                    passenger amenities to serve the growing needs of the Commonwealth.
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

export default PortSaipan;
