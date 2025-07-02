export default function ContactPage() {
  return (
    <div className="max-w-screen-md mx-auto px-6 py-16 text-center pt-32">
      <h1 className="text-3xl font-bold mb-6">문의하기</h1>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="회사명"
          className="w-full p-2 rounded text-black"
          required
        />
        <input
          type="text"
          placeholder="담당자명"
          className="w-full p-2 rounded text-black"
          required
        />
        <input
          type="email"
          placeholder="이메일"
          className="w-full p-2 rounded text-black"
          required
        />
        <textarea
          placeholder="문의 내용"
          className="w-full p-2 rounded text-black"
          rows="4"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          제출하기
        </button>
      </form>
    </div>
  )
}
