
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PortRota = () => {
  const features = [
    {
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
      title: "Island Connectivity",
      description: "Essential transportation links maintaining Rota's connection to the Commonwealth"
    },
    {
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600&h=400&fit=crop",
      title: "Community Services",
      description: "Dedicated port services supporting the unique needs of the Rota community"
    },
    {
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      title: "Cultural Heritage",
      description: "Preserving island traditions while maintaining modern maritime connections"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Port of Rota - CNMI Ports Authority</title>
        <meta name="description" content="Port of Rota operations, services, and facilities information." />
      </Helmet>
      
      <Layout>
        <div className="relative h-64 md:h-96 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&h=600&fit=crop"
            alt="Port of Rota"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Port of Rota</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Essential island connectivity and maritime services for the island of Rota.
              </p>
            </div>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card>
                <CardHeader>
                  <CardTitle>Island Connectivity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Vital transportation links connecting Rota to the Commonwealth network, 
                    ensuring reliable access to essential goods and services while maintaining 
                    the island's unique character and community bonds.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Community Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Dedicated port services supporting the unique needs of the Rota community 
                    and preserving the island's cultural heritage while providing modern 
                    maritime connectivity and essential services.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Port Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized services designed to meet Rota's unique community and connectivity needs.
              </p>
            </div>

            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {features.map((feature, index) => (
                  <CarouselItem key={index} className="md:basis-1/2">
                    <Card className="h-full">
                      <div className="h-48 overflow-hidden">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default PortRota;
