"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  CalendarRange,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  User,
} from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const services = [
  "Phun mày",
  "Phun môi",
  "Điều trị da",
  "Phẫu thuật thẩm mỹ",
  "Chăm sóc da",
  "Khác",
];

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Tên phải có ít nhất 2 ký tự.",
  }),
  phone: z.string().regex(/^[0-9]{10}$/, {
    message: "Số điện thoại không hợp lệ.",
  }),
  email: z.string().email({
    message: "Email không hợp lệ.",
  }),
  service: z.string().optional(),
  message: z.string().optional(),
});

export function ContactSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Handle form submission
    console.log(values);
  }

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 px-4">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop"
          alt="Hero background"
          fill
          className="object-cover brightness-[0.2]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/40 to-black/50" />
      </div>

      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white">
            Đặt Lịch Tư Vấn
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-base">
            Để lại thông tin để được tư vấn miễn phí về dịch vụ phù hợp với bạn
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-xl mx-auto">
          <div className="relative">
            {/* Form glow effect */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-primary/20 to-primary/10 rounded-[24px] blur-2xl" />

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 sm:space-y-6 bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/20"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-white/90">
                        <User className="w-4 h-4" />
                        <span className="text-sm sm:text-base">Họ và tên</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-9 sm:h-10 text-sm sm:text-base"
                          placeholder="Nguyễn Văn A"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-300" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-white/90">
                        <Phone className="w-4 h-4" />
                        <span className="text-sm sm:text-base">
                          Số điện thoại
                        </span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-9 sm:h-10 text-sm sm:text-base"
                          placeholder="0912345678"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-300" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-white/90">
                        <Mail className="w-4 h-4" />
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-primary/50 focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors"
                          placeholder="example@gmail.com"
                          type="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-300" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-white/90">
                        <CalendarRange className="w-4 h-4" />
                        Dịch vụ quan tâm
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-primary/50 focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors">
                            <SelectValue placeholder="Chọn dịch vụ" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-red-300" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-white/90">
                        <MessageSquare className="w-4 h-4" />
                        <span className="text-sm sm:text-base">Lời nhắn</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[80px] sm:min-h-[100px] text-sm sm:text-base"
                          placeholder="Nhập lời nhắn của bạn..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-300" />
                    </FormItem>
                  )}
                />

                {/* Contact Info */}
                <div className="pt-6 mt-6 border-t border-white/10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-3">
                      <p className="flex items-center gap-2 text-white/80">
                        <Phone className="w-4 h-4" />
                        <span className="text-sm sm:text-base">
                          0912 345 678
                        </span>
                      </p>
                      <p className="flex items-center gap-2 text-white/80">
                        <Mail className="w-4 h-4" />
                        <span className="text-sm sm:text-base">
                          contact@beautyclinic.com
                        </span>
                      </p>
                    </div>
                    <div>
                      <p className="flex items-center gap-2 text-white/80">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm sm:text-base">
                          123 Đường ABC, Quận XYZ, TP.HCM
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="space-y-4">
                  <p className="text-[11px] sm:text-xs text-white/70">
                    Bằng cách gửi biểu mẫu này, bạn đồng ý cho phép chúng tôi sử
                    dụng thông tin của bạn theo{" "}
                    <a href="#" className="text-primary hover:underline">
                      Chính sách bảo mật
                    </a>{" "}
                    của chúng tôi.
                  </p>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white h-9 sm:h-10 text-sm sm:text-base"
                  >
                    Đặt Lịch Ngay
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
