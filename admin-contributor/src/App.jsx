function App() {
  return (
    <>
      <div className="flex min-h-screen">
        <div className=" px-10 py-10 bg-gray-100 ">
          <h1>SIDEBAR</h1>
        </div>
        <div className="flex flex-col gap-10 flex-1">
          <div className="px-10 py-10 bg-gray-100 w-full">
            <h1>NAVBAR</h1>
          </div>
          <div className="grid grid-cols-3 w-full gap-5 px-10 py-5">
            <h1 className="bg-gray-100 ">NAVBAR</h1>
            <h1 className="bg-gray-100 ">NAVBAR</h1>
            <h1 className="bg-gray-100 ">NAVBAR</h1>
            <h1 className="bg-gray-100 ">NAVBAR</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
