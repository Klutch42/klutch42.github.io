interface Note {
  date: string;
  title: string;
  excerpt: string;
  tags: string[];
}

const notes: Note[] = [
  {
    date: "2025-01-15",
    title: "Building Scalable ML Pipelines",
    excerpt: "Lessons learned from deploying machine learning models at scale. Key considerations for data versioning, model monitoring, and CI/CD integration.",
    tags: ["MLOps", "Python", "Kubernetes"],
  },
  {
    date: "2025-01-08",
    title: "The Evolution of Transformer Architectures",
    excerpt: "A deep dive into how transformer models have evolved from BERT to GPT-4. Understanding attention mechanisms and their computational trade-offs.",
    tags: ["AI", "Transformers", "Research"],
  },
  {
    date: "2024-12-20",
    title: "Microservices Design Patterns",
    excerpt: "Exploring common patterns in distributed systems: circuit breakers, saga pattern, event sourcing, and CQRS. When to use each approach.",
    tags: ["Architecture", "Microservices", "Design"],
  },
  {
    date: "2024-12-10",
    title: "Optimizing Database Performance",
    excerpt: "Practical tips for PostgreSQL optimization: indexing strategies, query planning, connection pooling, and monitoring key metrics.",
    tags: ["Database", "PostgreSQL", "Performance"],
  },
  {
    date: "2024-11-28",
    title: "Neural Network Pruning Techniques",
    excerpt: "Methods for reducing model size while maintaining accuracy. Comparing magnitude-based, gradient-based, and lottery ticket hypothesis approaches.",
    tags: ["AI", "Optimization", "Research"],
  },
  {
    date: "2024-11-15",
    title: "API Design Best Practices",
    excerpt: "Creating intuitive and maintainable APIs: RESTful principles, versioning strategies, error handling, and documentation with OpenAPI.",
    tags: ["API", "Design", "Best Practices"],
  },
];

const Notes = () => {
  return (
    <div className="min-h-screen pt-20 px-6 pb-12">
      <div className="max-w-4xl mx-auto">
        <section className="py-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Notes</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Thoughts on software engineering, AI, and technology.
          </p>
          
          <div className="space-y-8">
            {notes.map((note, index) => (
              <article
                key={index}
                className="border-b border-border pb-8 last:border-0 hover:opacity-80 transition-opacity cursor-pointer"
              >
                <time className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                  {new Date(note.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <h2 className="text-2xl font-bold mb-3">{note.title}</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {note.excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {note.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-muted text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Notes;
