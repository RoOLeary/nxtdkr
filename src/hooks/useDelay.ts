import { useEffect, useState } from 'react';

export const useDelay = (delayTime: unknown) => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setDone(true);
      // @ts-expect-error
    }, delayTime);

    return () => clearTimeout(delay);
  }, [delayTime]);

  return done;
};

export default useDelay;
