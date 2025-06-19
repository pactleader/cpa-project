
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

const News = () => {
  const featuredNews = [
    {
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      title: "Port Modernization Project Begins",
      date: "December 15, 2024",
      description: "Major infrastructure improvements begin at Saipan Port to enhance cargo capacity and efficiency for the growing Commonwealth economy."
    },
    {
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      title: "Enhanced Ferry Services Launch",
      date: "December 10, 2024",
      description: "New scheduling system improves inter-island ferry reliability and passenger experience across all three islands."
    },
    {
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
      title: "Sustainable Port Operations Initiative",
      date: "December 5, 2024",
      description: "CNMI Ports Authority launches new environmental sustainability program to protect our island waters and marine ecosystems."
    }
  ];

  const recentNews = [
    {
      title: "New Cargo Handling Equipment Arrives",
      date: "December 12, 2024",
      summary: "State-of-the-art container cranes delivered to improve port efficiency and reduce vessel waiting times."
    },
    {
      title: "Holiday Ferry Schedule Announced",
      date: "December 8, 2024",
      summary: "Special holiday ferry schedules released for increased inter-island travel during the festive season."
    },
    {
      title: "Port Security Enhancements Completed",
      date: "December 3, 2024",
      summary: "Advanced security systems installed across all port facilities to ensure safe maritime operations."
    },
    {
      title: "Community Outreach Program Success",
      date: "November 28, 2024",
      summary: "Local school visits and maritime education programs reach over 500 students across the Commonwealth."
    }
  ];

  return (
    <>
      <Helmet>
        <title>News & Updates - CNMI Ports Authority</title>
        <meta name="description" content="Latest news and updates from the CNMI Ports Authority." />
      </Helmet>
      
      <Layout>
        <div className="relative h-64 md:h-96 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop"
            alt="News and Updates"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">News & Updates</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Stay informed with the latest news and updates from CNMI Ports Authority.
              </p>
            </div>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured News</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Latest developments and major announcements from across our port operations and services.
              </p>
            </div>

            <Carousel className="w-full max-w-5xl mx-auto mb-16">
              <CarouselContent>
                {featuredNews.map((news, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full">
                      <div className="h-48 overflow-hidden">
                        <img
                          src={news.image}
                          alt={news.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <div className="text-sm text-blue-600 mb-2">{news.date}</div>
                        <CardTitle className="text-lg">{news.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{news.description}</p>
                        <button className="text-blue-600 hover:text-blue-800 font-semibold mt-4">
                          Read More →
                        </button>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Recent Updates</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Quick updates on ongoing projects, service announcements, and community initiatives.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {recentNews.map((news, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-sm text-blue-600 mb-2">{news.date}</div>
                    <CardTitle className="text-xl">{news.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{news.summary}</p>
                    <button className="text-blue-600 hover:text-blue-800 font-semibold mt-4">
                      Read More →
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default News;
