
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

const Media = () => {
  const galleryCategories = [
    {
      title: "Port Operations",
      images: [
        {
          src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
          caption: "Container operations at Port of Saipan"
        },
        {
          src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
          caption: "Daily maritime activities and vessel management"
        },
        {
          src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
          caption: "Cargo handling and logistics operations"
        }
      ]
    },
    {
      title: "Port Facilities",
      images: [
        {
          src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
          caption: "Modern port infrastructure and facilities"
        },
        {
          src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600&h=400&fit=crop",
          caption: "Passenger terminal and waiting areas"
        },
        {
          src: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=600&h=400&fit=crop",
          caption: "Administrative buildings and offices"
        }
      ]
    },
    {
      title: "Community Events",
      images: [
        {
          src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
          caption: "Port authority community outreach programs"
        },
        {
          src: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=600&h=400&fit=crop",
          caption: "Educational visits and maritime awareness events"
        },
        {
          src: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=600&h=400&fit=crop",
          caption: "Special ceremonies and port celebrations"
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Media Gallery - CNMI Ports Authority</title>
        <meta name="description" content="Photo and video gallery showcasing CNMI Ports Authority operations and facilities." />
      </Helmet>
      
      <Layout>
        <div className="relative h-64 md:h-96 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop"
            alt="Media Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Media Gallery</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Explore our photo and video gallery showcasing port operations and facilities.
              </p>
            </div>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            {galleryCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{category.title}</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    {categoryIndex === 0 && "Visual documentation of daily port operations and maritime activities across all three islands."}
                    {categoryIndex === 1 && "Comprehensive views of our modern port facilities and infrastructure serving the Commonwealth."}
                    {categoryIndex === 2 && "Photo coverage of special events, ceremonies, and community engagement activities."}
                  </p>
                </div>

                <Carousel className="w-full max-w-5xl mx-auto">
                  <CarouselContent>
                    {category.images.map((image, imageIndex) => (
                      <CarouselItem key={imageIndex} className="md:basis-1/2 lg:basis-1/3">
                        <Card className="overflow-hidden">
                          <div className="h-64 overflow-hidden">
                            <img
                              src={image.src}
                              alt={image.caption}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <CardContent className="p-4">
                            <p className="text-gray-600 text-sm">{image.caption}</p>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            ))}

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <Card>
                <CardHeader>
                  <CardTitle>Port Operations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Visual documentation of daily port operations and maritime activities across all facilities.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Facilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Comprehensive views of our modern port facilities and infrastructure serving the Commonwealth.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Photo coverage of special events, ceremonies, and community activities throughout the year.
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
