import Swal, { SweetAlertIcon } from 'sweetalert2';

export const SweetAlertOk = (icon: SweetAlertIcon, title: string) => {
  Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: true,
  }).fire({
    icon,
    title,
  });
};
