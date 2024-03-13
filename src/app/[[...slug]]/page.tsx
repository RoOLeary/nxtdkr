'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { ToastAction } from '@radix-ui/react-toast';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { HomeAccordion } from '@/components/custom/home-accordion';
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
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
      blah: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    // eslint-disable-next-line no-console
    console.log(data);
    toast({
      title: 'Toast Output (VIM). Also in realtime',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4 z-50">
          <code className="text-white">
            {data.username} {data.blah}
          </code>
        </pre>
      ),
    });
  }

  function onHandle() {
    toast({
      variant: 'destructive',
      title: 'Uh oh! Something went wrong.',
      action: <ToastAction altText="Try again">Try again</ToastAction>,
      description: 'You probably borked something.',
    });
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <p className="pb-4">Placeholder logo</p>
      </div>
      <div className="flex gap-4 z-[10]">
        <Button variant="secondary" className="hidden md:block">
          <Link href="/info">Vim Test</Link>
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

      <Badge className="mt-4 p-4 bg-red-600">Dangerous Red badge</Badge>

      <br />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nyom Nyom, yummy toasties</FormLabel>
                <FormControl>
                  <Input placeholder="Placeholder Text" {...field} />
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
          <FormField
            control={form.control}
            name="blah"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nyom Nyom, yummy toasties</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Any old placeholder will do here"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  {field.value ? `DO THIS: ${field.value}` : null}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      <br />
      <Link href="/api/remote">API LINK</Link>
      <br />
      <Carousel className="w-full max-w-full">
        <CarouselContent className="-ml-1">
          {carouselImages.map((c) => (
            // eslint-disable-next-line react/no-array-index-key
            <CarouselItem key={c.title} className="md:basis-1/2 lg:basis-1/3">
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
      <HomeAccordion />
      <br />
      <br />
    </main>
  );
}
