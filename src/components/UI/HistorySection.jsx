import React from "react";
import historyImage from "../../assets/history.jpg";

function HistorySection() {
  return (
    <div className="py-16 px-4 bg-green-600/20 rounded-2xl border border-transparent shadow-lg">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Notre Histoire
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Tout a commencé dans une petite cuisine parisienne, où notre
              fondateur Thomas Dubois rêvait de créer le burger parfait. Après
              des années d'expérimentation, la recette était enfin prête.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              En 2018, nous avons ouvert notre premier restaurant avec une
              vision simple : proposer des burgers artisanaux faits avec amour,
              en utilisant uniquement des ingrédients frais et de qualité.
            </p>
            <p className="text-lg text-gray-600">
              Aujourd'hui, nous sommes fiers de servir plus de 2500 clients
              satisfaits avec nos 15 recettes uniques, toutes créées avec la
              même passion qu'au premier jour.
            </p>
          </div>

          <div className="relative">
            <img
              src={historyImage}
              alt="Histoire de la Maison Burger"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistorySection;
