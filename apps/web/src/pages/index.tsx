import Head from 'next/head';
import { Button } from 'ui';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Web - Turborepo Example</title>
      </Head>

      <main className="mx-2 my-4">
        <h1>next.js!</h1>
        <Button />
      </main>
    </div>
  );
}
