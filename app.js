async function generateVideo() {
    const prompt = document.getElementById("promptInput").value;
    const statusText = document.getElementById("status");
    const container = document.getElementById("videoContainer");

    if (!prompt) {
        alert("कृपया कोई प्रॉम्ट लिखें!");
        return;
    }

    statusText.innerText = "AI वीडियो जनरेट कर रहा है... कृपया 1-2 मिनट प्रतीक्षा करें...";
    
    try {
        // यहाँ हम Fal.ai या किसी भी API Gateway का उपयोग कर रहे हैं
        const response = await fetch("https://fal.run", {
            method: "POST",
            headers: {
                "Authorization": "fal_sk_bf5fd1a297e1414abb14b866140b5d92:0ce53b0e83a4989843d8a57504edf416", // यहाँ अपनी असली API Key डालें
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ prompt: prompt, video_size: "16:9" })
        });

        const data = await response.json();
        
        // वीडियो रिजल्ट URL को चेक करना
        if(data.video && data.video.url) {
            statusText.innerText = "वीडियो तैयार है!";
            container.innerHTML = `<video controls src="${data.video.url}"></video>`;
        } else {
            statusText.innerText = "वीडियो बनाने में समस्या हुई, कृपया दोबारा प्रयास करें।";
        }
    } catch (error) {
        console.error(error);
        statusText.innerText = "Error: कनेक्शन फेल हो गया!";
    }
}
