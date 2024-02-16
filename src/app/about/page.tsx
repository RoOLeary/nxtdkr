import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl w-full h-full font-black text-center">
        ABOUT WHO?
      </h1>
      <h3 className="text-3xl w-full h-full font-black text-center">
        This is how lazy I am! <br />
        <br /> ABOUT YOU? ABOUT ME? ABOUT WE?
      </h3>
      <br />
      <div className="flex gap-4">
        <Link href="/info">Info</Link>
        <Link href="/">Back</Link>
      </div>
    </main>
  );
}
