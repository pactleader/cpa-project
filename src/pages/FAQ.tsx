import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search, Ship, FileText, CreditCard, Phone, MapPin, Clock, Users } from "lucide-react";
const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const faqData = {
    general: [{
      question: "What are the operating hours of CNMI Ports Authority?",
      answer: "Our ports operate 24/7 for cargo operations. Administrative offices are open Monday through Friday, 8:00 AM to 5:00 PM. Emergency services are available around the clock.",
      tags: ["hours", "operations"]
    }, {
      question: "How can I contact the port authority?",
      answer: "You can reach us by phone at (670) 664-4201, email at info@cnmiports.com, or visit our offices at each port location. For emergencies, call our 24-hour hotline at (670) 664-4200.",
      tags: ["contact", "emergency"]
    }, {
      question: "What services does CNMI Ports Authority provide?",
      answer: "We provide comprehensive port services including cargo handling, vessel berthing, passenger ferry services, warehouse facilities, customs coordination, and port security. We also manage three major ports across Saipan, Tinian, and Rota.",
      tags: ["services", "facilities"]
    }, {
      question: "Are there restrictions on cargo types?",
      answer: "Yes, certain hazardous materials, prohibited items, and restricted goods require special permits or are banned entirely. Please consult our cargo regulations or contact our operations team for specific requirements.",
      tags: ["cargo", "restrictions"]
    }],
    ferry: [{
      question: "How do I make a ferry reservation?",
      answer: "Ferry reservations can be made online through our booking system, by phone at (670) 664-4201, or at the port ticket office. We recommend booking at least 24 hours in advance, especially during peak travel periods.",
      tags: ["booking", "reservation"]
    }, {
      question: "What is the ferry schedule between islands?",
      answer: "Ferry services operate Tuesday, Thursday, and Saturday between Saipan-Tinian-Rota. Departure times vary by season. Check our current schedule on the website or call for the most up-to-date information.",
      tags: ["schedule", "inter-island"]
    }, {
      question: "What can I bring on the ferry?",
      answer: "Passengers can bring personal luggage, small vehicles (with advance reservation), and approved cargo items. Prohibited items include hazardous materials, weapons, and oversized cargo without proper permits.",
      tags: ["luggage", "vehicles", "restrictions"]
    }, {
      question: "What happens if the ferry is cancelled due to weather?",
      answer: "In case of weather-related cancellations, passengers are automatically rescheduled to the next available sailing at no extra charge. We provide 24-hour advance notice when possible and offer full refunds for cancelled services.",
      tags: ["weather", "cancellation", "refund"]
    }, {
      question: "Are there discounts for residents or frequent travelers?",
      answer: "Yes! CNMI residents receive a 25% discount with valid ID. We also offer frequent traveler cards with accumulated discounts and group rates for 10 or more passengers.",
      tags: ["discounts", "residents", "groups"]
    }],
    cargo: [{
      question: "How do I ship cargo through CNMI ports?",
      answer: "Contact our cargo operations team to schedule shipments. You'll need to provide shipping documents, cargo manifests, and comply with customs requirements. Our team will guide you through the entire process.",
      tags: ["shipping", "documentation"]
    }, {
      question: "What are the cargo handling fees?",
      answer: "Cargo fees vary by type, weight, and destination. Standard container handling starts at $150 per TEU. Bulk cargo, oversized items, and hazardous materials have different rate structures. Contact us for a detailed quote.",
      tags: ["fees", "rates", "container"]
    }, {
      question: "How long can cargo be stored at the port?",
      answer: "Standard free storage is 7 days for import cargo and 14 days for export cargo. Extended storage is available at daily rates. Perishable goods have priority handling and reduced storage time limits.",
      tags: ["storage", "timeline", "perishable"]
    }, {
      question: "What documentation is required for international shipments?",
      answer: "International shipments require commercial invoices, packing lists, bills of lading, customs declarations, and any required permits or certificates. Our documentation team can assist with paperwork preparation.",
      tags: ["documentation", "international", "customs"]
    }],
    facilities: [{
      question: "What facilities are available at each port?",
      answer: "All ports feature modern cargo handling equipment, warehouse facilities, passenger terminals, parking areas, and security systems. Saipan offers the most comprehensive facilities including container yards and heavy-lift capabilities.",
      tags: ["facilities", "equipment"]
    }, {
      question: "Are there dining and shopping options at the ports?",
      answer: "Saipan port features a café, gift shop, and vending machines. Tinian and Rota have basic amenities and vending services. All ports have clean restroom facilities and waiting areas.",
      tags: ["amenities", "dining", "shopping"]
    }, {
      question: "Is parking available at the ports?",
      answer: "Yes, all ports offer free parking for passengers and visitors. Long-term parking is available for inter-island travelers. Commercial vehicle parking requires advance coordination with port operations.",
      tags: ["parking", "vehicles"]
    }, {
      question: "Are the ports accessible for people with disabilities?",
      answer: "All CNMI ports are ADA compliant with wheelchair accessible ramps, elevators, restrooms, and designated parking spaces. Staff assistance is available upon request for boarding and navigation.",
      tags: ["accessibility", "ADA", "assistance"]
    }],
    regulations: [{
      question: "What are the security procedures at CNMI ports?",
      answer: "All ports maintain ISPS (International Ship and Port Facility Security) compliance. This includes ID checks, baggage screening, vehicle inspections, and restricted area access controls. Allow extra time for security procedures.",
      tags: ["security", "ISPS", "procedures"]
    }, {
      question: "What items are prohibited in port areas?",
      answer: "Prohibited items include weapons, explosives, illegal drugs, large quantities of liquids, and items deemed security risks. Agricultural products may require inspection. Check our prohibited items list before visiting.",
      tags: ["prohibited", "security", "restrictions"]
    }, {
      question: "Do I need special permits for commercial activities?",
      answer: "Yes, commercial activities require proper permits and licenses. This includes cargo operations, vessel services, and business activities within port premises. Contact our regulatory affairs office for permit applications.",
      tags: ["permits", "commercial", "licensing"]
    }, {
      question: "What are the environmental regulations for port operations?",
      answer: "We strictly enforce environmental protection measures including waste management, oil spill prevention, air quality monitoring, and marine ecosystem protection. All operators must comply with EPA and local environmental standards.",
      tags: ["environment", "regulations", "compliance"]
    }]
  };
  const allFAQs = Object.values(faqData).flat();
  const filteredFAQs = searchTerm ? allFAQs.filter(faq => faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) || faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))) : [];
  const categoryIcons = {
    general: Users,
    ferry: Ship,
    cargo: FileText,
    facilities: MapPin,
    regulations: Clock
  };
  const categoryLabels = {
    general: "General Information",
    ferry: "Ferry Services",
    cargo: "Cargo Operations",
    facilities: "Port Facilities",
    regulations: "Rules & Regulations"
  };
  return <>
      <Helmet>
        <title>Frequently Asked Questions - CNMI Ports Authority</title>
        <meta name="description" content="Comprehensive FAQ covering ferry services, cargo operations, port facilities, and regulations for CNMI Ports Authority." />
      </Helmet>
      
      <Layout>
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                Frequently Asked Questions
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 animate-fade-in">
                Find answers to common questions about our services and operations
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto animate-scale-in">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input type="text" placeholder="Search FAQs..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="pl-12 pr-4 py-4 text-lg rounded-full border-0 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:bg-white/20 transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Search Results */}
        {searchTerm && <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Search Results for "{searchTerm}"
              </h2>
              {filteredFAQs.length > 0 ? <div className="max-w-4xl mx-auto">
                  <Accordion type="single" collapsible className="space-y-4">
                    {filteredFAQs.map((faq, index) => <AccordionItem key={index} value={`search-${index}`} className="bg-white rounded-lg shadow-md border-0 overflow-hidden hover:shadow-lg transition-all duration-300">
                        <AccordionTrigger className="px-6 py-4 text-left hover:bg-blue-50 transition-colors">
                          <div className="flex flex-col items-start">
                            <span className="font-semibold text-gray-900">{faq.question}</span>
                            <div className="flex gap-2 mt-2">
                              {faq.tags.map(tag => <Badge key={tag} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>)}
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>)}
                  </Accordion>
                </div> : <div className="text-center py-12">
                  <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-xl text-gray-600">No results found for "{searchTerm}"</p>
                  <p className="text-gray-500 mt-2">Try different keywords or browse our categories below</p>
                </div>}
            </div>
          </section>}

        {/* FAQ Categories */}
        {!searchTerm && <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Browse by Category</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Select a category below to find specific information about our services
                </p>
              </div>

              <Tabs defaultValue="general" className="max-w-6xl mx-auto py-[10px]">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8 bg-gray-100 p-2 py-[10px] px-[10px] rounded-lg">
                  {Object.entries(categoryLabels).map(([key, label]) => {
                const IconComponent = categoryIcons[key as keyof typeof categoryIcons];
                return <TabsTrigger key={key} value={key} className="flex flex-col items-center gap-2 px-2 data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md transition-all duration-200 py-[12px]">
                        <IconComponent className="h-5 w-5" />
                        <span className="text-xs md:text-sm font-medium">{label}</span>
                      </TabsTrigger>;
              })}
                </TabsList>

                {Object.entries(faqData).map(([category, faqs]) => <TabsContent key={category} value={category} className="mt-8">
                    <Card className="border-0 shadow-lg">
                      <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg py-[5px] my-[5px]">
                        <div className="flex items-center gap-3">
                          {React.createElement(categoryIcons[category as keyof typeof categoryIcons], {
                      className: "h-8 w-8"
                    })}
                          <div>
                            <CardTitle className="text-2xl">{categoryLabels[category as keyof typeof categoryLabels]}</CardTitle>
                            <p className="text-blue-100 mt-1">{faqs.length} frequently asked questions</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-0">
                        <Accordion type="single" collapsible className="divide-y">
                          {faqs.map((faq, index) => <AccordionItem key={index} value={`${category}-${index}`} className="border-0 px-6 hover:bg-gray-50 transition-colors">
                              <AccordionTrigger className="py-6 text-left hover:no-underline">
                                <div className="flex flex-col items-start w-full">
                                  <span className="font-semibold text-gray-900 text-lg mb-2">
                                    {faq.question}
                                  </span>
                                  <div className="flex gap-2">
                                    {faq.tags.map(tag => <Badge key={tag} variant="outline" className="text-xs">
                                        {tag}
                                      </Badge>)}
                                  </div>
                                </div>
                              </AccordionTrigger>
                              <AccordionContent className="pb-6 text-gray-600 leading-relaxed text-base">
                                {faq.answer}
                              </AccordionContent>
                            </AccordionItem>)}
                        </Accordion>
                      </CardContent>
                    </Card>
                  </TabsContent>)}
              </Tabs>
            </div>
          </section>}

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our customer service team is here to help.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <div className="flex items-center gap-3">
                <Phone className="h-6 w-6 text-blue-300" />
                <div className="text-left">
                  <p className="font-semibold">Call Us</p>
                  <p className="text-blue-200">(670) 664-4201</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-blue-300" />
                <div className="text-left">
                  <p className="font-semibold">Business Hours</p>
                  <p className="text-blue-200">Mon-Fri 8AM-5PM</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-blue-300" />
                <div className="text-left">
                  <p className="font-semibold">Visit Us</p>
                  <p className="text-blue-200">Port Locations</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>;
};
export default FAQ;