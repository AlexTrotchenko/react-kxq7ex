import { Dropdown, OverlayTrigger, Tooltip } from 'react-bootstrap';
import React, { useState } from 'react';
import './dropdown.css';

export const MyDropdown = () => {
  const imgUrl = '';
  const [isHovering, setIsHovering] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <Dropdown onToggle={(isOpen) => setIsDropdownOpen(isOpen)}>
      <OverlayTrigger
        key="bottom"
        placement="bottom"
        overlay={<Tooltip id={`tooltip-top`}>Account Settings</Tooltip>}
        show={isHovering && !isDropdownOpen}
      >
        <Dropdown.Toggle
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          id="custom-dropdown"
        >
          OT
        </Dropdown.Toggle>
      </OverlayTrigger>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => {}}>
          <LogOutIcon /> Log Out
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

const LogOutIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"></path>
  </svg>
);
