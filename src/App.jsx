import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import SearchBar from "./components/SearchBar";
import FilterNav from "./components/FilterNav";
import Partners from "./components/Partners"; // Import the Partners component
import VenueCard from "./components/VenueCard";
import Footer from "./components/Footer";
import LoginPopup from "./components/LoginPopup";
import SignupPopup from "./components/SignupPopup";
import "./App.css";

const venuesData = [
  {
    id: 1,
    name: "Elegant Palace",
    location: "Chennai",
    price: "₹2,50,000",
    pricePerPlate: "₹2,500", // Added pricePerPlate
    rating: 4.8,
    reviews: 120,
    mostBooked: true,
    mostLiked: true,
    type: "banquet", // Added venue type
    space: "indoor", // Added space type
    images: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://www.kalkifashion.com/blogs/wp-content/uploads/2023/01/Wedding-in-udaipur.jpg",
    ],
    description:
      "A luxurious venue perfect for grand weddings with premium amenities.",
  },
  {
    id: 2,
    name: "Royal Garden",
    location: "Bangalore",
    price: "₹1,80,000",
    pricePerPlate: "₹1,800", // Added pricePerPlate
    rating: 4.5,
    reviews: 90,
    mostBooked: false,
    mostLiked: true,
    type: "lawn", // Added venue type
    space: "outdoor", // Added space type
    images: [
      "https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://image.wedmegood.com/resized/720X/uploads/member/11071/1730964139_swimming.jpg",
    ],
    description:
      "An elegant garden venue ideal for outdoor weddings and receptions.",
  },
  {
    id: 3,
    name: "Seaside Resort",
    location: "Mumbai",
    price: "₹3,20,000",
    pricePerPlate: "₹3,000", // Added pricePerPlate
    rating: 4.9,
    reviews: 150,
    mostBooked: true,
    mostLiked: true,
    type: "resort", // Added venue type
    space: "both", // Added space type
    images: [
      "https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://www.kalkifashion.com/blogs/wp-content/uploads/2023/01/60e548b58a373a7f865900fd_04d99656_bf8a_4a2d_a2b2_30833018c575-1024x680.jpg",
    ],
    description: "Breathtaking beachfront venue with panoramic ocean views.",
  },
  {
    id: 4,
    name: "Mountain View Manor",
    location: "Shimla",
    price: "₹2,00,000",
    pricePerPlate: "₹2,200", // Added pricePerPlate
    rating: 4.6,
    reviews: 85,
    mostBooked: false,
    mostLiked: true,
    type: "resort", // Added venue type
    space: "both", // Added space type
    images: [
      "https://media.weddingz.in/images/98688545ab523862790baf9b354ac987/Winter-Destination-Wedding-in-India.jpg",
      "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR57A5xpNbxu-vX5hhP7Cu5hmk_qF_wGjx-ug&s",
    ],
    description: "Scenic hill station venue surrounded by majestic mountains.",
  },
  {
    id: 5,
    name: "Heritage Haveli",
    location: "Jaipur",
    price: "₹2,75,000",
    pricePerPlate: "₹2,800", // Added pricePerPlate
    rating: 4.7,
    reviews: 110,
    mostBooked: true,
    mostLiked: false,
    type: "farmhouse", // Added venue type
    space: "both", // Added space type
    images: [
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://luxaus.au/wp-content/uploads/2023/03/cccc-scaled.webp",
    ],
    description:
      "Traditional Rajasthani palace with royal architecture and modern amenities.",
  },
  {
    id: 6,
    name: "Lakeside Retreat",
    location: "Udaipur",
    price: "₹3,50,000",
    pricePerPlate: "₹3,200", // Added pricePerPlate
    rating: 4.9,
    reviews: 130,
    mostBooked: true,
    mostLiked: true,
    type: "resort", // Added venue type
    space: "outdoor", // Added space type
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr71S_8FwSb2s3AVLO2Wiyy9SlmNtZC3FM_L_p0VI2WWYlaiMgdJDt_Gj05ISlkS71BZI&usqp=CAU",
      "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://www.kalkifashion.com/blogs/wp-content/uploads/2024/02/Perfect-Places-For-A-Beautiful-Mountain-Wedding-in-Mussoorie-Wish-N-Wed.jpg",
    ],
    description:
      "Luxurious lakefront property with stunning water views and royal service.",
  },
  {
    id: 7,
    name: "Green Valley Resort",
    location: "Coorg",
    price: "₹1,90,000",
    pricePerPlate: "₹1,900", // Added pricePerPlate
    rating: 4.4,
    reviews: 75,
    mostBooked: false,
    mostLiked: true,
    type: "resort", // Added venue type
    space: "outdoor", // Added space type
    images: [
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://image.wedmegood.com/nw/uploads/member/11719/1469173089_Dream_Makers__1_.jpg",
    ],
    description: "Serene coffee estate resort perfect for intimate weddings.",
  },
  {
    id: 8,
    name: "Urban Luxury Hotel",
    location: "Delhi",
    price: "₹2,90,000",
    pricePerPlate: "₹2,700", // Added pricePerPlate
    rating: 4.7,
    reviews: 95,
    mostBooked: true,
    mostLiked: false,
    type: "hotel", // Added venue type
    space: "indoor", // Added space type
    images: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://blissfulplans.com/wp-content/uploads/2020/06/destination-wedding-rajasthan.jpg",
    ],
    description: "Contemporary luxury hotel in the heart of the city.",
  },
  {
    id: 9,
    name: "Beachfront Paradise",
    location: "Goa",
    price: "₹2,60,000",
    pricePerPlate: "₹2,600", // Added pricePerPlate
    rating: 4.8,
    reviews: 140,
    mostBooked: true,
    mostLiked: true,
    type: "resort", // Added venue type
    space: "outdoor", // Added space type
    images: [
      "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/169192/pexels-photo-169192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    description:
      "Exotic beach resort with perfect sunset views and private beach access.",
  },
  {
    id: 10,
    name: "Forest Eco Resort",
    location: "Kerala",
    price: "₹2,10,000",
    pricePerPlate: "₹2,100", // Added pricePerPlate
    rating: 4.6,
    reviews: 80,
    mostBooked: false,
    mostLiked: true,
    type: "resort", // Added venue type
    space: "both", // Added space type
    images: [
      "https://images.unsplash.com/photo-1470137237906-d8a4f71e1966?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://onehorizonproductions.com/wp-content/uploads/2022/08/Holiday-1.jpg",
    ],
    description:
      "Eco-friendly resort surrounded by lush greenery and backwaters.",
  },
];

function App() {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    guests: "",
    rooms: "",
    pricePerPlate: "",
    rentalCost: "",
    venueType: "",
    space: "",
    rating: "",
  });
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isSignupPopupOpen, setIsSignupPopupOpen] = useState(false);

  const handleFilterChange = (filterName, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: value,
    }));
  };

  const filterVenues = (venues) => {
    return venues.filter((venue) => {
      // First apply search filter
      const matchesSearch =
        venue.name.toLowerCase().includes(search.toLowerCase()) ||
        venue.location.toLowerCase().includes(search.toLowerCase());

      if (!matchesSearch) return false;

      // Then apply all other filters
      for (const [key, value] of Object.entries(filters)) {
        if (!value) continue; // Skip empty filters

        switch (key) {
          case "locality":
            if (
              value &&
              !venue.location.toLowerCase().includes(value.toLowerCase())
            )
              return false;
            break;

          case "rating":
            const minRating = parseInt(value);
            if (venue.rating < minRating) return false;
            break;

          case "venueType":
            // Skip if venue doesn't have type property
            if (!venue.type) continue;
            if (value && venue.type !== value) return false;
            break;

          case "space":
            // Skip if venue doesn't have space property
            if (!venue.space) continue;
            if (value && venue.space !== value) return false;
            break;

          case "pricePerPlate":
            // Skip this filter if venue doesn't have pricePerPlate property
            if (!venue.pricePerPlate) continue;

            const [minPlate, maxPlate] = value.split("-").map(Number);
            const venuePlateCost = parseInt(
              venue.pricePerPlate.replace(/[^0-9]/g, "")
            );
            if (
              maxPlate &&
              (venuePlateCost < minPlate || venuePlateCost > maxPlate)
            )
              return false;
            break;

          case "rentalCost":
            const [minRent, maxRent] = value.split("-").map(Number);
            const venueRent = parseInt(venue.price.replace(/[^0-9]/g, ""));
            if (maxRent && (venueRent < minRent || venueRent > maxRent))
              return false;
            break;

          // Add other cases as needed
        }
      }
      return true;
    });
  };

  const filteredVenues = filterVenues(venuesData);

  const openLoginPopup = () => {
    setIsLoginPopupOpen(true);
    setIsSignupPopupOpen(false);
  };

  const openSignupPopup = () => {
    setIsSignupPopupOpen(true);
    setIsLoginPopupOpen(false);
  };

  return (
    <Router>
      <div className="app">
        <Navbar onLoginClick={openLoginPopup} onSignupClick={openSignupPopup} />
        <Banner />
        <SearchBar search={search} setSearch={setSearch} />
        <FilterNav filters={filters} onFilterChange={handleFilterChange} />
        <Partners /> {/* Add the Partners component here */}
        <div className="venues-list">
          {filteredVenues.map((venue) => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </div>
        <Footer />
        <LoginPopup
          isOpen={isLoginPopupOpen}
          onClose={() => setIsLoginPopupOpen(false)}
        />
        <SignupPopup
          isOpen={isSignupPopupOpen}
          onClose={() => setIsSignupPopupOpen(false)}
        />
      </div>
    </Router>
  );
}

export default App;
