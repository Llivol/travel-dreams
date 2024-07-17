import React from "react";
import { render, screen } from "@testing-library/react";
import TripList from "../components/TripList";

const trips = [
  { id: 1, name: "Beach Trip", description: "Sunny beach trip" },
  { id: 2, name: "Mountain Trip", description: "Hiking mountain trip" },
];

test("filters trips based on search term", () => {
  render(<TripList trips={trips} searchTerm="beach" />);

  const beachTrip = screen.getByText(/beach trip/i);
  const mountainTrip = screen.queryByText(/mountain trip/i);

  expect(beachTrip).toBeInTheDocument();
  expect(mountainTrip).not.toBeInTheDocument();
});
