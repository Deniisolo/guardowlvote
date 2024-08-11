import React from "react";
import image from "./pics/gato.jpeg";
import logo from "./pics/logo.png";
import nombre from "./pics/nombre1.png";
import Lesly from "./pics/Lesly.jpeg";
import Natali from "./pics/Natali.jpeg";

import { FaLinkedinIn } from "react-icons/fa";
export function Home() {
  return (
    <div className="flex h-screen font-montserrat">
      <div className="w-1/2 flex flex-col items-center justify-center gap-20 p-20">
        <div className="flex flex-col items-center justify-center  gap-4">
          <img src={logo} alt="" className="w-32 h-32 " />
          <img src={nombre} alt="" />
        </div>

        <h3 className="text-white  font-montserrat">
          GuardOwl es una app diseñada para ofrecer seguridad y tranquilidad a
          los viajeros. Utilizando inteligencia artificial, la app proporciona
          alertas de seguridad en tiempo real, acceso a contactos importantes
          como embajadas y policías, y permite a los usuarios reportar
          incidentes fácilmente. GuardOwl actúa como un guardián personal en
          cada destino, ayudando a los viajeros a mantenerse informados y
          seguros durante sus aventuras.
        </h3>
        <button
          type="button"
          class="bg-white font-montserrat text-gray-900 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 border border-gray-300"
        >
          Votar
        </button>
      </div>
      <div className="w-1/2 flex flex-col  items-center justify-center gap-20 p-20">
        <h1 className="text-4xl font-extrabold leading-none tracking-tight text-white ">
          Team
        </h1>
        <div className="flex flex-wrap gap-10">
          <div class="flex items-center gap-4">
            <img class="w-14 h-14 rounded-full" src={Lesly} alt="" />
            <div class="font-medium text-white font-montserrat">
              <div>Lesly Samaritano Ayala</div>
              <div class="text-sm text-white-500">Jr Flutter Developer</div>

              <a
                href="https://www.linkedin.com/in/leslysamaritano/"
                class=" flex  text-sm text-white-500 gap-2 font-montserrat"
              >
                <FaLinkedinIn size={20} />
                @Leslysamaritano
              </a>
            </div>
          </div>
          <div class="flex items-center gap-4 font-montserrat">
            <img class="w-14 h-14 rounded-full" src={Natali} alt="" />
            <div class="font-medium text-white font-montserrat">
              <div>Lenina Natali Lujan</div>
              <div class="text-sm text-white-500 font-montserrat">
                Data Scientits Specialist
              </div>

              <a
                href="https://www.linkedin.com/in/natali-lujan-allende/"
                class=" flex  text-sm text-white-500 gap-2 font-montserrat"
              >
                <FaLinkedinIn size={20} />
                @natali-lujan-allende
              </a>
            </div>
          </div>
          <div class="flex items-center gap-4 font-montserrat">
            <img class="w-14 h-14 rounded-full" src={image} alt="" />
            <div class="font-medium text-white font-montserrat">
              <div>Shirley Madeley Sosa </div>
              <div class="text-sm text-white-500 font-montserrat">
                UX Designer
              </div>

              <a
                href="https://www.linkedin.com/in/shirsosa/"
                class=" flex  text-sm text-white-500 gap-2 font-montserrat"
              >
                <FaLinkedinIn size={20} />
                @shirsosa
              </a>
            </div>
          </div>
          <div class="flex items-center gap-4 font-montserrat">
            <img class="w-14 h-14 rounded-full" src={image} alt="" />
            <div class="font-medium text-white font-montserrat">
              <div>Gatito Bonito</div>
              <div class="text-sm text-white-500 font-montserrat">
                Backend Developer
              </div>

              <a
                href=""
                class=" flex  text-sm text-white-500 gap-2 font-montserrat"
              >
                <FaLinkedinIn size={20} />
                @gatitobonitoTQM
              </a>
            </div>
          </div>
          <div class="flex items-center gap-4 font-montserrat">
            <img class="w-14 h-14 rounded-full" src={image} alt="" />
            <div class="font-medium text-white font-montserrat">
              <div>Gatito Bonito</div>
              <div class="text-sm text-white-500 font-montserrat">
                Backend Developer
              </div>

              <a
                href=""
                class=" flex  text-sm text-white-500 gap-2 font-montserrat"
              >
                <FaLinkedinIn size={20} />
                @gatitobonitoTQM
              </a>
            </div>
          </div>
          <div class="flex items-center gap-4 font-montserrat">
            <img class="w-14 h-14 rounded-full" src={image} alt="" />
            <div class="font-medium text-white font-montserrat">
              <div>Gatito Bonito</div>
              <div class="text-sm text-white-500 font-montserrat">
                Backend Developer
              </div>

              <a
                href=""
                class=" flex  text-sm text-white-500 gap-2 font-montserrat"
              >
                <FaLinkedinIn size={20} />
                @gatitobonitoTQM
              </a>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <img class="w-14 h-14 rounded-full" src={image} alt="" />
            <div class="font-medium text-white">
              <div>Gatito Bonito</div>
              <div class="text-sm text-white-500">Backend Developer</div>

              <a href="" class=" flex  text-sm text-white-500 gap-2">
                <FaLinkedinIn size={20} />
                @gatitobonitoTQM
              </a>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <img class="w-14 h-14 rounded-full" src={image} alt="" />
            <div class="font-medium text-white">
              <div>Gatito Bonito</div>
              <div class="text-sm text-white-500">Backend Developer</div>

              <a href="" class=" flex  text-sm text-white-500 gap-2">
                <FaLinkedinIn size={20} />
                @gatitobonitoTQM
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
