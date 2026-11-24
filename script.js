
/* DEMO CERTIFICATE DATABASE */

const certificates = [
    {
       // rf:"SRS/I/07/2026-27",
        enrollment: "ST221625",
        name: "Prashant Kumar Mishra",
        course: "Python With Django",
        duration: "45 Days",
        status: "Verified",
        jd: "25/06/2026",
        rd:"10/07/2026"
    },
    {
        enrollment: "DTP102",
        name: "Amit Sharma",
        course: "Python Programming",
        duration: "3 Months",
        status: "Verified"
    },
    {
        enrollment: "DTP103",
        name: "Priya Singh",
        course: "Java Programming",
        duration: "6 Months",
        status: "Verified"
    },
    {
        enrollment: "DTP104",
        name: "Anjali Verma",
        course: "Graphic Design",
        duration: "4 Months",
        status: "Verified"
    }
];


/* FORM SUBMISSION */

document.getElementById("verifyForm").addEventListener("submit", function(e) {

    e.preventDefault();

    const enrollmentID = document.getElementById("enrollmentId")
        .value.trim().toUpperCase();

    const resultDiv = document.getElementById("result");

    // Find certificate
    const certificate = certificates.find(function(item) {
        return item.enrollment === enrollmentID;
    });

    // Certificate found
    if (certificate) {

        resultDiv.innerHTML = `
            <div class="result-box success">
                <h3>✓ Certificate Verified Successfully</h3>
                
                <p><strong>Enrollment ID:</strong> ${certificate.enrollment}</p>
                <p><strong>Name:</strong> ${certificate.name}</p>
                <p><strong>Course:</strong> ${certificate.course}</p>
                <p><strong>Duration:</strong> ${certificate.duration}</p>
                <p><strong>Status:</strong> ${certificate.status}</p>
                <p><strong>Joining Date:</strong>${certificate.jd}</p>
                <p><strong>Relieving Date:</strong>${certificate.rd}</p>
            </div>
        `;

    }

    // Certificate not found
    else {

        resultDiv.innerHTML = `
            <div class="result-box error">
                <h3>✕ Certificate Not Found</h3>
                <p>Please check your Enrollment ID and try again.</p>
            </div>
        `;

    }

});
