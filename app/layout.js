import "../styles/globals.css";
import NavMenu from "../components/NavMenu";
import Link from 'next/link';

export const metadata = {
  title: "XZ | 공실을 디지털 수익자산으로",
  description: "당신의 공간에 맞춘 맞춤형 블록체인 수익화 솔루션.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="bg-[#0a192f] text-white">
        <div className="min-h-screen flex flex-col">

          {/* 헤더 */}
          <header className="bg-[#0a192f] fixed top-0 w-full z-50">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
              {/* 로고 */}
              <Link href="/">
                <div className="flex items-center space-x-2 cursor-pointer">
                  <img src="/officialmark.png" alt="Company Mark" className="h-6 w-auto invert" />
                  <div className="text-2xl font-bold text-white">XZ</div>
                </div>
              </Link>

              {/* NavMenu 중앙 */}
              <div className="flex-1 flex justify-center mt-4 sm:mt-0">
                <NavMenu />
              </div>

              {/* 문의하기 버튼 */}
              <a
                href="/contact"
                className="mt-4 sm:mt-0 bg-gradient-to-r from-blue-500 to-sky-400 text-white px-4 py-2 rounded hover:from-sky-400 hover:to-blue-500"
              >
                문의하기
              </a>
            </div>
          </header>

          {/* 메인 콘텐츠 */}
          <main className="flex-1 pt-16">
            {children}
          </main>

          {/* 푸터 */}
          <footer className="bg-[#0a192f] text-blue-100 py-10 px-6 border-t border-blue-700">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              {/* 회사 정보 */}
              <div className="space-y-2 leading-relaxed">
                <p className="text-lg font-semibold text-white">서울특별시 영등포구 경인로 805</p>
                <p>주식회사 엑스지 | 358-87-01632 | 대표자: 임금별</p>
                <p>02-3667-4142 | <a href="mailto:xzdataglobal@gmail.com" className="underline hover:text-sky-400">xzdataglobal@gmail.com</a></p>
              </div>

              {/* 브랜드 정보 */}
              <div className="md:text-right leading-relaxed">
                <p className="text-lg font-bold text-white">AI Tenant Center</p>
                <p className="text-sm mt-2 text-blue-300">© 2025 (주)XZ. All rights reserved.</p>
              </div>
            </div>
          </footer>

          {/* 카카오톡 문의 버튼 */}
          <a
            href="https://pf.kakao.com/_iDxnSn"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-16 right-6 bg-yellow-400 text-black rounded-full shadow-lg p-3 flex items-center gap-2 hover:bg-yellow-300 transition z-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7 sm:w-6 sm:h-6"
            >
              <path d="M12 2C6.477 2 2 5.797 2 10.202c0 2.594 1.757 4.89 4.42 6.262-.184.657-.675 2.41-.79 2.84 0 0-.015.136.073.188.09.053.204.013.204.013.268-.037 3.1-2.1 3.588-2.445A13.02 13.02 0 0012 18.404c5.523 0 10-3.797 10-8.202S17.523 2 12 2z" />
            </svg>
            <span className="hidden sm:inline font-semibold">카카오톡 문의</span>
          </a>
        </div>
      </body>
    </html>
  );
}
