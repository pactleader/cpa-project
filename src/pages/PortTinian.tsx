
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

const PortTinian = () => {
  const services = [
    {
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      title: "Ferry Terminal",
      description: "Modern ferry terminal connecting Tinian with Saipan and other islands"
    },
    {
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
      title: "Cargo Operations",
      description: "Efficient cargo handling for essential supplies and commercial goods"
    },
    {
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      title: "Vehicle Transport",
      description: "Roll-on/roll-off services for vehicle transportation between islands"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Port of Tinian - CNMI Ports Authority</title>
        <meta name="description" content="Port of Tinian operations, services, and facilities information." />
      </Helmet>
      
      <Layout>
        <div className="relative h-64 md:h-96 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=600&fit=crop"
            alt="Port of Tinian"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Port of Tinian</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Strategic cargo and ferry operations connecting Tinian to the Commonwealth network.
              </p>
            </div>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card>
                <CardHeader>
                  <CardTitle>Ferry Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Regular ferry connections between Tinian and Saipan, providing essential 
                    inter-island transportation for passengers and vehicles. Our reliable schedule 
                    ensures consistent connectivity for residents, visitors, and commerce.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cargo Operations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Efficient cargo handling services supporting the economic development and 
                    supply chain needs of Tinian island. We handle everything from essential 
                    supplies to commercial goods with care and efficiency.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Port Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive maritime services connecting Tinian to the broader Commonwealth network.
              </p>
            </div>

            <Carousel className="w-full max-w-4xl mx-auto mb-16">
              <CarouselContent>
                {services.map((service, index) => (
                  <CarouselItem key={index} className="md:basis-1/2">
                    <Card className="h-full">
                      <div className="h-48 overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{service.description}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Port Location</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Located on Tinian island, providing essential ferry and cargo services.
              </p>
            </div>

            <Card className="overflow-hidden">
              <div className="h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3823.9876543210987!2d145.6543210987654!3d15.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sTinian%20Port!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Port of Tinian Location"
                ></iframe>
              </div>
            </Card>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default PortTinian;
