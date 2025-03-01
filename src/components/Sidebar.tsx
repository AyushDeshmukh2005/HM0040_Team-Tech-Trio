import React from 'react';
import { Link } from 'react-router-dom';
import { Home, BookOpen, BarChart2, Bookmark, History, Award, ThumbsUp, Settings } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: <Home size={20} />, label: 'Home', path: '/' },
    { icon: <BookOpen size={20} />, label: 'Courses', path: '/courses' },
    { icon: <BarChart2 size={20} />, label: 'My Progress', path: '/progress' },
    { icon: <Bookmark size={20} />, label: 'Saved', path: '/saved' },
    { icon: <History size={20} />, label: 'History', path: '/history' },
    { icon: <Award size={20} />, label: 'Certificates', path: '/certificates' },
    { icon: <ThumbsUp size={20} />, label: 'Recommended', path: '/recommended' },
    { icon: <Settings size={20} />, label: 'Settings', path: '/settings' },
  ];

  return (
    <aside className="hidden md:block w-64 bg-white border-r border-gray-200 h-[calc(100vh-64px)] sticky top-16 overflow-y-auto">
      <nav className="py-4">
        <ul className="space-y-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="flex items-center px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md mx-2"
              >
                <span className="mr-3 text-gray-500">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        
        <div className="mt-8 px-6">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Popular Categories
          </h3>
          <ul className="space-y-2">
            {['Mathematics', 'Physics', 'Computer Science', 'Biology', 'Chemistry'].map((category, index) => (
              <li key={index}>
                <Link to={`/category/${category.toLowerCase().replace(' ', '-')}`} className="text-gray-600 hover:text-indigo-600 text-sm">
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;