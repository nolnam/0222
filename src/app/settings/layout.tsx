"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "프로필", href: "/settings/profile" },
  { label: "스타일 선호도", href: "/settings/style" },
  { label: "알림 설정", href: "/settings/notifications" },
];

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-4">
          <span className="text-lg font-bold text-gray-900">🧥 오픈클로</span>
          <span className="ml-3 text-sm text-gray-400">설정</span>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-8">
        <div className="flex gap-8">
          <nav className="w-48 shrink-0">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      pathname === item.href
                        ? "bg-black text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <main className="flex-1">{children}</main>
        </div>
      </div>
    </div>
  );
}
