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
          
          {/* Full Screen App Image */}
          <div className="w-full max-w-6xl mx-auto">
            <img 
              src="/lovable-uploads/5cf8a851-7f62-49a0-9bc6-94dd06d8c03d.png" 
              alt="D+Positive App - Vê a aplicação em ação" 
              className="w-full h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300" 
            />
          </div>
        </div>
      </div>
    </section>;
};
export default AppMockup3D;