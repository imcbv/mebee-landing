import Image from 'next/image';

export default function ComingSoonPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: 'url(/images/MB_LaunchingSoon_background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div
        className="flex flex-col items-center justify-center px-4 py-20"
        style={{
          backgroundColor: 'rgba(147, 165, 160, 0.95)',
          minWidth: '80%',
          minHeight: '60vh',
          maxWidth: '1000px'
        }}
      >
        <div className="mb-16">
          <Image
            src="/images/mebee-logo-yellow.png"
            alt="MeBee Logo"
            width={100}
            height={100}
            priority
            className="w-auto h-auto"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-semibold mb-32 text-center">
          <span className="text-white">Something </span>
          <span className="text-mebee-yellow">Beeg</span>
          <span className="text-white"> is Coming</span>
        </h1>

        <p className="text-2xl md:text-3xl text-white font-light text-center mb-20">
          Launching Soon
        </p>
      </div>
    </div>
  );
}