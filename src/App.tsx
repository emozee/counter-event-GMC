import { EventsCounter } from "./events-counter";

function App() {
  return (
    <main 
      className="min-h-screen w-full relative flex flex-row items-center justify-center gap-10 p-10 overflow-hidden bg-black"
      style={{ 
        backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/9/91/Flag_of_Bhutan.svg')`,
        backgroundSize: 'cover'
      }}
    >
      {/* 1. This one has a limit of 5 */}
      <EventsCounter limit={5} />

      {/* 2. These two have no limit (unlimited) */}
      <EventsCounter />
      <EventsCounter />
    </main>
  );
}

export default App;