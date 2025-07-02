export default function AboutPage() {
  return (
    <>
      {/* 첫 화면: 히어로 */}
      <section className="min-h-screen bg-[#eaf4fb] pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-black mb-4">
            우리는 누구나 도입 가능한
            <div className="mt-4">
              <span className="text-blue-500">디지털 수익화 솔루션</span>을 만듭니다.
            </div>
          </h1>
          <p className="text-gray-700 text-lg">
            누구나 쉽게 도입 가능한 디지털 자산화 서비스를 제공하여 사회적 문제 해결과 고객의 성장을 돕습니다.
          </p>
        </div>
      </section>

      {/* 두 번째 화면: OUR MISSION */}
      <section className="min-h-screen bg-[#f3f7fa] flex flex-col items-center justify-center px-6 py-16">
        <h3 className="text-2xl font-semibold text-gray-500 mb-2">OUR MISSION</h3>
        <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6 text-gray-800">
          공실과 암호화폐를 결합한 새로운 가치 창출
        </h2>
        <p className="text-lg text-gray-600 mb-10 text-center max-w-2xl">
          XZ는 공실을 기회로 바꾸어 고객과 사회가 함께 성장하는 미래를 만듭니다.


        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-screen-lg">
          {[
            {
              title: '공간의 가치 창출',
              desc: '유휴 공간을 디지털 자산으로 전환하여 새로운 수익을 창출합니다.',
            },
            {
              title: '지속 가능한 성장',
              desc: '비트코인 기반 수익화로 고객의 안정적인 성장을 지원합니다.',
            },
            {
              title: '기술 기반 사회 기여',
              desc: '공실과 암호화폐를 결합하여 사회적 문제 해결에 기여합니다.',
            },
            {
              title: '신뢰 기반의 디지털 자산화',
              desc: '투명성과 신뢰를 최우선 가치로 삼고 공실의 디지털 전환과 수익화를 통해 고객의 지속 가능한 성장과 사회적 가치를 함께 만듭니다.',
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded p-6 shadow hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-2 text-gray-800">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="min-h-screen bg-white flex items-center justify-center px-6 py-16">
        <div className="text-center">
          <h2 className="text-6xl sm:text-8xl font-bold text-gray-900 mb-4">
            가능성을 현실로
          </h2>
          <h3 className="text-6xl sm:text-8xl font-bold text-gray-900">
            XZ의 여정
          </h3>
        </div>
      </section>

      {/* 두번째 화면 - 연혁/이벤트 리스트 */}
      <section className="min-h-screen bg-white flex items-center justify-center px-6 py-16">
        <div className="max-w-screen-lg w-full flex flex-col sm:flex-row sm:items-start">
          {/* 연도 */}
          <div className="text-6xl sm:text-7xl font-bold text-black mb-8 sm:mb-0 sm:mr-16 shrink-0">
            2024
          </div>
          {/* 연혁 리스트 */}
          <ul className="w-full space-y-4">
            {[
              { month: '12', text: '2024 서울 유망중소기업 선정' },
              { month: '9', text: '국토교통부 체감형 사회문제해결 기업 선정' },
              { month: '5', text: '유휴공간 제휴 파트너 100명 돌파' },
              { month: '4', text: '2024 서울 유망중소기업 선정' },
              { month: '1', text: '(주)XZ프로젝트 법인 설립' }
            ].map((item, idx) => (
              <li key={idx} className="flex gap-4 text-lg text-gray-800 border-b border-gray-200 pb-2">
                <span className="w-6 font-semibold">{item.month}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
