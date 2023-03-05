import useClock from "../customHook/useClock";


const Clock = () => {
    const clock = useClock();
    return <h1>{clock}</h1>;
  }
  

  export default Clock
