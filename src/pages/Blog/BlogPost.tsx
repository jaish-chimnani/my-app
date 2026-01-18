import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';
import blogsData from '../../data/blogs.json';
import { type BlogPost } from '../../types';
// import ReactMarkdown from 'react-markdown'; // Removed to prevent missing dependency error
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const BlogPostView = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState<BlogPost | null>(null);

    useEffect(() => {
        if (!id) return;

        console.log('Current ID:', id);

        // Ensure strict string comparison and handle potential type mismatches
        const foundBlog = (blogsData as BlogPost[]).find(b => String(b.id) === String(id));

        if (foundBlog) {
            setBlog(foundBlog);
        } else {
            console.error('Blog not found for ID:', id);
            setBlog(null); // Clear blog if not found
        }
    }, [id]);

    if (!blog) {
        return (
            <div className="min-h-screen bg-background flex flex-col">
                <Navbar />
                <main className="flex-grow flex items-center justify-center">
                    <p className="text-muted-foreground">Loading or Blog not found...</p>
                </main>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />

            <main className="flex-grow container mx-auto px-6 py-24">
                <div className="max-w-3xl mx-auto">
                    <a href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
                        <ArrowLeft size={18} /> Back to Blogs
                    </a>

                    <div className="mb-8">
                        <div className="flex gap-2 mb-4">
                            {blog.tags.map(tag => (
                                <span key={tag} className="text-xs font-medium px-2 py-1 bg-secondary rounded-md text-secondary-foreground">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold font-display mb-6 leading-tight">
                            {blog.title}
                        </h1>

                        <div className="flex items-center gap-6 text-sm text-muted-foreground border-b border-border pb-8 mb-8">
                            <div className="flex items-center gap-2">
                                <Calendar size={16} />
                                <span>{blog.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={16} />
                                <span>{blog.readTime}</span>
                            </div>
                            <div className="font-medium text-foreground">
                                By {blog.author}
                            </div>
                        </div>
                    </div>

                    <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-display prose-a:text-primary prose-img:rounded-xl">
                        {/* 
                   Basic whitespace preservation for now. 
                   Ideally use 'react-markdown' if installed. 
                */}
                        <div className="whitespace-pre-wrap font-sans leading-relaxed break-all">
                            {blog.content}
                        </div>
                    </article>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default BlogPostView;
