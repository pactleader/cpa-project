
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Media = () => {
  return (
    <>
      <Helmet>
        <title>Media Gallery - CNMI Ports Authority</title>
        <meta name="description" content="Photo and video gallery showcasing CNMI Ports Authority operations and facilities." />
      </Helmet>
      
      <Layout>
        <div className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Media Gallery</h1>
            <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
              Explore our photo and video gallery showcasing port operations and facilities.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Port Operations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Visual documentation of daily port operations and maritime activities.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Facilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Comprehensive views of our modern port facilities and infrastructure.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Photo coverage of special events, ceremonies, and community activities.
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

export default Media;
