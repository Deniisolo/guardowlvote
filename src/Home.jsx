import React from "react";
import image from "./pics/gato.jpeg";
import logo from "./pics/logo.png";
import nombre from "./pics/nombre1.png";
import Lesly from "./pics/Lesly.jpeg";
import Natali from "./pics/Natali.jpeg";
import Shirley from "./pics/Shirley.jpeg"
import Jair from "./pics/Jair.jpeg"
import Christopher from "./pics/Christopher.jpeg"
import Sofia from "./pics/Sofia.jpeg"
import Marianela from "./pics/Marianela.jpeg"
import Angello from "./pics/Angello.jpeg"
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
            <img class="w-14 h-14 rounded-full" src={Shirley} alt="" />
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
            <img class="w-14 h-14 rounded-full" src={Jair} alt="" />
            <div class="font-medium text-white font-montserrat">
              <div>Jair Conislla Bocangel</div>
              <div class="text-sm text-white-500 font-montserrat">
              Desarrollador Software Sr
              </div>

              <a
                href="https://www.linkedin.com/in/jair-pool-conislla-bocangel-a6931579/"
                class=" flex  text-sm text-white-500 gap-2 font-montserrat"
              >
                <FaLinkedinIn size={20} />
                @jair-pool-conislla...
              </a>
            </div>
          </div>
          <div class="flex items-center gap-4 font-montserrat">
            <img class="w-14 h-14 rounded-full" src={Christopher} alt="" />
            <div class="font-medium text-white font-montserrat">
              <div>Christopher Bobadilla P</div>
              <div class="text-sm text-white-500 font-montserrat">
              Flutter developer
              </div>

              <a
                href="https://www.linkedin.com/in/christopher-bobadilla-plasencia/"
                class=" flex  text-sm text-white-500 gap-2 font-montserrat"
              >
                <FaLinkedinIn size={20} />
                @christopher-bobadilla...
              </a>
            </div>
          </div>
          <div class="flex items-center gap-4 font-montserrat">
            <img class="w-14 h-14 rounded-full" src={Sofia} alt="" />
            <div class="font-medium text-white font-montserrat">
              <div>Sofia Chuquin</div>
              <div class="text-sm text-white-500 font-montserrat">
              Sr Software Engineer
              </div>

              <a
                href="https://www.linkedin.com/in/sofiachuquin/"
                class=" flex  text-sm text-white-500 gap-2 font-montserrat"
              >
                <FaLinkedinIn size={20} />
                @sofiachuquin
              </a>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <img class="w-14 h-14 rounded-full" src={Marianela} alt="" />
            <div class="font-medium text-white">
              <div>Marianela Araoz Z</div>
              <div class="text-sm text-white-500">UXR Designer</div>

              <a href="https://www.linkedin.com/in/marianela-araoz-zambrano-6b8715a2/" class=" flex  text-sm text-white-500 gap-2">
                <FaLinkedinIn size={20} />
                @marianela-araoz...
              </a>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <img class="w-14 h-14 rounded-full" src={Angello} alt="" />
            <div class="font-medium text-white">
              <div>Angello Custodio T</div>
              <div class="text-sm text-white-500">Miawwww</div>

              <a href="https://www.linkedin.com/in/angello-custodio/" class=" flex  text-sm text-white-500 gap-2">
                <FaLinkedinIn size={20} />
                @angello-custodio
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
