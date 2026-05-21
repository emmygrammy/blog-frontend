
function TopSection( {title, subtitle, className=''} ) {
  return (
    <div className={`py-10 px-8 bg-gradient-to-br from-secondary from-[0%] via-secondary via-[72%] to-primary to-[100%] ${className}`}>
     <div className=" justify-start flex flex-col gap-2 items-center">
        <h1 className="text-3xl font-heading text-white font-bold md:text-8xl">{title}</h1>
        <span className="text-sm font-sans text-white font-bold md:text-sm "> {subtitle}</span>
     </div>
    </div>
  );
}

export default TopSection;