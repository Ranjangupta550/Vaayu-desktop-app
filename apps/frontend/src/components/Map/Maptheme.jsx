import {useMapStore} from "@store";
import { Button } from "@ui"; // Adjust the import path as necessary
import React, { useEffect, useRef, useState } from "react";
import icons from "@assets"; // Adjust the import path as necessary
import {
Layers2
} from "lucide-react"
const config = [
    {
        id: "streets",
        label: "Streets",
        style: "mapbox://styles/mapbox/streets-v12",
        icon: icons.streets,
    },
    {
        id: "outdoors",
        label: "Outdoors",
        style: "mapbox://styles/mapbox/outdoors-v12",
        icon: icons.outdoors,
    },
    {
        id: "light",
        label: "Light",
        style: "mapbox://styles/mapbox/light-v11", // Corrected version
        icon: icons.light,
    },
    {
        id: "dark",
        label: "Dark",
        style: "mapbox://styles/mapbox/dark-v11", // Corrected version
        icon: icons.dark,
    },
    {
        id: "satellite",
        label: "Satellite",
        style: "mapbox://styles/mapbox/satellite-v9", // Corrected version for raw 
        icon: icons.satellite,
    },
    // {
    //     id: "satellite-streets", // Often preferred over raw satellite
    //     label: "Satellite Streets",
    //     style: "mapbox://styles/mapbox/satellite-streets-v12", // Corrected version
    // },
    {
        id: "standard", // Highly recommended new style
        label: "Standard",
        style: "mapbox://styles/mapbox/standard",
        icon: icons.standard,
    },
    {
        id: "standard-satellite", // Highly recommended new style
        label: "Standard Satellite",
        style: "mapbox://styles/mapbox/standard-satellite",
        icon: icons.standardSatellite,
    },
];

const MapTheme = () => {
    const mapStyle = useMapStore((state) => state.mapStyle);
    const setMapStyle = useMapStore((state) => state.setMapStyle);
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen=()=>{
        setIsOpen(!isOpen);
    }
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    
    return (
        <div
            ref={ref}
            className={`right-1 bg-bar top-26  rounded-full z-50 absolute ${isOpen ? "h-auto flex-col" : ""} transition-all duration-300 ease-in-out shadow-lg flex  item-center justify-evenly cursor-pointer border-2 border-black overflow-hidden`}
            onClick={handleOpen}
            style={{
                height: isOpen ? `${config.length * 49 }px` : "35px",
                minWidth: isOpen ? "49px" : "35px",
                transition: "height 0.3s cubic-bezier(0.4,0,0.2,1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div
                className={`flex flex-col items-center justify-around w-full h-full z-60 transition-all duration-300 ease-in-out gap-y-2`}
                style={{
                    opacity: isOpen ? 1 : 0,
                    pointerEvents: isOpen ? "auto" : "none",
                    transform: isOpen ? "scaleY(1)" : "scaleY(0.8)",
                    transition: "opacity 0.2s, transform 0.3s",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                }}
            >
                {isOpen &&
                    config.map((item, idx) => (
                        <Button
                            key={item.id}
                            variant={mapStyle === item.style ? "solid" : "outline"}
                            className="w-10 h-10 rounded-full mb-2 last:mb-0 transition-all duration-200 flex items-center justify-center mx-auto overflow-hidden border"
                            hasTippy={true}
                            tippyProps={{
                                content: item.label,
                                placement: "left",
                                arrow: false,
                                theme: "light",
                                animation: "scale",
                            }}
                           
                            onClick={e => {
                                e.stopPropagation();
                                setMapStyle(item.style);
                                setIsOpen(false);
                            }}
                            style={{
                                opacity: isOpen ? 1 : 0,
                                transform: isOpen
                                    ? `translateY(0)`
                                    : `translateY(-10px)`,
                                transition: `opacity 0.2s ${idx * 0.03}s, transform 0.2s ${idx * 0.03}s`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginLeft: "auto",
                                marginRight: "auto",
                            }}
                        >
                            <img
                                src={item.icon}
                                alt={item.label}
                                className="w-full rounded-full h-full bg-cover scale-200"
                                
                                
                                
                            />
                        </Button>
                    ))}
            </div>
            {!isOpen && (
                <div className="absolute flex  items-center justify-center h-full w-full border-black">
                    <Layers2 size={24} className="text-invert" />
                </div>
            )}
        </div>
    );
}


export default MapTheme;