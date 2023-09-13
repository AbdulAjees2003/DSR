
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

         //validation for PO number

        var shipmentMode= document.getElementById("shipmentmode").value;
        var poNumber = document.getElementById("ponumber").value;
        var supplierName = document.getElementById("suppliername").value;
        var consignee = document.getElementById("consignee").value;
        var materialPickupDate = document.getElementById("materialpickupdate").value;
        var actualPickupDate = document.getElementById("actualpickupdate").value;
        var etdArbl = document.getElementById("etdarbl").value;
        var actualEtd = document.getElementById("actualetd").value;
        var etaArbl = document.getElementById("etaarbl").value;
        var actualEta = document.getElementById("actualeta").value;
        var countryOforigin = document.getElementById("countryoforigin").value;
        var portOfLoading = document.getElementById("portofloading").value;
        var containerSize = document.getElementById("containersize").value;
        var noOfcontainers = document.getElementById("noofcontainers").value;
        var containerNumbers = document.getElementById("containernumbers").value;
        var mblNumber = document.getElementById("mblnumber").value;
        var hblNumber = document.getElementById("hblnumber").value;
        var shippingLiner = document.getElementById("shippingliner").value;
        var firstFedername = document.getElementById("firstfedername").value;
        var firstFeederimono = document.getElementById("firstfeederimono").value;
        var transhipmentFirstaeta = document.getElementById("transhipment1staeta").value;
        var transhipmentFirstaetd = document.getElementById("transhipment1staetd").value;
        var transhipmentFirstportname = document.getElementById("transhipment1stportname").value;
        var motherVesselname = document.getElementById("mothervesselname").value;
        var secondFedername = document.getElementById("secondfedername").value;
        var transhipmentSecondeta = document.getElementById("transhipment2ndeta").value;
        var transhipmentSecondetd = document.getElementById("transhipment2ndetd").value;
        var transhipmentSecondportname = document.getElementById("transhipment2ndportname").value;
        var preAlertdtd = document.getElementById("prealertdtd").value;
        var remarks = document.getElementById("remarks").value;
    
        const commonPattern = /^[A-Za-z\s]+$/;
        const poNumberPattern = /^\d{10}$/;
        const delimitersPattern = /^[A-Za-z0-9\s.,]+$/;
        const datePattern = /^\d{4}-\d{2}-\d{2}$/;
        const alphaNumericpattern = /^[a-zA-Z0-9\s]+$/
        const numberPattern = /^[0-9]+$/;

 
         
        if (!commonPattern.test(shipmentMode)) {
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid ShipmentMode',
            });
            return false;
        }
        else if (!poNumberPattern.test(poNumber)) {
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid PO Number. It should be exactly 10 digits.',
            });
            return false;
        }
        else if(!delimitersPattern.test(supplierName)){
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid Supplier Name',
            });
            return false;
        }
        else if(!commonPattern.test(consignee)){
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid Consignee',
            });
            return false;
        }
        else if(!datePattern.test(materialPickupDate)){
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid Material Pickup Date',
            });
            return false;
        }
        else if(!datePattern.test(actualPickupDate)){
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid Actual Pickup Date',
            });
            return false;
        }
        else if(!datePattern.test(etdArbl)){
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid Etd Arbl',
            });
            return false;
        }
        else if(!datePattern.test(actualEtd)){
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid Actual Etd',
            });
            return false;
        }
        else if(!datePattern.test(etaArbl)){
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid Eta Arbl',
            });
            return false;
        }
        else if(!datePattern.test(actualEta)){
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid Actual Eta',
            });
            return false;
        }
        else if(!commonPattern.test(countryOforigin)){
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid Country Of Origin',
            });
            return false;
        }
        else if(!commonPattern.test(portOfLoading)){
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid Port Of Loading',
            });
            return false;
        }
        else if(!alphaNumericpattern.test(containerSize)){
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid Container Size',
            });
            return false;
        }
        else if(!numberPattern.test(noOfcontainers)){
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid Count Of Containers',
            });
            return false;
        }
        else if(!alphaNumericpattern.test(containerNumbers)){
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid Container Number',
            });
            return false;
        }
        else if(!alphaNumericpattern.test(mblNumber)){
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid Hml Number',
            });
            return false;
        }
        else if(!alphaNumericpattern.test(hblNumber)){
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid Hbl Number',
            });
            return false;
        }
        else if(!commonPattern.test(shippingLiner)){
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid Shipping Liner',
            });
            return false;
        }
        else if(!delimitersPattern.test(firstFedername)){
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid 1st Feder Vessel Name',
            });
            return false;
        }
        else if(!alphaNumericpattern.test(firstFeederimono)){
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid 1st Feeder IMO No',
            });
            return false;
        }
        else if(!datePattern.test(transhipmentFirstaeta)){
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid 1st Transhipment ETA',
            });
            return false;
        }
        else if(!datePattern.test(transhipmentFirstaetd)){
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid 1st Transhipment ETD',
            });
            return false;
        }
        else if(!commonPattern.test(transhipmentFirstportname)){
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid 1st Transhipment Port Name',
            });
            return false;
        }
        else if(!commonPattern.test(motherVesselname)){
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid 1st Transhipment Port Name',
            });
            return false;
        }
        else if(!commonPattern.test(secondFedername)){
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid 2nd Feder Vessel Name',
            });
            return false;
        }
        else if(!datePattern.test(transhipmentSecondeta)){
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid 2nd Transhipment ETA',
            });
            return false;
        }
        else if(!datePattern.test(transhipmentSecondetd)){
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid 2nd Transhipment ETD',
            });
            return false;
        }
        else if(!commonPattern.test(transhipmentSecondportname)){
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid 2nd Transhipment Port Name',
            });
            return false;
        }
        else if(!datePattern.test(preAlertdtd)){
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Invalid Pre Alert DTD',
            });
            return false;
        }
        else if(!delimitersPattern.test(remarks)){
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
            key: 'database/drs_sea_shipment.csv',  // Replace with your file/database name
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
