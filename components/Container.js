import Head from 'next/head';
import Link from 'next/link';

export default function Container(props) {
    const { children, ...customMeta } = props;
    const meta = {
        title: 'All Burger No Pickles',
        description: `Clout Computing Specialist`,
        image: '../public/justin_artwork.png',
        type: 'website',
        ...customMeta
    };

    return (
        <div className="bg-imperial flex flex-col justify-center min-h-full">
            <Head>
                <title>{meta.title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="robots" content="follow, index" />
                <meta content={meta.description} name="description" />
                <meta property="og:type" content={meta.type} />
                <meta property="og:site_name" content="Justin Teves" />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={meta.image} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@justin_teves_" />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content={meta.image} />
                <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
            </Head>
            <nav className="flex justify-end">
                <ul className="flex justify-end justify-around w-full lg:w-4/12 p-4 max-w-lg">
                    <li>
                        <Link href="https://twitter.com/justin_teves_">
                            <a className="font-sans text-xl text-red underline">twitter</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="http://www.github.com/JustinTheeDude" target="_blank">
                            <a className="font-sans text-xl text-orange underline">github</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a className="font-sans text-xl text-green underline">blog</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a className="font-sans text-xl text-orange underline">resume</a>
                        </Link>
                    </li>
                </ul>
            </nav>
            <main>
                {children}
            </main>
        </div>
    );
}
