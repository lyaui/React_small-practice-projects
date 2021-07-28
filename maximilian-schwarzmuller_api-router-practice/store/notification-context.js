import { createContext, useState, useContext, useEffect } from 'react';

const notificationContext = createContext({
  notification: null, // {title,message,status}
  showNotification(notificationData) {},
  hideNotification() {},
});

const NotificationProvider = ({ children }) => {
  const [activeNotification, setActiveNotification] = useState();

  useEffect(() => {
    if (!activeNotification || activeNotification.status === 'pending') return;
    const timer = setTimeout(() => {
      hideNotificationHandler();
    }, 3000);

    return () => clearTimeout(timer);
  }, [activeNotification]);

  const showNotificationHandler = (notificationData) => {
    const { title, message, status } = notificationData;
    setActiveNotification({ title, message, status });
  };
  const hideNotificationHandler = () => {
    setActiveNotification(null);
  };

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  return <notificationContext.Provider value={context}>{children}</notificationContext.Provider>;
};

export const useNotificationValue = () => useContext(notificationContext);

export default NotificationProvider;
