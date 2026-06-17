import React from "react";

const sizes = ["Small — 6″", "Medium — 9″", "Large — 12″", "XL — 15″"];
const data = [
  "🐘  Handcrafted With Passion",
  "👑  Inspired by Royal Legacy",
  "🎁  Perfect for VIP Gifting",
  "🏛️  Premium Décor & Collectibles",
];

const ContentLanding = () => {
  return (
    <div className="bg-[#F3EFE6] px-14 py-10">
      <h5 className="text-light-wood">WHERE HERITAGE MEETS ROYALTY</h5>
      <h2 className="text-4xl">Premium</h2>
      <h2 className="text-4xl">Ambari</h2>
      <h2 className="text-light-wood font-semibold text-4xl">Elephants</h2>
      <p className="text-[#898F83] w-100 mt-4">
        Handcrafted masterpieces inspired by the grandeur of Indian royal
        processions and timeless cultural artistry. Each carving reflects
        strength, prestige, tradition, and luxury.
      </p>
      <p className="text-[#898F83] w-100 mt-4 mb-4">
        A perfect choice for VIP gifting, premium décor, and memorable
        celebrations — finished in natural wood tones with intricate hand-relief
        carving across every surface.
      </p>
      <div className="grid grid-cols-2 gap-2 mb-6 ">
        {data.map((i, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-[#EBE0CC] p-3 rounded-xl text-xs font-bold"
          >
            {i}
          </div>
        ))}
      </div>
      <h4 className="text-[#898F83] text-sm tracking-widest font-semibold mt-4">
        AVAILABLE SIZES
      </h4>
      <div className="flex items-center gap-2 mt-2">
        {sizes?.map((i, index) => (
          <button
            key={index}
            className="border border-[#898F83] p-1 text-[#898F83] text-sm hover:text-light-wood hover:border-light-wood"
          >
            {i}
          </button>
        ))}
      </div>
    </div>
  );
};
export default ContentLanding;
