import { composeRequestKey } from "./composeRequestKey";

export const getAccessoriesQueryKey = () =>
  composeRequestKey({ name: "accessories" });
