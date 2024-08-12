import React from 'react';
import { Link } from 'react-router-dom';

const TopNav = () => {
  const navItems = [
    { name: 'AI맞춤추천', path: '/recommend' },
    { name: '랭킹 in 지도', path: '/rank' },
    { name: '확인하기', path: '/check' },
    { name: '휴일추천', path: '/holiday' }
  ];

  return (
    <div className="w-full h-[60px] bg-white overflow-hidden">
      <div className="container mx-auto flex items-center justify-between h-full px-4">
        <Link to="/" className="flex items-center">
          <img className="h-10" src="/home/logo112_563.png" alt="Logo" />
        </Link>
        <nav className="hidden min-[600px]:block space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="font-medium text-sm text-gray-800 hover:text-gray-600"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default TopNav;