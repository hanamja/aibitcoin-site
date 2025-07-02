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
      path: "/Animation1.json"
    });

    return () => {
      anim.destroy();
    };
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">

      {/* 왼쪽: 텍스트 + 버튼 + 지표 */}
      <div className="flex-1">
        <h1 className="text-5xl font-bold leading-tight mb-6 pt-32">
          당신의 공간이 <br />
          새로운 수익을 창출합니다
        </h1>
        <p className="text-xl mb-8 leading-relaxed max-w-md">
          내 공간, 내 전력으로 만드는 새로운 수익. <br />
          신뢰할 수 있는 파트너 XZ가 함께 합니다.
        </p>

        <div className="flex gap-4 mb-10">
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
        <div className="w-full h-px bg-white opacity-100 my-6"></div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 text-center max-w-screen-lg mx-auto py-8">
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold">120곳</div>
            <div className="mt-2 text-blue-100">
              <div>운영 중인</div>
              <div>채굴 센터</div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold">500MWh</div>
            <div className="mt-2 text-blue-100">누적 채굴 전력</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold">30억+</div>
            <div className="mt-2 text-blue-100">누적 지급 수익</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold">300+</div>
            <div className="mt-2 text-blue-100"></div>
            <div>파트너</div>
            <div>공간 소유주</div>
          </div>
        </div>
      </div>

      {/* 오른쪽: Lottie 애니메이션 */}
      <div className="flex-1 flex justify-center mt-[-50px] pt-32">
        <div id="lottie-container" style={{ width: 500, height: 500 }}></div>
      </div>

    </div>
  );
}
