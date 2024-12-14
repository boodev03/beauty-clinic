"use client";

import * as React from "react";
import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/components/scroll-animation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    id: 1,
    name: "Chị Ngọc Anh",
    service: "Phun mày tán bột",
    content:
      "Tôi rất hài lòng với kết quả phun mày tại đây. Các bác sĩ rất tận tâm và chuyên nghiệp. Kết quả đẹp tự nhiên như ý muốn.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Chị Thu Hà",
    service: "Điều trị nám",
    content:
      "Sau 3 tháng điều trị, làn da của tôi đã cải thiện rõ rệt. Cảm ơn đội ngũ bác sĩ đã tư vấn và điều trị hiệu quả.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Chị Minh Tâm",
    service: "Phun môi",
    content:
      "Phun môi ở đây rất tự nhiên, không sưng nhiều và lành rất nhanh. Các bác sĩ tư vấn rất tận tình và chi tiết.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Chị Thanh Hương",
    service: "Điều trị mụn",
    content:
      "Sau liệu trình điều trị mụn, da mặt tôi đã sạch và mịn màng hơn rất nhiều. Giá cả hợp lý và dịch vụ chuyên nghiệp.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1557053910-d9eadeed1c58?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Chị Mai Anh",
    service: "Phun mí",
    content:
      "Phun mí ở đây rất đẹp và tự nhiên. Bác sĩ tư vấn kỹ càng và thực hiện rất chuyên nghiệp. Tôi rất hài lòng với kết quả.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2070&auto=format&fit=crop",
  },
];

const beforeAfterGallery = [
  {
    id: 1,
    service: "Phun Mày Tán Bột",
    description: "Kết quả sau 1 tháng điều trị",
    before:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2069&auto=format&fit=crop",
    after:
      "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    service: "Điều Trị Nám",
    description: "Kết quả sau 3 tháng điều trị",
    before:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop",
    after:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop",
  },
];

export function TestimonialsSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-accent/20">
      <div className="container mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <motion.div
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Khách Hàng Nói Gì Về Chúng Tôi
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              Những phản hồi chân thực từ khách hàng là minh chứng rõ nhất cho
              chất lượng dịch vụ của chúng tôi
            </p>
          </motion.div>

          {/* Testimonials Carousel */}
          <motion.div
            variants={fadeInUp}
            className="max-w-5xl mx-auto mb-16 sm:mb-20"
          >
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[plugin.current]}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {testimonials.map((testimonial) => (
                  <CarouselItem
                    key={testimonial.id}
                    className="pl-2 md:pl-4 md:basis-1/2"
                  >
                    <div className="h-full">
                      <div className="relative bg-background/60 backdrop-blur-sm rounded-2xl p-8 h-full flex flex-col hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group">
                        <div className="absolute inset-0 rounded-2xl border border-primary/10 group-hover:border-primary/20 transition-colors" />
                        <div className="absolute inset-0 rounded-2xl border border-white/20 opacity-50" />
                        <div className="bg-primary/10 w-10 h-10 flex items-center justify-center rounded-full mb-6">
                          <Quote className="w-5 h-5 text-primary" />
                        </div>
                        <p className="text-sm sm:text-base mb-6 flex-grow">
                          {testimonial.content}
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary/10">
                            <Image
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold text-primary text-sm sm:text-base">
                              {testimonial.name}
                            </h4>
                            <p className="text-xs sm:text-sm text-muted-foreground">
                              {testimonial.service}
                            </p>
                          </div>
                          <div className="ml-auto flex gap-0.5">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-3 h-3 sm:w-4 sm:h-4 fill-primary/90 text-primary/30"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:block">
                <CarouselPrevious className="-left-12 lg:-left-16" />
                <CarouselNext className="-right-12 lg:-right-16" />
              </div>
            </Carousel>
          </motion.div>

          {/* Before/After Gallery */}
          <motion.div variants={fadeInUp} className="max-w-5xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Kết Quả Điều Trị
              </h3>
              <div className="w-16 h-0.5 bg-primary mx-auto rounded-full mb-4" />
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
                Khám phá sự thay đổi tuyệt vời của khách hàng sau khi sử dụng
                dịch vụ của chúng tôi
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {beforeAfterGallery.map((item) => (
                <motion.div key={item.id} variants={fadeInUp}>
                  <div className="group bg-background/60 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-500 relative">
                    <div className="absolute inset-px rounded-[15px] border border-white/20" />
                    <div className="absolute inset-0 rounded-2xl border border-primary/10 group-hover:border-primary/30 transition-colors duration-500" />
                    <div className="relative h-[280px] sm:h-[320px] md:h-[360px] flex">
                      {/* Before Image */}
                      <div className="relative w-1/2 overflow-hidden">
                        <Image
                          src={item.before}
                          alt="Before"
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                          <span className="px-3 py-1 bg-black/30 backdrop-blur-md rounded-full text-xs font-medium text-white border border-white/10">
                            Trước
                          </span>
                        </div>
                      </div>
                      {/* After Image */}
                      <div className="relative w-1/2 overflow-hidden">
                        <Image
                          src={item.after}
                          alt="After"
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/30 to-transparent" />
                        <div className="absolute bottom-4 right-4">
                          <span className="px-3 py-1 bg-primary/40 backdrop-blur-md rounded-full text-xs font-medium text-white border border-white/10">
                            Sau
                          </span>
                        </div>
                      </div>
                      {/* Divider Line */}
                      <div className="absolute inset-y-4 left-1/2 w-[2px] bg-gradient-to-b from-white/5 via-white/20 to-white/5 -translate-x-1/2" />
                    </div>
                    <div className="p-4 relative z-10 bg-gradient-to-t from-background/80 to-background/40 backdrop-blur-sm">
                      <h4 className="text-sm sm:text-base font-semibold text-primary mb-0.5">
                        {item.service}
                      </h4>
                      <p className="text-[10px] sm:text-xs text-muted-foreground/90">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
