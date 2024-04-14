/* eslint-disable react/prop-types */
import React, { createContext, useState, useMemo } from 'react';

export const NotificationData = createContext({
    showPopup: () => {},
    hidePopup: () => {},
});

export function NotificationDataProvider({ children }) {
    const [showNotification, setShowNotification] = useState(false);

    const showPopup = () => {
        setShowNotification(true);
    };

    const hidePopup = () => {
        setShowNotification(false);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const contextValue = useMemo(() => ({ showPopup, hidePopup }), [showNotification]);

    return (
        <NotificationData.Provider value={contextValue}>
            {children}
        </NotificationData.Provider>
    );
}