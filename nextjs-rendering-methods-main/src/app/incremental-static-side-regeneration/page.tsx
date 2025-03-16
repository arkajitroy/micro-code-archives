import Link from "next/link";

// Metadata can be exported as default for app directory
export const metadata = {
  title: "Incremental Static Side Generation",
  description:
    "Simplicity is the ultimate sophistication. Our solution helps you focus on what truly matters.",
  keywords: ["platform", "solution", "focus"],
};

// Here you can define the revalidate time for the page, so after the time has passed the page will be revalidated
export const revalidate = 5;

export default async function Page() {
  const quotes = [
    "The best way to predict the future is to create it.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "Believe you can and you're halfway there.",
    "Your limitation—it’s only your imagination.",
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Welcome to Our Platform
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
          Simplicity is the ultimate sophistication. Our solution helps you focus on what
          truly matters.
        </p>
        <p className="text-md md:text-lg italic mb-8 text-gray-500">
          &quot;{randomQuote}&quot;
        </p>
        <Link
          href="/get-started"
          className="inline-block border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-none font-medium text-lg hover:bg-gray-900 hover:text-white transition duration-300"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

// ! HOW TO SIMULATE THE SERVERS SIDE RENDERING
// - When the page is requested, the server will render the page and send it to the client
// - The client will then render the page again
// - So here you can see the quote changes every time you refresh the page because the server is rendering the page again it is happening because the page is in developement mode. But in production mode, the page will be rendered only once on the server and then the client will render the page again.
