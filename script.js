document.getElementById('send-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    const messages = document.getElementById('messages');
    
    // إضافة رسالة المستخدم إلى صندوق الرسائل
    const userMessage = document.createElement('div');
    userMessage.textContent = `أنت: ${userInput}`;
    messages.appendChild(userMessage);
    
    // إرسال الرسالة إلى الذكاء الاصطناعي (محاكي بسيط)
    const aiMessage = document.createElement('div');
    aiMessage.textContent = `الذكاء الاصطناعي: لا أفهم رسالتك بعد، جاري تحسين النظام...`;
    messages.appendChild(aiMessage);
    
    // مسح حقل الإدخال
    document.getElementById('user-input').value = '';
});
