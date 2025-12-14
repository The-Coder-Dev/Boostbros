import React from "react";

const Button = ({ ButtonText }) => {
  return (
    <div class="relative inline-flex items-center justify-center gap-4 group">
      <div class="absolute inset-0 duration-1000 opacity-60 transitiona-all bg-linear-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
      <a
        role="button"
        class="group relative inline-flex items-center justify-center text-base rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
        title="payment"
        href="#"
      >
        {ButtonText}
      </a>
    </div>
  );
};

export default Button;
