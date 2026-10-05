// बटन क्लिक इवेंट को यहाँ से सीधे जोड़ रहे हैं ताकि कोई कनेक्शन एरर न रहे
document.getElementById("genBtn").addEventListener("click", async function() {
    const promptInput = document.getElementById("promptInput");
    const statusText = document.getElementById("status");
    const container = document.getElementById("videoContainer");
    const genBtn = document.getElementById("genBtn");

    const prompt = promptInput.value.trim();

    if (!prompt) {
        alert("कृपया कोई प्रॉम्ट लिखें!");
        return;
    }

    statusText.innerText = "AI वीडियो जनरेट कर रहा है... इसमें 1 से 2 मिनट लग सकते हैं...";
    genBtn.disabled = true;
    container.innerHTML = `<p id="status">${statusText.innerText}</p>`;
    
    try {
        // fal.ai का बिल्कुल सही डायरेक्ट REST API endpoint
        const response = await fetch("https://fal.run", {
            method: "POST",
            headers: {
                // यहाँ अपनी असली API Key डालें, 'Key ' शब्द को मत हटाना
                "Authorization": "Key fal_sk_bf5fd1a297e1414abb14b866140b5d92:0ce53b0e83a4989843d8a57504edf416", 
                "Content-Type": "application/json"
            },
            // fal.ai को हमेशा डेटा 'input' ऑब्जेक्ट के अंदर चाहिए होता है
            body: JSON.stringify({ 
                input: {
                    prompt: prompt,
                    aspect_ratio: "16:9"
                }
            })
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.detail || `Server returned status ${response.status}`);
        }

        const data = await response.json();
        console.log("Fal.ai Response:", data);
        
        // वीडियो का लिंक चेक करना
        if (data.video && data.video.url) {
            statusText.innerText = "सफलतापूर्वक वीडियो तैयार है!";
            container.innerHTML = `<video controls autoplay loop src="${data.video.url}"></video>`;
        } else if (data.request_id) {
            // चूंकि यह एक queue API है, यह वीडियो बनने में थोड़ा समय लेता है
            statusText.innerText = "वीडियो जनरेशन शुरू हो गया है! सर्वर पर प्रोसेसिंग चल रही है, कृपया 1 मिनट बाद पेज रीफ्रेश करके देखें।";
        } else {
            statusText.innerText = "वीडियो का लिंक नहीं मिल पाया। कृपया दोबारा कोशिश करें।";
        }
    } catch (error) {
        console.error("Error details:", error);
        statusText.innerText = "Error: " + error.message;
    } finally {
        genBtn.disabled = false;
    }
});
