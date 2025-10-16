import React from "react";
import Header from "./components/Nav/Header";

function Contact() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
      <Header logo="F" nomApp="Florentin" />
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto">
            <svg
              className="w-10 h-10 text-indigo-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          <span className="text-indigo-600">Contact</span>
        </h1>

        <div className="space-y-4 text-left">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nom
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Votre nom"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="votre@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Votre message..."
            />
          </div>

          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
            Envoyer le message
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-2">
            Ou contactez-nous directement :
          </p>
          <p className="text-indigo-600 font-medium">contact@monapp.com</p>
          <p className="text-gray-500 text-sm">+33 1 23 45 67 89</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
