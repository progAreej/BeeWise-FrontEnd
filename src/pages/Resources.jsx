import React from 'react';

const Resources = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Resources</h1>

      <section id="geographical-tips" className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Geographical Tips</h2>
        <p className="text-lg mb-4">
          Understanding the geographical aspects of beekeeping in Jordan can significantly enhance your beekeeping experience. Here are some tips:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li className="mb-2">
            <strong>Climate:</strong> Be aware of the local climate and its impact on bee activity and hive management.
          </li>
          <li className="mb-2">
            <strong>Flora:</strong> Identify local flora that will provide bees with ample forage and nectar.
          </li>
          <li className="mb-2">
            <strong>Seasonality:</strong> Plan your beekeeping activities according to seasonal changes and bee behavior.
          </li>
          <li className="mb-2">
            <strong>Predators:</strong> Be aware of local predators and pests that may affect your beekeeping efforts.
          </li>
        </ul>
      </section>

      <section id="educational-blog">
        <h2 className="text-3xl font-semibold mb-4">Educational Blog</h2>
        <p className="text-lg mb-4">
          Stay informed with the latest blogs and articles related to beekeeping. Our blog offers valuable insights and updates on various beekeeping topics.
        </p>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4">Featured Blog Posts</h3>
          <ul className="list-disc list-inside ml-4">
            <li className="mb-2">
              <a href="#" className="text-blue-500 hover:underline">
                <strong>How to Manage Your Hive During Winter</strong>
              </a>
              <p className="text-sm text-gray-600">Learn the essential steps to ensure your hive's survival through the winter months.</p>
            </li>
            <li className="mb-2">
              <a href="#" className="text-blue-500 hover:underline">
                <strong>Understanding Bee Behavior: A Guide for Beginners</strong>
              </a>
              <p className="text-sm text-gray-600">An introductory guide to understanding common bee behaviors and their implications for hive management.</p>
            </li>
            <li className="mb-2">
              <a href="#" className="text-blue-500 hover:underline">
                <strong>Top 5 Plants to Grow for Bees in Jordan</strong>
              </a>
              <p className="text-sm text-gray-600">Discover the best plants to cultivate in Jordan to provide nectar and pollen for your bees.</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Resources;
