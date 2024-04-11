import Link from "next/link";

export default function Home() {
  return (
<div className="flex flex-col items-center justify-between min-h-screen p-6 ">
  <div className="my-auto *:font-medium flex items-center gap-2 flex-col">
    <span className="text-9xl">⚡</span>
    <h1 className="text-5xl">당근</h1>
    <h2 className="text-2xl">당근 마켓에 어서오세요!</h2>
  </div>
  <div className="flex flex-col items-center gap-2 w-full ">
    <Link href={'/create-account'} className="w-full bg-orange-500 transition-all hover:bg-orange-400 text-white text-lg font-medium py-2 rounded-md text-center">시작하기</Link>
    <div className="flex gap-2 ">
      <span>이미 계정이 있나요?</span>
      <Link href={'/login'} className="hover:underline underline-offset-4">로그인</Link>
    </div>
  </div>
</div>
  );
}
