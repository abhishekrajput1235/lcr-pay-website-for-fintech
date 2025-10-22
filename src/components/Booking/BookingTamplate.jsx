import { ExternalLink } from "lucide-react";

export default function BookingGrid({ title, subtitle, items }) {
  return (
    <div className="px-6 ">
      <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-500 mb-6">{subtitle}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {items.map((item) => (
          <a
            key={item.name}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-white rounded-xl shadow hover:shadow-lg transition p-6 flex items-center justify-center"
          >
            <img
              src={item.logo}
              alt={item.name}
              className="max-h-10 object-contain"
            />
            <span className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-sm">
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
