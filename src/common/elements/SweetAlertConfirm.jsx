import Swal from 'sweetalert2';

export const SweetAlertConfirmHook = (title) => {
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
      console.log('삭제');
    }
  });
};
