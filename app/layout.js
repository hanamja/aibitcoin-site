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
          <header className="border-b border-blue-700 bg-[#0a192f] shadow-sm fixed top-0 w-full z-50">
            <div className="max-w-screen-xl mx-auto flex items-center px-6 py-4">
              {/* 로고 */}
              <Link href="/">
                <div className="flex items-center space-x-2">
                  <img src="/mark1.png" alt="Company Mark" className="h-6 w-auto" />
                  <div className="text-2xl font-bold text-white">XZ</div>
                </div>
              </Link>
              {/* NavMenu 중앙 */}
              <div className="flex-1 flex justify-center">
                <NavMenu />
              </div>

              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-sky-400 text-white px-4 py-2 rounded hover:from-sky-400 hover:to-blue-500"
              >
                문의하기
              </a>
            </div>
          </header>

          <main className="flex-1">
            {children}
          </main>

          <footer className="bg-[#0a192f] text-blue-100 text-center py-4 border-t border-blue-700">
            ⓒ 2025 (주)XZ. All rights reserved.
          </footer>
          <a
            href="https://pf.kakao.com/여기에_카카오톡_채널_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-16 right-6 bg-yellow-400 text-black rounded-full shadow-lg p-3 flex items-center gap-2 hover:bg-yellow-300 transition z-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
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
