"use client";
import { useEffect, useState, useMemo, useRef } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

if (typeof window !== "undefined") {
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  });
}

interface UserLocation {
  id: string;
  lat: number;
  lng: number;
  name: string;
}

interface UserLocationsMapProps {
  locations: UserLocation[];
}

function MapStyle() {
  const map = useMap();
  useEffect(() => {
    const mapContainer = map.getContainer();
    mapContainer.style.filter = "brightness(0.8) contrast(1.2)";
  }, [map]);
  return null;
}

function FitBounds({ locations }: { locations: UserLocation[] }) {
  const map = useMap();

  useEffect(() => {
    if (locations.length > 0) {
      const bounds = L.latLngBounds(
        locations.map((loc) => [loc.lat, loc.lng] as [number, number])
      );
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [locations, map]);

  return null;
}

export default function UserLocationsMap({ locations }: UserLocationsMapProps) {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const gradientId = useMemo(() => `gold-gradient-${Math.random().toString(36).substr(2, 9)}`, []);
  const [goldIcon, setGoldIcon] = useState<L.Icon | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const initMap = () => {
      const svgIcon = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="8" fill="#F6BB02" stroke="white" stroke-width="2"/>
        </svg>
      `;

      const icon = L.divIcon({
        html: svgIcon,
        className: "gold-marker-icon",
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });

      setGoldIcon(icon as unknown as L.Icon);
      setIsMounted(true);
    };

    // Use setTimeout to ensure DOM is ready and container is mounted
    const timer = setTimeout(() => {
      if (containerRef.current) {
        initMap();
      }
    }, 0);

    return () => {
      clearTimeout(timer);
    };
  }, [gradientId]);

  if (typeof window === "undefined" || !isMounted || locations.length === 0) {
    return (
      <div
        ref={containerRef}
        className="relative w-full h-[400px] bg-[#161717] rounded-[20px] flex items-center justify-center"
      >
        <div className="text-[#717579]">Loading map...</div>
      </div>
    );
  }

  const centerLat = locations.reduce((sum, loc) => sum + loc.lat, 0) / locations.length;
  const centerLng = locations.reduce((sum, loc) => sum + loc.lng, 0) / locations.length;

  return (
    <div ref={containerRef} className="relative w-full h-[400px] rounded-[20px] overflow-hidden">
      <MapContainer
        center={[centerLat, centerLng]}
        zoom={10}
        scrollWheelZoom={true}
        dragging={true}
        style={{ height: "100%", width: "100%" }}
        className="dark-map"
        zoomControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapStyle />
        <FitBounds locations={locations} />
        {goldIcon && locations.map((location) => (
          <Marker
            key={location.id}
            position={[location.lat, location.lng]}
            icon={goldIcon}
          />
        ))}
      </MapContainer>
    </div>
  );
}

