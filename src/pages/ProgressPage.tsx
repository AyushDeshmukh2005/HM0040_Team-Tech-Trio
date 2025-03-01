import React, { useState } from 'react';
import ProgressChart from '../components/ProgressChart';
import { Award, Clock, Calendar, BarChart2, BookOpen, CheckCircle, TrendingUp } from 'lucide-react';

const ProgressPage = () => {
  const [timeRange, setTimeRange] = useState('week');
  
  // Mock data for progress chart
  const chartData = {
    week: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Minutes Watched',
          data: [45, 60, 30, 90, 120, 75, 45],
          borderColor: 'rgb(99, 102, 241)',
          backgroundColor: 'rgba(99, 102, 241, 0.2)',
          fill: true,
          tension: 0.4,
        },
      ],
    },
    month: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets: [
        {
          label: 'Minutes Watched',
          data: [350, 420, 280, 390],
          borderColor: 'rgb(99, 102, 241)',
          backgroundColor: 'rgba(99, 102, 241, 0.2)',
          fill: true,
          tension: 0.4,
        },
      ],
    },
    year: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Minutes Watched',
          data: [1200, 1400, 1100, 1600, 1800, 1500, 1300, 1700, 1900, 2000, 1800, 1600],
          borderColor: 'rgb(99, 102, 241)',
          backgroundColor: 'rgba(99, 102, 241, 0.2)',
          fill: true,
          tension: 0.4,
        },
      ],
    },
  };

  // Mock data for subject progress
  const subjectProgress = [
    { subject: 'Mathematics', progress: 75, videos: 15, hours: 8.5 },
    { subject: 'Physics', progress: 60, videos: 12, hours: 6.2 },
    { subject: 'Computer Science', progress: 85, videos: 18, hours: 10.3 },
    { subject: 'Biology', progress: 40, videos: 8, hours: 4.1 },
    { subject: 'Chemistry', progress: 25, videos: 5, hours: 2.8 },
  ];

  // Mock data for recently watched
  const recentlyWatched = [
    {
      id: '1',
      title: 'Introduction to Calculus: Limits and Derivatives',
      thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      progress: 100,
      lastWatched: '2 hours ago',
    },
    {
      id: '2',
      title: 'Quantum Physics Explained: Wave-Particle Duality',
      thumbnail: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      progress: 75,
      lastWatched: 'Yesterday',
    },
    {
      id: '3',
      title: 'Data Structures and Algorithms: Binary Trees',
      thumbnail: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      progress: 50,
      lastWatched: '3 days ago',
    },
  ];

  // Mock achievements
  const achievements = [
    { id: 1, title: 'First Day', description: 'Watched your first video', icon: <CheckCircle className="text-emerald-500" size={24} />, date: 'May 10, 2023' },
    { id: 2, title: 'Math Enthusiast', description: 'Watched 10 math videos', icon: <Award className="text-amber-500" size={24} />, date: 'Jun 15, 2023' },
    { id: 3, title: 'Consistent Learner', description: 'Watched videos for 7 days in a row', icon: <TrendingUp className="text-indigo-500" size={24} />, date: 'Jul 22, 2023' },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">My Learning Progress</h1>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center mb-2">
            <Clock className="text-indigo-500 mr-2" size={20} />
            <h3 className="text-lg font-semibold text-gray-700">Total Time</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">32.5 hours</p>
          <p className="text-sm text-gray-500 mt-1">+2.3 hours this week</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center mb-2">
            <BookOpen className="text-emerald-500 mr-2" size={20} />
            <h3 className="text-lg font-semibold text-gray-700">Videos Watched</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">58 videos</p>
          <p className="text-sm text-gray-500 mt-1">+5 videos this week</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center mb-2">
            <BarChart2 className="text-amber-500 mr-2" size={20} />
            <h3 className="text-lg font-semibold text-gray-700">Subjects</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">5 subjects</p>
          <p className="text-sm text-gray-500 mt-1">Mathematics is your top subject</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center mb-2">
            <Award className="text-purple-500 mr-2" size={20} />
            <h3 className="text-lg font-semibold text-gray-700">Achievements</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">7 earned</p>
          <p className="text-sm text-gray-500 mt-1">3 achievements this month</p>
        </div>
      </div>
      
      {/* Progress Chart */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Viewing Activity</h2>
          <div className="flex space-x-2">
            <button 
              className={`px-3 py-1 rounded-md text-sm font-medium ${timeRange === 'week' ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setTimeRange('week')}
            >
              Week
            </button>
            <button 
              className={`px-3 py-1 rounded-md text-sm font-medium ${timeRange === 'month' ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setTimeRange('month')}
            >
              Month
            </button>
            <button 
              className={`px-3 py-1 rounded-md text-sm font-medium ${timeRange === 'year' ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setTimeRange('year')}
            >
              Year
            </button>
          </div>
        </div>
        <div className="h-80">
          <ProgressChart data={chartData[timeRange]} />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Subject Progress */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Subject Progress</h2>
            <div className="space-y-6">
              {subjectProgress.map((subject, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-gray-900">{subject.subject}</h3>
                    <div className="text-sm text-gray-600">
                      {subject.videos} videos • {subject.hours} hours
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-indigo-600 h-2.5 rounded-full" 
                      style={{ width: `${subject.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Recently Watched */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Recently Watched</h2>
            <div className="space-y-4">
              {recentlyWatched.map((video) => (
                <div key={video.id} className="flex">
                  <div className="w-24 h-16 bg-gray-200 rounded overflow-hidden flex-shrink-0">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="font-medium text-gray-900 mb-1 line-clamp-1">{video.title}</h3>
                    <div className="flex items-center justify-between">
                      <div className="w-full max-w-xs bg-gray-200 rounded-full h-1.5 mr-2">
                        <div 
                          className="bg-indigo-600 h-1.5 rounded-full" 
                          style={{ width: `${video.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500 whitespace-nowrap">{video.lastWatched}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Achievements */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Achievements</h2>
            <div className="space-y-4">
              {achievements.map((achievement) => (
                <div key={achievement.id} className="flex items-start p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="mr-4 mt-1">{achievement.icon}</div>
                  <div>
                    <h3 className="font-medium text-gray-900">{achievement.title}</h3>
                    <p className="text-sm text-gray-600 mb-1">{achievement.description}</p>
                    <p className="text-xs text-gray-500">{achievement.date}</p>
                  </div>
                </div>
              ))}
              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-md text-sm font-medium transition-colors">
                View All Achievements
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;