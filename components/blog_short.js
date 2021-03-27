import Link from 'next/link';
import Image from 'next/image'

export default function ShortBlog() {
    return(
        <Link href="/">
            <article className="flex flex-wrap bg-grey hover:bg-red transition-all transform-gpu hover:-translate-y-3 max-w-3xl w-full p-3 my-5 rounded-2xl shadow-md cursor-pointer justify-center md:justify-around">
                <Image
                    src="/justin_artwork.png"
                    alt="Picture of ya boi"
                    width={250}
                    height={200}
                />
                <div className="md:w-7/12 p-3">
                    <h1 className="font-sans text-orange text-3xl">This is a blog post</h1>
                    <time className="text-white text-base font-sans"datetime="2021-03-26 20:00">March 26 2021</time>.
                    <p className="font-sans mt-4 text-lg text-white">Amet deleniti sed assumenda dolorem minima doloribus, corrupti, quia tempore deleniti corporis. Aliquam quisquam qui at officiis iure. Saepe modi.</p>
                </div>
            </article>
        </Link>
    );
}
