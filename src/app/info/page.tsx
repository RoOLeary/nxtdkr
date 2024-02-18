import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="w-full h-full font-black">
        I am an info bit. And in case I didnt already mention, I strongly
        dislike Docker, especially when it doesn&apos;t work.
        <br />
        However, it has been working, and is growing on me a bit. Have to admit.
        Not totally sold yet, but not <em>not</em> either. If you get me.
      </h1>
      <br />
      <div className="flex gap-4">
        <Link href="/about">About</Link>
        <br />
        <Link href="/">Back</Link>
      </div>
    </main>
  );
}
