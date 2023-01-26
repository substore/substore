import React from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import './DeleteAccountModal.module.css';

export const DeleteAccountModal = () => (
    <AlertDialog.Root>
        <AlertDialog.Trigger asChild>
            <button className="Button violet">Delete Account</button>
        </AlertDialog.Trigger>
        <AlertDialog.Portal>
            <AlertDialog.Overlay className="AlertDialogOverlay" />
            <AlertDialog.Content className="AlertDialogContent">
                <AlertDialog.Title className="AlertDialogTitle">Are you sure?</AlertDialog.Title>
                <AlertDialog.Description className="AlertDialogDescription">
                Are you sure you want to delete your Substore account? This will delete all your account data.
                </AlertDialog.Description>
                <div style={{ display: 'flex', gap: 25, justifyContent: 'flend-end' }}>
                    <AlertDialog.Cancel asChild>
                        <button className="Button mauve">Cancel</button>
                    </AlertDialog.Cancel>
                    <AlertDialog.Action asChild>
                        <button className="Button red">Yes, delete account</button>
                    </AlertDialog.Action>
                </div>
            </AlertDialog.Content>
        </AlertDialog.Portal>
    </AlertDialog.Root>
)