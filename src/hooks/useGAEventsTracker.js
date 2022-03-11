import ReactGA from 'react-ga';

const useGAEventsTracker = (categoryName, eventName, labelName) => {
  ReactGA.event({
    category: categoryName,
    action: eventName,
    label: labelName,
    value: 10,
    nonInteraction: false
  });
};

export default useGAEventsTracker;
