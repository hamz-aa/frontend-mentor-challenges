import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-center mt-[5rem] text-2xl font-light opacity-70">
        Reliable, efficient delivery <br />{" "}
        <span className="font-bold">Powered by Technology</span>
      </h1>
      <p className="text-center mt-5 px-14 text-gray-400">
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </p>
      <Box />
      <Box />
      <Box />
      <Box />
    </>
  );
}

function Box() {
  return <div>Box</div>;
}

export default App;
