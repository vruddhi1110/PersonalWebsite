function processText() {
    let text = document.getElementById("textInput").value;
    let outputDiv = document.getElementById("output");

    // 1️⃣ Count basic text statistics
    let numLetters = (text.match(/[a-zA-Z]/g) || []).length;
    let numWords = text.split(/\s+/).filter(word => word.length > 0).length;
    let numSpaces = (text.match(/\s/g) || []).length;
    let numNewLines = (text.match(/\n/g) || []).length;
    let numSpecialSymbols = (text.match(/[^a-zA-Z0-9\s]/g) || []).length;

    // 2️⃣ Define common pronouns, prepositions, and indefinite articles
    let pronouns = ["he", "she", "they", "we", "I", "you", "it", "him", "her", "us", "them", "my", "your", "his", "hers"];
    let prepositions = ["in", "on", "at", "with", "by", "about", "against", "between", "under", "over"];
    let articles = ["a", "an", "the"];

    // 3️⃣ Count occurrences using tokenized words
    let words = text.toLowerCase().split(/\s+/);
    let pronounCounts = countOccurrences(words, pronouns);
    let prepositionCounts = countOccurrences(words, prepositions);
    let articleCounts = countOccurrences(words, articles);

    // 4️⃣ Display the results
    outputDiv.innerHTML = `
        <p><strong>Text Statistics:</strong></p>
        <p>Letters: ${numLetters}</p>
        <p>Words: ${numWords}</p>
        <p>Spaces: ${numSpaces}</p>
        <p>New Lines: ${numNewLines}</p>
        <p>Special Symbols: ${numSpecialSymbols}</p>

        <p><strong>Pronoun Counts:</strong></p> ${formatCounts(pronounCounts)}
        <p><strong>Preposition Counts:</strong></p> ${formatCounts(prepositionCounts)}
        <p><strong>Indefinite Article Counts:</strong></p> ${formatCounts(articleCounts)}
    `;
}

// Helper function to count occurrences of specific words
function countOccurrences(words, targetWords) {
    let counts = {};
    targetWords.forEach(word => counts[word] = words.filter(w => w === word).length);
    return counts;
}

// Helper function to format output neatly
function formatCounts(counts) {
    return Object.entries(counts)
        .map(([word, count]) => `<p>${word}: ${count}</p>`)
        .join("");
}
