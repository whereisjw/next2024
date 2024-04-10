export default function Home() {
  return (
    <main className="bg-slate-100 p-5 h-[100dvh] flex items-center justify-center dark:bg-black sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100">
      <div className="*:outline-none gap-4  has-[.peer]:bg-green-100 gap-y-3 bg-white w-full shadow-md p-5 rounded-2xl max-w-screen-sm dark:bg-gray-400   flex flex-col ">
        <div className="group">
          <input
            type="text"
            className="bg-gray-100 w-full"
            placeholder="write your email"
          />
          <span className="group-focus-within:block hidden">
            Make sure it is a valid email...
          </span>
          <button>Submit</button>
        </div>
      </div>
    </main>
  );
}
