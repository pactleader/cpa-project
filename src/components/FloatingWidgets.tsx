
import React from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingWidgets = () => {
  const handleChatClick = () => {
    // Open chat functionality - you can integrate with your preferred chat service
    console.log("Opening chat...");
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+16706643200";
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* Chat Widget */}
      <Button
        onClick={handleChatClick}
        className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
      >
        <div className="w-6 h-6 relative">
          <div className="absolute inset-0 bg-white rounded-sm"></div>
          <div className="absolute top-1 left-1 right-1 h-0.5 bg-blue-600"></div>
          <div className="absolute top-2.5 left-1 right-1 h-0.5 bg-blue-600"></div>
          <div className="absolute bottom-1 left-1 w-2 h-0.5 bg-blue-600"></div>
        </div>
      </Button>

      {/* Phone Widget */}
      <Button
        onClick={handlePhoneClick}
        className="w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
      >
        <Phone className="w-6 h-6 text-white" />
      </Button>
    </div>
  );
};

export default FloatingWidgets;
