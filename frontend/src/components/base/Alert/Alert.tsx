import React, { useState, useEffect } from 'react';
import './alert.scss';

export enum TypeEnum {
    INFO = 'INFO',
    SUCCESS = 'SUCCESS',
    WARNING = 'WARNING',
    ERROR = 'ERROR'
}

export type AlertProps = {
    type: TypeEnum;
    message: string;
    dismissible?: boolean;
    timeout?: number;
    displayMultiple?: boolean;
    onClose?: () => void;
    triggerAlert: boolean; // Control alert visibility via this prop
}

const Alert: React.FC<AlertProps> = ({
    type = TypeEnum.WARNING,
    message,
    dismissible = false,
    timeout = 3000,
    displayMultiple = true,
    onClose,
    triggerAlert = false // Default value to false
}) => {
    const [alerts, setAlerts] = useState<{ id: number, message: string, show: boolean, type: TypeEnum }[]>([]);

    // Function to show a new toast
    const showToast = () => {
        if (!displayMultiple && alerts.length > 0) {
            handleDismiss(alerts[0].id);
        }
        const newAlert = {
            id: Date.now(),
            message: message,
            show: true,
            type: type
        };
        setAlerts(prevAlerts => [newAlert, ...prevAlerts]);

        if (!dismissible) {
            setTimeout(() => handleDismiss(newAlert.id), timeout);
        }
    };

    // Effect to show a toast when triggerAlert changes
    useEffect(() => {
        if (triggerAlert) {
            showToast();
        }
    }, [triggerAlert]); // Depend on triggerAlert

    const handleDismiss = (id: number) => {
        setAlerts(prevAlerts => prevAlerts.map(alert => alert.id === id ? { ...alert, show: false } : alert));
        setTimeout(() => {
            setAlerts(prevAlerts => prevAlerts.filter(alert => alert.id !== id));
            if (onClose) onClose();
        }, 400);
    };

    return (
        <div className="toast-container">
            {alerts.map((alert) => (
                <div key={alert.id} className={`${alert.type.toLowerCase()} toast ${alert.show ? 'show' : 'slide-out'}`}>
                    <span className="toast-text">{alert.message}</span>
                    {dismissible && (
                        <button className="dismiss-button" onClick={() => handleDismiss(alert.id)}>
                            &#x2715;
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Alert;
