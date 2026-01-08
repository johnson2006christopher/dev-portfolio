// src/pages/Blog.tsx

import { mockBlogPosts } from '../data/mockData';
import { Link } from 'react-router-dom';

function Blog() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-gray-400 mb-12">
          My thoughts on web development and tech
        </p>

        {/* Blog Posts List */}
        <div className="space-y-8">
          {mockBlogPosts.map(post => (
            <article key={post.id} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-blue-600 text-sm rounded-full">
                  {post.category}
                </span>
                <span className="text-gray-400 text-sm">
                  {post.publishedAt.toLocaleDateString()}
                </span>
                <span className="text-gray-400 text-sm">
                  {post.readTimeMinutes} min read
                </span>
              </div>

              <Link to={`/blog/${post.id}`}>
                <h2 className="text-2xl font-bold mb-3 hover:text-blue-400 transition">
                  {post.title}
                </h2>
              </Link>

              <p className="text-gray-400 mb-4">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map(tag => (
                  <span key={tag} className="text-sm text-gray-500">
                    #{tag}
                  </span>
                ))}
              </div>

              <Link 
                to={`/blog/${post.id}`}
                className="text-blue-400 hover:text-blue-300 transition"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;