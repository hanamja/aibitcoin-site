"use client";

import { useEffect } from "react";
import lottie from "lottie-web";

export default function HomePage() {
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: document.getElementById("lottie-container"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/Animation1.json",
    });
    return () => {
      anim.destroy();
    };
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8 md:gap-16 pt-10 md:pt-16">

      {/* 왼쪽: 텍스트 + 버튼 + 지표 */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
          당신의 공간이 <br className="hidden md:block" />
          새로운 수익을 창출합니다
        </h1>
        <p className="text-lg sm:text-xl mb-8 leading-relaxed max-w-md mx-auto md:mx-0 text-blue-100">
          내 공간, 내 전력으로 만드는 새로운 수익. <br />
          신뢰할 수 있는 파트너 XZ가 함께 합니다.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-10">
          <a
            href="/solution/overview"
            className="bg-gradient-to-r from-blue-500 to-sky-400 text-white px-6 py-3 rounded font-semibold hover:from-sky-400 hover:to-blue-500 transition"
          >
            솔루션 알아보기
          </a>
          <a
            href="/contact"
            className="border border-blue-400 text-blue-400 hover:bg-sky-400 hover:text-[#0a192f] px-6 py-3 rounded font-semibold"
          >
            지금 상담하기
          </a>
        </div>

        <div className="w-full h-px bg-white opacity-10 my-6"></div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center max-w-screen-md mx-auto py-6 text-base sm:text-lg">
          {[
            { label: "운영 중인 채굴 센터", value: "120곳" },
            { label: "누적 채굴 전력", value: "500MWh" },
            { label: "누적 지급 수익", value: "30억+" },
            { label: "파트너 공간 소유주", value: "300+" },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="text-2xl font-bold text-white">{item.value}</div>
              <div className="mt-1 text-blue-100 text-sm text-center leading-snug whitespace-pre-line">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 오른쪽: Lottie 애니메이션 */}
      <div className="flex-1 flex justify-center mt-6 md:mt-0">
        <div
          id="lottie-container"
          className="w-full max-w-[400px] h-auto"
        ></div>
      </div>
    </div>
  );
}
