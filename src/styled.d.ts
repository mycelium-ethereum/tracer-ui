import "styled-components";
import { TracerTheme } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme extends TracerTheme {}
}
