const wakeUp = () => {
  console.log('Acordando!!');
};

const breakTime = () => {
  console.log('Bora tomar um café!!');
};

const sleepTime = () => {
  console.log('Partiu dormir!!');
};

const doingThings = (param) => {
  param();
};

doingThings(wakeUp);
doingThings(breakTime);
doingThings(sleepTime);