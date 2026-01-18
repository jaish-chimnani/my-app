
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl -z-10 animate-pulse delay-1000"></div>

            <div className="container mx-auto px-6 text-center">
                <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium">
                    Available for new opportunities
                </div>

                <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 tracking-tight">
                    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Jaish Chimnani</span>
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                    Full Stack Engineer with 3+ years of experience building scalable, high-performance web applications with React, TypeScript, and Node.js.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="#projects" className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors flex items-center gap-2">
                        View Projects <ArrowRight size={18} />
                    </a>
                    <a href="/resume.pdf" target="_blank" className="px-8 py-4 rounded-full border border-border bg-card hover:bg-muted transition-colors font-medium flex items-center gap-2">
                        Download CV <Download size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
