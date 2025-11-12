// HomeSections.jsx
import React from 'react';

const HomeSections = () => {
  return (
    <div className="w-full">
      {/*  Section 1: How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-2xl  font-extrabold mb-8">
            How It <span className="bg-accent">Works</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Step 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-5xl mb-4">📌</div>
              <h3 className="text-xl font-semibold mb-2">Add Food</h3>
              <p className="text-gray-600">
                Share your extra food by posting details. Let the community know
                it’s available.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2"> Find Food</h3>
              <p className="text-gray-600">
                Explore nearby food posts and request what you need quickly and
                easily.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Collect Food</h3>
              <p className="text-gray-600">
                Meet the donor safely and collect the food. Reduce waste and
                help your community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*  Section 2: Our Mission / Community Stats */}
      <section className="py-16 bg-primary rounded-2xl mb-14 text-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-2xl font-extrabold mb-8 ">Our Mission</h2>
          <p className="max-w-2xl mx-auto text-lg mb-12">
            We aim to reduce food waste and help communities thrive by
            connecting donors with those in need.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div>
              <h3 className="text-4xl font-bold">500+</h3>
              <p>Food Posts</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">1200+</h3>
              <p>Happy Collectors</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">300+</h3>
              <p>Verified Donors</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSections;
