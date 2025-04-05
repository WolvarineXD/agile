
import React from 'react';

interface SocialFeedProps {
  platform: 'twitter' | 'facebook';
  posts: Array<{
    id: number;
    content: string;
    date: string;
    likes?: number;
    shares?: number;
  }>;
}

const SocialFeed: React.FC<SocialFeedProps> = ({ platform, posts }) => {
  return (
    <div className="bg-theme-darkGray rounded-lg overflow-hidden">
      <div className={`py-3 px-4 ${platform === 'twitter' ? 'bg-blue-500' : 'bg-blue-600'}`}>
        <h3 className="text-white font-bold">
          Digital India on {platform === 'twitter' ? 'Twitter' : 'Facebook'}
        </h3>
      </div>
      <div className="p-4">
        {posts.length > 0 ? (
          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="bg-theme-gray p-3 rounded">
                <p className="text-white text-sm">{post.content}</p>
                <div className="flex justify-between items-center mt-2 text-xs text-white/70">
                  <span>{post.date}</span>
                  <div className="flex space-x-3">
                    {post.likes !== undefined && (
                      <span>{post.likes} Likes</span>
                    )}
                    {post.shares !== undefined && (
                      <span>{post.shares} Shares</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-8 text-center text-white/50">
            <p>No recent posts to display</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialFeed;
