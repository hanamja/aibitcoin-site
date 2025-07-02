export default function NavMenu() {
  return (
    <nav className="flex items-center gap-8 text-blue-100">
      <a href="/solution/overview" className="hover:text-sky-400">솔루션</a>
      <a href="/about" className="hover:text-sky-400">회사소개</a>
      <a href="/blog" className="hover:text-sky-400">블로그</a>
    </nav>
  );
}