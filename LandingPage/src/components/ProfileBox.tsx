
import React from 'react';
import { User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProfileBoxProps {
  name: string;
  email: string;
  userType: 'student' | 'teacher';
}

const ProfileBox: React.FC<ProfileBoxProps> = ({ name, email, userType }) => {
  const profilePath = userType === 'student' 
    ? '/student-dashboard/settings'
    : '/teacher-dashboard/settings';

  return (
    <Link to={profilePath} className="group flex items-center p-2 rounded-lg hover:bg-gray-50 transition-colors">
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
        <User size={20} className="text-primary" />
      </div>
      <div className="ml-3 truncate">
        <div className="text-sm font-medium group-hover:text-primary transition-colors">{name}</div>
        <div className="text-xs text-gray-500 truncate">{email}</div>
      </div>
      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-xs text-primary">Ver perfil</span>
      </div>
    </Link>
  );
};

export default ProfileBox;
