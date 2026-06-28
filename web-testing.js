function resetForm() {
    document.getElementById("projectName").value = "";
    document.getElementById("description").value = "";
    document.getElementById("teamSize").value = "";
    document.getElementById("deadline").value = "";
    document.getElementById("output").innerHTML = "";
}

function generatePlan() {
    document.getElementById("output").innerHTML = "<p>Generating plan...</p>";

    let projectName = document.getElementById("projectName").value;
    if (projectName === "") {
        alert("Please enter project name");
        return;
    }

    let teamSize = document.getElementById("teamSize").value;
    let deadline = document.getElementById("deadline").value;
    let description = document.getElementById("description").value.toLowerCase();
    let plan = "";

    if (description.includes("website")) {
        plan = `
        <li>Requirement Analysis - 2 Days</li>
        <li>UI Design - 3 Days</li>
        <li>Frontend Development - 5 Days</li>
        <li>Backend Development - 5 Days</li>
        <li>Testing - 2 Days</li>
        `;
    } else if (description.includes("app")) {
        plan = `
        <li>Requirement Analysis - 2 Days</li>
        <li>UI Design - 2 Days</li>
        <li>App Development - 8 Days</li>
        <li>Testing - 3 Days</li>
        <li>Deployment - 1 Day</li>
        `;
    } else {
        plan = `
        <li>Requirement Analysis - 2 Days</li>
        <li>Design - 2 Days</li>
        <li>Development - 5 Days</li>
        <li>Testing - 2 Days</li>
        <li>Deployment - 1 Day</li>
        `;
    }

    let progress = Math.floor(Math.random() * 30);
    let priority = "";

    if (deadline <= 7) {
        priority = "High";
    } else if (deadline <= 15) {
        priority = "Medium";
    } else {
        priority = "Low";
    }

    document.getElementById("output").innerHTML = `
    <h2>${projectName}</h2>
    <hr>
    <p><strong>Team Size:</strong> ${teamSize}</p>
    <p><strong>Deadline:</strong> ${deadline} Days</p>
    <p>
        <strong>Priority:</strong>
        <span style="color: ${priority === "High" ? "red" : priority === "Medium" ? "orange" : "green"};">
            ${priority}
        </span>
    </p>
    <hr>
    <h3>Project Status</h3>
    <div class="progress-bar">
        <div class="progress-fill" style="width:${progress}%"></div>
    </div>
    <p>${progress}% Complete</p>
    <h3>Risk Analysis</h3>
    <ul>
        <li>Short deadline may increase pressure.</li>
        <li>Limited testing time can cause bugs.</li>
        <li>Team coordination is important.</li>
    </ul>
    <h3>Milestones</h3>
    <ul>
        <li>Planning Completed</li>
        <li>Design Completed</li>
        <li>Development Completed</li>
        <li>Testing Completed</li>
    </ul>
    <h3>Project Plan</h3>
    <ul>
        ${plan}
    </ul>
    `;
}

function downloadPDF() {
    let report = document.getElementById("output").innerHTML;
    let projectName = document.getElementById("projectName").value || "Project Report";
    let printWindow = window.open("", "_blank");

    printWindow.document.write(`
        <html>
        <head>
            <title>${projectName}</title>
            <style>
                * {
                    color-adjust: exact !important;
                    -webkit-print-color-adjust: exact !important;
                    print-color-adjust: exact !important;
                }
                body {
                    font-family: Arial, sans-serif;
                    padding: 20px;
                }
                h1 {
                    text-align: center;
                    color: #2563eb !important;
                    margin-bottom: 30px;
                }
                h2, h3 {
                    color: #2563eb !important;
                }
                p {
                    line-height: 1.6;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-bottom: 20px;
                }
                th, thead th {
                    background: #2563eb !important;
                    color: #ffffff !important;
                    font-weight: bold !important;
                    font-size: 16px !important;
                    padding: 10px;
                    border: 1px solid #2563eb !important;
                }
                th *, thead th * {
                    color: #ffffff !important;
                }
                td {
                    padding: 10px;
                    border: 1px solid #ccc;
                    color: #1e293b !important;
                }
                td * {
                    color: #1e293b !important;
                }
            </style>
        </head>
        <body>
            <h1>${projectName}</h1>
            ${report}
        </body>
        </html>
    `);

    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
}

async function generateAIPlan() {
    let projectName = document.getElementById("projectName").value;
    let teamSize = document.getElementById("teamSize").value;
    let deadline = document.getElementById("deadline").value;

    if (teamSize === "" || deadline === "") {
        alert("Please enter Team Size and Deadline");
        return;
    }

    let description = document.getElementById("description").value;
    if (description === "") {
        alert("Please enter a project description");
        return;
    }

    document.getElementById("output").innerHTML = `
    <h3>AI is generating your project plan...</h3>
    <p>Please wait...</p>
    <div style="width:100%; height:10px; background:#ddd; border-radius:5px; margin-top:10px;">
        <div style="width:100%; height:10px; background:#2563eb; border-radius:5px; animation:pulse 1s infinite;"></div>
    </div>
    `;

    try {
        let response = await fetch(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=YOUR_GEMINI_API_KEY_HERE",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: `
Create a professional Software Engineering project plan for:

Project Name: ${projectName}

Project Description:
${description}

Project Constraints:
- Team Size: ${teamSize}
- Deadline: ${deadline} days

STRICT REQUIREMENTS:

1. Return ONLY valid HTML.
2. Do NOT use Markdown.
3. Do NOT use # symbols.
4. Do NOT use ** symbols.
5. Do NOT use code blocks.
6. Use only valid HTML tags.
7. Total project duration must not exceed ${deadline} days.
8. All dates and durations must be in DAYS.
9. Team member count must exactly match ${teamSize}.
10. Make the report concise and presentation-ready.
11. No parallel tasks or overlapping phases.
12. All phases must be sequential.
13. The sum of all phase durations must be equal to or less than ${deadline} days.
14. Display Total Project Duration after the timeline table.

Create the following sections:

<h2>Project Overview</h2>

Write a detailed paragraph of at least 100 words describing the project.

<h2>Project Objectives</h2>

Use bullet points.

Team Roles & Responsibilities

IMPORTANT:
Do not generate real names.
Use Team Member 1, Team Member 2, Team Member 3, etc.

Create a table with columns:
- Team Member
- Role
- Responsibilities

<h2>Project Timeline</h2>

Create a table with columns:
- Phase
- Duration (Days)
- Start Day
- End Day
- Deliverables

Rules:
- No overlapping phases.
- All phases must be sequential.
- Each phase must start after the previous phase ends.
- The sum of all phase durations must be equal to or less than ${deadline} days.

After the timeline table, add:

<p><strong>Total Project Duration:</strong> X Days</p>

The Total Project Duration must exactly match the deadline (${deadline}) or be less.

<h2>Task Breakdown</h2>

Create a table with columns:
- Task ID
- Task Name
- Assigned Team Member
- Duration (Days)

<h2>Risk Analysis</h2>

Create a table with columns:
- Risk
- Impact
- Mitigation

<h2>Milestones</h2>

Create a table with columns:
- Milestone
- Target Day
- Status

<h2>Technology Stack</h2>

Use bullet points.

Return ONLY raw HTML.
`
                        }]
                    }]
                })
            }
        );

        if (response.status === 503) {
            document.getElementById("output").innerHTML = `
            <h3>Gemini is busy right now</h3>
            <p>Please wait 30 seconds and try again.</p>
            `;
            return;
        }

        if (!response.ok) {
            let data = await response.json();
            document.getElementById("output").innerHTML = `
            <h3>AI Service Unavailable</h3>
            <p>Google Gemini is currently busy.</p>
            <p>Please try again in a few moments.</p>
            `;
            return;
        }

        let data = await response.json();

        if (!data.candidates) {
            document.getElementById("output").innerHTML = `
            <h3>AI Service Unavailable</h3>
            <p>Google Gemini is currently busy.</p>
            <p>Please try again in a few moments.</p>
            `;
            return;
        }

        let result = data.candidates[0].content.parts[0].text;
        result = result.replace(/```html/g, "");
        result = result.replace(/```/g, "");

        /* remove ALL inline styles generated by Gemini */
        result = result.replace(/style="[^"]*"/gi, "");

        document.getElementById("output").innerHTML = result;

    } catch (error) {
        document.getElementById("output").innerHTML = `<p style="color:red;">${error.message}</p>`;
    }
}

// Bind event listeners on DOM load
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btn-generate-plan").addEventListener("click", generatePlan);
    document.getElementById("btn-generate-ai-plan").addEventListener("click", generateAIPlan);
    document.getElementById("btn-reset-form").addEventListener("click", resetForm);
    document.getElementById("btn-download-pdf").addEventListener("click", downloadPDF);
});
