import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in Leaflet with Vite
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapProps {
  className?: string;
}

export const Map: React.FC<MapProps> = ({ className }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialize map centered on New York
    const map = L.map(mapRef.current).setView([40.7128, -74.0060], 11);

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Service areas
    const serviceAreas = [
      { name: 'Lower Manhattan', coords: [40.7074, -74.0113] as [number, number] },
      { name: 'Financial District', coords: [40.7074, -74.0113] as [number, number] },
      { name: 'East Village', coords: [40.7264, -73.9818] as [number, number] },
      { name: 'Jersey City', coords: [40.7178, -74.0431] as [number, number] },
    ];

    // Add markers for service areas
    serviceAreas.forEach(area => {
      const customIcon = L.divIcon({
        html: `<div class="bg-red-500 text-white p-2 rounded-full text-xs font-bold">${area.name.charAt(0)}</div>`,
        className: 'custom-marker',
        iconSize: [40, 40],
        iconAnchor: [20, 20]
      });

      L.marker(area.coords, { icon: customIcon })
        .addTo(map)
        .bindPopup(`<b>${area.name}</b><br>HVAC Service Available`);
    });

    mapInstanceRef.current = map;

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return <div ref={mapRef} className={className} />;
};