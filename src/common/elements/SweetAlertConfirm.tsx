import Swal from 'sweetalert2';

export const SweetAlertConfirmHook = (
  title: string,
  onConfirm: (arg0: string) => void,
  dataId: string,
) => {
  Swal.fire({
    icon: 'error',
    toast: true,
    position: 'top',
    showConfirmButton: true,
    showCancelButton: true,
    title,
    confirmButtonText: '확인',
    cancelButtonText: '취소',
  }).then((result) => {
    if (result.isConfirmed) {
      onConfirm(dataId);
    }
  });
};
