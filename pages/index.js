import Image from 'next/image'
import Container from '../components/Container';
import ShortBlog from '../components/blog_short';

export default function Home() {
    return (
        <Container>
            <div className="flex flex-col content-center bg-imperial justify-center items-center p-4 md:p-8 md:w-10/12 m-auto w-full">
                <Image
                    src="/justin_artwork.png"
                    alt="Picture of ya boi"
                    width={750}
                    height={600}
                    priority="true"
                />
                <h1 className="font-sans text-white text-center mb-8 text-4xl md:text-8xl">Justin <span className="text-green">Teves</span></h1>
                <h2 className="font-sans text-white text-center text-lg md:text-4xl">Software <span className="text-red">Engineer</span> based in <span className="text-orange">Vancouver, <span className="text-red">BC.</span></span> 🇨🇦</h2>
            </div>
            <div className="flex-col flex flex-wrap justify-center items-center p-8 mt-20 m-auto">
                <h3 className="font-sans w-full text-white text-center text-4xl mb-4 md:text-5xl text-orange">Recent Blog Posts</h3>
                <ShortBlog />
            </div>
        </Container>
    );
}
