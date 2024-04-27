import { useEffect, useRef } from "react";

export function MountedComponent() {
  const isMountedRef = useRef(false);

  useEffect(() => {
    if (!isMountedRef.current) {
      console.log("The component has been mounted at the first time");
      isMountedRef.current = true;
    }
  }, []);

  return (
    <>
      <h2>Mounted Component</h2>
    </>
  );
}
