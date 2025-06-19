
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions - CNMI Ports Authority</title>
        <meta name="description" content="Frequently asked questions about CNMI port services and operations." />
      </Helmet>
      
      <Layout>
        <div className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
              Find answers to common questions about our services and operations.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-1 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>General Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Common questions about port operations, services, and general information.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Ferry Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Questions about inter-island ferry schedules, reservations, and policies.
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

export default FAQ;
