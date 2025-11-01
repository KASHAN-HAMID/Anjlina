import { Code2, Paintbrush, Sparkles, Layers } from "lucide-react";

const About = () => {
  const tools = [
    { name: "Adobe Photoshop", category: "Design" },
    { name: "Blender", category: "3D" },
    { name: "Illustrator", category: "Vector" },
    { name: "React & TypeScript", category: "Dev" },
    { name: "Tailwind CSS", category: "Dev" },
    { name: "After Effects", category: "Animation" },
  ];

  const skills = [
    {
      icon: Paintbrush,
      title: "2D Artistry",
      description: "Digital paintings, illustrations, character designs, and concept art with vibrant colors and unique styles."
    },
    {
      icon: Layers,
      title: "3D Modeling",
      description: "Creating detailed 3D models, environments, and product visualizations using industry-standard tools."
    },
    {
      icon: Code2,
      title: "Web Development",
      description: "Building responsive, modern websites with clean code and beautiful user interfaces."
    },
    {
      icon: Sparkles,
      title: "Animation",
      description: "Bringing designs to life with smooth animations, motion graphics, and visual effects."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate creator blending art and technology to craft unique digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Story */}
          <div className="space-y-6 animate-fade-in">
            <div className="glass-card p-8 rounded-2xl hover-lift">
              <h3 className="text-2xl font-bold mb-4">My Creative Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  My journey began with a pencil and paper, sketching dreams and imagining worlds. 
                  Over the years, I've evolved from traditional art to mastering digital tools, 
                  creating everything from stunning 2D illustrations to intricate 3D models.
                </p>
                <p>
                  As a web developer, I bring the same creative passion to code. I believe that 
                  great design and clean code go hand in hand. Each project is an opportunity 
                  to push boundaries and create something extraordinary.
                </p>
                <p>
                  Whether it's designing a character, building a website, or crafting an animation, 
                  I pour my heart into every pixel. My goal is simple: create work that inspires 
                  and captivates.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="glass-card p-6 rounded-xl hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 glow-green">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold text-lg mb-2">{skill.title}</h4>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="animate-fade-in">
          <h3 className="text-2xl font-bold text-center mb-8">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <div
                key={tool.name}
                className="glass-card px-6 py-3 rounded-full hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">{tool.name}</span>
                  <span className="text-xs text-primary">{tool.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
