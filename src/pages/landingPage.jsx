import React, { useEffect, useRef, useState } from "react";
import ContentLanding from "../components/contentBox";
import ProductDisplay from "../components/product";
import Footer from "../components/footer";
import { NewHeader } from "../components/newHeader";
import Banner from "@/components/banner";

const LandingPage = () => {
  const [showLogo, setShowLogo] = useState(true);
  const targetRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowLogo(entry.isIntersecting);
      },
      {
        threshold: 1,
      },
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="hide-scrollbar overflow-y-auto">
      <NewHeader isLogo={showLogo} />

      <Banner />
      <div ref={targetRef}></div>
      <ContentLanding />
      <ProductDisplay />
      <Footer />
    </div>
  );
};

export default LandingPage;
