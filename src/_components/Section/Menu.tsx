export default function Menu() {
    return (
      <div className="flex justify-between items-center p-4 fixed top-0 left-16 right-16 bg-[#f5f3ef8a] backdrop-blur-md">
        <img className="h-[42px] w-[120px] object-contain" src="logo.png" alt="logo" />
        <div className="flex gap-4 items-center">
          <a className="font-bold text-text hover:text-blue-300 hover:cursor-pointer" href="#home">
            Home
          </a>
          <a className="font-bold text-text hover:text-blue-300 hover:cursor-pointer" href="#skills">
            Skills
          </a>
          <a className="font-bold text-text hover:text-blue-300 hover:cursor-pointer" href="#projects">
            Projects
          </a>
          <a className="font-bold text-text hover:text-blue-300 hover:cursor-pointer" href="#contact">
            Contact
          </a>
        </div>
      </div>
    );
  };
  