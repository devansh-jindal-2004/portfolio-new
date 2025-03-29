"use client"; // Ensure this runs only on the client side

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";

// Dynamically import Leaflet components to prevent SSR issues
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });

const LocationMap = () => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const [L, setL] = useState(null);

  // ✅ Set Bathinda as Initial Location
  const location = [30.2110, 74.9455];

  useEffect(() => {
    import("leaflet").then((leaflet) => {
      setL(leaflet);
    });

    setTimeout(() => {
      if (mapRef.current) {
        mapRef.current.invalidateSize(); // Fix map loading issue
        mapRef.current.setView(location, 12, { animate: true }); // ✅ Set Bathinda as initial center
      }
    }, 500);
  }, []);

  if (!L) return <p>Loading map...</p>;

  // ✅ Adjusted Red Pin Icon (Maintains aspect ratio)
  const redPinIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
    iconSize: [40, 40], // Proper aspect ratio
    iconAnchor: [20, 40], // Ensure the tip of the pin points correctly
  });

  return (
    <div className="w-full h-[400px]">
      <MapContainer
        center={location} // ✅ Bathinda as initial location
        zoom={12}
        style={{ height: "100%", width: "100%" }}
        ref={mapRef}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap contributors" />
        <Marker position={location} icon={redPinIcon} ref={markerRef} />
      </MapContainer>
    </div>
  );
};

export default LocationMap;
