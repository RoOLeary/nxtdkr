/* eslint-disable react/no-array-index-key */

'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { ToastAction } from '@radix-ui/react-toast';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Initial } from '../../components/ui/Initial';

const FormSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
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

// eslint-disable-next-line no-console
console.log(carouselImages);

export default function Page() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'Toast Output',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4 z-50">
          <code className="text-white">{data.username}</code>
        </pre>
      ),
    });
  }

  function onHandle() {
    toast({
      variant: 'destructive',
      title: 'Uh oh! Something went wrong.',
      action: <ToastAction altText="Try again">Try again</ToastAction>,
      description: 'You probably fucked up.',
    });
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Initial funny="stuff" />
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rounded-md mb-4"
          src="https://ronan-oleary.com/assets/ro-bw.d434f415.png"
          alt="Ro Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className="flex gap-4 z-[10]">
        <Button variant="secondary" className="hidden md:block">
          <Link href="/info">Info</Link>
        </Button>
        <Button variant="outline" className="hidden md:block">
          <Link href="/about">Yeah about that!</Link>
        </Button>
        <Button
          variant="destructive"
          className="hidden md:block"
          onClick={() => onHandle()}
        >
          Error Toast
        </Button>
      </div>
      <br />
      <Badge className="p-4 bg-green-600">Nice litte badge</Badge>
      <br />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nyom Nyom Toasty Change</FormLabel>
                <FormControl>
                  <Input placeholder="Danger Ro" {...field} />
                </FormControl>
                <FormDescription>
                  {field.value
                    ? `This is your public display name: ${field.value}`
                    : null}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      <br />
      <Carousel className="w-full max-w-full">
        <CarouselContent className="-ml-1">
          {carouselImages.map((c, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <Image
                      src={c.src}
                      alt={c.title}
                      width={c.width}
                      height={c.height}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <br />
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50 text-balance">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
