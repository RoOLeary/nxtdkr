/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/button-has-type */

'use client';

import { z } from 'zod';

const FormSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  blah: z.string().min(2, {
    message: 'This field must be at least 2 characters.',
  }),
});

const carouselImages = [
  {
    src: '/assets/images/heart.webp',
    original: '/assets/images/heart.webp',
    width: 320,
    height: 174,
    title: "We're no strangers to love....",
  },
  {
    src: 'https://media.giphy.com/media/ibqNLl44qRLJyKv7rU/giphy-downsized-large.gif',
    original:
      'https://media.giphy.com/media/ibqNLl44qRLJyKv7rU/giphy-downsized-large.gif',
    width: 350,
    height: 250,
    title: '...you know the rules and so do I...',
  },
  {
    src: '/assets/images/coffee.webp',
    original: '/assets/images/coffee.webp',
    width: 350,
    height: 212,
    title: "...a full commitment's what I'm thinking of...",
  },
  {
    src: 'https://media.giphy.com/media/QyVZ1BCz9Fh6J0qblM/giphy.gif',
    original: 'https://media.giphy.com/media/QyVZ1BCz9Fh6J0qblM/giphy.gif',
    width: 480,
    height: 240,
    title: "...you wouldn't get this from any other guy...",
  },
  {
    src: '/assets/images/not-a-meeting.webp',
    original: '/assets/images/not-a-meeting.webp',
    width: 320,
    height: 183,
    title: "...I just wanna tell you how I'm feeling...",
    description: '',
  },
];

export default function Page() {
  // const { toast } = useToast();

  // const form = useForm<z.infer<typeof FormSchema>>({
  //   resolver: zodResolver(FormSchema),
  //   defaultValues: {
  //     username: '',
  //     blah: '',
  //   },
  // });

  // function onSubmit(data: z.infer<typeof FormSchema>) {
  //   // eslint-disable-next-line no-console
  //   console.log(data);
  //   toast({
  //     title: 'Toast Output (VIM). Also in realtime',
  //     description: (
  //       <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4 z-50">
  //         <code className="text-white">
  //           {data.username} {data.blah}
  //         </code>
  //       </pre>
  //     ),
  //   });
  // }

  // function onHandle() {
  //   toast({
  //     variant: 'destructive',
  //     title: 'Uh oh! Something went wrong.',
  //     action: <ToastAction altText="Try again">Try again</ToastAction>,
  //     description: 'You probably borked something.',
  //   });
  // }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24">
      <div className="px-4 md:p-0 flex flex-col align-start w-full text-white">
        <h2 className="meta">Spanish Point -&nbsp;5K</h2>{' '}
        <p className="">Spanish Point, County Clare | 27th January 2024</p>
      </div>
      <section className="container mx-auto p-5 md:py-12 px-0 md:p-8 md:px-0">
        {/* FIRST BLOCK */}

        <section className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-4 items-start ">
          <section className="bg-red-500 text-center cursor-pointer rounded-sm shiney-wrapper shine">
            <img
              className="object-fit"
              src="/assets/images/active.jpeg"
              alt=""
            />
          </section>

          <section className="bg-red-500 text-center cursor-pointer rounded-sm shiney-wrapper shine">
            <img
              className="object-fit"
              src="/assets/images/active.jpeg"
              alt=""
            />
          </section>

          <section className="bg-red-500 text-center cursor-pointer rounded-sm shiney-wrapper shine">
            <img className="h-1/2" src="/assets/images/active.jpeg" alt="alt" />
          </section>

          <section className="bg-red-500 text-center cursor-pointer rounded-sm shiney-wrapper shine">
            <img className="h-1/2" src="/assets/images/active.jpeg" alt="alt" />
          </section>
        </section>

        {/* SECOND BLOCK */}
        <section className="p-5 mt-4 md:p-0 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-2 md:gap-4 items-start ">
          <section className="bg-red-500 text-center cursor-pointer rounded-sm shiney-wrapper shine">
            <img
              className="object-fit"
              src="/assets/images/active2.jpeg"
              alt=""
            />
          </section>
          <section className="bg-red-500 text-center cursor-pointer rounded-sm shiney-wrapper shine">
            <img
              className="object-fit"
              src="/assets/images/active2.jpeg"
              alt=""
            />
          </section>
          <section className="big-red-500 text-center cursor-pointer rounded-sm shiney-wrapper shine">
            <img
              className="object-fit"
              src="/assets/images/active2.jpeg"
              alt=""
            />
          </section>
          <section className="bg-red-500 text-center cursor-pointer rounded-sm shiney-wrapper shine">
            <img
              className="object-fit"
              src="/assets/images/active2.jpeg"
              alt=""
            />
          </section>
          <section className="bg-red-500 text-center cursor-pointer rounded-sm shiney-wrapper shine">
            <img
              className="object-fit"
              src="/assets/images/active2.jpeg"
              alt=""
            />
          </section>
          <section className="big-red-500 text-center cursor-pointer rounded-sm shiney-wrapper shine">
            <img
              className="object-fit"
              src="/assets/images/active2.jpeg"
              alt=""
            />
          </section>
        </section>
      </section>
    </main>
  );
}
