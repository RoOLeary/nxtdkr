/* eslint-disable react/no-array-index-key */
/* eslint-disable array-callback-return */
/* eslint-disable no-console */
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function Page() {
  // eslint-disable-next-line no-console
  const infoPage = await fetch(`https://blpwp.frb.io/wp-json/wp/v2/news`).then(
    (res) => res.json(),
  );

  if (!infoPage) {
    return notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="w-full h-full font-black">
        I am an info bit. And in case I didnt already mention, I strongly
        dislike Docker, especially when it doesn&apos;t work.
        <br />
        However, it has been working, and is growing on me a bit. Have to admit.
        Not totally sold yet, but not <em>not</em> either. If you get me.
      </h1>
      <p>BLAH</p>
      <br />
      <div>
        <h3 className="font-black text-left">
          Remote CPT Output from{' '}
          <a href="https://blpwp.frb.io/wp-json/wp/v2/news" target="_blank">
            WP
          </a>
        </h3>

        <p className="font-semibold">
          Links below not clickable yet, but <i>do</i> come from a remote data
          source
        </p>
      </div>
      <div className="w-full">
        {Object.entries(infoPage).map(([id, info]) => {
          // Destructure the info array directly
          // @ts-ignore
          const { slug, title } = info;
          return (
            <h3 key={id}>
              <Link href={`/news/${slug}`} className="hover:text-red-700">
                <h5>{title.rendered}</h5>
              </Link>
            </h3>
          );
        })}
      </div>
      <div className="flex gap-4">
        <Link href="/about">About</Link>
        <br />
        <Link href="/">Back</Link>
      </div>
    </main>
  );
}
