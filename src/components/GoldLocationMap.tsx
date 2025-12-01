"use client";
import { useEffect, useState, useRef, useMemo } from "react";
import { MapContainer, TileLayer, useMap, Marker } from "react-leaflet";
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

function PanToLocation({ center, showMarker }: { center: [number, number]; showMarker: boolean }) {
    const map = useMap();
    const prevShowMarkerRef = useRef(false);

    useEffect(() => {
        if (showMarker && !prevShowMarkerRef.current) {
            map.flyTo(center, map.getZoom(), {
                duration: 1.5,
                easeLinearity: 0.25,
            });
        }
        prevShowMarkerRef.current = showMarker;
    }, [showMarker, center, map]);

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
    const gradientId = useMemo(() => `gold-gradient-${Math.random().toString(36).substr(2, 9)}`, []);
    const [goldIcon, setGoldIcon] = useState<L.Icon | null>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            delete (L.Icon.Default.prototype as any)._getIconUrl;
            L.Icon.Default.mergeOptions({
                iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
                iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
                shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
            });

            const svgIcon = `
                <svg width="95" height="96" viewBox="0 0 95 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="47.4027" cy="47.4026" r="12.6407" fill="#F6BB02" />
                    <circle cx="47.4026" cy="47.4026" r="47.4026" fill="url(#${gradientId})" />
                    <circle cx="47.4027" cy="47.4026" r="15.0108" fill="#F6BB02" stroke="white" stroke-width="4.74026" />
                    <defs>
                        <radialGradient id="${gradientId}" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(47.4026 47.4026) rotate(90) scale(47.4026)">
                            <stop offset="0.447115" stop-color="#F6BB02" />
                            <stop offset="1" stop-color="#FFEDA5" stop-opacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
            `;

            const icon = L.divIcon({
                html: svgIcon,
                className: "gold-marker-icon",
                iconSize: [95, 96],
                iconAnchor: [47.5, 48],
            });

            setGoldIcon(icon as unknown as L.Icon);
            setIsMounted(true);
        }
    }, [gradientId]);

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
                <PanToLocation center={center} showMarker={showMarker} />
                {showMarker && goldIcon && (
                    <Marker position={center} icon={goldIcon} />
                )}
            </MapContainer>
        </div>
    );
}

