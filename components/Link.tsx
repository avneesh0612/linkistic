import { motion } from "framer-motion";

interface LinkProps {
  image: string;
  Name: string;
  href: string;
}

const Link: React.FC<LinkProps> = ({ image, Name, href }) => {
  return (
    <motion.a
      whileHover={{
        scale: [1, 1.15, 1.1],
        zIndex: 50,
        transition: {
          duration: 1,
        },
      }}
      className="flex items-center px-5 py-2 my-3 duration-100 border-2 rounded-lg fill-current hover:text-black hover:bg-neongreen border-neongreen text-neongreen hover:scale-110"
      rel="noreferrer"
      target="_blank"
      href={href}
    >
      {image && <img src={image} className="w-10 h-10" alt={Name} />}
      <h2 className="ml-3 text-xl font-semibold md:ml-6">{Name}</h2>
    </motion.a>
  );
};

export default Link;
