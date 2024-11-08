/* eslint-disable import/no-named-as-default */
// pages/move/Page.tsx
// import { notFound } from 'next/navigation';

// import ClientTaskManager from '../../components/move/ClientTaskManager';
import { SlidingGallery } from '@/components/custom/sliding-gallery';

import GridPanel from '../../components/custom/grid-panel';
// async function fetchTasksData() {
//   const page = await fetch(
//     `https://67005c054da5bd237553e174.mockapi.io/api/move-ro-move/tasks`,
//   ).then((res) => res.json());

//   if (!page) {
//     return notFound();
//   }
//   return page;
// }

export default async function Page() {
  // const tasks = await fetchTasksData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 max-sm:p-8">
      <GridPanel />
      <SlidingGallery />
    </main>
  );
}
