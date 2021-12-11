import Image from "next/image";

interface LinkProps {
  image: string;
  title: string;
  href: string;
}

const Link: React.FC<LinkProps> = ({ image, title, href }) => {
  return (
    <a
      className="flex items-center px-5 py-2 my-3 duration-500 border-2 rounded-lg fill-current hover:scale-110 hover:shadow-md hover:shadow-accent border-accent text-accent"
      rel="noreferrer"
      target="_blank"
      href={href}
    >
      {image && <Image width={40} height={40} src={image} alt={title} />}
      <h2 className="ml-3 text-xl font-semibold md:ml-6">{title}</h2>
    </a>
  );
};

export default Link;
