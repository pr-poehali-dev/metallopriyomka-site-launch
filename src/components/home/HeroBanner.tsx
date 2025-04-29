
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary to-primary/80 text-white">
      {/* Декоративный элемент */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1603123853880-a92fafb7809f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80')] bg-cover bg-center opacity-20"></div>
      
      <div className="container relative z-10 py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Прием металлолома в Москве и области
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Высокие цены на цветной и черный металл.
            Бесплатный вывоз. Оплата на месте.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href="/prices">Узнать цены</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a href="/contact">Заказать вывоз</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Плашка с преимуществами */}
      <div className="bg-white/10 backdrop-blur-sm py-6 relative z-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-2">
              <p className="font-bold text-2xl md:text-3xl mb-1">от 18 500 ₽</p>
              <p className="text-white/80">за тонну черного металла</p>
            </div>
            <div className="p-2">
              <p className="font-bold text-2xl md:text-3xl mb-1">от 1 000 кг</p>
              <p className="text-white/80">бесплатный вывоз металлолома</p>
            </div>
            <div className="p-2">
              <p className="font-bold text-2xl md:text-3xl mb-1">24/7</p>
              <p className="text-white/80">работаем без выходных</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
