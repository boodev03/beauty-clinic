"use client";

import Image from "next/image";

const teamMembers = [
  {
    name: "Bs. Nguyễn Thị Anh",
    role: "Giám đốc điều hành",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop",
    credentials: "20+ năm kinh nghiệm trong lĩnh vực thẩm mỹ",
  },
  {
    name: "Bs. Trần Văn Minh",
    role: "Chuyên gia phun xăm thẩm mỹ",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2070&auto=format&fit=crop",
    credentials: "Chứng chỉ quốc tế về phun xăm thẩm mỹ",
  },
  {
    name: "Bs. Lê Thị Hương",
    role: "Chuyên gia chăm sóc da",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=2070&auto=format&fit=crop",
    credentials: "15+ năm kinh nghiệm điều trị da",
  },
];

const historyPoints = [
  {
    year: "2013",
    title: "Thành Lập",
    description: "Khởi đầu hành trình với phòng khám đầu tiên tại Hà Nội",
  },
  {
    year: "2016",
    title: "Phát Triển",
    description: "Mở rộng quy mô và đầu tư công nghệ hiện đại từ Hàn Quốc",
  },
  {
    year: "2019",
    title: "Đổi Mới",
    description:
      "Trở thành một trong những thương hiệu thẩm mỹ hàng đầu miền Bắc",
  },
  {
    year: "2023",
    title: "Phát Triển Bền Vững",
    description: "Mở rộng chuỗi cơ sở và nâng cao chất lượng dịch vụ",
  },
];

export function AboutSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-accent/20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Về Chúng Tôi
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Với đội ngũ bác sĩ giàu kinh nghiệm cùng trang thiết bị hiện đại,
            chúng tôi cam kết mang đến cho khách hàng những dịch vụ thẩm mỹ tốt
            nhất
          </p>
        </div>

        {/* History Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
          <div className="relative h-[300px] xs:h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
              alt="Clinic"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-4 text-white">
                <p className="text-sm font-medium">Thống kê năm 2023</p>
                <div className="grid grid-cols-2 gap-4 mt-3">
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-primary">
                      10+
                    </p>
                    <p className="text-xs text-white/80">Năm Kinh Nghiệm</p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-primary">
                      50K+
                    </p>
                    <p className="text-xs text-white/80">Khách Hàng</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Lịch Sử Hình Thành
              </h3>
              <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                Hành trình phát triển của chúng tôi là minh chứng cho sự nỗ lực
                không ngừng trong việc mang đến vẻ đẹp tự nhiên và sự tự tin cho
                khách hàng.
              </p>
            </div>

            <div className="space-y-6">
              {historyPoints.map((point, index) => (
                <div key={point.year} className="flex gap-4 group">
                  <div className="relative flex flex-col items-center">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs sm:text-sm group-hover:bg-primary group-hover:text-white transition-colors">
                      {point.year.slice(2)}
                    </div>
                    {index !== historyPoints.length - 1 && (
                      <div className="w-0.5 h-full bg-primary/10 mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-6">
                    <div className="bg-background rounded-xl p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-medium text-primary mb-1">
                        {point.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-lg sm:text-xl font-bold text-center mb-8 sm:mb-10">
            Đội Ngũ Chuyên Gia
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group relative bg-background rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-[300px] sm:h-[350px] lg:h-[400px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <h4 className="text-lg font-bold mb-1 text-white">
                      {member.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-white/70 mb-2">
                      {member.role}
                    </p>
                    <p className="text-xs sm:text-sm text-white/70">
                      {member.credentials}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">
            Chứng Nhận & Giấy Phép
          </h3>
          <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
            Chúng tôi tự hào được công nhận bởi các tổ chức uy tín trong ngành
            thẩm mỹ. Tất cả các dịch vụ của chúng tôi đều được cấp phép và đạt
            chuẩn an toàn cao nhất.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {/* Add certification logos here */}
          </div>
        </div>
      </div>
    </section>
  );
}
