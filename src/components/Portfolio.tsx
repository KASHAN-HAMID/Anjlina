import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// ✅ Import your 2D and 3D art images
import art1 from "@/assets/1.jpg";
import art2 from "@/assets/2.jpg";
import art3 from "@/assets/3.jpg";
import art4 from "@/assets/4.jpg";
import art5 from "@/assets/5.jpg";
import art6 from "@/assets/6.jpg";
import modelSample1 from "@/assets/model-sample-1.jpg";
import modelSample2 from "@/assets/model-sample-2.jpg";

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const portfolioItems = {
    "2d-art": [
      {
        id: 1,
       
        category: "Digital Art",
        image: art1,
       
      },
      {
        id: 2,
       
        category: "Fantasy Illustration",
        image: art2,
      
      },
      {
        id: 3,
     
        category: "Concept Art",
        image: art3,
        
      },
      {
        id: 4,
        
        category: "Illustration",
        image: art4,
      
      },
      {
        id: 5,
        
        category: "Branding",
        image: art5,
       
      },
      {
        id: 6,
      
        category: "Digital Design",
        image: art6,
        
      },
    ],
    "3d-models": [
      {
        id: 7,
        title: "Abstract Sculpture",
        category: "3D Art",
        image: modelSample1,
        description: "Geometric 3D render with smooth lighting.",
      },
      {
        id: 8,
        title: "Stylized Character Model",
        category: "Character Design",
        image: modelSample2,
        description: "Detailed 3D model created in Blender.",
      },
    ],
  };

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my creative work across different mediums
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="2d-art" className="w-full">
          <TabsList className="grid w-full max-w-xl mx-auto grid-cols-2 mb-12 glass-card p-1">
            <TabsTrigger
              value="2d-art"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              2D Art
            </TabsTrigger>
            <TabsTrigger
              value="3d-models"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              3D Models
            </TabsTrigger>
          </TabsList>

          {/* Portfolio Items */}
          {Object.entries(portfolioItems).map(([key, items]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, index) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedImage(item.image)}
                    className="group relative overflow-hidden rounded-2xl glass-card animate-scale-in cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Image */}
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Overlay Info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <span className="text-primary text-sm font-medium mb-2">
                        {item.category}
                      </span>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>

                    {/* Hover Glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
                      <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-primary to-secondary" />
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* ✅ Popup / Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Selected Art"
              className="max-w-3xl w-full rounded-xl shadow-2xl border border-white/10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
