export default function Home() {
  return (
    <main className="flex-grow bg-[url('https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg')] bg-no-repeat bg-cover bg-center flex items-center justify-center h-screen">
      <div className="flex flex-col items-center"> 
        <h2 className="hover:font-bold transition duration-300 ease-in-out transform hover:scale-110 font-bold text-2xl text-white bg-black bg-opacity-50 p-4 rounded text-center">
          Welcome to My Store!
        </h2>
        
        {/* Button directly below the heading */}
        <button className="bg-yellow-500 text-white p-2 rounded mt-4 hover:bg-yellow-600 transition duration-300 ease-in-out transform hover:scale-110">
          Shop Now
        </button>
      </div>
    </main>
  );
};


