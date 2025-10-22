import BookingGrid from "./BookingTamplate"; // Adjust path based on your folder structure

const flightBookingSites = [
  {
    name: "MakeMyTrip",
    logo: "/logos/makemytrip.png",
    link: "https://www.makemytrip.com/",
  },
  {
    name: "Goibibo",
    logo: "/logos/goibibo.png",
    link: "https://www.goibibo.com/",
  },
  {
    name: "Cleartrip",
    logo: "/logos/cleartrip.png",
    link: "https://www.cleartrip.com/",
  },
  {
    name: "EaseMyTrip",
    logo: "/logos/easemytrip.png",
    link: "https://www.easemytrip.com/",
  },
  {
    name: "Ixigo",
    logo: "/logos/ixigo.png",
    link: "https://www.ixigo.com/",
  },
];

export default function FlightBooking() {
  return (
    <BookingGrid
      title="Book Your Flight"
      subtitle="Get exciting cashback and offers"
      items={flightBookingSites}
    />
  );
}
