import { spfi, SPFI } from "@pnp/sp";
import { SPFx } from "@pnp/sp/behaviors/spfx";

import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";

let _sp: SPFI | undefined;

export const getSP = (context?: any): SPFI => {
  if (!_sp && context) {
    _sp = spfi().using(SPFx(context));
  }

  if (!_sp) {
    throw new Error("PnPjs não foi inicializado. Passe o context primeiro.");
  }

  return _sp;
};