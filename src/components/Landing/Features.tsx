import React from 'react';
import FeatureCard from './FeatureCard';
import { MessageSquare, Users, Shield, Zap, Globe, Heart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Unified Messaging",
      description: "Combine the best features of LINE stickers, WeChat moments, and WhatsApp simplicity in one seamless web experience.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Cross-Platform Groups",
      description: "Create groups that bring together users from different messaging backgrounds, all accessible through your web browser.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Web Security",
      description: "Advanced web-based encryption and security protocols to keep your conversations private and secure in the browser.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized web performance ensures instant message delivery and smooth user experience across all browsers.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Globe,
      title: "Universal Access",
      description: "Access your messages from any device with a web browser - no downloads or installations required.",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: Heart,
      title: "Rich Expressions",
      description: "Express yourself with an extensive web-based library of stickers, emojis, and interactive content.",
      gradient: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section id="features" className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Priline?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the perfect blend of features from the world's most popular messaging platforms, 
            enhanced with cutting-edge web technology for the ultimate browser-based communication experience.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              gradient={feature.gradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
