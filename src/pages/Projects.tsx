import { Card } from "@/components/ui/card";

interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Neural Network Optimizer",
    category: "AI/ML",
    description: "Deep learning framework optimization tool that reduces training time by 40%",
    tags: ["Python", "TensorFlow", "CUDA"],
  },
  {
    title: "Distributed System Architecture",
    category: "Software Engineering",
    description: "Scalable microservices architecture handling 10M+ requests per day",
    tags: ["Go", "Kubernetes", "gRPC"],
  },
  {
    title: "NLP Sentiment Analyzer",
    category: "AI/ML",
    description: "Real-time sentiment analysis API with 95% accuracy across multiple languages",
    tags: ["Python", "Transformers", "FastAPI"],
  },
  {
    title: "Cloud Infrastructure Platform",
    category: "Software Engineering",
    description: "Infrastructure-as-code platform for automated cloud deployments",
    tags: ["TypeScript", "AWS", "Terraform"],
  },
  {
    title: "Computer Vision Pipeline",
    category: "AI/ML",
    description: "Real-time object detection and tracking system for autonomous vehicles",
    tags: ["Python", "OpenCV", "YOLO"],
  },
  {
    title: "API Gateway Service",
    category: "Software Engineering",
    description: "High-performance API gateway with rate limiting and authentication",
    tags: ["Rust", "Redis", "PostgreSQL"],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-20 px-6 pb-12">
      <div className="max-w-5xl mx-auto">
        <section className="py-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Projects</h1>
          <p className="text-lg text-muted-foreground mb-12">
            A selection of software engineering and AI projects I've worked on.
          </p>
          
          <div className="grid md:grid-cols-2 gap-5">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 border border-border hover:shadow-elevated transition-all duration-300 cursor-pointer group bg-card"
              >
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-secondary text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
