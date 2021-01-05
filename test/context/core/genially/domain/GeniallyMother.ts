import {v4 as uuidV4 } from "uuid";

import Genially from "../../../../../src/contexts/core/genially/domain/Genially";

export const randomGenially = () => {
  return new Genially(
    uuidV4(),
    "My Genially",
    "with an awesome content"
  );
};