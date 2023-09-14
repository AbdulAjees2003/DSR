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

        // Define validation rules and error messages
        const validationRules = {
            'shipmentmode': {
                pattern: /^[A-Za-z\s]+$/,
                errorMessage: 'Invalid Shipment Mode'
            },
            'ponumber': {
                pattern: /^\d{10}$/,
                errorMessage: 'Invalid PO Number. It should be exactly 10 digits.'
            },
            'suppliername': {
                pattern: /^[A-Za-z-&\s]+$/,
                errorMessage: 'Invalid Supplier Name'
            },
            'consignee': {
                pattern: /^[A-Za-z\s]+$/,
                errorMessage: 'Invalid Consignee'
            },
            'materialpickupdate': {
                pattern: /^\d{4}-\d{2}-\d{2}$/,
                errorMessage: 'Invalid Material Pickup Date format. Use YYYY-MM-DD.'
            },
            'actualpickupdate': {
                pattern: /^\d{4}-\d{2}-\d{2}$/,
                errorMessage: 'Invalid Actual Pickup Date format. Use YYYY-MM-DD.'
            },
            'etdarbl': {
                pattern: /^\d{4}-\d{2}-\d{2}$/,
                errorMessage: 'Invalid ETD Arbl format. Use YYYY-MM-DD.'
            },
            'actualetd': {
                pattern: /^\d{4}-\d{2}-\d{2}$/,
                errorMessage: 'Invalid Actual ETD format. Use YYYY-MM-DD.'
            },
            'etaarbl': {
                pattern: /^\d{4}-\d{2}-\d{2}$/,
                errorMessage: 'Invalid ETA Arbl format. Use YYYY-MM-DD.'
            },
            'actualeta': {
                pattern: /^\d{4}-\d{2}-\d{2}$/,
                errorMessage: 'Invalid Actual ETA format. Use YYYY-MM-DD.'
            },
            'countryoforigin': {
                pattern: /^[A-Za-z\s]+$/,
                errorMessage: 'Invalid Country Of Origin'
            },
            'portofloading': {
                pattern: /^[A-Za-z\s]+$/,
                errorMessage: 'Invalid Port Of Loading'
            },
            'containersize': {
                pattern: /^[A-Za-z0-9\s.,-]+$/,
                errorMessage: 'Invalid Container Size'
            },
            'noofcontainers': {
                pattern: /^[0-9]+$/,
                errorMessage: 'Invalid Count Of Containers. Should be a number.'
            },
            'containernumbers': {
                pattern: /^[A-Za-z0-9\s.,-]+$/,
                errorMessage: 'Invalid Container Number'
            },
            'mblnumber': {
                pattern: /^[A-Za-z0-9\s.,-]+$/,
                errorMessage: 'Invalid MBL Number'
            },
            'hblnumber': {
                pattern: /^[A-Za-z0-9\s.,-]+$/,
                errorMessage: 'Invalid HBL Number'
            },
            'shippingliner': {
                pattern: /^[A-Za-z\s]+$/,
                errorMessage: 'Invalid Shipping Liner'
            },
            'firstfedername': {
                pattern: /^[A-Za-z0-9\s.,-]+$/,
                errorMessage: 'Invalid 1st Feder Vessel Name'
            },
            'firstfeederimono': {
                pattern: /^[A-Za-z0-9\s.,-]+$/,
                errorMessage: 'Invalid 1st Feeder IMO No'
            },
            'transhipment1staeta': {
                pattern: /^\d{4}-\d{2}-\d{2}$/,
                errorMessage: 'Invalid 1st Transhipment ETA format. Use YYYY-MM-DD.'
            },
            'transhipment1staetd': {
                pattern: /^\d{4}-\d{2}-\d{2}$/,
                errorMessage: 'Invalid 1st Transhipment ETD format. Use YYYY-MM-DD.'
            },
            'transhipment1stportname': {
                pattern: /^[A-Za-z\s]+$/,
                errorMessage: 'Invalid 1st Transhipment Port Name'
            },
            'mothervesselname': {
                pattern: /^[A-Za-z\s]+$/,
                errorMessage: 'Invalid Mother Vessel Name'
            },
            'secondfedername': {
                pattern: /^[A-Za-z\s]+$/,
                errorMessage: 'Invalid 2nd Feder Vessel Name'
            },
            'transhipment2ndeta': {
                pattern: /^\d{4}-\d{2}-\d{2}$/,
                errorMessage: 'Invalid 2nd Transhipment ETA format. Use YYYY-MM-DD.'
            },
            'transhipment2ndetd': {
                pattern: /^\d{4}-\d{2}-\d{2}$/,
                errorMessage: 'Invalid 2nd Transhipment ETD format. Use YYYY-MM-DD.'
            },
            'transhipment2ndportname': {
                pattern: /^[A-Za-z\s]+$/,
                errorMessage: 'Invalid 2nd Transhipment Port Name'
            },
            'prealertdtd': {
                pattern: /^\d{4}-\d{2}-\d{2}$/,
                errorMessage: 'Invalid Pre Alert DTD format. Use YYYY-MM-DD.'
            },
            'remarks': {
                pattern: /^[A-Za-z0-9\s.,-]+$/,
                errorMessage: 'Invalid Remarks'
            },
        };

        let isValid = true;

        for (const fieldName in validationRules) {
            const value = $(`#${fieldName}`).val();
            const rule = validationRules[fieldName];
            if (!validateInputField(value, rule.pattern, fieldName, rule.errorMessage)) {
                isValid = false;
            }
        }

        if (!isValid) {
            return;
        }

        // Form data validation passed, proceed with submission
        const spinner = '<div class="spinner-border text-primary" role="status"><span class="sr-only">Loading...</span></div>';
        $('button[type="submit"]').html(spinner).attr('disabled', true);

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

// Function to validate input fields
function validateInputField(value, pattern, fieldName, errorMessage) {
    if (!pattern.test(value)) {
        Swal.fire({
            icon: 'warning',
            title: 'Validation Error',
            text: errorMessage,
        });
        return false;
    }
    return true;
}
