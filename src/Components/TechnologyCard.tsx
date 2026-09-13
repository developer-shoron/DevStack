import type { TechType } from '../types/TechType';

interface TechCardProps {
  tech: TechType;
}

export default function TechnologyCard({ tech }: TechCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-gray-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md">

      <div>
        <div className="mb-3 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-100 bg-gray-50">
              {tech.icon ? (
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="h-6 w-6 object-contain"
                />
              ) : (
                tech.name.charAt(0)
              )}
            </div>
          </div>

          <span className="rounded-full bg-pink-50 px-2.5 py-0.5 text-[11px] font-semibold text-pink-500">
            {tech.badge}
          </span>
        </div>

        <h3 className="mb-1 text-base font-bold text-gray-900">
          {tech.name}
        </h3>

        <p className="mb-6 line-clamp-3 text-xs leading-relaxed text-gray-500">
          {tech.description}
        </p>
      </div>

      <div>
        <div className="mb-4 flex items-center justify-between border-t border-gray-100 pt-3 text-xs text-gray-500">

          <span className="rounded-md bg-gray-50 px-2.5 py-1 font-medium text-gray-600">
            {tech.category}
          </span>

          <span className="font-medium text-gray-600">
            {tech.difficulty}
          </span>

          <span className="flex items-center gap-1 font-semibold text-gray-700">
            <span className="text-yellow-400">★</span>
            {tech.rating}
          </span>

        </div>

        <button className="w-full rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 py-2.5 text-xs font-semibold text-white transition-opacity hover:opacity-95">
          Add to Stack
        </button>
      </div>

    </div>
  );
}