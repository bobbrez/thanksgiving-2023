import { type Metadata } from "next";

import "@/styles/tailwind.css";

export const metadata: Metadata = {
  title: "Thanksgiving 2023 - Thankful Gallery",
  description:
    "Dreading the idea of standing up in front of a table of people and needing to share on the spot? We've got you covered! Instead, we're looking to put together a 2023 Thankful Gallery. This will be filled with images from (or around) 2023 that highlight memories, people, and other things that we are thankful for.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <div className="flex w-full">
          <div className="fixed inset-0 flex justify-center sm:px-8">
            <div className="flex w-full max-w-7xl lg:px-8">
              <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
            </div>
          </div>
          <div className="relative flex w-full flex-col">
            <main className="flex-auto">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
