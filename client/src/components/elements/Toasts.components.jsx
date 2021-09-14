import { Portal, StackVertical, Toast } from 'components/index';
import React from 'react';

const Toasts = ({ toasts }) => {
    return (
        <>
            {toasts.length && (
                <Portal as={StackVertical} gap={5} id="toasts" position="fixed" bottom="7" left="8">
                    {toasts.map((toast) => (
                        <Toast key={toast.text} toast={toast} />
                    ))}
                </Portal>
            )}
        </>
    );
};

export default Toasts;
