
export default function Home() {
  return (
    <main className="bg-slate-100 p-5 h-[100dvh] flex items-center justify-center dark:bg-black sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100">
      <div className="gap-y-3 bg-white w-full shadow-md p-5 rounded-2xl max-w-screen-sm dark:bg-gray-400   flex flex-col md:px-10 md:flex-row">
        <input className="w-full shadow-lg placeholder:font-mono placeholder:drop-shadow-md outline-none ring-transparent focus:ring-orange-500  transition-all  ring ring-orange-400 ring-offset-4   pl-3 rounded-full h-10 bg-gray-200" type="text" placeholder="Search here..." />
        <button className="bg-black bg-opacity-50  focus:scale-90 transition outline-none font-semibold text-white py-2 rounded-full active:scale-90 px-4">
          검색
        </button>
      </div>
    </main>
  );
}
