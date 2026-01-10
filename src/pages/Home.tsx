import { calculateTimeEmployed } from "../utils";

export const Home = () => {
  const { days, months, years } = calculateTimeEmployed();

  return (
    <div className="grid grid-cols-12 gap-6 items-center">
      <div className="col-span-6">
        <h1 className="text-5xl font-bold mb-4">Stefan Chambov</h1>
        <p className="text-lg font-mono">
          Hello, nice to meet you. I am a Software Engineer who has been working professionally for {years} years,{" "}
          {months} months, and {days} days. I have experience working as a Microsoft Dynamics 365 CRM / Power Apps
          developer (aka JavaScript/C#), and as a Frontend React developer. I much prefer React. In my free time, I code
          web apps and do other fun stuff. The cat in the image is a cat named Bella that was living in the hall of the
          building where my girlfriend and I lived, and we used to let her in and let her sleep in our apartment every
          night. That was my first pet ever. My parents did not let me have a dog, which is sad, but I will get a dog
          very soon. You can ask me about getting a dog when you interview me. Stop farting, bro; it smells bad in here.
        </p>
      </div>

      <div className="col-span-6 mx-auto">
        <img src="bella.jpeg" alt="Bella the cat" className="h-110 rounded-lg" />
      </div>
    </div>
  );
};
