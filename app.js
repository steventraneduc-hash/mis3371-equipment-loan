const DIRECTOR_APPROVAL_THRESHOLD = 5000;

function requiresDirectorApproval(amount) {
  return amount > DIRECTOR_APPROVAL_THRESHOLD;
}

const amountInput = document.querySelector("#amount");
const approvalMessage = document.querySelector("#approvalMessage");

function updateApprovalMessage() {
    const amount = Number(amountInput.value);

    if (amountInput.value === "") {
    approvalMessage.textContent = "";
    return;
    }

    if (requiresDirectorApproval(amount)) {
    approvalMessage.textContent = 
        "Director approval will be required.";
    } else {
    approvalMessage.textContent = 
        "Standard approval path.";
    }
}


amountInput.addEventListener("input", updateApprovalMessage);