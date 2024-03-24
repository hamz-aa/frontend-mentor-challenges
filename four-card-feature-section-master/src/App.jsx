/* eslint-disable react/prop-types */
import "./App.css";

function App() {
  const data = [
    {
      id: 1,
      name: "Supervisor",
      desc: "Monitors activity to identify project roadblocks",
      img: "icon-supervisor.svg",
      color: "cyan",
    },
    {
      id: 2,
      name: "Team Builder",
      desc: "Scans our talent network to create the optimal team for your project",
      img: "icon-team-builder.svg",
      color: "red",
    },
    {
      id: 3,
      name: "Karma",
      desc: "Regularly evaluates our talent to ensure quality",
      img: "icon-karma.svg",
      color: "orange",
    },
    {
      id: 4,
      name: "Calculator",
      desc: "Uses data from past projects to provide better delivery estimates",
      img: "icon-calculator.svg",
      color: "blue",
    },
  ];

  return (
    <div className="px-10">
      <h1 className="text-center mt-[5rem] text-2xl font-light opacity-70 ">
        Reliable, efficient delivery <br />{" "}
        <span className="font-bold">Powered by Technology</span>
      </h1>
      <p className="text-center mx-auto mt-5 mb-16 px-4 text-gray-400 font-semibold sm:w-[50%]">
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </p>
      <div className="sm:grid sm:grid-rows-2 sm:grid-cols-3 sm:gap-6 sm:grid-flow-col">
        {data.map((obj) => (
          <Box
            key={obj.id}
            name={obj.name}
            desc={obj.desc}
            imgPath={obj.img}
            color={obj.color}
          />
        ))}
      </div>
    </div>
  );
}

function Box({ name, desc, imgPath, color }) {
  return (
    <div
      className="border-t-[3.5px] rounded shadow-custom border-[--color] my-8 p-6"
      style={{ "--color": color }}
    >
      <h3 className="font-bold text-xl opacity-70">{name}</h3>
      <p className="text-sm text-gray-400 my-1">{desc}</p>
      <img src={"/images/" + imgPath} className="ml-auto mt-10" alt="" />
    </div>
  );
}

export default App;
