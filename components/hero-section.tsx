import Image from "next/image";

export function HeroSection({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="relative min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-4.5rem)] flex items-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop"
          alt="Hero background"
          fill
          className="object-cover object-center brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/25" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Khám Phá Vẻ Đẹp
            <br />
            <span className="text-primary">Tự Nhiên</span> Của Bạn
          </h1>
          <p className="text-white/90 text-sm xs:text-base md:text-lg mb-8 max-w-lg">
            Chúng tôi cam kết mang đến cho bạn những dịch vụ thẩm mỹ tốt nhất
            với đội ngũ chuyên gia hàng đầu và công nghệ hiện đại.
          </p>

          {/* Stats */}
          <div className="mt-12 md:mt-16 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12">
            <div>
              <p className="text-2xl xs:text-3xl md:text-4xl font-bold text-primary mb-1">
                10+
              </p>
              <p className="text-white/80 text-sm xs:text-base">
                Năm Kinh Nghiệm
              </p>
            </div>
            <div>
              <p className="text-2xl xs:text-3xl md:text-4xl font-bold text-primary mb-1">
                50k+
              </p>
              <p className="text-white/80 text-sm xs:text-base">
                Khách Hàng Tin Tưởng
              </p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-2xl xs:text-3xl md:text-4xl font-bold text-primary mb-1">
                100%
              </p>
              <p className="text-white/80 text-sm xs:text-base">
                Khách Hàng Hài Lòng
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
