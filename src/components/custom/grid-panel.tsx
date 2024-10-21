import Image from 'next/image';

export const GridPanel = () => {
  const items = [
    { id: 1, title: 'Item 1', image: 'https://placehold.co/360x300/png' },
    { id: 2, title: 'Item 2', image: 'https://placehold.co/360x300/png' },
    { id: 3, title: 'Item 3', image: 'https://placehold.co/360x300/png' },
    { id: 4, title: 'Item 4', image: 'https://placehold.co/360x300/png' },
    { id: 5, title: 'Item 5', image: 'https://placehold.co/360x300/png' },
    { id: 6, title: 'Item 6', image: 'https://placehold.co/360x300/png' },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-visible rounded-lg shadow-lg"
          >
            <div className="absolute inset-0 bg-black z-10 rounded-lg" />
            <div className="relative aspect-square overflow-visible">
              <div className="absolute inset-0 rounded-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg transition-all duration-150 ease-in-out z-20 group-hover:scale-105 group-hover:-translate-x-3 group-hover:-translate-y-3"
                />
              </div>
            </div>
            {/* <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent z-30 rounded-b-lg">
              <h3 className="text-white text-lg font-semibold">{item.title}</h3>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridPanel;
