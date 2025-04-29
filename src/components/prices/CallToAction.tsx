
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const CallToAction = () => {
  return (
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
  );
};

export default CallToAction;
