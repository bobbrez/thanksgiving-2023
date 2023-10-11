import glob from "fast-glob";

interface Article {
  title: string;
  description: string;
  author: string;
  date: string;
}

export interface ArticleWithSlug extends Article {
  slug: string;
}

export async function getAllArticles() {
  return [
    {
      slug: "crafting-a-design-system-for-a-multiplanetary-future",
      title: "Foo",
      description: "Bar",
      author: "Baz",
      date: "2021-01-01",
    },
  ];
}
