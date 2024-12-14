"use client";

import { Menu } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const services = {
  "Phun Săm Thẩm Mỹ": [
    "Phun mày shading",
    "Phun mày ombre",
    "Phun mày tán võng",
    "Máy sợi hairstock",
    "Máy sợi dầu phun điện",
    "Phun mày hiệu ứng trong đệm",
    "Xóa xăm mày",
    "Phun môi tán viền/khóe",
    "Phun môi hiệu ứng trong/đệm",
    "Xóa xăm môi",
  ],
  "Chăm Sóc Da": [],
  "Phẫu Thuật": [],
  "Mỹ Phẩm": [],
  "Đào Tạo Học Viện": [],
};

export function MainNav() {
  return (
    <div className="flex items-center flex-1 ml-8">
      <div className="hidden lg:block">
        <NavigationMenu>
          <NavigationMenuList className="gap-6">
            {Object.entries(services).map(([category, items]) => (
              <NavigationMenuItem key={category}>
                {items.length > 0 ? (
                  <>
                    <NavigationMenuTrigger className="text-sm font-medium p-0 data-[state=open]:bg-transparent">
                      {category}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[460px] p-6">
                        <h4 className="text-lg font-medium mb-6 text-primary/80 border-b pb-3">
                          {category}
                        </h4>
                        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                          {items.map((item) => (
                            <Link
                              key={item}
                              href={`/dich-vu/${encodeURIComponent(item)}`}
                              className="group flex items-center gap-3 text-sm hover:text-primary transition-colors p-2 rounded-lg hover:bg-accent/50"
                            >
                              <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-primary/10 bg-primary/5 group-hover:border-primary/25 group-hover:bg-primary/10">
                                <div className="h-2.5 w-2.5 rounded-full bg-primary/40 group-hover:bg-primary/60 transition-colors" />
                              </div>
                              <span className="font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                                {item}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link
                    href={`/${encodeURIComponent(category.toLowerCase())}`}
                    className="text-sm font-medium hover:text-primary transition-colors"
                  >
                    {category}
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="lg:hidden ml-auto">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-transparent w-10 h-10"
            >
              <Menu className="!size-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="mt-6">
              {Object.entries(services).map(([category]) => (
                <div key={category} className="py-4">
                  <Link
                    href={`/${encodeURIComponent(category.toLowerCase())}`}
                    className="text-base hover:text-primary transition-colors"
                  >
                    {category}
                  </Link>
                </div>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
