import React from 'react';
import { IconType } from 'react-icons';

interface ServiceInfo {
  id: number;
  title: string;
  icon: string | React.ReactNode | IconType;
}

const serviceInfo = [
  {
    id: 1,
    title: "Quality Products & Services",
    icon: "💎",
  }
]

const Services: React.FC = () => {
  return (
    <main className={`pt-4`}>
      <div>Services</div>
    </main>
  );
};

export default Services;