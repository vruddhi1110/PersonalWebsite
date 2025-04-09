// document.addEventListener("DOMContentLoaded", () => {
//     console.log(`Timestamp: ${new Date().toISOString()}, Event: view, Object: Entire Page`);
// });

// document.addEventListener("click", (event) => {
//     let eventObject = event.target.tagName.toLowerCase();
    
//     // Determine type of object for better classification
//     if (event.target.type) {
//         eventObject = event.target.type; // Identifies buttons, inputs, dropdowns, etc.
//     } else if (event.target.tagName.toLowerCase() === "img") {
//         eventObject = "image";
//     } else if (event.target.tagName.toLowerCase() === "a") {
//         eventObject = "link";
//     } else if (event.target.tagName.toLowerCase() === "p" || event.target.tagName.toLowerCase() === "span" || event.target.tagName.toLowerCase() === "div") {
//         eventObject = "text";
//     }

//     console.log(`Timestamp: ${new Date().toISOString()}, Event: click, Object: ${eventObject}`);
// });



function getISTTimestamp() {
    let now = new Date();
    let istOffset = 5.5 * 60 * 60 * 1000; // IST is UTC+5:30
    let istTime = new Date(now.getTime() + istOffset);
    return istTime.toISOString().replace("Z", "+05:30"); // Adjust format to indicate IST
}

document.addEventListener("DOMContentLoaded", () => {
    console.log(`Timestamp: ${getISTTimestamp()}, Event: view, Object: Entire Page`);
});

document.addEventListener("click", (event) => {
    let eventObject = event.target.tagName.toLowerCase();

    // Determine type of object for better classification
    if (event.target.type) {
        eventObject = event.target.type; // Identifies buttons, inputs, dropdowns, etc.
    } else if (event.target.tagName.toLowerCase() === "img") {
        eventObject = "image";
    } else if (event.target.tagName.toLowerCase() === "a") {
        eventObject = "link";
    } else if (["p", "span", "div"].includes(event.target.tagName.toLowerCase())) {
        eventObject = "text";
    }

    console.log(`Timestamp: ${getISTTimestamp()}, Event: click, Object: ${eventObject}`);
});
