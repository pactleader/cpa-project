
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import ImageSlider from "@/components/ImageSlider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Anchor, Ship, Truck, Users } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Ship,
      title: "Port Operations",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Comprehensive maritime services across all three islands.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=200&fit=crop"
    },
    {
      icon: Truck,
      title: "Cargo Services",
      description: "Ut enim ad minim veniam, quis nostrud exercitation. Efficient cargo handling and logistics solutions.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop"
    },
    {
      icon: Anchor,
      title: "Ferry Services",
      description: "Duis aute irure dolor in reprehenderit. Reliable inter-island passenger and vehicle transportation.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=200&fit=crop"
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Excepteur sint occaecat cupidatat non proident. Serving the Commonwealth with dedication and excellence.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop"
    }
  ];

  return (
    <>
      <Helmet>
        <title>CNMI Ports Authority - Connecting the Commonwealth</title>
        <meta name="description" content="The Commonwealth of the Northern Mariana Islands Ports Authority provides essential maritime services connecting Saipan, Tinian, and Rota." />
      </Helmet>
      
      <Layout>
        {/* Hero Section with Image Slider */}
        <div className="relative">
          <ImageSlider />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Connecting the Commonwealth
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
                Explore Our Services
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <feature.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <img 
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-32 object-cover rounded mb-4"
                    />
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Ports Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Ports</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-cover bg-center" 
                     style={{backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=300&fit=crop')"}}>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Port of Saipan</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. The main commercial and passenger hub serving the Commonwealth.
                  </p>
                  <button className="text-blue-600 hover:text-blue-800 font-semibold">
                    Learn More →
                  </button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-cover bg-center" 
                     style={{backgroundImage: "url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=300&fit=crop')"}}>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Port of Tinian</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Ut enim ad minim veniam, quis nostrud exercitation. Strategic cargo and ferry operations connecting Tinian to the network.
                  </p>
                  <button className="text-blue-600 hover:text-blue-800 font-semibold">
                    Learn More →
                  </button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-cover bg-center" 
                     style={{backgroundImage: "url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=300&fit=crop')"}}>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Port of Rota</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Duis aute irure dolor in reprehenderit. Essential island connectivity and maritime services for the island of Rota.
                  </p>
                  <button className="text-blue-600 hover:text-blue-800 font-semibold">
                    Learn More →
                  </button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="space-x-4">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Us
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                View Services
              </button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Index;
