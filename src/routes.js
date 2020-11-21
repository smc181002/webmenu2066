import Home from "./routes/Home.svelte";
import Ping from "./routes/Ping.svelte";

// Export the route definition object
export default {
  "/": Home,
  "/ping": Ping,
};