interface BigIcon {
  icon: string, // icon class
  state?: boolean, // default on state / off state or 1/0
  colorOn?: string, // default to #ECC800 if state is truthy
  colorOff?: string, // default to #424242 @ 54% opacity if state is falsey
};
