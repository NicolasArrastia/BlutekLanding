const HeroSection = () => {
  return (
    <section id="hero-section" className="relative flex text-neutral-950 flex-col items-center justify-center h-screen bg-gradient-to-b from-white to-neutral-100">
      <div className="absolute top-[35%] left-[12%] size-45 rounded-full from-neutral-400 to-transparent bg-gradient-to-b"></div>
      <div className="absolute top-[52%] left-[60%] size-20 rounded-full from-neutral-400 to-transparent bg-gradient-to-b"></div>

      <span className="text-center text-5xl mb-6">
        Creamos tu web{" "}
        <span className="from-neutral-800 to-neutral-600 bg-gradient-to-r bg-clip-text text-transparent font-semibold">
          limpia{" "}
        </span>{" "}
        y <span className="font-semibold">funcional</span>
      </span>

      <span className="text-neutral-600 text-xl text-center">
        Somos Blutek, un equipo especializado en soluciones digitales
        profesionales
      </span>
    </section>
  );
};

export default HeroSection;
