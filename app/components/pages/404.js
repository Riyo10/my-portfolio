// pages/404.js
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-red-500">404</h1>
        <p className="text-2xl mt-4 text-gray-700">Oops! The page you're looking for doesn't exist.</p>
        <p className="text-lg mt-2 text-gray-600">
          You might have mistyped the URL or the page has been removed.
        </p>
        <Link href="/">
          <a className="mt-6 inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-md">
            Go back to Home
          </a>
        </Link>
      </div>
    </div>
  );
}
