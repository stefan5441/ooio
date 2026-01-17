export const ProfessionalWork = () => {
  return (
    <div className="grid grid-cols-2 gap-6 items-center">
      <div className="col-span-1">
        <h1 className="text-5xl font-bold mb-4">Xarvio Field Manager</h1>
        <p>Position: Frontend React Developer</p>
        <p>Tech used: React, TypeScript, Vite, Redux, GraphQL, Elasticsearch, ApolloGQL</p>
        <p>
          Project description: xarvio Field Manager is a digital farming platform designed to help farmers and
          agronomists optimize crop production from planting (seeding) through to harvest by providing field- and
          field-zone-specific data, insights, and recommendations. It uses satellite imagery, weather data, crop models,
          and historical field information to support precise decision-making and efficiency improvements in crop
          management.
        </p>
        <p>
          What I did: Worked on a new feature called Carbon Farming that helps make agriculture more sustainable. This
          feature allows farmers to track and optimize their carbon emissions and calculate Carbon Points based on
          emission reductions. These points help farmers reduce costs while improving the sustainability of their crop
          production.
        </p>
        <p>
          Features I implemented as part of this work: - A data table displaying all crops from the current and previous
          seasons, including tasks such as land preparation, spraying, and harvesting, along with their relevant data. -
          Create/edit modals for each of these entities. In total, six modals were implemented, some with nested
          sub-modals, each containing 4–5 required fields and supported by re-fetching logic to ensure the data remained
          up to date. - An Excel-like selection experience in the data table, including copy-and-paste functionality for
          created tasks. Selecting tasks opened a side panel displaying detailed information for the selected task.
        </p>
      </div>

      <div className="col-span-1 mx-auto">
        <img src="xarviofm.png" alt="xarvio field manager" className="h-110 rounded-lg" />
      </div>
    </div>
  );
};
