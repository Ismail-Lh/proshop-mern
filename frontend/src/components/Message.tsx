import React from 'react';
import { Alert } from 'react-bootstrap';

interface MessageProps {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  children: React.ReactNode;
}

const Message: React.FC<MessageProps> = ({ variant = 'info', children }) => {
  return <Alert variant={variant}> {children}</Alert>;
};

export default Message;
