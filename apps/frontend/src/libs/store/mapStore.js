import { create } from "zustand";
import { persist } from "zustand/middleware";




const useMapStore = create(
    
        (set)=>({
            mapRef: null,
            mapStyle: "mapbox://styles/mapbox/streets-v12",
            bearing: 0,
            is3DEnabled: false,
            pitch: 0,
            isTerrainEnabled: false,
            showCompass: false,
            exaggeration: 1.5,
            setMapRef: (mapRef) => set({ mapRef }),
            setMapStyle: (mapStyle) => set({ mapStyle }),
            setBearing: (bearing) => set({ bearing }),
            setIs3DEnabled: (is3DEnabled) => set({ is3DEnabled:!is3DEnabled }),
            setPitch: (pitch) => set({ pitch }),
            setIsTerrainEnabled: (isTerrainEnabled) => set({ isTerrainEnabled:!isTerrainEnabled }),
            setShowCompass: (showCompass) => set({ showCompass:!showCompass }),
            setExaggeration: (exaggeration) => set({ exaggeration }),
        }
    )
);
export default useMapStore;