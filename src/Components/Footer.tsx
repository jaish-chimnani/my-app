
const Footer = () => {
    return (
        <footer className="py-8 bg-card border-t border-border">
            <div className="container mx-auto px-6 text-center">
                <p className="text-muted-foreground text-sm">
                    © {new Date().getFullYear()} Jaish Chimnani. Built with React & Tailwind CSS.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
