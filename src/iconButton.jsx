import React, { forwardRef } from 'react';
import './iconButton.css';

export const IconButton = forwardRef(
  ({ IconComponent, notificationCount, ...props }, ref) => {
    return (
      <div className="icon-button-container">
        <button ref={ref} className="icon-button" {...props}>
          <IconComponent color="white" />

          {notificationCount > 0 && (
            <span className="notification-badge">{notificationCount}</span>
          )}
        </button>
      </div>
    );
  }
);
