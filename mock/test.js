import { resultSuccess } from "./_util";

export default [
  {
    url: "/api/test",
    method: "get",
    response: () => {
      return resultSuccess({ name: "test ok" });
    },
  },
];
