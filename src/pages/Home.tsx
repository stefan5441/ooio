import { calculateTimeEmployed } from "../utils";

export const Home = () => {
  const { days, months, years } = calculateTimeEmployed();

  return (
    <div className="grid grid-cols-2 gap-6 items-center">
      <div className="col-span-1">
        <h1 className="text-5xl font-bold mb-4">Stefan Chambov</h1>
        <p className="text-lg">
          Hello, nice to meet you. I’m a Software Engineer with {years} years, {months} months, and {days} days of
          professional experience. I’ve worked as a Microsoft Dynamics 365 CRM / Power Apps developer (JavaScript/C#)
          and as a Frontend React developer. I love React very much!
        </p>

        <p className="text-lg mt-4">
          In my free time, I build web apps and work on personal projects. The cat in the image is Bella, who briefly
          became my first pet while living in our apartment building.
        </p>

        <p className="text-lg mt-4">
          Contact me to find out more about my exciting life and cutting-edge programming skills. 🫵
        </p>
      </div>

      <div className="col-span-1 mx-auto">
        <img src="bella.jpeg" alt="Bella the cat" className="h-110 rounded-lg" />
      </div>
    </div>
  );
};
