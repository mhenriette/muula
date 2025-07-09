import { Target } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <Link href="/" className="flex items-center space-x-2 mb-4 md:mb-0">
          <Target className="h-6 w-6 text-secondary" />
          <span className="text-xl font-bold">SkillScope</span>
        </Link>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2025 SkillScope. All rights reserved.</p>
      </div>
    </div>
  </footer>
  );
}