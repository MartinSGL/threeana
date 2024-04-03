"use client";
import DarkLight from "@/components/DarkLight";
import Image from "next/image";
import { useState } from "react";
import { FaHome, FaImages } from "react-icons/fa";
import { GiArcheryTarget } from "react-icons/gi";
import {
  MdDarkMode,
  MdLightMode,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className={`container ${isDark && "dark"}`}>
      <main className="dark">
        <header>
          <div className="logo">
            <Image src="/logo.jpeg" width={50} height={50} alt="logo" />
            <span className="title-name">Threana</span>
          </div>
          <div className="nav">
            <div className="menu-item">
              <a href="#home">
                <FaHome /> <span>Inicio</span>
              </a>
            </div>
            <div className="menu-item">
              <a href="#mision_vision">
                <GiArcheryTarget />
                <span>Mision y Vision</span>
              </a>
            </div>
            <div className="menu-item">
              <a href="#producto">
                <MdOutlineProductionQuantityLimits />
                <span>Producto</span>
              </a>
            </div>
            <div className="dark-light">
              <DarkLight isDark={isDark} setIsDark={setIsDark} />
            </div>
          </div>
        </header>
        <div>
          <section id="home">Inicio</section>
          <section id="mision_vision">Mision y Vision</section>
          <section id="producto">Producto</section>
        </div>
        <footer></footer>
      </main>
    </div>
  );
}
