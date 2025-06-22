
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

const PortSaipan = () => {
  const facilities = [
    {
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      title: "Container Terminal",
      description: "Modern container handling facilities with advanced cargo management systems"
    },
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      title: "Passenger Terminal",
      description: "Comfortable passenger facilities with modern amenities for inter-island travel"
    },
    {
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      title: "Cargo Warehouse",
      description: "Secure storage facilities for various types of cargo and freight operations"
    },
    {
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
      title: "Marina Services",
      description: "Full-service marina with boat maintenance and recreational vessel support"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Port of Saipan - CNMI Ports Authority</title>
        <meta name="description" content="Port of Saipan operations, services, and facilities information." />
      </Helmet>
      
      <Layout>
        <div className="relative h-64 md:h-96 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop"
            alt="Port of Saipan"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Port of Saipan</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                The main commercial and passenger hub serving the Commonwealth of the Northern Mariana Islands.
              </p>
            </div>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card>
                <CardHeader>
                  <CardTitle>Port Operations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    The Port of Saipan operates 24/7 providing comprehensive maritime services including cargo handling, 
                    passenger ferry operations, and vessel management. Our experienced team ensures efficient and safe 
                    operations for all maritime activities.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Container and cargo handling services</li>
                    <li>• Inter-island ferry operations</li>
                    <li>• Vessel berthing and anchorage</li>
                    <li>• Customs and immigration processing</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Modern Facilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Modern port facilities equipped with state-of-the-art cargo handling equipment and 
                    passenger amenities to serve the growing needs of the Commonwealth. Our infrastructure 
                    supports both commercial and recreational maritime activities.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Advanced container cranes and equipment</li>
                    <li>• Climate-controlled cargo storage</li>
                    <li>• Modern passenger terminals</li>
                    <li>• Marina and recreational facilities</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Port Facilities</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our modern facilities designed to support efficient maritime operations and passenger services.
              </p>
            </div>

            <Carousel className="w-full max-w-5xl mx-auto mb-16">
              <CarouselContent>
                {facilities.map((facility, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full">
                      <div className="h-48 overflow-hidden">
                        <img
                          src={facility.image}
                          alt={facility.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{facility.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{facility.description}</p>
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
                Find us at the main commercial harbor in Saipan, Commonwealth of the Northern Mariana Islands.
              </p>
            </div>

            <Card className="overflow-hidden">
              <div className="h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3823.5234567890123!2d145.7123456789012!3d15.234567890123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSaipan%20Port!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Port of Saipan Location"
                ></iframe>
              </div>
            </Card>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default PortSaipan;
