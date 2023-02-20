import Swal, { SweetAlertIcon } from 'sweetalert2';

export const SweetAlertHook = (
  timer: number,
  icon: SweetAlertIcon,
  title: string,
) => {
  Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  }).fire({ icon, title });
};
