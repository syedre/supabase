import { banner_url } from "@/assets/picture";

const Banner = () => {
  return (
    <div className="relative shadow-[0_20px_40px_-10px_rgba(0,0,0,0.50)]">
      <img
        src={banner_url}
        className="w-full aspect-4/3 sm:aspect-video lg:aspect-5/2 object-cover"
        alt="banner"
      />

      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/10 to-black/40 backdrop-blur-[1px]" />

      <div className="absolute left-4 sm:left-8 lg:left-14 bottom-8 sm:bottom-12  text-stone-200 z-10 flex flex-col gap-1 sm:gap-2">
        <h1 className="text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-wide sm:tracking-widest leading-tight">
          ROYAL <span className="text-[#E4B67A]">WOOD</span> INDUSTRY
        </h1>

        <div className="flex items-center gap-2">
          <div className="bg-[#E4B67A] h-px w-8 sm:w-12 lg:w-15"></div>
          <p className="text-xs sm:text-sm">Made In 🇮🇳</p>
          <div className="bg-[#E4B67A] h-px w-8 sm:w-12 lg:w-15"></div>
        </div>

        <h4 className="text-[10px] sm:text-xs lg:text-sm tracking-wide sm:tracking-widest">
          Premium Indian Wooden Handicrafts
        </h4>
      </div>
    </div>
  );
};

export default Banner;
