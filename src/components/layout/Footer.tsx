import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Колонка 1: О компании */}
          <div>
            <h3 className="text-xl font-bold mb-4">МЕТАЛЛПРИЕМ</h3>
            <p className="text-sm mb-4">
              Наша компания более 10 лет занимается приемом металлолома в Москве и Московской области.
              Мы предлагаем выгодные цены и удобные условия сотрудничества.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-accent">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Колонка 2: Услуги */}
          <div>
            <h3 className="text-xl font-bold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/priem" className="hover:text-accent transition-colors">
                  Прием металлолома
                </Link>
              </li>
              <li>
                <Link to="/services/vivoz" className="hover:text-accent transition-colors">
                  Вывоз металлолома
                </Link>
              </li>
              <li>
                <Link to="/services/demontazh" className="hover:text-accent transition-colors">
                  Демонтаж металлоконструкций
                </Link>
              </li>
              <li>
                <Link to="/prices" className="hover:text-accent transition-colors">
                  Цены на металлолом
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">
                  О компании
                </Link>
              </li>
            </ul>
          </div>

          {/* Колонка 3: Контакты */}
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3" />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3" />
                <span>info@metalpriem.ru</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3" />
                <span>г. Москва, ул. Металлургов, 10</span>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm">Время работы:</p>
              <p className="text-sm">Пн-Пт: 8:00 - 20:00</p>
              <p className="text-sm">Сб-Вс: 9:00 - 18:00</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Копирайт */}
      <div className="bg-sidebar-accent py-4">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© 2025 МЕТАЛЛПРИЕМ. Все права защищены.</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link to="/privacy" className="text-sm hover:text-accent transition-colors">
                Политика конфиденциальности
              </Link>
              <Link to="/terms" className="text-sm hover:text-accent transition-colors">
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
