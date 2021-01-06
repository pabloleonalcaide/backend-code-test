import {v4 as uuidV4 } from "uuid";

import Genially from "../../../../../src/contexts/core/genially/domain/Genially";
import GeniallyDescription from "../../../../../src/contexts/core/genially/domain/GeniallyDescription";
import GeniallyId from "../../../../../src/contexts/core/genially/domain/GeniallyId";
import GeniallyName from "../../../../../src/contexts/core/genially/domain/GeniallyName";

export const randomGenially = () => {
  return new Genially(
    new GeniallyId(uuidV4()),
    new GeniallyName("My Genially"),
    new GeniallyDescription("with an awesome content")
  );
};