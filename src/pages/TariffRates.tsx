
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TariffRates = () => {
  return (
    <>
      <Helmet>
        <title>Tariff Rates - CNMI Ports Authority</title>
        <meta name="description" content="Current tariff rates and fee schedules for CNMI port services." />
      </Helmet>
      
      <Layout>
        <div className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Tariff Rates</h1>
            <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
              Current tariff rates and fee schedules for all CNMI port services.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Cargo Rates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Current cargo handling rates and fees for all types of maritime cargo.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Passenger Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Ferry rates and passenger service fees for inter-island transportation.
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

export default TariffRates;
