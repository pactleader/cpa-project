
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Board = () => {
  return (
    <>
      <Helmet>
        <title>Board of Directors - CNMI Ports Authority</title>
        <meta name="description" content="Meet the Board of Directors of the CNMI Ports Authority." />
      </Helmet>
      
      <Layout>
        <div className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Board of Directors</h1>
            <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
              Meet the dedicated leaders guiding the CNMI Ports Authority's mission and vision.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Board Chairman</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Leading strategic oversight and governance of the CNMI Ports Authority operations.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Board Members</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Experienced professionals providing guidance and expertise in maritime operations.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Executive Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Operational leadership ensuring efficient day-to-day management of port facilities.
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

export default Board;
