import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import TechnologyCard from './TechnologyCard';
import type { TechType } from '../types/TechType';
import { FaXmark } from 'react-icons/fa6';

export default function TechnologyGrid() {
  const [technologies, setTechnologies] = useState<TechType[]>([]);
  const [stack, setStack] = useState<TechType[]>([]);
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





  const handleAddToStack = (tech: TechType) => {
    const alreadyAdded = stack.some((item) => item.id === tech.id);

    if (alreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }

    setStack((prevStack) => [...prevStack, tech]);

    toast.success(`${tech.name} added to your stack!`);
  };


  const handleRemoveFromStack = (id: string) => {
    const removedTech = stack.find((item) => item.id === id);

    setStack((prevStack) =>
      prevStack.filter((item) => item.id !== id)
    );

    if (removedTech) {
      toast.info(`${removedTech.name} removed from your stack.`);
    }
  };


  const handleRemoveAll = () => {
  setStack([]);
  toast.info('All technologies removed from your stack!');
};

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

        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            Explore the{' '}
            <span className="text-pink-600">
              Technologies
            </span>
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
                isAdded={stack.some(
                  (item) => item.id === tech.id
                )}
                onAdd={handleAddToStack}
              />
            ))}

          </div>

        
          <div className="sticky top-28 lg:col-span-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

              <h3 className="mb-1 text-lg font-bold text-gray-900">
                Your Stack
              </h3>

              <p className="mb-6 text-xs text-gray-400">
                {stack.length} Technology
                {stack.length !== 1 ? 'ies' : 'y'} Selected
              </p>

              {stack.length === 0 ? (
                <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-200 p-8 text-center">
                  <p className="mb-1 text-sm font-semibold text-gray-600">
                    Your stack is empty.
                  </p>

                  <p className="text-xs text-gray-400">
                    Add technologies to build your stack.
                  </p>
                </div>
              ) : (

              
                <div className="space-y-3">

                  {stack.map((tech) => (
                    <div
                      key={tech.id}
                      className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3"
                    >

                
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white">
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="h-6 w-6 object-contain"
                        />
                      </div>

                
                      <div className="min-w-0 flex-1">
                        <h4 className="truncate text-sm font-bold text-gray-900">
                          {tech.name}
                        </h4>

                        <p className="text-xs text-gray-500">
                          {tech.category}
                        </p>
                      </div>


                 
                      <button
                        onClick={() =>
                          handleRemoveFromStack(tech.id)
                        }
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500"
                        aria-label={`Remove ${tech.name}`}
                      >
                        <FaXmark size={16} />
                      </button>

                    </div>
                  ))}
                        <button
                        onClick={handleRemoveAll}
                        className="mt-5 w-full rounded-xl border border-red-200 bg-red-50 py-2.5 text-sm font-semibold text-red-500 transition-colors hover:bg-red-100"
                        >
                        Remove All
                        </button>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}