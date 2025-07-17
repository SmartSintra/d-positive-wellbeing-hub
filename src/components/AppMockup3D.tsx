const AppMockup3D = () => {
  return <section className="py-20 bg-gradient-to-tr from-[#081c2b] via-[#00529B] to-[#081c2b] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-[#00a9e0] rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/6 w-64 h-64 bg-[#CCE4F7] rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-[#00529B] rounded-full filter blur-2xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Vê a aplicação em ação
          </h2>
          <p className="text-xl text-accent mb-16 max-w-3xl mx-auto">
            Descobre como o D+Positive pode transformar a gestão da tua diabetes
          </p>
          
          {/* App Screenshots */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-6xl mx-auto">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/lovable-uploads/e268aaa6-9746-4b2a-807a-7299e373cf2d.png" 
                alt="D+Positive App - Dashboard principal" 
                className="w-80 h-auto rounded-3xl shadow-2xl"
              />
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/lovable-uploads/34fb2d92-ee4b-40c4-9297-9124e54594ee.png" 
                alt="D+Positive App - Assistente de ajuda" 
                className="w-80 h-auto rounded-3xl shadow-2xl"
              />
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/lovable-uploads/e041a870-f9fe-44be-8326-6ecd6ab8fc42.png" 
                alt="D+Positive App - Companheiro SOS" 
                className="w-80 h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AppMockup3D;