import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import { BeakerIcon } from '@heroicons/react/solid';
import { BeakerIcon as BI } from '@heroicons/react/outline';

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload" // `strategy` controls when the third-party script should load. A value of lazyOnload tells Next.js to load this particular script lazily during browser idle time
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        } // `onLoad` is used to run any JavaScript code immediately after the script has finished loading. In this example, we log a message to the console that mentions that the script has loaded correctly
      />
      <h2>
        {/* If you need to add attributes like, for example, className, add it to the a tag, not to the Link tag. */}
        <Link href="/">
          <a className="foo">Back to home</a>
        </Link>
      </h2>
      {/* Width & Height: Desired size with correct aspect ratio: 800*1200 -> 200*300  */}
      <Image src="/images/a.jpg" width={200} height={300} />
      <BeakerIcon className="h-8 w-8 text-blue-500" />
      <BI className="h-8 w-8 text-blue-500" />
    </>
  );
}
