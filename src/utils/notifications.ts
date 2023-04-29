import AWN from 'awesome-notifications';

const notifier = new AWN({
  maxNotifications: 3,
  durations: {
    global: 3000
  }
});

export const tip = (message: string): void => {
  notifier.tip(message);
};
