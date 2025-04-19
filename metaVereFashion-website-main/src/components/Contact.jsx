import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ContactMetaverse = () => {
  return (
    <section
      id="contact"
      className="relative w-full h-screen flex flex-col justify-center items-center bg-black overflow-hidden px-6"
    >
      {/* Blurred Background Image
      <img
        src="/img/metaverse-model.webp"
        alt="Metaverse Fashion Model"
        className="absolute inset-0 z-0 object-cover w-full h-full opacity-20 blur-sm scale-110"
      /> */}

      {/* Glitch Text Container */}
      <div className="relative z-10 text-center max-w-4xl">
        <p className="text-xs uppercase tracking-widest text-fuchsia-500 mb-6">
          Enter the Styleverse
        </p>

        {/* GLITCH EFFECT */}
        <h1
          className="text-4xl md:text-7xl font-extrabold text-white uppercase leading-tight relative"
          style={{
            position: "relative",
          }}
        >
          <span className="relative z-10">Join the Fashion Revolution</span>
          <span
            className="absolute top-0 left-0 text-fuchsia-500 opacity-70 pointer-events-none"
            style={{
              clipPath: "inset(0 0 50% 0)",
              animation: "glitchTop 2s infinite linear",
            }}
          >
            Join the Fashion Revolution
          </span>
          <span
            className="absolute top-0 left-0 text-cyan-400 opacity-70 pointer-events-none"
            style={{
              clipPath: "inset(50% 0 0 0)",
              animation: "glitchBottom 2s infinite linear",
            }}
          >
            Join the Fashion Revolution
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-sm md:text-lg text-gray-300 mx-auto">
          Shape the digital couture movement. From XR wearables to avatar looks, your style belongs in the future.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <Button title="Contact Us" containerClass="bg-fuchsia-600 hover:bg-fuchsia-700 text-black" />
          <Button title="Be A Creator" containerClass="border border-fuchsia-500 text-fuchsia-400 hover:bg-fuchsia-500 hover:text-white" />
          <Button title="Try The Fit" containerClass="bg-white text-black hover:bg-gray-100" />
        </div>
      </div>

      {/* Visual Glitch Overlay */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay z-0"
        style={{
          backgroundImage: 'url("/img/glitch-overlay.png")',
          backgroundSize: "cover",
          opacity: 0.05,
        }}
      />

      {/* Inline keyframe animations */}
      <style jsx="true">{`
        @keyframes glitchTop {
          0% {
            transform: translate(0px, 0px);
          }
          20% {
            transform: translate(-2px, -2px);
          }
          40% {
            transform: translate(2px, 2px);
          }
          60% {
            transform: translate(-1px, 1px);
          }
          80% {
            transform: translate(1px, -1px);
          }
          100% {
            transform: translate(0px, 0px);
          }
        }

        @keyframes glitchBottom {
          0% {
            transform: translate(0px, 0px);
          }
          20% {
            transform: translate(2px, 1px);
          }
          40% {
            transform: translate(-2px, -1px);
          }
          60% {
            transform: translate(1px, -2px);
          }
          80% {
            transform: translate(-1px, 2px);
          }
          100% {
            transform: translate(0px, 0px);
          }
        }
      `}</style>
    </section>
  );
};

export default ContactMetaverse;
