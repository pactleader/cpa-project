
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const CitizenCentricReports = () => {
  const reports = [
    {
      year: "2024",
      title: "Citizen Centric Report 2024",
      description: "Comprehensive annual report showcasing CNMI Ports Authority's commitment to transparency and citizen-focused services.",
      fileSize: "2.3 MB",
      url: "https://cnmiports.com/CPA_CCR-2024.pdf",
      date: "Published: December 2024"
    },
    {
      year: "2023",
      title: "Citizen Centric Report 2023",
      description: "Annual transparency report highlighting port operations, community initiatives, and performance metrics for fiscal year 2023.",
      fileSize: "2.1 MB",
      url: "#",
      date: "Published: December 2023"
    },
    {
      year: "2022",
      title: "Citizen Centric Report 2022",
      description: "Detailed overview of port authority activities, financial performance, and community impact during fiscal year 2022.",
      fileSize: "1.9 MB",
      url: "#",
      date: "Published: December 2022"
    },
    {
      year: "2021",
      title: "Citizen Centric Report 2021",
      description: "Annual report covering port modernization efforts, COVID-19 response, and continued service delivery improvements.",
      fileSize: "2.0 MB",
      url: "#",
      date: "Published: December 2021"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Citizen Centric Reports - CNMI Ports Authority</title>
        <meta name="description" content="Access annual Citizen Centric Reports from CNMI Ports Authority showcasing transparency and accountability." />
      </Helmet>
      
      <Layout>
        <div className="relative h-64 md:h-96 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop"
            alt="Citizen Centric Reports"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Citizen Centric Reports</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Annual transparency reports demonstrating our commitment to accountability and citizen-focused services.
              </p>
            </div>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Annual Reports</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our Citizen Centric Reports provide transparent insights into port operations, financial performance, 
                and community impact. These comprehensive documents demonstrate our commitment to accountability 
                and public service excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
              {reports.map((report, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="bg-blue-100 p-3 rounded-lg">
                          <FileText className="h-8 w-8 text-blue-600" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{report.title}</CardTitle>
                          <p className="text-sm text-gray-500">{report.date}</p>
                        </div>
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {report.year}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{report.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Size: {report.fileSize}</span>
                      <Button 
                        asChild 
                        className="bg-blue-600 hover:bg-blue-700"
                        disabled={report.url === "#"}
                      >
                        <a 
                          href={report.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={report.url === "#" ? "pointer-events-none opacity-50" : ""}
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download PDF
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-blue-50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">About Citizen Centric Reports</h3>
              <p className="text-gray-600 max-w-3xl mx-auto mb-6">
                These annual reports are part of our commitment to transparency and accountability to the citizens 
                of the Commonwealth of the Northern Mariana Islands. Each report provides detailed information about 
                our operations, financial performance, major accomplishments, and future plans.
              </p>
              <p className="text-gray-600 max-w-3xl mx-auto">
                For questions about these reports or to request additional information, please contact our 
                administrative office at (670) 664-3200 or visit our Contact page.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default CitizenCentricReports;
