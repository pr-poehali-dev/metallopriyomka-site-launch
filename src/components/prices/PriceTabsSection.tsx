
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Info } from "lucide-react";
import MetalPriceTable from "./MetalPriceTable";

// Данные о ценах
const blackMetalPrices = [
  { type: "Чермет 3А", description: "Габаритный стальной лом толщиной от 4 мм", price: "18 500" },
  { type: "Чермет 5А", description: "Негабаритный стальной лом толщиной от 4 мм", price: "17 800" },
  { type: "Чугун 17А", description: "Габаритный чугунный лом", price: "17 500" },
  { type: "Чугун 20А", description: "Чугун бытовой (ванны, батареи)", price: "16 900" },
  { type: "Стальная стружка 16А", description: "Стальная стружка без примесей", price: "12 500" },
  { type: "Оцинкованное железо", description: "Лом оцинкованной стали", price: "17 000" },
  { type: "Жесть 3А", description: "Тонколистовой металл", price: "16 800" },
  { type: "Арматура 12А", description: "Строительная арматура", price: "18 200" }
];

const colorMetalPrices = [
  { type: "Медь блеск (1-1)", description: "Чистая медь без следов окисления", price: "590" },
  { type: "Медь микс (1-3)", description: "Медь с небольшими примесями", price: "550" },
  { type: "Алюминий (электротех)", description: "Электротехнический алюминий", price: "150" },
  { type: "Алюминий (пищевой)", description: "Пищевой алюминий (посуда, банки)", price: "130" },
  { type: "Латунь", description: "Сплав меди с цинком", price: "345" },
  { type: "Бронза", description: "Сплав меди с оловом и другими элементами", price: "370" },
  { type: "Свинец", description: "Чистый свинец без примесей", price: "115" },
  { type: "Нержавеющая сталь", description: "Легированная хромоникелевая сталь", price: "85" }
];

const rareMetalPrices = [
  { type: "Титан", description: "Чистый титан без примесей", price: "320" },
  { type: "Никель", description: "Никель и никельсодержащие сплавы", price: "990" },
  { type: "Вольфрам", description: "Вольфрам и вольфрамовые сплавы", price: "1150" },
  { type: "Молибден", description: "Молибден и молибденовые сплавы", price: "850" },
  { type: "Олово", description: "Чистое олово без примесей", price: "520" },
  { type: "Баббит", description: "Антифрикционный сплав на основе олова", price: "370" }
];

const PriceTabsSection = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Прайс-лист на прием металлолома</h2>
        
        <Tabs defaultValue="black" className="w-full">
          <TabsList className="grid w-full md:w-[600px] grid-cols-3 mx-auto mb-8">
            <TabsTrigger value="black">Черный металл</TabsTrigger>
            <TabsTrigger value="color">Цветной металл</TabsTrigger>
            <TabsTrigger value="rare">Редкие металлы</TabsTrigger>
          </TabsList>
          
          <TabsContent value="black">
            <Card>
              <CardContent className="pt-6">
                <MetalPriceTable items={blackMetalPrices} priceUnit="тонну" />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="color">
            <Card>
              <CardContent className="pt-6">
                <MetalPriceTable items={colorMetalPrices} priceUnit="кг" />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="rare">
            <Card>
              <CardContent className="pt-6">
                <MetalPriceTable items={rareMetalPrices} priceUnit="кг" />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 mt-12 rounded shadow-sm">
          <div className="flex">
            <div className="flex-shrink-0">
              <Info className="h-5 w-5 text-yellow-500" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">Важная информация</h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>
                  Указанные цены являются ориентировочными и могут изменяться в зависимости от текущих рыночных условий.
                  Для получения актуальной информации о ценах, пожалуйста, свяжитесь с нашими специалистами.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceTabsSection;
