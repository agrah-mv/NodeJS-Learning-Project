export const formatError = (msg, path = "unknown", location = "body") => {
  return {
    errors: [
      {
        type: "field",
        msg,
        path,
        location,
      },
    ],
  };
};
