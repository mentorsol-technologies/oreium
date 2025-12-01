"use client";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function MapStyle() {
    const map = useMap();
    useEffect(() => {
        const mapContainer = map.getContainer();
        mapContainer.style.filter = "brightness(0.8) contrast(1.2)";
    }, [map]);

    return null;
}

interface GoldLocationMapProps {
    center?: [number, number];
    zoom?: number;
    showMarker?: boolean;
}

export default function GoldLocationMap({
    center = [40.7128, -74.0060],
    zoom = 13,
    showMarker = false
}: GoldLocationMapProps) {
    const [isMounted, setIsMounted] = useState(false);
    const gradientId = `gold-gradient-${Math.random().toString(36).substr(2, 9)}`;

    useEffect(() => {
        if (typeof window !== "undefined") {
            delete (L.Icon.Default.prototype as any)._getIconUrl;
            L.Icon.Default.mergeOptions({
                iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
                iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
                shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
            });
        }
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return (
            <div className="relative w-full h-full bg-[#202020] rounded-[20px] flex items-center justify-center">
                <div className="text-[#717579]">Loading map...</div>
            </div>
        );
    }

    return (
        <div className="relative w-full h-full">
            <MapContainer
                center={center}
                zoom={zoom}
                scrollWheelZoom={true}
                dragging={true}
                style={{ height: "100%", width: "100%", borderRadius: "20px" }}
                className="dark-map"
                zoomControl={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapStyle />
            </MapContainer>
            {showMarker && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ zIndex: 1000 }}>
                    <svg width="95" height="96" viewBox="0 0 95 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="gold-marker">
                        <circle cx="47.4027" cy="47.4026" r="12.6407" fill="#F6BB02" />
                        <circle cx="47.4026" cy="47.4026" r="47.4026" fill={`url(#${gradientId})`} />
                        <circle cx="47.4027" cy="47.4026" r="15.0108" fill="#F6BB02" stroke="white" strokeWidth="4.74026" />
                        <defs>
                            <radialGradient id={gradientId} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(47.4026 47.4026) rotate(90) scale(47.4026)">
                                <stop offset="0.447115" stopColor="#F6BB02" />
                                <stop offset="1" stopColor="#FFEDA5" stopOpacity="0" />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
            )}
        </div>
    );
}

