import LocationSvelte from "./routes/Location.svelte";
import AmenitiesSvelte from "./routes/Amenities.svelte";
import GreenInitSvelte from "./routes/GreenInit.svelte";
import NotFoundSvelte from "./routes/NotFound.svelte";
import ContactSvelte from "./routes/Contact.svelte";

export const routes = {
  "/": LocationSvelte,
  "/location": LocationSvelte,
  "/amenities": AmenitiesSvelte,
  "/green-init": GreenInitSvelte,
  "/contact": ContactSvelte,

  "*": NotFoundSvelte
};