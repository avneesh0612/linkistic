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
      className="flex items-center w-full max-w-md cursor-pointer p-3 my-3 mx-auto rounded-md r-2 ring-[2px] ring-indigo-400 text-gray-700 backdrop-filter backdrop-blur-2xl bg-white bg-opacity-25 shadow-xl z-30"
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
