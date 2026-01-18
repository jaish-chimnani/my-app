
import { ExternalLink, Code2 } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Resource Management Portal",
            year: "2024",
            description: "Enterprise-grade portal for 1,000+ employees to manage tickets, approvals, and assets.",
            tech: ["React", "TypeScript", "Material-UI"],
            highlights: [
                "Modular architecture with 40+ shared components",
                "Increased development velocity by 25%"
            ]
        },
        {
            title: "Custom Relationship Management System",
            year: "2023",
            description: "Scalable CRM platform managing 5,000+ client records with optimized data access.",
            tech: ["Micro-Frontend", "Module Federation", "React"],
            highlights: [
                "Independent deployments for 3 teams",
                "Audits and meeting tracking features"
            ]
        },
        {
            title: "Specialized E-commerce Platform",
            year: "2022",
            description: "React-based e-commerce platform serving 10,000+ monthly active users.",
            tech: ["React", "Lazy Loading", "Dynamic Imports"],
            highlights: [
                "Improved Time to Interactive (TTI) by 60%",
                "Processing 500+ daily transactions"
            ]
        }
    ];

    return (
        <section id="projects" className="py-20 bg-muted/30">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold font-display mb-12 text-center">Featured Projects</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group">
                            <div className="p-6 h-full flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                        <Code2 size={24} />
                                    </div>
                                    <span className="text-xs font-semibold px-2 py-1 bg-muted rounded text-muted-foreground">{project.year}</span>
                                </div>

                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>

                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold mb-2">Key Highlights:</h4>
                                    <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                                        {project.highlights.map((h, i) => (
                                            <li key={i}>{h}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs font-medium px-2 py-1 bg-secondary rounded-md text-secondary-foreground">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
