import BookingGrid from "./BookingTamplate"; // Adjust path based on your folder structure

const busBookingSites = [
  {
    name: "RedBus",
    logo: "/logos/redbus.png",
    link: "https://www.redbus.in/",
  },
  {
    name: "AbhiBus",
    logo: "/logos/abhibus.png",
    link: "https://www.abhibus.com/",
  },
  {
    name: "MakeMyTrip Buses",
    logo: "/logos/makemytrip.png",
    link: "https://www.makemytrip.com/bus-tickets/",
  },
  {
    name: "Goibibo Buses",
    logo: "/logos/goibibo.png",
    link: "https://www.goibibo.com/bus/",
  },
  {
    name: "Travelyaari",
    logo: "/logos/travelyaari.png",
    link: "https://www.travelyaari.com/",
  },
];

export default function BusBooking() {
  return (
    <BookingGrid
      title="Book Your Bus"
      subtitle="Find bus routes, schedules & offers"
      items={busBookingSites}
    />
  );
}
