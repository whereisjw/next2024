interface Props{
    text:string;
    loading:boolean;
}
export default function FormButton({text,loading}:Props) {
  return (
    <button disabled={loading} className="primary-btn h-10 disabled:bg-slate-400 disabled:text-slate-300">
      {loading ? 'loading...' : text}
    </button>
  );
}
