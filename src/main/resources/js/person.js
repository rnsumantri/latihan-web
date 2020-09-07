// // A $( document ).ready() block.
// $(document).ready(function () {
//     getPerson()
//     addForm()
// });
//
// function getPerson() {
//     $.ajax({
//         url: 'http://localhost:8080/person',
//         method: 'GET',
//         success: function (data) {
//             console.log('success', data)
//         },
//         error: function (xhr, status, error) {
//             var err = eval("(" + xhr.responseText + ")");
//             console.log(err.Message);
//         }
//     });
// }
// function addForm(){
//     $("#btn").click(function () {
//         let nik = $("#nik").val();
//         let date = $(".date").val();
//         let nama = $("#nama").val();
//         let alamat = $("#alamat").val();
//         let hp = $("#nohp").val();
//         let tempatLahir = $("#tempatLahir").val();
//
//         Swal.fire(
//             'Data Anda Terkirim',
//             '',
//             'success'
//         )
//         markup =
//             "<tr>" +
//             "<td>" + nik + "</td>" +
//             "<td>" + nama + "</td>" +
//             "<td>" + alamat + "</td>" +
//             "<td>" + hp + "</td>" +
//             "<td>" + date + "</td>" +
//             "<td>" + tempatLahir + "</td>" +
//             "</tr>";
//         tableBody = $("table tbody");
//         tableBody.append(markup);
//     });
//
//     $(".addForm").click(function () {
//         $("#additional").append(
//             '<fieldset class="card card-outline card-cyan">' +
//             '<div class="form-group" id="add">' +
//             '<label class="col-sm-2 col-form-label">Jenjang</label>' +
//             '<div class="col-sm-12">' +
//             ' <label class="mr-sm-2 sr-only" for="jenjang">Preference</label>' +
//             '<select class="custom-select mr-sm-2" id="jenjang">' +
//             '   <option selected>Pilih...</option>' +
//             '<option value="sd">SD</option>' +
//             '<option value="smp">SMP</option>' +
//             '<option value="sma">SMA</option>' +
//             '<option value="s1">S1</option>' +
//             '<option value="s2">S2</option>' +
//             '<option value="s3">S3</option>' +
//             '</select>' +
//             '</div>' +
//             '</div>' +
//             '<div class="form-group">' +
//             '<label for="institusi" class="col-sm col-form-label">Institusi</label>' +
//             '<div class="col-sm">' +
//             '<input type="text" class="form-control" id="institusi">' +
//             '</div>' +
//             '</div>' +
//             '<div class="form-group">' +
//             ' <label for="tahunMasuk" class="col-sm-2 col-form-label">Tahun Masuk</label>' +
//             ' <div class="col-sm-12">' +
//             ' <input type="alamat" class="form-control" id="tahunMasuk">' +
//             '</div>' +
//             '</div>' +
//             '<div class="form-group">' +
//             '<label for="tahunLulus" class="col-sm col-form-label">Tahun Lulus</label>' +
//             '<div class="col-sm">' +
//             '<input type="text" class="form-control" id="tahunLulus">' +
//             ' </div>' +
//             '</div>' +
//             '<button type="button" class="btn btn-danger float-left addForm" href="javascript:void(0);">Remove</button>' +
//             '<a href="javascript:void(0);" class="remAdd">Remove</a>' +
//             ' </div>' +
//             '</fieldset>'
//         );
//     });
//     $('#additional').on('click', '.remAdd', function () {
//         $(this).parent().remove();
//     });
// }
//
//
//
