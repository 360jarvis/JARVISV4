import type { ReactNode } from 'react';
import Button from './Button';
import Modal from './Modal';

type ConfirmDialogProps = {
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  children?: ReactNode;
  open?: boolean;
};

export default function ConfirmDialog({
  title,
  message,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  children,
  open = true
}: ConfirmDialogProps) {
  return (
    <Modal
      title={title}
      subtitle={message}
      size="sm"
      open={open}
      footer={
        <>
          <Button variant="secondary">{cancelLabel}</Button>
          <Button>{confirmLabel}</Button>
        </>
      }
    >
      {children ?? (
        <div style={{ border: '1px solid var(--jarvixx-border)', borderRadius: 18, padding: 14, background: '#fbfaf7', color: 'var(--jarvixx-muted)', fontSize: 13, lineHeight: 1.5 }}>
          This confirmation framework is ready for future connected actions. Buttons are visual only until wired to module logic.
        </div>
      )}
    </Modal>
  );
}
