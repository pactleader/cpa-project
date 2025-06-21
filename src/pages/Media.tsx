import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Calendar, Eye, Heart, Share2, Clock, TrendingUp } from "lucide-react";

const Media = () => {
  const [likedNews, setLikedNews] = useState<number[]>([]);

  const toggleLike = (newsId: number) => {
    setLikedNews(prev => 
      prev.includes(newsId) 
        ? prev.filter(id => id !== newsId)
        : [...prev, newsId]
    );
  };

  const featuredNews = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      title: "Port Modernization Project Begins",
      date: "December 15, 2024",
      category: "Infrastructure",
      readTime: "3 min read",
      views: 1250,
      description: "Major infrastructure improvements begin at Saipan Port to enhance cargo capacity and efficiency for the growing Commonwealth economy."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      title: "Enhanced Ferry Services Launch",
      date: "December 10, 2024",
      category: "Transportation",
      readTime: "2 min read",
      views: 890,
      description: "New scheduling system improves inter-island ferry reliability and passenger experience across all three islands."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
      title: "Sustainable Port Operations Initiative",
      date: "December 5, 2024",
      category: "Environment",
      readTime: "4 min read",
      views: 1456,
      description: "CNMI Ports Authority launches new environmental sustainability program to protect our island waters and marine ecosystems."
    }
  ];

  const recentNews = [
    {
      id: 4,
      title: "New Cargo Handling Equipment Arrives",
      date: "December 12, 2024",
      category: "Equipment",
      views: 567,
      summary: "State-of-the-art container cranes delivered to improve port efficiency and reduce vessel waiting times."
    },
    {
      id: 5,
      title: "Holiday Ferry Schedule Announced",
      date: "December 8, 2024",
      category: "Transportation",
      views: 234,
      summary: "Special holiday ferry schedules released for increased inter-island travel during the festive season."
    },
    {
      id: 6,
      title: "Port Security Enhancements Completed",
      date: "December 3, 2024",
      category: "Security",
      views: 789,
      summary: "Advanced security systems installed across all port facilities to ensure safe maritime operations."
    },
    {
      id: 7,
      title: "Community Outreach Program Success",
      date: "November 28, 2024",
      category: "Community",
      views: 345,
      summary: "Local school visits and maritime education programs reach over 500 students across the Commonwealth."
    }
  ];

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
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Infrastructure': 'bg-blue-100 text-blue-800',
      'Transportation': 'bg-green-100 text-green-800',
      'Environment': 'bg-emerald-100 text-emerald-800',
      'Equipment': 'bg-purple-100 text-purple-800',
      'Security': 'bg-red-100 text-red-800',
      'Community': 'bg-orange-100 text-orange-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <>
      <Helmet>
        <title>News - CNMI Ports Authority</title>
        <meta name="description" content="Latest news, updates, and media gallery from the CNMI Ports Authority." />
      </Helmet>
      
      <Layout>
        {/* Enhanced Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600"></div>
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          
          {/* Animated particles */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white opacity-60 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              ></div>
            ))}
          </div>

          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white px-4">
              <div className="animate-fade-in">
                <Badge className="mb-4 bg-white/20 text-white border-white/30">Latest Updates</Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  News
                </h1>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-blue-100">
                  Stay informed with the latest developments and explore our comprehensive media gallery
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Featured News Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-100 text-blue-800">Featured Stories</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Latest News</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Latest developments and major announcements from across our port operations and services.
              </p>
            </div>

            <Carousel className="w-full max-w-6xl mx-auto mb-16">
              <CarouselContent>
                {featuredNews.map((news) => (
                  <CarouselItem key={news.id} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 overflow-hidden">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={news.image}
                          alt={news.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className={getCategoryColor(news.category)}>
                            {news.category}
                          </Badge>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {news.date}
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {news.readTime}
                            </div>
                            <div className="flex items-center">
                              <Eye className="w-4 h-4 mr-1" />
                              {news.views}
                            </div>
                          </div>
                        </div>
                        <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                          {news.title}
                        </CardTitle>
                      </CardHeader>
                      
                      <CardContent className="pt-0">
                        <p className="text-gray-600 mb-4 line-clamp-3">{news.description}</p>
                        <div className="flex items-center justify-between">
                          <Button 
                            variant="outline" 
                            className="group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
                          >
                            Read More
                          </Button>
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => toggleLike(news.id)}
                              className={`transition-colors duration-300 ${
                                likedNews.includes(news.id) ? 'text-red-500 hover:text-red-600' : 'text-gray-400 hover:text-red-500'
                              }`}
                            >
                              <Heart className={`w-4 h-4 ${likedNews.includes(news.id) ? 'fill-current' : ''}`} />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
                              <Share2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden lg:flex" />
              <CarouselNext className="hidden lg:flex" />
            </Carousel>

            {/* Enhanced Recent News Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {recentNews.map((news) => (
                <Card key={news.id} className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className={getCategoryColor(news.category)}>
                        {news.category}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        {news.views} views
                      </div>
                    </div>
                    <div className="text-sm text-blue-600 mb-2 flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {news.date}
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300">
                      {news.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{news.summary}</p>
                    <Button 
                      variant="outline" 
                      className="group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 w-full"
                    >
                      Read More →
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Media Gallery Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-100 text-blue-800">Visual Stories</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Media Gallery</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Visual documentation of our port operations and facilities across the Commonwealth.
              </p>
            </div>

            {galleryCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-20">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">{category.title}</h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
                </div>

                <Carousel className="w-full max-w-6xl mx-auto">
                  <CarouselContent>
                    {category.images.map((image, imageIndex) => (
                      <CarouselItem key={imageIndex} className="md:basis-1/2 lg:basis-1/3">
                        <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                          <div className="relative h-64 overflow-hidden">
                            <img
                              src={image.src}
                              alt={image.caption}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <p className="text-sm font-medium">{image.caption}</p>
                            </div>
                          </div>
                          <CardContent className="p-6">
                            <p className="text-gray-600 text-sm leading-relaxed">{image.caption}</p>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="hidden lg:flex" />
                  <CarouselNext className="hidden lg:flex" />
                </Carousel>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Media;
