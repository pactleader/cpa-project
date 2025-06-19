
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { 
      name: "Ports", 
      href: "#",
      submenu: [
        { name: "Port of Saipan", href: "/port-saipan" },
        { name: "Port of Tinian", href: "/port-tinian" },
        { name: "Port of Rota", href: "/port-rota" }
      ]
    },
    { name: "Documents", href: "/documents" },
    { name: "News", href: "/news" },
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
        { name: "Careers", href: "/careers" }
      ]
    },
    { name: "Media", href: "/media" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">CP</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-blue-900">CNMI Ports Authority</h1>
              <p className="text-sm text-gray-600">Commonwealth of the Northern Mariana Islands</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <div>
                    <button className="text-gray-700 hover:text-blue-900 font-medium py-2 transition-colors">
                      {item.name}
                    </button>
                    <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-48">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900 first:rounded-t-md last:rounded-b-md transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="text-gray-700 hover:text-blue-900 font-medium py-2 transition-colors"
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
