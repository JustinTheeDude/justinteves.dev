import Image from 'next/image'
import Container from '../components/Container';

export default function Home() {
    return (
        <Container>
            <div className="flex flex-col content-center bg-imperial justify-center items-center w-10/12 m-auto lg:w-full p-10">
                <Image
                    src="/justin_artwork.png"
                    alt="Picture of ya boi"
                    width={650}
                    height={500}
                />
                <h1 className="font-sans text-white text-center mb-8 text-4xl md:text-8xl">Justin <span className="text-green">Teves</span></h1>
                <h2 className="font-sans text-white text-center text-lg md:text-4xl">Software <span className="text-red">Engineer</span> with a computer and a <span className="text-orange">dream.</span></h2>
            </div>
        </Container>
    );
}
