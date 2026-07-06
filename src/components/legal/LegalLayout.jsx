function LegalLayout({
  title,
  lastUpdated,
  sections,
}) {
  return (
    <main className="bg-slate-50 min-h-screen py-20">

      <div className="max-w-5xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">

          <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
            {title}
          </h1>

          <p className="mt-3 text-gray-500">
            Last Updated: {lastUpdated}
          </p>

          <div className="mt-12 space-y-10">

            {sections.map((section, index) => (

              <section key={index}>

                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  {section.heading}
                </h2>

                {section.content && (
                  <p className="text-gray-600 leading-8">
                    {section.content}
                  </p>
                )}

                {section.list && (
                  <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-600 leading-8">

                    {section.list.map((item, i) => (
                      <li key={i}>
                        {item}
                      </li>
                    ))}

                  </ul>
                )}

              </section>

            ))}

          </div>

        </div>

      </div>

    </main>
  );
}

export default LegalLayout;