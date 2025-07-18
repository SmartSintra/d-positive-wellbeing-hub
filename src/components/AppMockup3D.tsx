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
            A tua app para todos os dias
          </h2>
          <p className="text-xl text-accent mb-16 max-w-3xl mx-auto">
            Descobre como o D+Positive pode transformar a gestão da tua diabetes
          </p>
          
          {/* Mobile App Screenshots Grid */}
          <div className="w-full max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/lovable-uploads/55bf9967-8afb-40b8-a364-79d4788bbf6d.png" 
                  alt="D+Positive - Posso ajudar-te?" 
                  className="w-full h-auto rounded-2xl shadow-2xl" 
                />
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/lovable-uploads/7fca6fdb-e639-4dee-a249-e967a39aaf8d.png" 
                  alt="D+Positive - Dashboard principal" 
                  className="w-full h-auto rounded-2xl shadow-2xl" 
                />
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/lovable-uploads/46fa50f4-c70c-4c51-b8f5-09183c491e70.png" 
                  alt="D+Positive - Companheiro SOS" 
                  className="w-full h-auto rounded-2xl shadow-2xl" 
                />
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/lovable-uploads/01806194-0e1f-440a-ba23-0bffbbc64864.png" 
                  alt="D+Positive - Estratégias" 
                  className="w-full h-auto rounded-2xl shadow-2xl" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AppMockup3D;