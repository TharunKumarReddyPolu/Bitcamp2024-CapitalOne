import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

function Header() {
  const auth= useAuth()  
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('uuid');
    sessionStorage.removeItem('name');
    auth.logout();
    navigate('/login');
  }  
  return (
    <nav className="bg-gray-800 text-white w-full">
      <div className=" mx-auto px-2 sm:px-6 lg:px-2">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end ">
            <div className="flex-shrink-0">
              {/* <img
                className="block lg:hidden h-8 w-auto"
                src="/logo192.png"
                alt="Workflow"
              />
              <img
                className="hidden lg:block h-8 w-auto"
                src="/logo512.png"
                alt="Workflow"
              /> */}
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Home</a>

                { auth.user && <a className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700" onClick={handleLogout}>Logout</a>
}
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;