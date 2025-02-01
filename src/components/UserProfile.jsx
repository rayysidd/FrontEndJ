import React from "react";
import SavedNews from "./UserProfile/SavedNews";
import SavedTutorials from "./UserProfile/SavedTutorials";

const UserProfile = () => {
  return (
    <div className="profile">
      <h2>User Profile</h2>
      <p>Manage your saved content and bookings.</p>

      <SavedNews />
      <SavedTutorials />
    </div>
  );
};

export default UserProfile;
