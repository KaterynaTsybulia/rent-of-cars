	export const typeOfCar = (text) =>
		text?.charAt(0).toUpperCase() + text?.slice(1).toLowerCase();

	export const formatMileage = (mileage) =>
  mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " km";
  
  export const formatAddress = (address) => address.split(", ").slice(-2).join(", ");