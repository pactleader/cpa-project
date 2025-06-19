
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Careers = () => {
  return (
    <>
      <Helmet>
        <title>Career Opportunities - CNMI Ports Authority</title>
        <meta name="description" content="Join the CNMI Ports Authority team. Explore career opportunities and job listings." />
      </Helmet>
      
      <Layout>
        <div className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Career Opportunities</h1>
            <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
              Join our team and contribute to the maritime future of the Commonwealth.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Open Positions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Explore current job openings and career opportunities at CNMI Ports Authority.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Benefits & Culture</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Learn about our workplace culture, benefits, and commitment to employee development.
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

export default Careers;
