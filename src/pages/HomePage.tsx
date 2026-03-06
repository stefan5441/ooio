import { calculateTimeEmployed } from "../utils";

export const HomePage = () => {
  const { days, months, years } = calculateTimeEmployed();

  return (
    <div className="flex h-full flex-col items-center justify-center gap-12 xl:flex-row">
      <div className="xl:w-xl">
        <h1 className="mb-4 text-2xl font-bold xl:text-5xl">Stefan Chambov</h1>
        <p className="text-md xl:text-lg">
          Hello, nice to meet you. I'm a Software Engineer with {years} years,{" "}
          {months} months, and {days} days of professional experience. I've
          worked as a Frontend React developer and as a Microsoft Dynamics 365
          CRM / Power Apps developer (JavaScript/C#). I love React very much!
        </p>

        <p className="text-md mt-4 xl:text-lg">
          In my free time, I build web apps and work on personal projects.{" "}
          <span className="hidden xl:inline">
            The cat in the image is Bella, who briefly became my first pet while
            living in our apartment building.
          </span>
        </p>

        <p className="text-md mt-4 xl:text-lg">
          Contact me to find out more about my exciting life and cutting-edge
          programming skills. 🫵
        </p>
      </div>

      <div className="hidden shrink-0 xl:block">
        <img
          src="bella.jpeg"
          alt="Bella the cat"
          className="w-auto rounded-lg xl:h-110"
        />
      </div>
    </div>
  );
};
