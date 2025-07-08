"use client";

import { useState } from "react";

export default function FranchisePage() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("가맹 신청이 완료되었습니다.");
        setFormData({ name: "", phone: "", message: "" });
    };

    return (
        <div className="max-w-screen-md mx-auto px-6 py-24 text-white">
            <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-center">XZ 파트너가 되어<br />
                안정적인 수익을 만들어보세요!</h1>

            {/* 연락처 및 주소 */}
            <div className="space-y-8 text-base sm:text-lg mb-12">
                <div>
                    <h2 className="font-semibold text-xl text-blue-400 mb-2">Head Office</h2>
                    <p>서울특별시 영등포구 경인로 805, 2F</p>
                </div>
                <div>
                    <h2 className="font-semibold text-xl text-blue-400 mb-2">R&D Center</h2>
                    <p>서울특별시 영등포구 경인로 805, 1F</p>
                </div>
                <div>
                    <h2 className="font-semibold text-xl text-blue-400 mb-2">Tel</h2>
                    <a href="tel:07071399784" className="underline hover:text-sky-400">
                        02-3667-4142
                    </a>
                </div>
                <div>
                    <h2 className="font-semibold text-xl text-blue-400 mb-2">E-mail</h2>
                    <a href="mailto:info@datamaker.io" className="underline hover:text-sky-400">
                        xzdataglobal@gamil.com
                    </a>
                </div>
            </div>

            {/* PDF 다운로드 */}
            <div className="mb-12">
                <a
                    href="/XZ_franchise_guide.pdf" // public 폴더에 파일 위치
                    download
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded font-semibold transition"
                >
                    가맹 안내서 다운로드 (PDF)
                </a>
            </div>

            {/* 신청 폼 */}
            <form onSubmit={handleSubmit} className="bg-[#0f2235] p-6 rounded shadow mb-16">
                <h2 className="text-xl font-semibold mb-4">가맹 신청</h2>
                <div className="grid gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="이름"
                        value={formData.name}
                        onChange={handleChange}
                        className="p-3 rounded bg-[#0a192f] border border-blue-700 text-white"
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="연락처"
                        value={formData.phone}
                        onChange={handleChange}
                        className="p-3 rounded bg-[#0a192f] border border-blue-700 text-white"
                        required
                    />
                    <textarea
                        name="message"
                        rows="4"
                        placeholder="문의 내용"
                        value={formData.message}
                        onChange={handleChange}
                        className="p-3 rounded bg-[#0a192f] border border-blue-700 text-white"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-blue-500 to-sky-400 hover:from-sky-400 hover:to-blue-500 text-white px-4 py-2 rounded font-semibold"
                    >
                        제출하기
                    </button>
                </div>
            </form>

            {/* FAQ */}
            <div className="mb-10">
                <h2 className="text-2xl font-bold mb-6">자주 묻는 질문 (FAQ)</h2>
                <div className="space-y-6 text-sm sm:text-base">
                    <div>
                        <p className="font-semibold text-sky-400">Q. 가맹에 필요한 자격 조건이 있나요?</p>
                        <p>A. 공간 소유주이시거나 법적 임대 권한이 있다면 가능합니다.</p>
                    </div>
                    <div>
                        <p className="font-semibold text-sky-400">Q. 설치에 필요한 비용이 있나요?</p>
                        <p>A. 초기 설치 비용은 수익금에서 차감되는 구조로, 선불 비용이 없습니다.</p>
                    </div>
                    <div>
                        <p className="font-semibold text-sky-400">Q. 수익은 어떻게 지급되나요?</p>
                        <p>A. 매월 말 비트코인 기준으로 지갑에 자동 전송됩니다.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
