
import react, { useState, Suspense, lazy } from "react";
// import { MapViewState } from '@components'; // Adjust the import path as necessary
import { Skeleton } from "@ui";
import { MapTheme } from "@components";

const MapViewState = lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("../components/Map/MapViewState"));
    }, 3000); // Simulate a delay for lazy loading
  })
);

function MissionPlan() {
  return (
    <div className="w-full h-full text-white ">
      <Suspense fallback={<Skeleton text="Loading Map..." />}>
        <MapViewState />
      </Suspense>
    </div>
  );
}
export default MissionPlan;
