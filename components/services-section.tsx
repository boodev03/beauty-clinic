"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Phun Săm Thẩm Mỹ",
    description:
      "Công nghệ phun xăm thẩm mỹ hiện đại, tự nhiên với đội ngũ chuyên gia hàng đầu",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop",
    icon: "✨",
    href: "/dich-vu/phun-sam-tham-my",
    features: ["Phun mày", "Phun môi", "Phun mí"],
  },
  {
    title: "Chăm Sóc Da",
    description:
      "Liệu trình chăm sóc da chuyên sâu, phục hồi và trẻ hóa làn da của bạn",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop",
    icon: "💆‍♀️",
    href: "/dich-vu/cham-soc-da",
    features: ["Trẻ hóa da", "Điều trị mụn", "Điều trị nám"],
  },
  {
    title: "Phẫu Thuật",
    description:
      "Dịch vụ phẫu thuật thẩm mỹ an toàn, kết quả tự nhiên với bác sĩ giàu kinh nghiệm",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
    icon: "👩‍⚕️",
    href: "/dich-vu/phau-thuat",
    features: ["Nâng mũi", "Cắt mí", "Nâng ngực"],
  },
  {
    title: "Mỹ Phẩm",
    description:
      "Các sản phẩm mỹ phẩm cao cấp, được kiểm nghiệm và chứng nhận an toàn",
    image:
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=2070&auto=format&fit=crop",
    icon: "💋",
    href: "/dich-vu/my-pham",
    features: ["Serum", "Kem dưỡng", "Mặt nạ"],
  },
  {
    title: "Đào Tạo Học Viện",
    description:
      "Khóa học chuyên nghiệp với chứng chỉ được công nhận toàn quốc",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    icon: "🎓",
    href: "/dich-vu/dao-tao",
    features: ["Phun xăm", "Spa", "Thẩm mỹ"],
  },
];

export function ServicesSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Dịch Vụ Nổi Bật
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Khám phá các dịch vụ thẩm mỹ cao cấp của chúng tôi, được thực hiện
            bởi đội ngũ chuyên gia hàng đầu
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service) => (
            <Link
              href={service.href}
              key={service.title}
              className="group block"
            >
              <div className="relative bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <div className="relative h-[280px] sm:h-[300px] lg:h-[320px] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 lg:p-6">
                    {/* Icon and Title */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-lg sm:text-xl bg-white/10 backdrop-blur-sm p-1.5 rounded-lg">
                        {service.icon}
                      </span>
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white">
                        {service.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-white/90 mb-4 line-clamp-2">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="flex gap-1.5 sm:gap-2 mb-4 flex-wrap">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-2 sm:px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-[10px] sm:text-xs font-medium text-white"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Call to Action */}
                    <div className="flex items-center text-white group-hover:text-primary transition-colors">
                      <span className="text-xs sm:text-sm font-medium">
                        Tìm hiểu thêm
                      </span>
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
