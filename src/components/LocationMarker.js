import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";

const LocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="location_marker" onClick={onClick}>
      <Icon icon={locationIcon} className="location_icon" />
    </div>
  );
};

export default LocationMarker;
