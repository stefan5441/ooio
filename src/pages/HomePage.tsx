import { calculateTimeEmployed } from "../utils";

export const HomePage = () => {
  const { days, months, years } = calculateTimeEmployed();

  return (
    <div className="flex h-full items-center justify-center gap-12">
      <div className="w-xl">
        <h1 className="mb-4 text-5xl font-bold">Stefan Chambov</h1>
        <p className="text-lg">
          Hello, nice to meet you. I'm a Software Engineer with {years} years,{" "}
          {months} months, and {days} days of professional experience. I've
          worked as a Frontend React developer and as a Microsoft Dynamics 365
          CRM / Power Apps developer (JavaScript/C#). I love React very much!
        </p>

        <p className="mt-4 text-lg">
          In my free time, I build web apps and work on personal projects. The
          cat in the image is Bella, who briefly became my first pet while
          living in our apartment building.
        </p>

        <p className="mt-4 text-lg">
          Contact me to find out more about my exciting life and cutting-edge
          programming skills. 🫵
        </p>
      </div>

      <div className="ml-8 shrink-0">
        <img
          src="bella.jpeg"
          alt="Bella the cat"
          className="h-110 w-auto rounded-lg"
        />
      </div>
    </div>
  );
};
