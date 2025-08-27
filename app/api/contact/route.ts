import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";

// ==== Настройка Google Sheets API ====
const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
const auth = new google.auth.JWT({
  email: process.env.GOOGLE_CLIENT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  scopes: SCOPES,
});

const sheets = google.sheets({ version: "v4", auth });
const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID!;

export async function POST(req: Request) {
  const { name, message, phoneNumber } = await req.json();

  // ==== 1. Отправка письма ====
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const htmlTemplate = `
    <div style="font-family: Arial, sans-serif; padding:20px;">
      <h2 style="color:#4f46e5;">Новое сообщение</h2>
      <p><b>Имя:</b> ${name}</p>
      <p><b>Номер телефона:</b> +7 ${phoneNumber}</p>
      <p><b>Сообщение:</b></p>
      <div style="border:1px solid #ccc; padding:10px;">${message}</div>
    </div>
  `;

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: "carfan363@gmail.com",
    // to: "info@a3print.kz",
    subject: "Новое сообщение с сайта",
    html: htmlTemplate,
  });

  // ==== 2. Запись в Google Sheets ====
  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: "A1", // начиная с первой ячейки
    valueInputOption: "RAW",
    requestBody: {
      values: [
        [
          new Date().toLocaleDateString() +
            " " +
            new Date().toLocaleTimeString(),
          name,
          "+7 " + phoneNumber,
          message,
        ],
      ],
    },
  });

  return NextResponse.json({ success: true });
}
