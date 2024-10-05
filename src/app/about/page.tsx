import Image from "next/image";

export default function About() {
    return (
        <main className="bg-gradient-to-br from-yellow-100 to-green-300 bg-no-repeat bg-cover bg-center min-h-screen flex flex-col justify-start items-center">
            <div className="text-center mt-10 flex flex-col items-center px-4">
                <h1 className="font-bold text-4xl text-white bg-black bg-opacity-50 p-4 rounded md:text-5xl">
                    ABOUT ME:
                </h1>
                <h4 className="text-black mt-6 text-lg md:text-xl">
                    Hello! My name is Aqsa Shakeel, and I am 20 years old. I recently embarked on an exciting journey by starting my own online clothing brand, Aqsas Wear. With a passion for creativity, I began by painting on high-quality fabrics, bringing unique and artistic designs to life.
                </h4>
                
                <h4 className="text-black mt-4 text-lg md:text-xl">
                    As I continue to grow and explore new designs, I invite you to join me on this journey of creativity and style!
                </h4>

                <h4 className="mt-3 font-bold text-2xl text-white bg-black bg-opacity-50 p-4 rounded md:text-3xl">
                    MY ARTICLES:
                </h4>

                <div className="flex justify-center mb-4 mt-6 space-x-4 overflow-x-auto">
                    <Image
                        width={300} 
                        height={200} 
                        src="/first.jpeg" 
                        alt="background" 
                    />
                    <Image                        
                        width={300} 
                        height={200} 
                        src="/third.jpeg" 
                        alt="background" 
                    />
                    <Image
                        width={300} 
                        height={200} 
                        src="/forth.jpeg" 
                        alt="background" 
                    />
                </div>
            </div>
        </main>
    );
}
