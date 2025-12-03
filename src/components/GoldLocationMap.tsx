"use client";
import { useEffect, useState, useRef, useMemo } from "react";
import { MapContainer, TileLayer, useMap, Marker } from "react-leaflet";
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

interface GoldLocationMapProps {
    center?: [number, number];
    zoom?: number;
    showMarker?: boolean;
    locations?: UserLocation[];
    height?: string;
    zoomControl?: boolean;
}

export default function GoldLocationMap({
    center = [40.7128, -74.0060],
    zoom = 13,
    showMarker = false,
    locations,
    height = "h-full",
    zoomControl = false
}: GoldLocationMapProps) {
    const [isMounted, setIsMounted] = useState(false);
    const [isContainerReady, setIsContainerReady] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const gradientId = useMemo(() => `gold-gradient-${Math.random().toString(36).substr(2, 9)}`, []);
    const [goldIcon, setGoldIcon] = useState<L.Icon | null>(null);
    const [smallGoldIcon, setSmallGoldIcon] = useState<L.Icon | null>(null);

    const isMultipleLocations = locations && locations.length > 0;

    const mapCenter = useMemo(() => {
        if (isMultipleLocations && locations) {
            const centerLat = locations.reduce((sum, loc) => sum + loc.lat, 0) / locations.length;
            const centerLng = locations.reduce((sum, loc) => sum + loc.lng, 0) / locations.length;
            return [centerLat, centerLng] as [number, number];
        }
        return center;
    }, [isMultipleLocations, locations, center]);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const checkContainerReady = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                if (rect.width > 0 && rect.height > 0) {
                    setIsContainerReady(true);
                    return true;
                }
            }
            return false;
        };

        if (checkContainerReady()) {
            return;
        }

        const resizeObserver = new ResizeObserver(() => {
            if (checkContainerReady()) {
                resizeObserver.disconnect();
            }
        });

        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        const timeout = setTimeout(() => {
            if (checkContainerReady()) {
                resizeObserver.disconnect();
            }
        }, 100);

        return () => {
            resizeObserver.disconnect();
            clearTimeout(timeout);
        };
    }, []);

    useEffect(() => {
        if (typeof window === "undefined" || !isContainerReady) return;

        const initMap = () => {
            const largeSvgIcon = `
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

            const largeIcon = L.divIcon({
                html: largeSvgIcon,
                className: "gold-marker-icon",
                iconSize: [95, 96],
                iconAnchor: [47.5, 48],
            });

            const smallSvgIcon = `
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="8" fill="#F6BB02" stroke="white" stroke-width="2"/>
                </svg>
            `;

            const smallIcon = L.divIcon({
                html: smallSvgIcon,
                className: "gold-marker-icon",
                iconSize: [24, 24],
                iconAnchor: [12, 12],
            });

            setGoldIcon(largeIcon as unknown as L.Icon);
            setSmallGoldIcon(smallIcon as unknown as L.Icon);
            setIsMounted(true);
        };

        const timer = setTimeout(() => {
            initMap();
        }, 50);

        return () => {
            clearTimeout(timer);
        };
    }, [gradientId, isContainerReady]);

    const containerHeight = height === "h-full" ? "h-full" : height;
    const loadingBg = height === "h-full" ? "bg-[#202020]" : "bg-[#161717]";

    if (typeof window === "undefined" || !isContainerReady || !isMounted || (isMultipleLocations && locations.length === 0)) {
        return (
            <div
                ref={containerRef}
                className={`relative w-full ${containerHeight} ${loadingBg} rounded-[20px] flex items-center justify-center`}
            >
                <div className="text-[#717579]">Loading map...</div>
            </div>
        );
    }

    return (
        <div ref={containerRef} className={`relative w-full ${containerHeight} ${isMultipleLocations ? "rounded-[20px] overflow-hidden" : ""}`}>
            <MapContainer
                center={mapCenter}
                zoom={zoom}
                scrollWheelZoom={true}
                dragging={true}
                style={{ height: "100%", width: "100%", borderRadius: isMultipleLocations ? "20px" : "20px" }}
                className="dark-map"
                zoomControl={zoomControl}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapStyle />
                {isMultipleLocations && locations ? (
                    <>
                        <FitBounds locations={locations} />
                        {smallGoldIcon && locations.map((location) => (
                            <Marker
                                key={location.id}
                                position={[location.lat, location.lng]}
                                icon={smallGoldIcon}
                            />
                        ))}
                    </>
                ) : (
                    <>
                        <PanToLocation center={center} showMarker={showMarker} />
                        {showMarker && goldIcon && (
                            <Marker position={center} icon={goldIcon} />
                        )}
                    </>
                )}
            </MapContainer>
        </div>
    );
}

