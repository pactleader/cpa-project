
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Board = () => {
  const boardMembers = [
    {
      name: "John A. Martinez",
      title: "Chairman",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      name: "Maria C. Santos",
      title: "Vice Chairman",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=300&h=300&fit=crop&crop=face",
      bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      name: "Robert K. Tanaka",
      title: "Board Member",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      name: "Elena R. Guerrero",
      title: "Board Member",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      name: "David L. Chen",
      title: "Board Member",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
    },
    {
      name: "Patricia M. Williams",
      title: "Secretary",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=300&h=300&fit=crop&crop=face",
      bio: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Board of Directors - CNMI Ports Authority</title>
        <meta name="description" content="Meet the Board of Directors of the CNMI Ports Authority." />
      </Helmet>
      
      <Layout>
        <div 
          className="relative bg-blue-900 text-white py-24"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&h=600&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-blue-900 opacity-80"></div>
          <div className="relative container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Board of Directors</h1>
            <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
              Meet the dedicated leaders guiding the CNMI Ports Authority's mission and vision for maritime excellence.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Leadership Team</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {boardMembers.map((member, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 object-cover rounded-full mx-auto shadow-lg"
                      />
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <p className="text-blue-600 font-semibold">{member.title}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Board Responsibilities</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-blue-900 mb-3">Strategic Oversight</h4>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <h4 className="text-lg font-semibold text-blue-900 mb-3">Financial Governance</h4>
                  <p className="text-gray-600">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-900 mb-3">Policy Development</h4>
                  <p className="text-gray-600 mb-4">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <h4 className="text-lg font-semibold text-blue-900 mb-3">Community Engagement</h4>
                  <p className="text-gray-600">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Board;
