"use strict";
var _a;
(_a = document.getElementById("generate")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const skillsInput = document.getElementById("skills");
    const experienceInput = document.getElementById("experience");
    const educationInput = document.getElementById("education");
    const summaryInput = document.getElementById("summary");
    const hobbiesInput = document.getElementById('hobbies');
    const name = nameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;
    const skills = skillsInput.value;
    const experience = experienceInput.value;
    const education = educationInput.value;
    const summary = summaryInput.value;
    const hobbies = hobbiesInput.value;
    if (name && email && phone && skills && experience && education && summary && hobbies) {
        document.getElementById("outputName").textContent = `Name: ${name}`;
        document.getElementById("outputEmail").textContent = `Email: ${email}`;
        document.getElementById("outputPhone").textContent = `Phone: ${phone}`;
        document.getElementById("outputSkills").textContent = `Skills: ${skills}`;
        document.getElementById("outputExperience").textContent = `Experience: ${experience}`;
        document.getElementById("outputEducation").textContent = `Education: ${education}`;
        document.getElementById("outputSummary").textContent = `Summary: ${summary}`;
        document.getElementById("outputHobbies").textContent = `Hobbies: ${hobbies}`;
        document.getElementById("resumeContainer").style.display = "block";
        makeFieldsEditable();
    }
    else {
        alert("Please fill out all fields!");
    }
});
function makeFieldsEditable() {
    const editButtons = document.querySelectorAll(".edit-btn");
    editButtons.forEach(button => {
        const editButton = button;
        editButton.addEventListener("click", function () {
            var _a;
            const fieldId = editButton.getAttribute("data-edit");
            const field = document.getElementById(fieldId);
            let currentText = ((_a = field.textContent) === null || _a === void 0 ? void 0 : _a.split(": ")[1]) || "";
            let input = document.createElement("input");
            input.type = "text";
            input.value = currentText;
            input.style.width = "80%";
            field.innerHTML = "";
            field.appendChild(input);
            editButton.textContent = "Save";
            input.focus();
            input.addEventListener("blur", function () {
                saveField(field, input, editButton);
            });
            input.addEventListener("keypress", function (e) {
                if (e.key === "Enter") {
                    saveField(field, input, editButton);
                }
            });
        });
    });
}
function saveField(field, input, button) {
    const newValue = input.value;
    const label = field.id.split("output")[1];
    field.textContent = `${label}: ${newValue}`;
    button.textContent = "Edit";
}
