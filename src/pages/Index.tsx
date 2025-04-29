
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import HeroBanner from "@/components/home/HeroBanner";
import ServiceCard from "@/components/home/ServiceCard";
import PriceTable from "@/components/home/PriceTable";
import AdvantageCard from "@/components/home/AdvantageCard";
import { Phone, Truck, Clock, Building2, Award } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Главный баннер */}
        <HeroBanner />
        
        {/* Блок услуг */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Наши услуги</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard 
                title="Прием металлолома" 
                description="Принимаем все виды черных и цветных металлов по выгодным ценам с оплатой на месте."
                icon={<Building2 className="h-12 w-12 mb-4 text-primary" />}
                link="/services/priem"
              />
              <ServiceCard 
                title="Вывоз металлолома" 
                description="Бесплатный вывоз металлолома собственным транспортом в Москве и области."
                icon={<Truck className="h-12 w-12 mb-4 text-primary" />}
                link="/services/vivoz"
              />
              <ServiceCard 
                title="Демонтаж металлоконструкций" 
                description="Профессиональный демонтаж металлических конструкций любой сложности."
                icon={<Clock className="h-12 w-12 mb-4 text-primary" />}
                link="/services/demontazh"
              />
            </div>
            <div className="text-center mt-10">
              <Button asChild size="lg" className="px-8">
                <a href="/services">Все услуги</a>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Блок с преимуществами */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Почему выбирают нас</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AdvantageCard 
                title="Высокие цены"
                description="Предлагаем лучшие цены на рынке и индивидуальный подход к каждому клиенту"
                icon={<Award className="h-10 w-10 text-accent" />}
              />
              <AdvantageCard 
                title="Бесплатный вывоз"
                description="Организуем вывоз металлолома нашим транспортом бесплатно при весе от 1 тонны"
                icon={<Truck className="h-10 w-10 text-accent" />}
              />
              <AdvantageCard 
                title="Оплата на месте"
                description="Производим расчет сразу после взвешивания наличным или безналичным способом"
                icon={<Phone className="h-10 w-10 text-accent" />}
              />
            </div>
          </div>
        </section>

        {/* Блок с ценами */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Актуальные цены на металлолом</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              Цены на прием металлолома в Москве и области — одни из самых высоких на рынке. 
              Окончательная цена зависит от объема, состояния металла и актуальной биржевой стоимости.
            </p>
            
            <Tabs defaultValue="black" className="w-full">
              <TabsList className="grid w-full md:w-[400px] grid-cols-2 mx-auto mb-8">
                <TabsTrigger value="black">Черный металл</TabsTrigger>
                <TabsTrigger value="color">Цветной металл</TabsTrigger>
              </TabsList>
              <TabsContent value="black">
                <PriceTable 
                  type="black" 
                  items={[
                    { name: "Лом черных металлов (3А)", price: "18 500", unit: "т" },
                    { name: "Чугун (17А-19А)", price: "17 800", unit: "т" },
                    { name: "Оцинкованное железо", price: "17 500", unit: "т" },
                    { name: "Жесть (3А)", price: "16 900", unit: "т" },
                    { name: "Арматура (12А)", price: "18 200", unit: "т" },
                    { name: "Лом стали углеродистой", price: "18 000", unit: "т" }
                  ]} 
                />
              </TabsContent>
              <TabsContent value="color">
                <PriceTable 
                  type="color" 
                  items={[
                    { name: "Медь блеск (1-1)", price: "590", unit: "кг" },
                    { name: "Медь микс (1-3)", price: "550", unit: "кг" },
                    { name: "Алюминий (электротех)", price: "150", unit: "кг" },
                    { name: "Алюминий (пищевой)", price: "130", unit: "кг" },
                    { name: "Латунь", price: "345", unit: "кг" },
                    { name: "Бронза", price: "370", unit: "кг" }
                  ]} 
                />
              </TabsContent>
            </Tabs>
            
            <div className="text-center mt-10">
              <Button asChild variant="outline" size="lg" className="px-8 mr-4">
                <a href="/prices">Полный прайс-лист</a>
              </Button>
              <Button asChild size="lg" className="px-8">
                <a href="/contact">Узнать свою цену</a>
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA блок */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы сдать металлолом?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Свяжитесь с нами прямо сейчас и получите бесплатную консультацию
              по сдаче металлолома. Мы предложим лучшие условия!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Phone className="mr-2 h-5 w-5" />
                +7 (495) 123-45-67
              </Button>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="/contact">Оставить заявку</a>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Информационный блок */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">О компании МЕТАЛЛПРИЕМ</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="mb-4">
                  Компания «МЕТАЛЛПРИЕМ» — лидер на рынке приема и переработки металлолома в Москве и Московской области. 
                  Мы работаем как с частными лицами, так и с крупными предприятиями.
                </p>
                <p className="mb-4">
                  Наши клиенты ценят нас за честный подход к работе, прозрачное ценообразование и оперативность.
                  Мы предлагаем лучшие цены на рынке и индивидуальные условия для постоянных клиентов.
                </p>
                <p className="mb-6">
                  У нас современное оборудование для взвешивания, резки и переработки металла,
                  а также собственный автопарк для вывоза металлолома с вашей территории.
                </p>
                <Button asChild variant="outline">
                  <a href="/about">Подробнее о компании</a>
                </Button>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg h-80 bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1590856029620-9b5a4825d3be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
                  alt="Территория металлоприемки" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
