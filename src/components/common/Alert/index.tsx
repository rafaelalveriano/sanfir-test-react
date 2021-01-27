import Swal from 'sweetalert2'

const Alert = {
  Show: (status: boolean, msg: string) =>
    Swal.fire({
      position: 'center',
      icon: status ? 'success' : 'error',
      title: msg,
      showConfirmButton: false,
      timer: 2200,
    }),

  AlertDelete: () =>
    Swal.fire({
      title: 'Atenção',
      text: 'Deseja realmente excluir este registro ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
    }).then((result) => {
      if (result.isConfirmed) {
        return true
      }
    }),
}
export default Alert
