import BookingGrid from "./BookingTamplate"; // Adjust path based on your folder structure

const hotelBookingSites = [
  {
    name: "MakeMyTrip Hotels",
    logo: "/logos/makemytrip.png",
    link: "https://www.makemytrip.com/hotels/",
  },
  {
    name: "Goibibo Hotels",
    logo: "/logos/goibibo.png",
    link: "https://www.goibibo.com/hotels/",
  },
  {
    name: "Cleartrip Hotels",
    logo: "/logos/cleartrip.png",
    link: "https://www.cleartrip.com/hotels/",
  },
  {
    name: "OYO Rooms",
    logo: "/logos/oyo.png",
    link: "https://www.oyorooms.com/",
  },
  {
    name: "Trivago",
    logo: "/logos/trivago.png",
    link: "https://www.trivago.in/",
  },
];

export default function HotelBooking() {
  return (
    <BookingGrid
      title="Book Your Hotel"
      subtitle="Compare prices & book with amazing deals"
      items={hotelBookingSites}
    />
  );
}
