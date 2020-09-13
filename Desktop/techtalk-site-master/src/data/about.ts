export interface Venue {
    name: string;
    img: string;
    url: string;
    address: string;
    lat: number;
    lng: number;
}

export const VENUE: Venue = {
    name: 'Google Fiber Space',
    img: 'assets/images/logos/google.png',
    url: 'https://fiber.google.com/cities/kansascity/fiberspace/',
    address: '1814 Westport Road, Kansas City, MO 64111',
    lat: 38.968150,
    lng: -94.605590
};
