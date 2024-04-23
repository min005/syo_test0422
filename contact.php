<?php
mb_language("Japanese");
mb_internal_encoding("UTF-8");

if ($_POST) {
    $to = 'moshimosshi.she202208@gmail.com';
    // $to = 'miyuki.f1986@gmail.com';

    $subject = 'メッセージが届きました';

    $message = "メッセージが届きました。\n";
    $message .= "入力された内容は以下の通りです。\n";
    $message .= "---\n";
    $message .= "\n";
    $message .= "お名前：\n";
    $message .= $_POST["name"]; 
    $message .= "\n";
    $message .= "メッセージ本文:\n";
    $message .= $_POST["message"];

    if (mb_send_mail($to, $subject, $message)) {
        header('Location: thank_you.html');
    } else {
        echo "メールの送信に失敗しました";
        echo "Failed to send email";
    }
} else {
    echo "エラーが発生しました。もう一度お試しください。";
    echo "An error has occurred. please try again.";
}