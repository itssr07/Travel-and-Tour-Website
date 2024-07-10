import React from "react";
import About from "./About";
import More from "./More";
import Modal from "./Modal";

function Home() {
  return (
    <div>
      <div
        class="w-full bg-center bg-cover h-[38rem]"
        style={{
          backgroundImage:
            "url('https://cff2.earth.com/uploads/2023/06/02100547/Mountain-2.jpg')",
        }}
      >
        <div class="flex items-center justify-center w-full h-full bg-gray-900/40">
          <div class="text-center">
            <h1 class="text-3xl font-semibold text-white lg:text-4xl">
               Explore <span class="text-blue-400">INDIA</span> Now!
            </h1>
            <button class="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              Explore
            </button>
          </div>
        </div>
      </div>
      <About />
      <More />
      <Modal />
    </div>
  );
}

export default Home;
