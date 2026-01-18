
import { Mail, Phone, MapPin, Linkedin, Github, Send, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch('/api/messages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                // Reset status after 3 seconds
                setTimeout(() => setStatus('idle'), 3000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-20 bg-muted/30">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row">

                    <div className="bg-primary p-10 md:w-2/5 text-primary-foreground flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold font-display mb-2">Get in touch</h3>
                            <p className="text-primary-foreground/80 mb-8">
                                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                            </p>

                            <div className="space-y-6">
                                <a href="mailto:jaishchimnani9@gmail.com" className="flex items-center gap-4 hover:underline transition-colors">
                                    <Mail size={20} />
                                    <span className="text-sm">jaishchimnani9@gmail.com</span>
                                </a>
                                <a href="tel:+917505119336" className="flex items-center gap-4 hover:underline transition-colors">
                                    <Phone size={20} />
                                    <span className="text-sm">+91-7505119336</span>
                                </a>
                                <div className="flex items-center gap-4">
                                    <MapPin size={20} />
                                    <span className="text-sm">Gurugram, Haryana, India</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-8">
                            <a href="https://www.linkedin.com/in/jaish-chimnani/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://github.com/jaish-chimnani" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                                <Github size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="p-10 md:w-3/5 bg-card">
                        <h3 className="text-2xl font-bold font-display mb-6 text-foreground">Send me a message</h3>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                        placeholder="Email"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-muted-foreground">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                    placeholder="Subject"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                    placeholder="Message"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === 'submitting' ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin" /> Sending...
                                    </>
                                ) : status === 'success' ? (
                                    <>
                                        <CheckCircle size={18} /> Sent Successfully
                                    </>
                                ) : status === 'error' ? (
                                    <>
                                        <XCircle size={18} /> Failed. Try again.
                                    </>
                                ) : (
                                    <>
                                        Send Message <Send size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
