import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User } from 'lucide-react';

interface VideoCardProps {
  id: string;
  title: string;
  thumbnail: string;
  instructor: string;
  duration: string;
  views: number;
  date: string;
  category: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  id,
  title,
  thumbnail,
  instructor,
  duration,
  views,
  date,
  category,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <Link to={`/video/${id}`} className="block relative">
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
          {duration}
        </div>
        <div className="absolute top-2 left-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">
          {category}
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/video/${id}`}>
          <h3 className="font-medium text-gray-900 mb-1 line-clamp-2 hover:text-indigo-600 transition-colors">
            {title}
          </h3>
        </Link>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <User size={14} className="mr-1" />
          <span>{instructor}</span>
        </div>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{views.toLocaleString()} views</span>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;