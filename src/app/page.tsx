import clsx from "clsx";
import Image from "next/image";

import { Container } from "@/app/_components/Container";
import image1 from "@/images/photos/image-1.jpg";
import image2 from "@/images/photos/image-2.jpg";
import image3 from "@/images/photos/image-3.jpg";
import image4 from "@/images/photos/image-4.jpg";
import image5 from "@/images/photos/image-5.jpg";
import dynamic from "next/dynamic";

const ImageUploader = dynamic(() => import("./_components/ImageUploader"), {
  ssr: false,
});

function Photos() {
  let rotations = [
    "rotate-2",
    "-rotate-2",
    "rotate-2",
    "rotate-2",
    "-rotate-2",
  ];

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl",
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function Home() {
  return (
    <>
      <Container className="mt-9">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          &quot;What are you thankful for?&quot;
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Dreading the idea of standing up in front of a table of people and
          needing to share on the spot? We&apos;ve got you covered! Instead,
          we&apos;re looking to put together a 2023 Thankful Gallery. This will
          be filled with images from (or around) 2023 that highlight memories,
          people, and other things that we are thankful for.
        </p>
      </Container>
      <Photos />
      <Container className="mt-20">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Help contribute with your memories!
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Upload your photos below and we&apos;ll add them to the gallery!
        </p>
        <div className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          <ImageUploader />
        </div>
      </Container>
    </>
  );
}
