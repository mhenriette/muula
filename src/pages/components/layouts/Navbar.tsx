import Link from "next/link";
import { Target } from "lucide-react";

export default function Navbar() {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Target className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">SkillScope</span>
          </Link>
          <Link
            href="/skill-check"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Check your skills
          </Link>
        </div>
      </div>
    </header>
  );
}
