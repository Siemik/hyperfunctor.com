/* This example requires Tailwind CSS v2.0+ */
export function Stats() {
  return (
    <div className="bg-pink-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Naszym szkoleniom z JavaScriptu i Reacta zaufało już kilkaset osób
          </h2>
          <p className="mt-3 text-xl text-pink-200 sm:mt-4">
            Nie zwlekaj i dołącz do kursu online Next.js, React, GraphQL i
            TypeScripta
          </p>
        </div>
        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-pink-200">
              tygodni
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-white">14</dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-pink-200">
              lekcji
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-white">180</dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-pink-200">
              godzin wideo
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-white">20+</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
