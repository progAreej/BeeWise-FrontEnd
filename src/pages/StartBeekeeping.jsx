import React from 'react';

const StartBeekeeping = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Start Beekeeping</h1>
      
      <section id="how-to-start" className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">How to Start</h2>
        <p className="text-lg mb-4">
          Getting started with beekeeping requires some initial planning and preparation. Here are the basic steps:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li className="mb-2">
            <strong>Research:</strong> Learn about the basics of beekeeping and the responsibilities involved.
          </li>
          <li className="mb-2">
            <strong>Equipment:</strong> Acquire the necessary beekeeping equipment such as hives, protective gear, and tools.
          </li>
          <li className="mb-2">
            <strong>Local Regulations:</strong> Check for any local regulations or permits required for beekeeping in your area.
          </li>
          <li className="mb-2">
            <strong>Get Bees:</strong> Obtain your bees from a reputable supplier or beekeeper.
          </li>
          <li>
            <strong>Setup:</strong> Set up your hive and introduce your bees to their new home.
          </li>
        </ul>
      </section>
      
      <section id="tips-tricks" className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Tips & Tricks</h2>
        <p className="text-lg mb-4">
          Here are some tips and tricks to help you succeed in your beekeeping journey:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li className="mb-2">
            <strong>Regular Inspections:</strong> Frequently inspect your hives to monitor the health of your bees and the condition of the hive.
          </li>
          <li className="mb-2">
            <strong>Keep Records:</strong> Maintain detailed records of hive inspections, bee health, and honey production.
          </li>
          <li className="mb-2">
            <strong>Stay Informed:</strong> Join local beekeeping associations or forums to stay updated with the latest beekeeping practices and news.
          </li>
          <li className="mb-2">
            <strong>Prevent Disease:</strong> Be proactive in preventing and managing bee diseases and pests.
          </li>
        </ul>
      </section>
      
      <section id="raw-materials">
        <h2 className="text-3xl font-semibold mb-4">Raw Materials</h2>
        <p className="text-lg mb-4">
          To start beekeeping, you will need various materials. Here's a list of essential items:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li className="mb-2">
            <strong>Hive:</strong> The structure where bees live and produce honey. Common types include Langstroth, Top Bar, and Warre hives.
          </li>
          <li className="mb-2">
            <strong>Protective Gear:</strong> Includes a beekeeper suit, gloves, and a veil to protect yourself from bee stings.
          </li>
          <li className="mb-2">
            <strong>Beekeeping Tools:</strong> Essential tools include a hive tool, smoker, and bee brush.
          </li>
          <li className="mb-2">
            <strong>Bees:</strong> The bees themselves, which can be purchased from beekeeping suppliers or local beekeepers.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default StartBeekeeping;
