
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const News = () => {
  return (
    <>
      <Helmet>
        <title>News & Updates - CNMI Ports Authority</title>
        <meta name="description" content="Latest news and updates from the CNMI Ports Authority." />
      </Helmet>
      
      <Layout>
        <div className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">News & Updates</h1>
            <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
              Stay informed with the latest news and updates from CNMI Ports Authority.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Port Modernization Project</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Major infrastructure improvements begin at Saipan Port to enhance cargo capacity and efficiency.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Enhanced Ferry Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    New scheduling system improves inter-island ferry reliability and passenger experience.
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

export default News;
