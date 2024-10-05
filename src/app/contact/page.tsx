import Link from "next/link";

export default function Contact() {
    return (
        <main className="bg-gradient-to-br from-yellow-100 to-green-300 bg-no-repeat bg-cover bg-center h-screen flex flex-col justify-center items-center">
            <div className="text-center">
                <h1 className="mt-4 font-bold text-4xl text-white bg-black bg-opacity-50 p-4 rounded">
                    CONTACT ME:
                </h1>
                
                <div className="flex justify-center mt-8">
                    <ul className="text-black p-5 space-y-4 text-2xl text-left">
                        <li>Name: Aqsa Shakeel</li>
                        <li>Position: Owner</li>
                        <li>Phone: 0344-3341006</li>
                        <li>E-mail: shakeelaqsa031@gmail.com</li>
                    </ul>
                </div>

                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-bold mb-4">Follow Us</h2>
                    <div className="flex justify-center space-x-6">
                        <Link href="https://facebook.com" className="text-black hover:underline">Facebook</Link>
                        <Link href="https://youtube.com/@artbyaqsashakeel?si=4aUf4Ky9A_oBxYsp" className="text-black hover:underline">YouTube</Link>
                        <Link href="https://www.instagram.com/artbyaqsashakeel/" className="text-black hover:underline">Instagram</Link>
                    </div>
                </div>
            </div>
        </main>
    );
};
