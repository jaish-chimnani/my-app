
import { CheckCircle2 } from 'lucide-react';

const About = () => {
    const highlights = [
        "Micro-Frontend Architecture",
        "Performance Optimization (Lighthouse 92+)",
        "Enterprise-scale React Applications",
        "RESTful API Integration (10k+ req/day)",
        "Component Library Design system",
        "Mentorship & Team Leadership"
    ];

    return (
        <section id="about" className="py-20 bg-muted/30">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">About Me</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            I am a Full Stack Engineer with over 3+ years of experience designing, developing, and optimizing scalable, high-performance web applications using React.js, TypeScript, and Node.js.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            My expertise lies in building complex Micro-Frontend architectures, integrating RESTful APIs, and implementing meaningful performance optimizations. I thrive in Agile environments where I can mentor junior developers and deliver user-centric enterprise solutions.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {highlights.map((item, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
                                    <span className="text-sm font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-500 rounded-2xl rotate-3 opacity-20 blur-lg"></div>
                        <div className="relative bg-card border border-border rounded-2xl p-8 shadow-sm">
                            <div className="grid grid-cols-2 gap-8 text-center">
                                <div>
                                    <div className="text-4xl font-bold text-primary mb-2">3+</div>
                                    <div className="text-sm text-muted-foreground">Years Experience</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-primary mb-2">50+</div>
                                    <div className="text-sm text-muted-foreground">Reusable Components</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-primary mb-2">45%</div>
                                    <div className="text-sm text-muted-foreground">Load Time Reduction</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-primary mb-2">92</div>
                                    <div className="text-sm text-muted-foreground">Lighthouse Score</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
