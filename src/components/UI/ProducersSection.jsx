import React from "react";
import { FaLeaf, FaTractor, FaHeart, FaStar } from "react-icons/fa";

function ProducersSection() {
  const producers = [
    {
      name: "Ferme Dubois",
      location: "Normandie",
      specialty: "Bœuf Charolais",
      description: "Élevage traditionnel en plein air, bœufs nourris à l'herbe",
      image: "🐄",
      rating: 5,
      years: "Depuis 3 générations",
    },
    {
      name: "Jardin Bio Martin",
      location: "Provence",
      specialty: "Légumes Bio",
      description: "Tomates, salades et légumes cultivés sans pesticides",
      image: "🥬",
      rating: 5,
      years: "Depuis 2015",
    },
    {
      name: "Fromagerie Leroy",
      location: "Auvergne",
      specialty: "Fromages Artisanaux",
      description:
        "Cheddar et fromages affinés selon les méthodes traditionnelles",
      image: "🧀",
      rating: 5,
      years: "Depuis 4 générations",
    },
    {
      name: "Boulangerie Petit",
      location: "Paris",
      specialty: "Pains Artisanaux",
      description: "Pains de burger cuits au feu de bois, levain naturel",
      image: "🍞",
      rating: 5,
      years: "Depuis 2 générations",
    },
    {
      name: "Épicerie du Terroir",
      location: "Bretagne",
      specialty: "Produits Locaux",
      description: "Cornichons, oignons et condiments de qualité supérieure",
      image: "🥒",
      rating: 5,
      years: "Depuis 2010",
    },
    {
      name: "Ferme des Saveurs",
      location: "Bourgogne",
      specialty: "Bacon Artisanal",
      description:
        "Bacon fumé au bois de hêtre selon la méthode traditionnelle",
      image: "🥓",
      rating: 5,
      years: "Depuis 5 générations",
    },
  ];

  return (
    <div className="py-16 px-4 bg-green-600/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nos Producteurs de Confiance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous travaillons exclusivement avec des producteurs locaux
            sélectionnés pour leur qualité et leur engagement envers
            l'agriculture durable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {producers.map((producer, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{producer.image}</div>
                <div className="flex items-center space-x-1">
                  {[...Array(producer.rating)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {producer.name}
              </h3>
              <p className="text-green-600 font-semibold mb-3">
                📍 {producer.location}
              </p>

              <div className="mb-4">
                <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                  {producer.specialty}
                </span>
              </div>

              <p className="text-gray-600 text-sm mb-4">
                {producer.description}
              </p>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <FaHeart className="w-4 h-4 text-red-400" />
                  <span>{producer.years}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FaLeaf className="w-4 h-4 text-green-500" />
                  <span>Bio</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Notre Engagement
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <FaLeaf className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">
                  Agriculture Durable
                </h4>
                <p className="text-gray-600 text-sm text-center">
                  Tous nos producteurs respectent les méthodes d'agriculture
                  durable
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <FaTractor className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Circuit Court</h4>
                <p className="text-gray-600 text-sm text-center">
                  Nous privilégions les circuits courts pour réduire notre
                  empreinte carbone
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <FaHeart className="w-8 h-8 text-red-600" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">
                  Qualité Premium
                </h4>
                <p className="text-gray-600 text-sm text-center">
                  Sélection rigoureuse pour garantir la meilleure qualité à nos
                  clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProducersSection;
