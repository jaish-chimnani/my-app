
import { useState } from 'react';
import { initialBlogs, BlogPost } from '../../data/blogs';
import { ArrowLeft, Save } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const CreateBlog = () => {
    // In a real app we'd use a router, but here we can just do a hard navigation or window.location
    const [formData, setFormData] = useState({
        title: '',
        excerpt: '',
        content: '',
        tags: '',
        readTime: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Create new blog object
        const newBlog: BlogPost = {
            id: Date.now().toString(),
            title: formData.title,
            excerpt: formData.excerpt,
            content: formData.content,
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            readTime: formData.readTime || '5 min read',
            tags: formData.tags.split(',').map(t => t.trim()).filter(t => t),
            author: "Jaish Chimnani"
        };

        try {
            const response = await fetch('/api/blogs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newBlog),
            });

            if (response.ok) {
                // Redirect
                window.location.href = '/blog';
            } else {
                alert('Failed to save blog');
            }
        } catch (error) {
            console.error('Error saving blog:', error);
            alert('Error saving blog');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />

            <main className="flex-grow container mx-auto px-6 py-24">
                <div className="max-w-3xl mx-auto">
                    <a href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
                        <ArrowLeft size={18} /> Back to Blogs
                    </a>

                    <h1 className="text-3xl md:text-4xl font-bold font-display mb-8">Create New Entry</h1>

                    <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-8 shadow-sm space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Title</label>
                            <input
                                required
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                                placeholder="Enter blog title"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Tags (comma separated)</label>
                                <input
                                    type="text"
                                    name="tags"
                                    value={formData.tags}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                                    placeholder="React, Design, Tech"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Read Time</label>
                                <input
                                    type="text"
                                    name="readTime"
                                    value={formData.readTime}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                                    placeholder="5 min read"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Excerpt</label>
                            <textarea
                                required
                                name="excerpt"
                                value={formData.excerpt}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none h-24 resize-none"
                                placeholder="Short summary of the article..."
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Content (Markdown supported)</label>
                            <textarea
                                required
                                name="content"
                                value={formData.content}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none h-64 font-mono text-sm"
                                placeholder="# Heading..."
                            />
                        </div>

                        <button type="submit" className="w-full py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                            <Save size={18} /> Publish Blog
                        </button>
                    </form>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default CreateBlog;
