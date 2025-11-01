import { Button } from "@/components/ui/button";
import { Mail, Twitter, Palette, MapPin } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "angelina.alex@example.com",
      href: "mailto:angelina.alex@example.com",
      color: "text-primary"
    },
    {
      icon: Twitter,
      label: "Twitter",
      value: "@anjlina2000",
      href: "https://x.com/anjlina2000?s=21",
      color: "text-primary"
    },
    {
      icon: Palette,
      label: "ArtStation",
      value: "angelina-alex",
      href: "https://artstation.com",
      color: "text-primary"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
            Have a project in mind? Let's collaborate and create something amazing together
          </p>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm">Based in Arizona, USA</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {socialLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-8 rounded-2xl hover-lift text-center group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center glow-green group-hover:scale-110 transition-transform">
                  <link.icon className={`w-8 h-8 ${link.color}`} />
                </div>
                <h3 className="font-bold text-lg mb-2">{link.label}</h3>
                <p className="text-sm text-muted-foreground">{link.value}</p>
              </a>
            ))}
          </div>

          <div className="glass-card p-8 md:p-12 rounded-2xl text-center animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">Ready to Start a Project?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you need artwork, 3D models, or a stunning website, I'm here to help 
              bring your vision to life. Let's discuss your project and create something extraordinary.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 glow-green"
              onClick={() => window.location.href = 'mailto:angelina.alex@example.com'}
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Me an Email
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
    </section>
  );
};

export default Contact;
