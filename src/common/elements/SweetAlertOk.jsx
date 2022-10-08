import Swal from 'sweetalert2';

export const SweetAlertOk = (icon, title) => {
  Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: true,
  }).fire({
    icon,
    title,
  });
};
