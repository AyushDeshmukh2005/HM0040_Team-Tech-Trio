import React, { useState } from 'react';
import VideoCard from '../components/VideoCard';
import CategoryFilter from '../components/CategoryFilter';
import { Sparkles } from 'lucide-react';

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = [
    'All', 
    'Mathematics', 
    'Physics', 
    'Computer Science', 
    'Biology', 
    'Chemistry', 
    'History', 
    'Literature',
    'Languages'
  ];

  // Mock data for videos
  const videos = [
    {
      id: '1',
      title: 'Introduction to Calculus: Limits and Derivatives',
      thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      instructor: 'Dr. Sarah Johnson',
      duration: '45:22',
      views: 125000,
      date: '2 weeks ago',
      category: 'Mathematics'
    },
    {
      id: '2',
      title: 'Quantum Physics Explained: Wave-Particle Duality',
      thumbnail: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      instructor: 'Prof. Michael Chen',
      duration: '32:15',
      views: 98000,
      date: '3 days ago',
      category: 'Physics'
    },
    {
      id: '3',
      title: 'Data Structures and Algorithms: Binary Trees',
      thumbnail: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      instructor: 'Alex Rodriguez',
      duration: '58:47',
      views: 215000,
      date: '1 month ago',
      category: 'Computer Science'
    },
    {
      id: '4',
      title: 'Cell Biology: Mitochondria and Energy Production',
      thumbnail: 'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      instructor: 'Dr. Emily Parker',
      duration: '41:33',
      views: 76000,
      date: '5 days ago',
      category: 'Biology'
    },
    {
      id: '5',
      title: 'Organic Chemistry: Understanding Functional Groups',
      thumbnail: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      instructor: 'Prof. David Wilson',
      duration: '52:18',
      views: 89000,
      date: '2 weeks ago',
      category: 'Chemistry'
    },
    {
      id: '6',
      title: 'World War II: Causes and Global Impact',
      thumbnail: 'https://images.unsplash.com/photo-1580130732478-4e339fb6836f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      instructor: 'Prof. Robert Thompson',
      duration: '1:05:22',
      views: 132000,
      date: '3 weeks ago',
      category: 'History'
    },
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
      id: '8',
      title: 'Introduction to Python Programming',
      thumbnail: 'https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      instructor: 'Alex Rodriguez',
      duration: '37:42',
      views: 245000,
      date: '2 months ago',
      category: 'Computer Science'
    }
  ];

  // Filter videos based on active category
  const filteredVideos = activeCategory === 'All' 
    ? videos 
    : videos.filter(video => video.category === activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 mb-8 text-white">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Expand Your Knowledge with InfinityLearn</h1>
          <p className="text-lg mb-6 opacity-90">
            Access high-quality educational videos curated by experts. Track your progress and enhance your learning journey.
          </p>
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors flex items-center">
            <Sparkles size={18} className="mr-2" />
            Explore Featured Courses
          </button>
        </div>
      </div>

      {/* Category Filter */}
      <CategoryFilter 
        categories={categories} 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredVideos.map(video => (
          <VideoCard key={video.id} {...video} />
        ))}
      </div>

      {/* Show more button */}
      <div className="mt-10 text-center">
        <button className="bg-indigo-100 text-indigo-700 px-6 py-3 rounded-md font-medium hover:bg-indigo-200 transition-colors">
          Load More Videos
        </button>
      </div>
    </div>
  );
};

export default HomePage;