import Random from "./component/Random";
import Tags from "./component/Tags";

export default function App() {
  return (
    <div className="w-full min-h-screen flex flex-col background">
      <h1 className="bg-white rounded-xl font-bold text-center mt-10 mr-10 ml-10 text-4xl py-2 px-2 ">Random Gifs</h1>
      <div className="flex flex-col items-center mt-10 gap-y-10" >
        <Random></Random>
        <Tags></Tags>
      </div>
      
    </div>
  );
}
