"use client";

import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="bg-background border-t border-primary/10">
      <div className="container mx-auto py-12 px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                Beauty
              </span>
              <span className="text-2xl font-light">Clinic</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Chúng tôi cam kết mang đến cho bạn những dịch vụ thẩm mỹ tốt nhất
              với đội ngũ chuyên gia hàng đầu và công nghệ hiện đại.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Liên Hệ</h3>
            <div className="space-y-3">
              <p className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone className="w-4 h-4" /> 0912 345 678
              </p>
              <p className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail className="w-4 h-4" /> contact@beautyclinic.com
              </p>
              <p className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4" /> 123 Đường ABC, Quận XYZ, TP.HCM
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Kết Nối</h3>
            <div className="flex gap-4">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              {/* Zalo */}
              <a
                href="https://zalo.me"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 50 50"
                  className="fill-primary"
                >
                  <path d="M25,2C12.318,2,2,12.318,2,25s10.318,23,23,23s23-10.318,23-23S37.682,2,25,2z M35.067,32.951h-6.526 c-0.975,0-1.77-0.795-1.77-1.77v-0.578c0-0.977,0.795-1.77,1.77-1.77h6.526c0.975,0,1.77,0.793,1.77,1.77v0.578 C36.837,32.156,36.042,32.951,35.067,32.951z M35.067,25.922h-6.526c-0.975,0-1.77-0.793-1.77-1.77v-0.578 c0-0.975,0.795-1.77,1.77-1.77h6.526c0.975,0,1.77,0.795,1.77,1.77v0.578C36.837,25.129,36.042,25.922,35.067,25.922z M35.067,18.893 h-6.526c-0.975,0-1.77-0.793-1.77-1.77v-0.576c0-0.977,0.795-1.77,1.77-1.77h6.526c0.975,0,1.77,0.793,1.77,1.77v0.576 C36.837,18.1,36.042,18.893,35.067,18.893z M20.933,32.951h-6.526c-0.975,0-1.77-0.795-1.77-1.77v-0.578 c0-0.977,0.795-1.77,1.77-1.77h6.526c0.977,0,1.77,0.793,1.77,1.77v0.578C22.703,32.156,21.91,32.951,20.933,32.951z M20.933,25.922 h-6.526c-0.975,0-1.77-0.793-1.77-1.77v-0.578c0-0.975,0.795-1.77,1.77-1.77h6.526c0.977,0,1.77,0.795,1.77,1.77v0.578 C22.703,25.129,21.91,25.922,20.933,25.922z M20.933,18.893h-6.526c-0.975,0-1.77-0.793-1.77-1.77v-0.576 c0-0.977,0.795-1.77,1.77-1.77h6.526c0.977,0,1.77,0.793,1.77,1.77v0.576C22.703,18.1,21.91,18.893,20.933,18.893z" />
                </svg>
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Theo dõi chúng tôi để cập nhật những thông tin mới nhất
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-primary/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Beauty Clinic. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/chinh-sach-bao-mat"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Chính sách bảo mật
              </Link>
              <Link
                href="/dieu-khoan-su-dung"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Điều khoản sử dụng
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
