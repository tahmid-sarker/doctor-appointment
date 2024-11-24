import { useNavigate } from 'react-router';

const Error = () => {
    const navigate = useNavigate()

  return (
    <section className="h-screen flex items-center justify-center bg-gray-100">  
      {/* Error Message */}
      <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-5xl font-bold text-red-600 mb-4">Page Not Found</h1>
        <p className="text-lg mb-6">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <p className="text-sm text-gray-500 mb-8">
          Please check the URL or go back to the homepage.
        </p>
        <button className="btn bg-[#176AE5] text-white text-lg font-bold hover:bg-[#0f55b4] border-0 rounded-full px-8 py-6"
          onClick={() => navigate("/")}>
          Go to Homepage
        </button>
      </div>
    </section>
  );
};

export default Error;