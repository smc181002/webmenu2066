import Home from "./routes/Home.svelte";
import Ping from "./routes/Ping.svelte";
import SubMenu from "./routes/SubMenu.svelte";
import Form from "./routes/Form.svelte";

// Export the rote definition object
export default {
  "/": Home,
  "/ping": Ping,
  "/:tech": SubMenu,
  "/:tech/:opt": Form,
};