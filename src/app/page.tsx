import Image from "next/image";

export default function ComingSoonPage() {
  return (
    <div
      className="h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: "url(/images/MB_LaunchingSoon_background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Static image version as per designer request */}
      <Image
        src="/images/MB_LaunchingSoon_.png"
        alt="Something Beeg is Coming"
        width={1000}
        height={600}
        priority
        className="w-auto h-auto max-w-[90%] max-h-[80vh]"
      />

      {/* Dynamic version - commented out for now
      <div
        className="flex flex-col items-center justify-center px-4 py-8 md:py-20 mx-4 md:mx-8"
        style={{
          backgroundColor: "rgba(147, 165, 160, 0.95)",
          minWidth: "80%",
          minHeight: "60vh",
          maxWidth: "1000px",
        }}
      >
        <div className="mb-14 md:mb-16 mt-4 md:mt-0">
          <Image
            src="/images/mebee-logo-yellow.png"
            alt="MeBee Logo"
            width={100}
            height={100}
            priority
            className="h-auto w-24 md:w-26"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-medium mb-18 md:mb-30 text-center font-articulat">
          <span className="text-white">Something </span>
          <span className="text-mebee-yellow">Beeg</span>
          <span className="text-white"> is Coming</span>
        </h1>

        <p className="text-2xl md:text-3xl text-white font-light text-center mb-4 md:mb-4 font-articulat">
          Launching Soon
        </p>
      </div>
      */}
    </div>
  );
}
