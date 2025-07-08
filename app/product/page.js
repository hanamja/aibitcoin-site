"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "IceRiver ALEO AE1 Lite",
    hash: "300 Mh",
    image: "/aleo_ae1lite.png",
    desc: "ZK 연산에 특화된 ALEO 전용 채굴기. 개인 공간에서도 운용 가능.",
    price: "\u20a94,000,000",
    buyUrl: "/product/checkout/aleo-ae1-lite",
    roiUrl: "/product/roi/aleo-ae1-lite",
  },
  {
    name: "Bitmain Antminer L9",
    hash: "17 Gh",
    image: "/antminer_l9.png",
    desc: "Litecoin + Dogecoin 병합 채굴 지원. 고효율 수익 장비.",
    price: "\u20a97,800,000",
    buyUrl: "/product/checkout/antminer-l9",
    roiUrl: "/product/roi/antminer-l9",
  },
  {
    name: "IceRiver AE2",
    hash: "1.6 Gh",
    image: "/iceriver_ae2.png",
    desc: "가장 높은 연산 성능을 제공하는 ALEO 풀 스펙 채굴기.",
    price: "\u20a912,000,000",
    buyUrl: "/product/checkout/iceriver-ae2",
    roiUrl: "/product/roi/iceriver-ae2",
  },
];

export default function ProductPage() {
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-24 text-white">
      <h1 className="text-4xl font-bold mb-12 text-center">채굴기 제품 안내</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, idx) => (
          <div key={idx} className="bg-[#0f2235] border border-blue-600 rounded-lg shadow-md p-6">
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={300}
              className="rounded mb-4 object-cover"
            />
            <h2 className="text-xl font-bold mb-1">{product.name}</h2>
            <p className="text-sm text-blue-300 mb-2">Hashrate: {product.hash}</p>
            <p className="text-sm text-blue-100 mb-4">{product.desc}</p>
            <div className="text-lg font-semibold text-white mb-6">{product.price}</div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={product.buyUrl}
                className="bg-gradient-to-r from-blue-500 to-sky-400 text-white px-4 py-2 rounded hover:from-sky-400 hover:to-blue-500 transition"
              >
                지금 구매하기
              </Link>
              <Link
                href={product.roiUrl}
                className="border border-sky-400 text-sky-400 px-4 py-2 rounded hover:bg-sky-400 hover:text-[#0a192f] transition"
              >
                수익성 계산하기
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
