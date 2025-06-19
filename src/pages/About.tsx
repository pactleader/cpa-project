
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - CNMI Ports Authority</title>
        <meta name="description" content="Learn about the Commonwealth of the Northern Mariana Islands Ports Authority's mission, history, and commitment to maritime excellence." />
      </Helmet>
      
      <Layout>
        <div className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">About CNMI Ports Authority</h1>
            <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
              Serving the Commonwealth with dedication, integrity, and excellence in maritime operations since 1969.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  The Commonwealth of the Northern Mariana Islands Ports Authority is committed to providing 
                  safe, efficient, and reliable maritime transportation services that support economic development, 
                  enhance connectivity, and serve the needs of our island communities.
                </p>
                <p className="text-lg text-gray-600">
                  We strive to maintain world-class port facilities while preserving our natural environment 
                  and supporting the cultural heritage of the Northern Mariana Islands.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop"
                  alt="Port operations"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Safety First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Maintaining the highest safety standards in all port operations and maritime activities 
                    to protect our workers, visitors, and the environment.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Economic Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Supporting the Commonwealth's economy through efficient cargo handling, tourism facilitation, 
                    and strategic infrastructure investments.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Community Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Serving our island communities with reliable inter-island transportation and maintaining 
                    vital connections between Saipan, Tinian, and Rota.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 mb-16">
              <h3 className="text-2xl font-bold mb-6">Our History</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-blue-900 mb-2">1969 - Foundation</h4>
                  <p className="text-gray-600">
                    The CNMI Ports Authority was established to manage and operate maritime facilities 
                    throughout the Commonwealth, supporting the growing needs of the island communities.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-900 mb-2">1980s - Expansion</h4>
                  <p className="text-gray-600">
                    Major infrastructure developments expanded port capacity and modernized facilities 
                    to accommodate increased cargo volume and tourism growth.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-900 mb-2">2000s - Modernization</h4>
                  <p className="text-gray-600">
                    Comprehensive modernization programs improved port efficiency, safety standards, 
                    and environmental protection measures across all facilities.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-900 mb-2">Present - Innovation</h4>
                  <p className="text-gray-600">
                    Today, we continue to innovate with digital systems, sustainable practices, 
                    and enhanced service delivery to meet the evolving needs of the Commonwealth.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Leadership</h3>
              <p className="text-lg text-gray-600 mb-8">
                Our experienced leadership team brings decades of maritime expertise and commitment 
                to serving the Commonwealth of the Northern Mariana Islands.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Executive Director</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Leading strategic planning and operations oversight to ensure efficient 
                      port management and sustainable growth.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Operations Manager</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Supervising daily port operations, safety protocols, and service delivery 
                      across all three port locations.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
