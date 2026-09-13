import { useEffect, useState } from 'react';
import TechnologyCard from './TechnologyCard';
import type { TechType } from '../types/TechType';

export default function TechnologyGrid() {
  const [technologies, setTechnologies] = useState<TechType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to load technology data');
        }
        return res.json();
      })
      .then((data: TechType[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[300px] items-center justify-center">
        <p className="text-gray-500">Loading technologies...</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            Explore the{' '}
            <span className="text-pink-600">Technologies</span>
          </h2>

          <p className="mt-1 text-sm text-gray-500 sm:text-base">
            Pick technologies to build your ideal development stack.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">

     
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            {technologies.map((tech) => (
              <TechnologyCard
                key={tech.id}
                tech={tech}
              />
            ))}
          </div>

          <div className="sticky top-28 lg:col-span-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-1 text-lg font-bold text-gray-900">
                Your Stack
              </h3>

              <p className="mb-6 text-xs text-gray-400">
                0 Technologies Selected
              </p>

              <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-200 p-8 text-center">
                <p className="mb-1 text-sm font-semibold text-gray-600">
                  Your stack is empty.
                </p>

                <p className="text-xs text-gray-400">
                  Add technologies to build your stack.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}