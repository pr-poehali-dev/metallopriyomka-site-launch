
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const PriceInfoSection = () => {
  return (
    <section className="py-12">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <h2 className="text-2xl font-bold mb-4">Актуальные цены на металлолом</h2>
            <p className="mb-4">
              Цены на металлолом формируются на основе биржевых котировок и могут меняться в зависимости от ситуации на рынке.
              Мы постоянно следим за изменениями и предлагаем нашим клиентам максимально выгодные условия.
            </p>
            <p className="mb-4">
              Окончательная стоимость может зависеть от:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Объема и веса сдаваемого металлолома</li>
              <li>Чистоты металла и наличия примесей</li>
              <li>Необходимости использования нашего транспорта</li>
              <li>Потребности в демонтаже металлоконструкций</li>
            </ul>
            <p className="mb-4">
              Для получения точной цены свяжитесь с нашими специалистами, которые оперативно ответят на все вопросы.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <Button asChild>
                <a href="/contact">Узнать свою цену</a>
              </Button>
              <Button variant="outline" className="flex items-center">
                <Download className="mr-2 h-4 w-4" />
                Скачать прайс-лист
              </Button>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg h-80 bg-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
              alt="Взвешивание металлолома" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceInfoSection;
