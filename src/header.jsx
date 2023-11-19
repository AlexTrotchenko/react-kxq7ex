import React, { useState } from 'react';
import { Offcanvas, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { MyDropdown } from './dropdown';
import { IconButton } from './iconButton';
import { Megaphone } from './megaphoneIcon';
import './header.css';

export const Header = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [notificationCount, setNotificationCount] = useState(5);

  const handleDrawerClose = () => {
    setShowDrawer(false);
    setNotificationCount(0);
  };
  const toggleDrawer = () => setShowDrawer((prev) => !prev);
  return (
    <div className="header">
      Logo
      <OverlayTrigger
        key="bottom"
        placement="bottom"
        overlay={<Tooltip id="tooltip-top">Last releases</Tooltip>}
      >
        <IconButton
          IconComponent={Megaphone}
          notificationCount={notificationCount}
          onClick={toggleDrawer}
        />
      </OverlayTrigger>
      <MyDropdown />
      <Offcanvas show={showDrawer} onHide={handleDrawerClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Latest releases</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{/* Content for your drawer */}</Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};
