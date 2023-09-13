
//    var submitbtn=document.getElementById("submit");
//     submitbtn.addEventListener('click',function(){
      
//     var sno = document.getElementById("sno").value;
//     var shipmentMode = document.getElementById("shipmentmode").value;
//     var poNumber = document.getElementById("ponumber").value;
//     var supplierName = document.getElementById("suppliername").value;
//     var consignee = document.getElementById("consignee").value;
//     var materialPickDt = document.getElementById("materialpickdt").value;
//     var actualPickupDt = document.getElementById("actualpickupdt").value;
//     var etd = document.getElementById("etd").value;
//     var actualEtd = document.getElementById("actualetd").value;
//     var eta = document.getElementById("eta").value;
//     var actualEta = document.getElementById("actualeta").value;
//     var origin = document.getElementById("origin").value;
//     var portOfLoading = document.getElementById("portofloading").value;
//     var sizeOfContainers = document.getElementById("sizeofcontainers").value;
//     var noOfContainers = document.getElementById("noofcontainer").value;
//     var containerNumbers = document.getElementById("containernumbers").value;
//     var mblNumber = document.getElementById("mblnumber").value;
//     var hblNumber = document.getElementById("hblnumber").value;
//     var nameOfShippingLiner = document.getElementById("nameofshippingliner").value;
//     var federVesselName = document.getElementById("federvesselname").value;
//     var federVesselImoNumber = document.getElementById("federvesselimonumber").value;
//     var firstTranshipmentEta = document.getElementById("firsttranshipmenteta").value;
//     var firstTranshipmentEtd = document.getElementById("firsttranshipmentetd").value;
//     var firstTranshipmentPortName = document.getElementById("firsttranshipmentportname").value;
//     var motherVesselName = document.getElementById("mothervesselname").value;
//     var secondTranshipmentEta = document.getElementById("secondtranshipmenteta").value;
//     var secondTranshipmentEtd = document.getElementById("secondtranshipmentetd").value;
//     var secondTranshipmentPortName = document.getElementById("secondtranshipmentportname").value;
//     var secondFederVesselName = document.getElementById("secondfedervesselname").value;
//     var preAlertDtd = document.getElementById("prealertdtd").value;
//     var remarks = document.getElementById("remarks").value;
    
//     if (sno === "" || sno === null) {
//         alert("Serial No is required");
//     } else if (shipmentMode === "" || shipmentMode === null) {
//         alert("Shipment Mode is required");
//     } else if (poNumber === "" || poNumber === null) {
//         alert("PO Number is required");
//     } else if (supplierName === "" || supplierName === null) {
//         alert("Supplier Name is required");
//     } else if (consignee === "" || consignee === null) {
//         alert("Consignee is required");
//     } else if (materialPickDt === "" || materialPickDt === null) {
//         alert("Material Pickup Date is required");
//     } else if (actualPickupDt === "" || actualPickupDt === null) {
//         alert("Actual Pickup Date is required");
//     } else if (etd === "" || etd === null) {
//         alert("ETD is required");
//     } else if (actualEtd === "" || actualEtd === null) {
//         alert("Actual ETD is required");
//     } else if (eta === "" || eta === null) {
//         alert("ETA is required");
//     } else if (actualEta === "" || actualEta === null) {
//         alert("Actual ETA is required");
//     } else if (origin === "" || origin === null) {
//         alert("Country Of Origin is required");
//     } else if (portOfLoading === "" || portOfLoading === null) {
//         alert("Port Of Loading is required");
//     } else if (sizeOfContainers === "" || sizeOfContainers === null) {
//         alert("Size Of Containers is required");
//     } else if (noOfContainers === "" || noOfContainers === null) {
//         alert("No Of Container is required");
//     } else if (containerNumbers === "" || containerNumbers === null) {
//         alert("Container Numbers is required");
//     } else if (mblNumber === "" || mblNumber === null) {
//         alert("MBL Number is required");
//     } else if (hblNumber === "" || hblNumber === null) {
//         alert("HBL Number is required");
//     } else if (nameOfShippingLiner === "" || nameOfShippingLiner === null) {
//         alert("Name Of Shipping Liner is required");
//     } else if (federVesselName === "" || federVesselName === null) {
//         alert("1st Feder Vessel Name is required");
//     } else if (federVesselImoNumber === "" || federVesselImoNumber === null) {
//         alert("1st Feder Vessel IMO Number is required");
//     } else if (firstTranshipmentEta === "" || firstTranshipmentEta === null) {
//         alert("1st Transhipment ETA is required");
//     } else if (firstTranshipmentEtd === "" || firstTranshipmentEtd === null) {
//         alert("1st Transhipment ETD is required");
//     } else if (firstTranshipmentPortName === "" || firstTranshipmentPortName === null) {
//         alert("1st Transhipment Port Name is required");
//     } else if (secondTranshipmentEta === "" || secondTranshipmentEta === null) {
//         alert("2nd Transhipment ETA is required");
//     } else if (secondTranshipmentEtd === "" || secondTranshipmentEtd === null) {
//         alert("2nd Transhipment ETD is required");
//     } else if (secondTranshipmentPortName === "" || secondTranshipmentPortName === null) {
//         alert("2nd Transhipment Port Name is required");
//     } else if (secondFederVesselName === "" || secondFederVesselName === null) {
//         alert("2nd Feder Vessel Name is required");
//     } else if (preAlertDtd === "" || preAlertDtd === null) {
//         alert("Pre Alert/DTD is required");
//     } else if (remarks === "" || remarks === null) {
//         alert("Remarks is required");
//     } else {
//         alert("Form Submitted Successfully!!!");
//         // document.getElementById("myForm").reset();
//     }
// });

// $(document).ready(function() {
//     // Function to update the progress bar
//     function updateProgress() {
//         const totalFields = $('form#myForm input').length;
//         const filledFields = $('form#myForm input').filter(function() {
//             return $.trim(this.value).length > 0;
//         }).length;
//         const progress = (filledFields / totalFields) * 100;
//         $('.progress-bar').css('width', progress + '%').attr('aria-valuenow', progress).text(Math.round(progress) + '%');
//     }

//     // Initialize the progress bar
//     updateProgress();

//     // Listen for changes on input fields to update the progress bar
//     $('form#myForm input').on('input', function() {
//         updateProgress();
//     });

//     // Form submission
//     $('#myForm').on('submit', function(event) {
//         event.preventDefault();
//         // Your validation logic here
//         // Serialize form data
//         // Initialize an empty payload object
//         const payload = {};

//         // Loop through each input field and populate the payload object
//         $('form#myForm input').each(function() {
//             const fieldId = $(this).attr('id');
//             const fieldValue = $(this).val();
//             if (fieldId && fieldValue.trim() !== '') {
//                 payload[fieldId] = fieldValue;
//             }
//         });

//         // Log the payload object to the console
//         console.log('Payload:', payload);
//     alert("Form Submitted Successfully!!!");
//     });
// });
// working version
// $(document).ready(function() {
//     // Function to update the progress bar
//     function updateProgress() {
//         const totalFields = $('form#myForm input').length;
//         const filledFields = $('form#myForm input').filter(function() {
//             return $.trim(this.value).length > 0;
//         }).length;
//         const progress = (filledFields / totalFields) * 100;
//         $('.progress-bar').css('width', progress + '%').attr('aria-valuenow', progress).text(Math.round(progress) + '%');
//     }

//     // Initialize the progress bar
//     updateProgress();

//     // Listen for changes on input fields to update the progress bar
//     $('form#myForm input').on('input', function() {
//         updateProgress();
//     });

//     // Form submission
//     $('#myForm').on('submit', function(event) {
//         event.preventDefault();
        
//         // Initialize an empty payload object
//         const payload = {
//             formData: {},
//             key: 'database/drs_sea_shipment.csv',  // Replace with your file/database name
//             bucket: 'dsrapp'  // Replace with your bucket name
//         };

//         // Loop through each input field and populate the formData object
//         $('form#myForm input').each(function() {
//             const fieldId = $(this).attr('id');
//             const fieldValue = $(this).val();
//             payload.formData[fieldId] = fieldValue.trim() !== '' ? fieldValue : null;
//         });

//         // Log the payload object to the console
//         console.log('Payload:', payload);

//         // Define the API Gateway URL
//         var apiURL = 'https://w0gfsk9d0g.execute-api.ap-south-1.amazonaws.com/prod/surveydata_to_s3';

//         // Make the AJAX call
//         $.ajax({
//             url: apiURL,
//             type: 'POST',
//             data: JSON.stringify(payload),
//             contentType: 'application/json; charset=utf-8',
//             success: function(response) {
//                 console.log('Success:', response);
//                 alert("Form Submitted Successfully!!!");
//             },
//             error: function(error) {
//                 console.log('Error:', error);
//                 alert("An error occurred while submitting the form.");
//             }
//         });
//     });
// });

$(document).ready(function() {
    // Function to update the progress bar
    function updateProgress() {
        const totalFields = $('form#myForm input').length;
        const filledFields = $('form#myForm input').filter(function() {
            return $.trim(this.value).length > 0;
        }).length;
        const progress = (filledFields / totalFields) * 100;
        $('.progress-bar').css('width', progress + '%').attr('aria-valuenow', progress).text(Math.round(progress) + '%');
    }

    // Initialize the progress bar
    updateProgress();

    // Listen for changes on input fields to update the progress bar
    $('form#myForm input').on('input', function() {
        updateProgress();
    });

    // Form submission
    $('#myForm').on('submit', function(event) {
        event.preventDefault();


        var poNumber=document.getElementById("ponumber").value;
        var supplierName=document.getElementById("suppliername").value;
        var consignee=document.getElementById("consignee").value;
        var bookingReceiveddate=document.getElementById("bookingreceiveddate").value;
        var bkgDate=document.getElementById("bkgdate").value;
        var cargoReadiness=document.getElementById("cargoreadiness").value;
        var pickupDate=document.getElementById("pickupdate").value;
        var warehouseRcvd=document.getElementById("warehousercvd").value;
        var countryOforigin=document.getElementById("countryoforigin").value;
        var terms=document.getElementById("terms").value;
        var hawbNo=document.getElementById("hawbno").value;
        var mawb=document.getElementById("mawb").value;
        var pkgs=document.getElementById("pkgs").value;
        var grsWt=document.getElementById("grswt").value;
        var chgWt=document.getElementById("chgwt").value;
        var fltDetails=document.getElementById("fltdetails").value;
        var etd=document.getElementById("etd").value;
        var eta=document.getElementById("eta").value;
        var revisedEtd=document.getElementById("revisedetd").value;
        var revisedEta=document.getElementById("revisedeta").value;
        var ata=document.getElementById("ata").value;
        var prealertDtd=document.getElementById("prealertdtd").value;
        var remarks=document.getElementById("remarks").value;
        // var freyershipmentrefno=document.getElementById("freyershipmentrefno").value;


        const namePattern= /^[A-Za-z-&\s]+$/
        const commonPattern = /^[A-Za-z\s]+$/;
        const poNumberPattern = /^\d{10}$/;
        const delimitersPattern = /^[A-Za-z0-9\s.,-/]+$/;
        const datePattern = /^\d{4}-\d{2}-\d{2}$/;
        const alphaNumericpattern = /^[a-zA-Z0-9\s]+$/
        const numberPattern = /^[0-9.]+$/;

        if (!poNumberPattern.test(poNumber)) {
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid Po Number',
            });
            return false;
        }
        else if (!namePattern.test(supplierName)) {
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid Supplier Name',
            });
            return false;
        }
        else if (!commonPattern.test(consignee)) {
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid Consignee',
            });
            return false;
        }
        else if (!datePattern.test(bookingReceiveddate)) {
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid Booking Received Date',
            });
            return false;
        }
        else if (!datePattern.test(bkgDate)) {
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid Bkg Date',
            });
            return false;
        }
        else if (!datePattern.test(cargoReadiness)) {
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid Cargo Readiness',
            });
            return false;
        }
        else if (!datePattern.test(pickupDate)) {
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid Pickup Date',
            });
            return false;
        }
        else if (!datePattern.test(warehouseRcvd)) {
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid Warehouse Rcvd',
            });
            return false;
        }
        else if (!commonPattern.test(countryOforigin)) {
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid Country Of Origin',
            });
            return false;
        }
        else if (!namePattern.test(terms)) {
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid Terms',
            });
            return false;
        }
        else if (!delimitersPattern.test(hawbNo)) {
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid Hawb No',
            });
            return false;
        }
        else if (!delimitersPattern.test(mawb)) {
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid Mawb',
            });
            return false;
        }
        else if (!numberPattern.test(pkgs)) {
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid PKGS',
            });
            return false;
        }
        else if (!numberPattern.test(grsWt)) {
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid GRS Wt',
            });
            return false;
        }
        else if (!alphaNumericpattern.test(chgWt)) {
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid CHG Wt',
            });
            return false;
        }
        else if (!delimitersPattern.test(fltDetails)) {
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid Flt Details',
            });
            return false;
        }
        else if (!datePattern.test(etd)) {
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid ETD',
            });
            return false;
        }
        else if (!datePattern.test(eta)) {
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid ETA',
            });
            return false;
        }
        else if (!datePattern.test(revisedEtd)) {
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid Revised Etd',
            });
            return false;
        }
        else if (!datePattern.test(revisedEta)) {
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid Revised Eta',
            });
            return false;
        }
        else if (!commonPattern.test(ata)) {
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid ATA',
            });
            return false;
        }
        else if (!datePattern.test(prealertDtd)) {
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid Prealert Dtd',
            });
            return false;
        }
        else if (!delimitersPattern.test(remarks)) {
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid Remarks',
            });
            return false;
        }
        




        // Show spinner
        const spinner = '<div class="spinner-border text-primary" role="status"><span class="sr-only">Loading...</span></div>';
        $('button[type="submit"]').html(spinner).attr('disabled', true);

        // Initialize an empty payload object
        const payload = {
            formData: {},
            key: 'database/drs_air_shipment.csv',  // Replace with your file/database name
            bucket: 'dsrapp'  // Replace with your bucket name
        };

        // Loop through each input field and populate the formData object
        $('form#myForm input').each(function() {
            const fieldId = $(this).attr('id');
            const fieldValue = $(this).val();
            payload.formData[fieldId] = fieldValue.trim() !== '' ? fieldValue : null;
        });

        // Define the API Gateway URL
        var apiURL = 'https://w0gfsk9d0g.execute-api.ap-south-1.amazonaws.com/prod/surveydata_to_s3';

        // Make the AJAX call
        $.ajax({
            url: apiURL,
            type: 'POST',
            data: JSON.stringify(payload),
            contentType: 'application/json; charset=utf-8',
            success: function(response) {
                // Hide spinner
                $('button[type="submit"]').html('Submit').attr('disabled', false);

                // Show Swal alert
                Swal.fire({
                    icon: 'success',
                    title: 'Form Submitted Successfully!',
                    text: 'Your data has been saved.'
                });
            },
            error: function(error) {
                // Hide spinner
                $('button[type="submit"]').html('Submit').attr('disabled', false);

                // Show Swal alert
                Swal.fire({
                    icon: 'error',
                    title: 'An Error Occurred!',
                    text: 'Please try again.'
                });
            }
        });
    });
});
