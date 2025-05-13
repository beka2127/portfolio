<?php
// Add these headers for better email formatting
$headers = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = strip_tags(trim($_POST["message"]));
    
    // Set recipient email (change to your email)
    $to = "bshegye@gmail.com";
    
    // Set email subject
    $subject = "New message from $name via your portfolio";
    
    // Build email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";
    
    // Build email headers
    $headers = "From: $name <$email>";
    
    // Send email
    if (mail($to, $subject, $email_content, $headers)) {
        // Success response
        http_response_code(200);
        echo "Thank you! Your message has been sent.";
    } else {
        // Error response
        http_response_code(500);
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
} else {
    // Not a POST request
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}
?>