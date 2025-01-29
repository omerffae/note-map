import { goToIcon, homeIcon, jobIcon, parkIcon } from "./constants.js";

// Note'un status değeri için düzenleme yapan fonksiyon
const getStatus = (status) => {
  switch (status) {
    case "goto":
      return "Ziyaret";
    case "home":
      return "Ev";
    case "park":
      return "Park";
    case "job":
      return "İş";
    default:
      return "Tanımsız Durum";
  }
};

// Her status için gerekli icona karar veren fonskiyo

const getNoteIcon = (status) => {
  switch (status) {
    case "goto":
      return goToIcon;
    case "home":
      return homeIcon;
    case "park":
      return parkIcon;
    case "job":
      return jobIcon;
    default:
      return null;
  }
};

export { getStatus, getNoteIcon };
