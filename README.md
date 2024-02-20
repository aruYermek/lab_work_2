# Simple Email Sender with Node.js

This is a simple email sender application built using Node.js and the Nodemailer library. It allows you to send emails programmatically using a Node.js script.

## Prerequisites

- Basic understanding of Node.js.
- Node.js installed on your machine.
- A code editor (e.g., Visual Studio Code).

## Setup

1. Clone this repository to your local machine.
2. Open a terminal and navigate to the project folder.
3. Run `npm install` to install the necessary dependencies.

## Usage

1. Open the `app.js` file in your code editor.
2. Update the email configuration in the `transporter` object with your email service provider, username, and [application password](https://help.mail.ru/mail/security/protection/external) if required.
3. Customize the `sendEmail` function parameters (recipient, subject, text) as needed.
4. Save your changes.
5. Run the script using `node app.js` in the terminal.
6. Check your recipient's email inbox to verify that the email was sent successfully.

## Additional Features

- Error handling: The script includes basic error handling to log any errors that occur during the email sending process.
- Command-line input: You can modify the script to accept email details (recipient, subject, text) via the command line for more dynamic use.
- Explore Nodemailer's documentation for additional features and configurations you can implement in your email sending application.

## Notes

- Ensure that you have configured your email service provider (e.g., Mail.ru) to allow access from less secure apps or generate an application-specific password if required.
- Handle sensitive information such as passwords securely, for example, by using environment variables.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
