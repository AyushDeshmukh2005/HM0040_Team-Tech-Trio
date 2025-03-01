import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ThumbsUp, ThumbsDown, Share2, Bookmark, MessageSquare, Clock, User, Calendar } from 'lucide-react';
import VideoCard from '../components/VideoCard';

const VideoPage = () => {
  const { id } = useParams<{ id: string }>();
  const [isBookmarked, setIsBookmarked] = useState(false);
  
  // Mock data for current video
  const video = {
    id: id || '1',
    title: 'Introduction to Calculus: Limits and Derivatives',
    description: 'This comprehensive lecture covers the fundamental concepts of calculus, focusing on limits and derivatives. We explore how these mathematical tools help us understand rates of change and solve real-world problems. Perfect for high school students preparing for AP Calculus or college freshmen.',
    videoUrl: 'https://www.youtube.com/embed/WUvTyaaNkzM',
    instructor: 'Dr. Sarah Johnson',
    instructorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    views: 125000,
    likes: 8700,
    dislikes: 120,
    uploadDate: 'May 15, 2023',
    duration: '45:22',
    category: 'Mathematics',
    tags: ['calculus', 'mathematics', 'derivatives', 'limits'],
    prerequisites: ['Basic algebra', 'Pre-calculus concepts'],
    nextTopics: ['Integration', 'Applications of derivatives']
  };

  // Mock data for related videos
  const relatedVideos = [
    {
      id: '7',
      title: 'Linear Algebra: Vectors and Matrix Operations',
      thumbnail: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      instructor: 'Dr. Sarah Johnson',
      duration: '48:55',
      views: 105000,
      date: '1 week ago',
      category: 'Mathematics'
    },
    {
      id: '9',
      title: 'Differential Equations: First Order Equations',
      thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      instructor: 'Dr. Sarah Johnson',
      duration: '52:18',
      views: 78000,
      date: '3 weeks ago',
      category: 'Mathematics'
    },
    {
      id: '10',
      title: 'Calculus: Applications of Integration',
      thumbnail: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      instructor: 'Prof. Michael Chen',
      duration: '41:33',
      views: 92000,
      date: '1 month ago',
      category: 'Mathematics'
    }
  ];

  // Mock comments
  const comments = [
    {
      id: 1,
      user: 'Alex Thompson',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      content: 'This was incredibly helpful for my AP Calculus exam preparation. The explanation of limits was particularly clear!',
      date: '2 days ago',
      likes: 24
    },
    {
      id: 2,
      user: 'Maria Garcia',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      content: 'Dr. Johnson explains complex concepts in such an accessible way. I finally understand derivatives after struggling with them for weeks.',
      date: '1 week ago',
      likes: 42
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Video Player */}
          <div className="bg-black rounded-lg overflow-hidden aspect-video mb-4">
            <iframe
              src={video.videoUrl}
              title={video.title}
              className="w-full h-full"
              allowFullScreen
            ></iframe>
          </div>

          {/* Video Info */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{video.title}</h1>
            
            <div className="flex flex-wrap items-center justify-between mb-4">
              <div className="flex items-center text-sm text-gray-600 mr-4 mb-2">
                <Clock size={16} className="mr-1" />
                <span>{video.duration}</span>
                <span className="mx-2">•</span>
                <Calendar size={16} className="mr-1" />
                <span>{video.uploadDate}</span>
                <span className="mx-2">•</span>
                <span>{video.views.toLocaleString()} views</span>
              </div>
              
              <div className="flex space-x-2">
                <button className="flex items-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full text-sm">
                  <ThumbsUp size={16} className="mr-1" />
                  <span>{video.likes.toLocaleString()}</span>
                </button>
                <button className="flex items-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full text-sm">
                  <ThumbsDown size={16} className="mr-1" />
                  <span>{video.dislikes.toLocaleString()}</span>
                </button>
                <button className="flex items-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full text-sm">
                  <Share2 size={16} className="mr-1" />
                  <span>Share</span>
                </button>
                <button 
                  className={`flex items-center ${isBookmarked ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-700'} hover:bg-gray-200 px-3 py-1.5 rounded-full text-sm`}
                  onClick={() => setIsBookmarked(!isBookmarked)}
                >
                  <Bookmark size={16} className="mr-1" fill={isBookmarked ? 'currentColor' : 'none'} />
                  <span>Save</span>
                </button>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {video.tags.map((tag, index) => (
                <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs">
                  #{tag}
                </span>
              ))}
            </div>
            
            {/* Instructor */}
            <div className="flex items-center mb-6 pb-6 border-b border-gray-200">
              <img 
                src={video.instructorAvatar} 
                alt={video.instructor} 
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="font-medium text-gray-900">{video.instructor}</h3>
                <p className="text-sm text-gray-600">Mathematics Professor</p>
              </div>
              <button className="ml-auto bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm transition-colors">
                Follow
              </button>
            </div>
            
            {/* Description */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-700">{video.description}</p>
            </div>
            
            {/* Learning Path */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Prerequisites</h3>
                <ul className="list-disc list-inside text-gray-700">
                  {video.prerequisites.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Next Topics</h3>
                <ul className="list-disc list-inside text-gray-700">
                  {video.nextTopics.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Comments */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Comments</h3>
                <span className="text-sm text-gray-600">{comments.length} comments</span>
              </div>
              
              {/* Comment Form */}
              <div className="flex mb-6">
                <div className="w-10 h-10 rounded-full bg-gray-200 mr-3 flex-shrink-0"></div>
                <div className="flex-1">
                  <textarea 
                    placeholder="Add a comment..." 
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    rows={2}
                  ></textarea>
                  <div className="flex justify-end mt-2">
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm transition-colors">
                      Comment
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Comment List */}
              <div className="space-y-4">
                {comments.map(comment => (
                  <div key={comment.id} className="flex">
                    <img 
                      src={comment.avatar} 
                      alt={comment.user} 
                      className="w-10 h-10 rounded-full mr-3 flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center mb-1">
                        <h4 className="font-medium text-gray-900 mr-2">{comment.user}</h4>
                        <span className="text-xs text-gray-500">{comment.date}</span>
                      </div>
                      <p className="text-gray-700 mb-2">{comment.content}</p>
                      <div className="flex items-center text-sm text-gray-600">
                        <button className="flex items-center mr-4 hover:text-gray-900">
                          <ThumbsUp size={14} className="mr-1" />
                          <span>{comment.likes}</span>
                        </button>
                        <button className="flex items-center mr-4 hover:text-gray-900">
                          <ThumbsDown size={14} className="mr-1" />
                        </button>
                        <button className="hover:text-gray-900">Reply</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">Related Videos</h3>
            <div className="space-y-4">
              {relatedVideos.map(video => (
                <VideoCard key={video.id} {...video} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;