/* eslint-disable react/no-danger */
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
  const { title, content, acf } = newsPage[0];

  return (
    <main className="article">
      <header>
        <h1 className="text-5xl font-black pb-2">{title.rendered}</h1>
        {acf?.sagetitle ? <p>{acf.sagetitle}</p> : ''}
      </header>

      <div className="content">
        <div dangerouslySetInnerHTML={{ __html: content.rendered }} />
      </div>
    </main>
  );
}
