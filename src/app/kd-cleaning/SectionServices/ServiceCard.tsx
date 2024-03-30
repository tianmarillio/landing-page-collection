import { FC } from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  detail: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ icon, title, detail }) => {
  return (
    <article className="col-span-1">
      <div>{icon}</div>
      <h3 className="font-bold">{title}</h3>
      <p className="text-sm">{detail}</p>
    </article>
  );
};

export default ServiceCard;
