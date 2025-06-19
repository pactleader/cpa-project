
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll respond within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - CNMI Ports Authority</title>
        <meta name="description" content="Contact the CNMI Ports Authority for inquiries, support, or information about our maritime services." />
      </Helmet>
      
      <Layout>
        <div className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Contact Us</h1>
            <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
              Get in touch with our team for any questions, concerns, or assistance with our services.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="mt-1"
                    />
                  </div>
                  <Button type="submit" className="w-full md:w-auto">
                    Send Message
                  </Button>
                </form>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                          Main Office - Saipan
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">
                          P.O. Box 1055<br />
                          Saipan, MP 96950<br />
                          Commonwealth of the Northern Mariana Islands
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Phone className="h-5 w-5 mr-2 text-blue-600" />
                          Phone & Fax
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">
                          Phone: (670) 664-3200<br />
                          Fax: (670) 664-3210<br />
                          Emergency: (670) 664-3333
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Mail className="h-5 w-5 mr-2 text-blue-600" />
                          Email
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">
                          General Inquiries: info@cnmiports.com<br />
                          Operations: operations@cnmiports.com<br />
                          Administration: admin@cnmiports.com
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Clock className="h-5 w-5 mr-2 text-blue-600" />
                          Office Hours
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">
                          Monday - Friday: 7:30 AM - 4:30 PM<br />
                          Saturday: 8:00 AM - 12:00 PM<br />
                          Sunday: Closed<br />
                          <span className="text-sm text-gray-500">Port operations continue 24/7</span>
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-12">Port Locations</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Port of Saipan</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Main commercial port serving as the primary gateway for cargo and passenger operations.
                  </p>
                  <div className="text-sm text-gray-500">
                    <p>Port Operations: (670) 664-3201</p>
                    <p>Cargo Services: (670) 664-3202</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Port of Tinian</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Strategic location supporting cargo operations and inter-island ferry services.
                  </p>
                  <div className="text-sm text-gray-500">
                    <p>Port Operations: (670) 433-3050</p>
                    <p>Ferry Services: (670) 433-3051</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Port of Rota</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Essential port facility providing vital connectivity and services for Rota island.
                  </p>
                  <div className="text-sm text-gray-500">
                    <p>Port Operations: (670) 532-9451</p>
                    <p>General Services: (670) 532-9452</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
