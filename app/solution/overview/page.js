const cards = [
    {
        title: '서울 강남 100평 공실 | 소유주 A',
        subtitle: '비트코인 월 500만원 수익화',
        desc: '등록부터 설치, 운영까지 XZ가 책임지며 매월 안정적인 수익을 지급받고 있습니다.',
    },
    {
        title: '부산 60평 공실 | 소유주 B',
        subtitle: '연 5% 공실 수익률 확보',
        desc: '장기간 공실 부담을 줄이고 안정적 수익을 창출하고 있습니다.',
    },
    {
        title: '대구 80평 공실 | 파트너 C',
        subtitle: '24시간 모니터링 + 비트코인 전환',
        desc: '비트코인 전환까지 일괄 관리해주어 매우 만족합니다.',
    },
];

export default function OverviewPage() {
    return (
        <div className="max-w-screen-xl mx-auto px-6 py-16 text-center pt-32">

            {/* 1️⃣ 개요 */}
            <section className="mb-16">
                <div className="flex justify-center mb-6">
                    {/* <img src="/mark1.png" alt="XZ 로고" className="h-8" /> */}
                </div>
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-wide text-sky-400 mb-2">
                        공실을 디지털 수익 자산으로
                    </h1>
                    <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-wide mb-8">
                        바꾸는 최적화 솔루션
                    </h1>
                </div>
                <p className="text-blue-100 text-lg sm:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto">
                    XZ는 공실 분석부터 장비 설치, 운영, 수익 지급을
                    <br />
                    한 번에 해결하는 디지털 자산화 솔루션을 제공합니다.
                </p>
                <a
                    href="/contact"
                    className="bg-gradient-to-r from-blue-500 to-sky-400 text-white px-8 py-3 rounded font-semibold hover:from-sky-400 hover:to-blue-500"
                >
                    지금 무료 상담하기
                </a>
            </section>

            {/* 2️⃣ 단계 흐름 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
                {/* 카드 내용 */}
            </div>

            {/* 3️⃣ 프로젝트 사례 */}
            <div className="relative w-full overflow-hidden bg-[#0a192f]">
                <div className="flex space-x-4 w-max animate-slide pt 32">
                    {[...cards, ...cards].map((card, idx) => (
                        <div
                            key={idx}
                            className="min-w-[280px] sm:min-w-[320px] border border-blue-400 rounded p-6 shadow-sm text-left bg-[#0f2235]"
                        >
                            <p className="font-bold mb-1">{card.title}</p>
                            <p className="text-sm text-blue-100 mb-2">{card.subtitle}</p>
                            <p className="text-blue-100 text-sm">{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 4️⃣ 왜 암호화폐인가 */}
            <div className="max-w-screen-xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-center mb-10">XZ의 솔루션을 선택해야 하는 이유</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { icon: '💸', title: '높은 수익 기회', desc: '공실을 디지털 자산화해 추가 수익 창출' },
                        { icon: '🌎', title: '글로벌 유동성', desc: '어디서든 현금화 가능한 디지털 자산' },
                        { icon: '🏢', title: '유휴 자산 활용', desc: '빈 공간을 즉시 수익 공간으로 전환' },
                        { icon: '📈', title: '자산 다변화', desc: '부동산 + 비트코인으로 리스크 분산' },
                        { icon: '⚡', title: '초기 비용 부담 없음', desc: '설치 비용은 수익에서 상계 가능' },
                        { icon: '🛠', title: '원스톱 관리', desc: '설치부터 수익 지급까지 XZ가 전담' },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-[#0f2235] border border-blue-700 rounded p-6 shadow-sm text-center hover:border-sky-400 transition"
                        >
                            <div className="text-5xl mb-4">{item.icon}</div>
                            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                            <p className="text-blue-100 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            <section className="max-w-screen-xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-center mb-12">XZ 솔루션 진행 과정</h2>
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-6 text-center">
                    <div className="bg-[#0f2235] p-4 rounded shadow">
                        <div className="text-4xl mb-2">🏢</div>
                        <p className="font-semibold">공실 등록</p>
                        <p className="text-blue-100 text-sm">간단 정보 입력, 무료 분석</p>
                    </div>
                    <div className="bg-[#0f2235] p-4 rounded shadow">
                        <div className="text-4xl mb-2">📋</div>
                        <p className="font-semibold">현장 조사</p>
                        <p className="text-blue-100 text-sm">전문가 방문, 최적화 설계</p>
                    </div>
                    <div className="bg-[#0f2235] p-4 rounded shadow">
                        <div className="text-4xl mb-2">⚙️</div>
                        <p className="font-semibold">장비 설치</p>
                        <p className="text-blue-100 text-sm">최적 장비 설치 + 세팅</p>
                    </div>
                    <div className="bg-[#0f2235] p-4 rounded shadow">
                        <div className="text-4xl mb-2">📡</div>
                        <p className="font-semibold">원격 모니터링</p>
                        <p className="text-blue-100 text-sm">24시간 상태 확인</p>
                    </div>
                    <div className="bg-[#0f2235] p-4 rounded shadow">
                        <div className="text-4xl mb-2">💰</div>
                        <p className="font-semibold">수익 지급</p>
                        <p className="text-blue-100 text-sm">비트코인으로 매월 전환</p>
                    </div>
                </div>
            </section>
        </div>

    );
}
