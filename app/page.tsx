"use client";
import { CardItem } from "@/components/CardItem";
import DarkLight from "@/components/DarkLight";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaCalendarAlt,
  FaHome,
  FaImages,
  FaMailBulk,
  FaWhatsapp,
} from "react-icons/fa";
import { FcBusinessContact } from "react-icons/fc";
import { GiArcheryTarget } from "react-icons/gi";
import {
  MdDarkMode,
  MdLightMode,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Papaya_cross_section_BNC.jpg/1200px-Papaya_cross_section_BNC.jpg",
    nombre: "Maradol",
    description:
      "La papaya Maradol es una variedad de papaya de tamaño mediano a grande, conocida por su dulzura y jugosidad. Tiene una pulpa anaranjada brillante y una textura suave. Es una variedad popular tanto para consumo fresco como para jugos y ensaladas de frutas.",
  },
  {
    image:
      "https://www.vegaproduce.com/wp-content/uploads/2018/10/Vega-Papaya-tainung-1.jpg",
    nombre: "Tainung",
    description:
      "La papaya Tainung es una variedad híbrida desarrollada para tener un alto rendimiento y resistencia a enfermedades. Tiene un tamaño mediano y una pulpa de color anaranjado intenso. La fruta madura es dulce y aromática, y es comúnmente utilizada en la preparación de batidos, postres y platos tropicales.",
  },
  {
    image:
      "data:image/jpeg;base64,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",
    nombre: "Sunrise",
    description:
      "La papaya Sunrise es una variedad pequeña a mediana conocida por su sabor dulce y su carne de color naranja intenso. Esta variedad es apreciada por su tamaño más compacto y su maduración temprana, lo que la hace popular entre los productores y consumidores que buscan papayas frescas y sabrosas en una variedad más pequeña",
  },
  {
    image:
      "data:image/jpeg;base64,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",
    nombre: "Criollo",
    description:
      "Es una variedad comúnmente encontrada en muchas regiones tropicales y subtropicales del mundo. Este tipo de papayo no está necesariamente asociado con una variedad específica, ya que puede haber diversas variedades locales que se adaptan a diferentes climas y condiciones de cultivo. El Papayo Criollo a menudo produce frutas más pequeñas que las variedades comerciales, pero su sabor puede ser igualmente delicios",
  },
];

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 767px)").matches
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handleMediaQueryChange = (e: any) => {
      setIsMobile(e.matches);
    };
    mediaQuery.addListener(handleMediaQueryChange);
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleWhatsAppClick = (phoneNumber: string) => {
    // Construct the WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    // Open the WhatsApp URL in a new window or tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className={`container ${isDark && "dark"}`}>
      <main className={`${isDark && "dark"}`}>
        <header className={`${isDark && "dark"}`}>
          <div className="logo">
            <Image
              className={`main-image ${isDark && "dark"}`}
              src="/logo.jpeg"
              width={50}
              height={50}
              alt="logo"
            />
            <span className="title-name">Threana</span>
          </div>
          <div className="nav">
            <div className="menu-item">
              <a href="#home">
                <FaHome /> <span className="tab-title">Inicio</span>
              </a>
            </div>
            <div className="menu-item">
              <a href="#producto">
                <MdOutlineProductionQuantityLimits />
                <span className="tab-title">Producto</span>
              </a>
            </div>
            <div className="menu-item">
              <a href="#contacto">
                <FaMailBulk />
                <span className="tab-title">Contactanos</span>
              </a>
            </div>
            <div className="dark-light">
              <DarkLight isDark={isDark} setIsDark={setIsDark} />
            </div>
          </div>
        </header>
        <div>
          <section id="home">
            <div className="home-explanation">
              <div>
                <h3>Bienvenidos a Threana</h3>
                <p>
                  En Threana, nos enorgullecemos de ofrecer la más alta calidad
                  en productos derivados del papayo. Somos una empresa dedicada
                  a cultivar y distribuir esta fruta exótica, conocida por su
                  sabor dulce y sus numerosos beneficios para la salud.
                </p>
              </div>
            </div>
            <div className="mision_vision">
              <div className="mision">
                <h2>Mision</h2>
                <p>
                  En Threana, nuestra misión es cultivar y distribuir papayos de
                  la más alta calidad, fomentando la salud y el bienestar de
                  nuestros consumidores mientras promovemos prácticas agrícolas
                  sostenibles y respetuosas con el medio ambiente. Nos
                  comprometemos a mantener los más altos estándares de calidad
                  en cada paso de nuestra cadena de producción, desde el campo
                  hasta la mesa. Además, nos esforzamos por educar a nuestros
                  clientes sobre los beneficios nutricionales y culinarios del
                  papayo, promoviendo así un estilo de vida saludable y
                  consciente.
                </p>
              </div>
              <div className="vision">
                <h2>Vision</h2>
                <p>
                  En Threana, nuestra visión es convertirnos en líderes
                  reconocidos a nivel mundial en la producción y distribución de
                  productos derivados del papayo. Nos esforzamos por ofrecer la
                  más alta calidad en cada fruta que cultivamos y en cada
                  producto que elaboramos, manteniendo siempre un compromiso
                  inquebrantable con la sostenibilidad, la innovación y el
                  servicio excepcional al cliente. Buscamos no solo satisfacer,
                  sino superar las expectativas de nuestros consumidores,
                  llevando la dulzura natural del papayo a cada hogar del mundo.
                </p>
              </div>
            </div>
          </section>
          <section id="producto">
            <h3>Nuestros productos</h3>
            <Slider {...settings}>
              {products.length > 0 &&
                products.map((product) => (
                  <CardItem
                    image={product.image}
                    name={product.nombre}
                    description={product.description}
                    key={product.nombre}
                  />
                ))}
            </Slider>
          </section>
          <section id="contacto">
            <h3>Te gustaria obtener mas informacion</h3>
            <hr />
            <div className="container-contacto">
              <div className="formas-contacto">
                <div className="form-contacto">
                  <form>
                    <h4>Envianos tus dudas</h4>
                    <label>Correo: </label>
                    <input placeholder="Escriba su correo: juan@gmail.com" />
                    <label>Nombre: </label>
                    <input placeholder="Escriba su correo: Juan Padilla" />
                    <label>Descripcion:</label>
                    <textarea
                      rows={4}
                      placeholder="Escriba una descripcion"
                    ></textarea>
                  </form>
                </div>
                <div className="numbers">
                  <h4>Mandanos un mensaje</h4>
                  <div className="numbers-container">
                    <button onClick={() => handleWhatsAppClick("3133298040")}>
                      313 329 8040 <FaWhatsapp />
                    </button>
                    <button onClick={() => handleWhatsAppClick("3133298040")}>
                      313 329 8040 <FaWhatsapp />
                    </button>
                  </div>
                </div>
              </div>
              <div className="map">
                <h4>Visitanos en nuestra oficina</h4>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.8665295277574!2d-103.96702898890311!3d18.93730105623747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x843ac97e5aa11967%3A0x791009d860f2b6c2!2sPrincipal%20de%20Armer%C3%ADa%20Garden!5e0!3m2!1sen!2smx!4v1712188958411!5m2!1sen!2smx"
                  width="600"
                  height="450"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </section>
        </div>
        <footer></footer>
      </main>
    </div>
  );
}
