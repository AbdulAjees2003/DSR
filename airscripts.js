$(document).ready(function () {
    // Function to update the progress bar
    function updateProgress() {
        const totalFields = $('form#myForm input').length;
        const filledFields = $('form#myForm input').filter(function () {
            return $.trim(this.value).length > 0;
        }).length;
        const progress = (filledFields / totalFields) * 100;
        $('.progress-bar').css('width', progress + '%').attr('aria-valuenow', progress).text(Math.round(progress) + '%');
    }

    // Function to show validation error
    function showValidationError(fieldName, message) {
        Swal.fire({
            icon: 'warning',
            title: 'Validation Error',
            text: `${message}`,
        });
    }

    // Function to validate input fields
    function validateInputField(value, pattern, fieldName, errorMessage) {
        if (!pattern.test(value)) {
            showValidationError(fieldName, errorMessage);
            return false;
        }
        return true;
    }

    // Function to handle form submission
    function submitForm() {
        // Define validation rules and error messages
        const validationRules = {
            'ponumber': {
                pattern: /^\d{10}$/,
                errorMessage: 'PO Number must be a 10-digit number.'
            },
            'suppliername': {
                pattern: /^[A-Za-z-&\s]+$/,
                errorMessage: 'Supplier Name can only contain letters, hyphens, and spaces.'
            },
            'consignee': {
                pattern: /^[A-Za-z\s]+$/,
                errorMessage: 'Consignee can only contain letters and spaces.'
            },
            'bookingreceiveddate': {
                pattern: /^\d{4}-\d{2}-\d{2}$/,
                errorMessage: 'Invalid Booking Received Date format. Use YYYY-MM-DD.'
            },
            'bkgdate': {
                pattern: /^\d{4}-\d{2}-\d{2}$/,
                errorMessage: 'Invalid Bkg Date format. Use YYYY-MM-DD.'
            },
            'cargoreadiness': {
                pattern: /^\d{4}-\d{2}-\d{2}$/,
                errorMessage: 'Invalid Cargo Readiness format. Use YYYY-MM-DD.'
            },
            'pickupdate': {
                pattern: /^\d{4}-\d{2}-\d{2}$/,
                errorMessage: 'Invalid Pickup Date format. Use YYYY-MM-DD.'
            },
            'warehousercvd': {
                pattern: /^\d{4}-\d{2}-\d{2}$/,
                errorMessage: 'Invalid Warehouse Rcvd format. Use YYYY-MM-DD.'
            },
            'countryoforigin': {
                pattern: /^[A-Za-z\s]+$/,
                errorMessage: 'Country Of Origin can only contain letters and spaces.'
            },
            'terms': {
                pattern: /^[A-Za-z-&\s]+$/,
                errorMessage: 'Terms can only contain letters, hyphens, and spaces.'
            },
            'hawbno': {
                pattern: /^[A-Za-z0-9\s.,-/]+$/,
                errorMessage: 'Hawb No can only contain letters, numbers, and some special characters.'
            },
            'mawb': {
                pattern: /^[A-Za-z0-9\s.,-/]+$/,
                errorMessage: 'Mawb can only contain letters, numbers, and some special characters.'
            },
            'pkgs': {
                pattern: /^[0-9.]+$/,
                errorMessage: 'PKGS must be a number.'
            },
            'grswt': {
                pattern: /^[0-9.]+$/,
                errorMessage: 'GRS Wt must be a number.'
            },
            'chgwt': {
                pattern: /^[a-zA-Z0-9\s]+$/,
                errorMessage: 'CHG Wt can only contain letters, numbers, and spaces.'
            },
            'fltdetails': {
                pattern: /^[A-Za-z0-9\s.,-/]+$/,
                errorMessage: 'Flt Details can only contain letters, numbers, and some special characters.'
            },
            'etd': {
                pattern: /^\d{4}-\d{2}-\d{2}$/,
                errorMessage: 'Invalid ETD format. Use YYYY-MM-DD.'
            },
            'eta': {
                pattern: /^\d{4}-\d{2}-\d{2}$/,
                errorMessage: 'Invalid ETA format. Use YYYY-MM-DD.'
            },
            'revisedetd': {
                pattern: /^\d{4}-\d{2}-\d{2}$/,
                errorMessage: 'Invalid Revised Etd format. Use YYYY-MM-DD.'
            },
            'revisedeta': {
                pattern: /^\d{4}-\d{2}-\d{2}$/,
                errorMessage: 'Invalid Revised Eta format. Use YYYY-MM-DD.'
            },
            'ata': {
                pattern: /^[A-Za-z\s]+$/,
                errorMessage: 'ATA can only contain letters and spaces.'
            },
            'prealertdtd': {
                pattern: /^\d{4}-\d{2}-\d{2}$/,
                errorMessage: 'Invalid Prealert Dtd format. Use YYYY-MM-DD.'
            },
            'remarks': {
                pattern: /^[A-Za-z0-9\s.,-/]+$/,
                errorMessage: 'Remarks can only contain letters, numbers, and some special characters.'
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
            key: 'database/drs_air_shipment.csv',
            bucket: 'dsrapp'
        };

        $('form#myForm input').each(function () {
            const fieldId = $(this).attr('id');
            const fieldValue = $(this).val();
            payload.formData[fieldId] = fieldValue.trim() !== '' ? fieldValue : null;
        });

        const apiURL = 'https://w0gfsk9d0g.execute-api.ap-south-1.amazonaws.com/prod/surveydata_to_s3';

        // Make the AJAX call
        $.ajax({
            url: apiURL,
            type: 'POST',
            data: JSON.stringify(payload),
            contentType: 'application/json; charset=utf-8',
            success: function (response) {
                // Hide spinner
                $('button[type="submit"]').html('Submit').attr('disabled', false);

                // Show Swal alert for success
                Swal.fire({
                    icon: 'success',
                    title: 'Form Submitted Successfully!',
                    text: 'Your data has been saved.'
                });
            },
            error: function (error) {
                // Hide spinner
                $('button[type="submit"]').html('Submit').attr('disabled', false);

                // Show Swal alert for error
                Swal.fire({
                    icon: 'error',
                    title: 'An Error Occurred!',
                    text: 'Please try again.'
                });
            }
        });
    }

    // Initialize the progress bar
    updateProgress();

    // Listen for changes on input fields to update the progress bar
    $('form#myForm input').on('input', function () {
        updateProgress();
    });

    // Form submission
    $('#myForm').on('submit', function (event) {
        event.preventDefault();
        submitForm();
    });
});
