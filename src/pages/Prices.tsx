
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Phone, Download, Info } from "lucide-react";

const Prices = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Заголовок страницы */}
        <section className="bg-primary text-primary-foreground py-12">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Цены на прием металлолома</h1>
            <p className="text-xl max-w-3xl">
              Мы предлагаем выгодные условия сотрудничества и честные цены на прием металлолома в Москве и Московской области.
            </p>
          </div>
        </section>
        
        {/* Блок с информацией о ценах */}
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

        {/* Таблицы с ценами */}
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
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-primary/10">
                            <th className="border px-4 py-2 text-left">Тип металла</th>
                            <th className="border px-4 py-2 text-left">Описание</th>
                            <th className="border px-4 py-2 text-left">Цена за тонну (₽)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border px-4 py-2 font-medium">Чермет 3А</td>
                            <td className="border px-4 py-2">Габаритный стальной лом толщиной от 4 мм</td>
                            <td className="border px-4 py-2">18 500</td>
                          </tr>
                          <tr className="bg-muted/30">
                            <td className="border px-4 py-2 font-medium">Чермет 5А</td>
                            <td className="border px-4 py-2">Негабаритный стальной лом толщиной от 4 мм</td>
                            <td className="border px-4 py-2">17 800</td>
                          </tr>
                          <tr>
                            <td className="border px-4 py-2 font-medium">Чугун 17А</td>
                            <td className="border px-4 py-2">Габаритный чугунный лом</td>
                            <td className="border px-4 py-2">17 500</td>
                          </tr>
                          <tr className="bg-muted/30">
                            <td className="border px-4 py-2 font-medium">Чугун 20А</td>
                            <td className="border px-4 py-2">Чугун бытовой (ванны, батареи)</td>
                            <td className="border px-4 py-2">16 900</td>
                          </tr>
                          <tr>
                            <td className="border px-4 py-2 font-medium">Стальная стружка 16А</td>
                            <td className="border px-4 py-2">Стальная стружка без примесей</td>
                            <td className="border px-4 py-2">12 500</td>
                          </tr>
                          <tr className="bg-muted/30">
                            <td className="border px-4 py-2 font-medium">Оцинкованное железо</td>
                            <td className="border px-4 py-2">Лом оцинкованной стали</td>
                            <td className="border px-4 py-2">17 000</td>
                          </tr>
                          <tr>
                            <td className="border px-4 py-2 font-medium">Жесть 3А</td>
                            <td className="border px-4 py-2">Тонколистовой металл</td>
                            <td className="border px-4 py-2">16 800</td>
                          </tr>
                          <tr className="bg-muted/30">
                            <td className="border px-4 py-2 font-medium">Арматура 12А</td>
                            <td className="border px-4 py-2">Строительная арматура</td>
                            <td className="border px-4 py-2">18 200</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="color">
                <Card>
                  <CardContent className="pt-6">
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-primary/10">
                            <th className="border px-4 py-2 text-left">Тип металла</th>
                            <th className="border px-4 py-2 text-left">Описание</th>
                            <th className="border px-4 py-2 text-left">Цена за кг (₽)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border px-4 py-2 font-medium">Медь блеск (1-1)</td>
                            <td className="border px-4 py-2">Чистая медь без следов окисления</td>
                            <td className="border px-4 py-2">590</td>
                          </tr>
                          <tr className="bg-muted/30">
                            <td className="border px-4 py-2 font-medium">Медь микс (1-3)</td>
                            <td className="border px-4 py-2">Медь с небольшими примесями</td>
                            <td className="border px-4 py-2">550</td>
                          </tr>
                          <tr>
                            <td className="border px-4 py-2 font-medium">Алюминий (электротех)</td>
                            <td className="border px-4 py-2">Электротехнический алюминий</td>
                            <td className="border px-4 py-2">150</td>
                          </tr>
                          <tr className="bg-muted/30">
                            <td className="border px-4 py-2 font-medium">Алюминий (пищевой)</td>
                            <td className="border px-4 py-2">Пищевой алюминий (посуда, банки)</td>
                            <td className="border px-4 py-2">130</td>
                          </tr>
                          <tr>
                            <td className="border px-4 py-2 font-medium">Латунь</td>
                            <td className="border px-4 py-2">Сплав меди с цинком</td>
                            <td className="border px-4 py-2">345</td>
                          </tr>
                          <tr className="bg-muted/30">
                            <td className="border px-4 py-2 font-medium">Бронза</td>
                            <td className="border px-4 py-2">Сплав меди с оловом и другими элементами</td>
                            <td className="border px-4 py-2">370</td>
                          </tr>
                          <tr>
                            <td className="border px-4 py-2 font-medium">Свинец</td>
                            <td className="border px-4 py-2">Чистый свинец без примесей</td>
                            <td className="border px-4 py-2">115</td>
                          </tr>
                          <tr className="bg-muted/30">
                            <td className="border px-4 py-2 font-medium">Нержавеющая сталь</td>
                            <td className="border px-4 py-2">Легированная хромоникелевая сталь</td>
                            <td className="border px-4 py-2">85</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="rare">
                <Card>
                  <CardContent className="pt-6">
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-primary/10">
                            <th className="border px-4 py-2 text-left">Тип металла</th>
                            <th className="border px-4 py-2 text-left">Описание</th>
                            <th className="border px-4 py-2 text-left">Цена за кг (₽)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border px-4 py-2 font-medium">Титан</td>
                            <td className="border px-4 py-2">Чистый титан без примесей</td>
                            <td className="border px-4 py-2">320</td>
                          </tr>
                          <tr className="bg-muted/30">
                            <td className="border px-4 py-2 font-medium">Никель</td>
                            <td className="border px-4 py-2">Никель и никельсодержащие сплавы</td>
                            <td className="border px-4 py-2">990</td>
                          </tr>
                          <tr>
                            <td className="border px-4 py-2 font-medium">Вольфрам</td>
                            <td className="border px-4 py-2">Вольфрам и вольфрамовые сплавы</td>
                            <td className="border px-4 py-2">1150</td>
                          </tr>
                          <tr className="bg-muted/30">
                            <td className="border px-4 py-2 font-medium">Молибден</td>
                            <td className="border px-4 py-2">Молибден и молибденовые сплавы</td>
                            <td className="border px-4 py-2">850</td>
                          </tr>
                          <tr>
                            <td className="border px-4 py-2 font-medium">Олово</td>
                            <td className="border px-4 py-2">Чистое олово без примесей</td>
                            <td className="border px-4 py-2">520</td>
                          </tr>
                          <tr className="bg-muted/30">
                            <td className="border px-4 py-2 font-medium">Баббит</td>
                            <td className="border px-4 py-2">Антифрикционный сплав на основе олова</td>
                            <td className="border px-4 py-2">370</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
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
        
        {/* CTA блок */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Рассчитайте стоимость вашего металлолома</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Наши специалисты готовы произвести точный расчет стоимости вашего металлолома. 
              Свяжитесь с нами любым удобным способом!
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
      </main>

      <Footer />
    </div>
  );
};

export default Prices;
