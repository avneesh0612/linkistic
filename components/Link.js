function Link({ image, Name, href }) {
  return (
    <>
      <a
        className="flex items-center w-10/12 max-w-[500px] m-3 cursor-pointer bg-[#bfdbfe] p-3 rounded-md r-2 ring-[2px]    ring-[#bfdbfe] hover:bg-transparent "
        rel="noreferrer"
        target="_blank"
        href={href}
      >
        {image && <img src={image} className="h-10 ml-3 mr-3" alt="name" />}
        <h2 className="text-xl font-semibold text-gray-700 ">{Name}</h2>
      </a>
    </>
  );
}

export default Link;
