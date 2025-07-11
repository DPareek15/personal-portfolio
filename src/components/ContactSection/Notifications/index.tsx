import { notifications } from '@mantine/notifications';

export const Notification = {
  showLoading: (title: string, message: string) => {
    return notifications.show({
      loading: true,
      title: title,
      message: message,
      autoClose: 2000,
      withBorder: true,
      withCloseButton: true,
      position: 'bottom-right',
      color: 'blue',
      radius: 'sm',
    });
  },
  showSuccess: (title: string, message: string) => {
    return notifications.show({
      loading: false,
      title: title,
      message: message,
      autoClose: 2000,
      withBorder: true,
      withCloseButton: true,
      position: 'bottom-right',
      color: 'green',
      radius: 'sm',
    });
  },
  showFailure: (title: string, message: string) => {
    notifications.show({
      loading: false,
      title: title,
      message: message,
      autoClose: 2000,
      withBorder: true,
      withCloseButton: true,
      position: 'bottom-right',
      color: 'red',
      radius: 'sm',
    });
  },
};
