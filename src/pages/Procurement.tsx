
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Procurement = () => {
  return (
    <>
      <Helmet>
        <title>Procurement - CNMI Ports Authority</title>
        <meta name="description" content="Procurement opportunities and bid notices from the CNMI Ports Authority." />
      </Helmet>
      
      <Layout>
        <div className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Procurement</h1>
            <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
              Procurement opportunities, bid notices, and vendor information for CNMI Ports Authority.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Current Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Active procurement opportunities and requests for proposals from CNMI Ports Authority.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Vendor Registration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Information for vendors interested in doing business with CNMI Ports Authority.
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

export default Procurement;
