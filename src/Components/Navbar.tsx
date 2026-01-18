
import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Blog', href: '/blog' },
        { name: 'About', href: '/#about' },
        { name: 'Experience', href: '/#experience' },
        { name: 'Projects', href: '/#projects' },
        { name: 'Skills', href: '/#skills' },
        { name: 'Contact', href: '/#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold font-display bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                    Jaish.
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex items-center space-x-4 pl-4 border-l border-border">
                        <a href="https://github.com/jaish-chimnani" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/jaish-chimnani/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:jaishchimnani9@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full glass border-t border-border p-6 flex flex-col space-y-4 animate-in slide-in-from-top-5">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex items-center space-x-6 pt-4 border-t border-border">
                        <a href="https://github.com/jaish-chimnani" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/jaish-chimnani/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:jaishchimnani9@gmail.com" className="text-muted-foreground hover:text-primary">
                            <Mail size={24} />
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
