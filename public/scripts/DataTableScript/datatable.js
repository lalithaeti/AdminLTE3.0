// $(function () {
//     $("#example1").DataTable({
//       "responsive": true,
//       "autoWidth": false,
//     });
//     $('#example2').DataTable({
//       "paging": true,
//       "lengthChange": false,
//       "searching": false,
//       "ordering": true,
//       "info": true,
//       "autoWidth": false,
//       "responsive": true,
//     });
//   });

$(document).ready(function() {
  // Setup - add a text input to each footer cell
  $('#example1 tfoot th').each( function () {
      var title = $(this).text();
      $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
  } );

  // DataTable
  var table = $('#example1').DataTable();
    $('#example2').DataTable({
    'paging'      : true,
    'lengthChange': false,
    'searching'   : false,
    'ordering'    : true,
    'info'        : true,
    'autoWidth'   : false,
    "responsive": true,
    'reSizable'   : true,
    'scrollY'     : 300,
    'scrollX'     : true
  })

  // Apply the search
  table.columns().every( function () {
      var that = this;

      $( 'input', this.footer() ).on( 'keyup change clear', function () {
          if ( that.search() !== this.value ) {
              that
                  .search( this.value )
                  .draw();
          }
      } );
  } );
} );