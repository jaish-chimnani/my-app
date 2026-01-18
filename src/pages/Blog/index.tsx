
import { Clock, Plus } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import blogsData from '../../data/blogs.json';
import { type BlogPost } from '../../types';

const BlogList = () => {
    const [blogs, setBlogs] = useState<BlogPost[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        // In a real app we might fetch this, but for static/Vite import is fine.
        // However, since we're modifying the file, we might want to fetch it if it was served.
        // But standard Vite HMR should handle the JSON update import.
        setBlogs(blogsData as BlogPost[]);
    }, []);

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />

            <main className="flex-grow container mx-auto px-6 py-24">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">Blog</h1>
                        <p className="text-muted-foreground text-lg max-w-2xl">
                            Thoughts, tutorials, and insights on frontend development, architecture, and software engineering.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <article key={blog.id} className="relative group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col h-full">
                            <div className="p-6 flex flex-col h-full">
                                <div className="flex gap-2 mb-4 flex-wrap">
                                    {blog.tags.map(tag => (
                                        <span key={`${blog.id}-${tag}`} className="text-xs font-medium px-2 py-1 bg-secondary rounded-md text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                    <span className="hover:underline focus:outline-none" onClick={() => {
                                        navigate(`/blog/${blog.id}`);
                                    }}>
                                        <span className="absolute inset-0" aria-hidden="true" />
                                        {blog.title}
                                    </span>
                                </h2>

                                <p className="text-muted-foreground mb-6 line-clamp-3 text-sm flex-grow">
                                    {blog.excerpt}
                                </p>

                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border text-sm text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                        <Clock size={14} />
                                        <span>{blog.readTime}</span>
                                    </div>
                                    <span className="font-medium text-foreground">{blog.date}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </main>

            {localStorage.getItem('role') === 'admin' && <a
                href="/blog/new"
                className="bg-white flex border border-border fixed bottom-8 right-8 z-50 p-4 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all hover:scale-110 group"
                title="Create New Blog"
            >
                <Plus size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                Create New Blog
            </a>}

            <Footer />
        </div>
    );
};

export default BlogList;
