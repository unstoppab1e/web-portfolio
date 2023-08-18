import React from 'react'

export const BlinkingLamp = () => {
  const [isOn, setIsOn] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsOn((isOn) => !isOn);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className={`w-2.5 h-2.5 rounded-full opacity-100 ${isOn ? 'bg-[rgb(5,260,26)] shadow-[0_0_1px_2px_rgb(5,260,26)]' : 'bg-[rgb(5,260,26)]'}`} />
  )
}
