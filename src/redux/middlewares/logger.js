export default function logger({ getState }) {
  return next => action => {
    console.log("Will dispatch", action);
    console.log("State after dispatch", getState());
    return next(action);
  };
}
