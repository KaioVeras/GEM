
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  headerAction?: ReactNode;
  footerAction?: ReactNode;
  noPadding?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className, 
  title, 
  subtitle, 
  headerAction, 
  footerAction,
  noPadding = false
}) => {
  return (
    <div className={cn('bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden', className)}>
      {(title || subtitle || headerAction) && (
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <div>
            {title && <h3 className="text-lg font-medium">{title}</h3>}
            {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
          </div>
          {headerAction && (
            <div>{headerAction}</div>
          )}
        </div>
      )}
      <div className={noPadding ? '' : 'p-4'}>{children}</div>
      {footerAction && (
        <div className="p-4 border-t border-gray-100">
          {footerAction}
        </div>
      )}
    </div>
  );
};

export default Card;
