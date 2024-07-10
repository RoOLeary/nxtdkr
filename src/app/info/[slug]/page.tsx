import { notFound } from 'next/navigation';

async function fetchData(slug: any) {
  // console.log('fetch slug:', slug);
  const page = await fetch(
    `https://blpwp.frb.io/wp-json/wp/v2/news?slug=${slug}`,
  ).then((res) => res.json());

  if (!page) {
    return notFound();
  }
  return page;
}

export default async function Page({ params }: any) {
  const { slug } = params;
  const newsPage = await fetchData(slug);
  const { title, content } = newsPage[0];

  return (
    <main className="article">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <h1 className="text-5xl font-black pb-8">{title.rendered}</h1>
      </div>
      <div
        className="content"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: content.rendered }}
      />
    </main>
  );
}
