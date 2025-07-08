"use client";
import { useParams } from "next/navigation";

export default function CheckoutPage() {
  const { "product-id": productId } = useParams();

  return (
    <div className="max-w-screen-md mx-auto px-6 py-24 text-white">
      <h1 className="text-3xl font-bold mb-6">결제하기</h1>
      <p className="mb-4">상품: {productId}</p>
      
      {/* 이 아래에 PG사 스크립트를 삽입하거나 아임포트 연동 */}
      <button
        onClick={() => {
          alert("여기서 실제 결제 로직 실행!");
        }}
        className="bg-blue-600 px-6 py-3 rounded hover:bg-blue-700"
      >
        결제 진행
      </button>
    </div>
  );
}
