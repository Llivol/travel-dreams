import React, { useState } from "react";
import styles from "./EditTripModal.module.css";
import { Trip } from "../types/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

interface EditTripModalProps {
  trip: Trip;
  onClose: () => void;
  onSave: (updatedTrip: Trip) => void;
}

const EditTripModal: React.FC<EditTripModalProps> = ({
  trip,
  onClose,
  onSave,
}) => {
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const [editedTrip, setEditedTrip] = useState<Trip>({
    ...trip,
    itinerary: trip.itinerary.map((day) => ({ ...day })),
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setEditedTrip((prevTrip) => ({
      ...prevTrip,
      [name]: value,
    }));
  };

  const handleItineraryChange = (
    index: number,
    field: string,
    value: string | number
  ) => {
    const updatedItinerary = [...editedTrip.itinerary];
    updatedItinerary[index] = {
      ...updatedItinerary[index],
      [field]: value,
    };
    setEditedTrip((prevTrip) => ({
      ...prevTrip,
      itinerary: updatedItinerary,
    }));
  };

  const handleAddDay = () => {
    setEditedTrip((prevTrip) => ({
      ...prevTrip,
      itinerary: [
        ...prevTrip.itinerary,
        { day: prevTrip.itinerary.length + 1, location: "", description: "" },
      ],
    }));
  };

  const handleRemoveDay = (index: number) => {
    const updatedItinerary = [...editedTrip.itinerary];
    updatedItinerary.splice(index, 1);
    setEditedTrip((prevTrip) => ({
      ...prevTrip,
      itinerary: updatedItinerary.map((day, idx) => ({ ...day, day: idx + 1 })),
    }));
  };

  const handleSubmit = () => {
    onSave(editedTrip);
    onClose();
  };

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className={styles.modalBody}>
          <h1>Edit Trip</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className={styles.formGroup}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={editedTrip.title}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={editedTrip.description}
                onChange={handleInputChange}
                rows={4}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="photo_url">Image URL</label>
              <input
                type="text"
                id="photo_url"
                name="photo_url"
                value={editedTrip.photo_url}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.itinerary}>
              <div className={styles.itineraryHeader}>
                <label htmlFor="itinerary">Day by day itinerary</label>
                <button
                  type="button"
                  className={styles.addDayButton}
                  onClick={handleAddDay}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
              <div className={styles.itineraryItems}>
                {editedTrip.itinerary.map((day, index) => (
                  <div key={index} className={styles.itineraryItem}>
                    <div className={styles.itineraryDay}>
                      <div className={styles.formGroup}>
                        <label htmlFor={`day-${index}`}>Day</label>
                        <input
                          type="text"
                          id={`day-${index}`}
                          value={day.day}
                          disabled
                          required
                        />
                      </div>
                    </div>
                    <div className={styles.itineraryDetails}>
                      <div className={styles.formGroup}>
                        <label htmlFor={`location-${index}`}>Location</label>
                        <input
                          type="text"
                          id={`location-${index}`}
                          value={day.location}
                          onChange={(e) =>
                            handleItineraryChange(
                              index,
                              "location",
                              e.target.value
                            )
                          }
                          required
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label htmlFor={`description-${index}`}>
                          Description
                        </label>
                        <textarea
                          id={`description-${index}`}
                          value={day.description}
                          onChange={(e) =>
                            handleItineraryChange(
                              index,
                              "description",
                              e.target.value
                            )
                          }
                          rows={3}
                          required
                        />
                      </div>
                      <button
                        type="button"
                        className={styles.removeDayButton}
                        onClick={() => handleRemoveDay(index)}
                      >
                        Remove Day
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.formGroup}>
              <button
                type="submit"
                className={styles.saveButton}
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditTripModal;
