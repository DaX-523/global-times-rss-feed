const NewsCard = ({ story }) => {
  return (
    <div className="relative bg-white border-2 sm:border-4 border-black p-4 sm:p-6 md:p-8 
                    transform hover:-rotate-1 transition-transform duration-300
                    before:content-[''] before:absolute before:top-0 before:right-0 
                    before:w-[100px] before:h-[100px] before:bg-gradient-to-br 
                    before:from-transparent before:to-black/5 before:rounded-bl-[100%]
                    after:content-[''] after:absolute after:bottom-0 after:left-0
                    after:w-full after:h-full after:bg-[url('/paper-texture.png')]
                    after:opacity-5 after:pointer-events-none">
      <div className="relative z-10"> {/* Content goes here */}
        <div className="aspect-[4/3] relative overflow-hidden mb-4 group">
          <ImageWithSkeleton
            src={story.image}
            alt={story.title}
            className="transition-transform duration-1000 group-hover:scale-105"
          />
        </div>
        <h2 className="text-2xl font-serif font-bold mb-2">{story.title}</h2>
        <p className="text-gray-700">{story.description}</p>
      </div>
    </div>
  );
}; 