
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { 
      name: "Ports", 
      href: "#",
      submenu: [
        { 
          name: "Port of Saipan", 
          href: "/port-saipan",
          description: "Main commercial port serving Saipan",
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=400&h=250&auto=format&fit=crop"
        },
        { 
          name: "Port of Tinian", 
          href: "/port-tinian",
          description: "Strategic port facility on Tinian Island",
          image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=400&h=250&auto=format&fit=crop"
        },
        { 
          name: "Port of Rota", 
          href: "/port-rota",
          description: "Essential port services for Rota Island",
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=400&h=250&auto=format&fit=crop"
        }
      ]
    },
    { name: "Documents", href: "/documents" },
    { 
      name: "Services", 
      href: "#",
      submenu: [
        { name: "Tariff Rates", href: "/tariff-rates" },
        { name: "Regulations", href: "/regulations" },
        { name: "FAQ", href: "/faq" }
      ]
    },
    { 
      name: "Organization", 
      href: "#",
      submenu: [
        { name: "Board of Directors", href: "/board" },
        { name: "Procurement", href: "/procurement" },
        { name: "Careers", href: "/careers" },
        { name: "Citizen Centric Reports", href: "/citizen-centric-reports" }
      ]
    },
    { name: "News", href: "/media" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="https://cnmiports.com/images/logo2.gif" 
              alt="CNMI Ports Authority Logo" 
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-blue-900">CNMI Ports Authority</h1>
              <p className="text-sm text-gray-600">Commonwealth of the Northern Mariana Islands</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <div>
                    <button className="flex items-center text-gray-700 hover:text-blue-900 font-medium py-4 px-4 transition-colors">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                    </button>
                    {item.name === "Ports" ? (
                      /* Enhanced Ports Dropdown with Images */
                      <div className="absolute top-full left-0 mt-1 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-96 border border-gray-100 z-50">
                        <div className="p-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors group/item"
                            >
                              <div className="w-16 h-12 rounded-md overflow-hidden mr-4 flex-shrink-0">
                                <img 
                                  src={subItem.image} 
                                  alt={subItem.name}
                                  className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-300"
                                />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold text-gray-900 group-hover/item:text-blue-900 transition-colors">
                                  {subItem.name}
                                </h4>
                                <p className="text-sm text-gray-600 mt-1">
                                  {subItem.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      /* Regular Dropdown for other items */
                      <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-48 z-50">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 first:rounded-t-md last:rounded-b-md transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="text-gray-700 hover:text-blue-900 font-medium py-4 px-4 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.submenu ? (
                      <div>
                        <h3 className="font-semibold text-gray-900 py-2">{item.name}</h3>
                        <div className="pl-4 space-y-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block text-gray-600 hover:text-blue-900 py-1 transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className="block text-gray-700 hover:text-blue-900 font-medium py-2 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
