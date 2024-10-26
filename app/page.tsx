/* eslint-disable @next/next/no-img-element */
import styles from "./page.module.css";

const url = "https://api.thecatapi.com/v1/images/search?limit=50";
const api_key = process.env.CAT_KEY;

interface CatImage {
  id: string;
  url: string;
}

async function getCatPics() {
  try {
    const res = await fetch(url, {
      headers: {"x-api-key": api_key!},
    });
    const result = await res.json();
    return result;
  } catch (error) {
    throw new Error(`Unable to get the cute cats! ${error}`);
  }
}

export default async function Home() {
  const cats = await getCatPics();

  return (
    <main className={styles.page}>
      {cats.map((cat: CatImage, index: number) => (
        <figure className={styles.card} key={cat.id}>
          <img
            className={styles.catPic}
            src={cat.url}
            alt={`Cat ${index + 1}`}
          />
        </figure>
      ))}
    </main>
  );
}
