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

  // ==== 1. Запись в Google Sheets ====
  const response = await sheets.spreadsheets.values.append({
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

  const spreadsheetId = response.data.spreadsheetId;
  const updatedRange = response.data.updates?.updatedRange; // "'Лист1'!A3:D3"

  // Достаём ячейку начала диапазона (A3)
  const match = updatedRange?.match(/!([A-Z]+\d+)/);
  const cell = match ? match[1] : "A1";

  // Допустим, ID твоего листа = 0 (обычно у первого листа именно так, но лучше проверить в URL таблицы)
  const sheetId = 0;

  const link = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit#gid=${sheetId}&range=${cell}`;

  // ==== 2. Отправка письма ====
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const htmlTemplate = `
    <div style="width:100%; background:#ffffff; font-family:Inter, Arial, sans-serif; color:#272835;">
      <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" style="border:1px solid #d9d9d9; border-collapse:collapse;">
        <!-- HEADER -->
        <tr>
          <td style="padding: 0 40px 35px 40px;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <!-- Логотип -->
                <td valign="bottom" align="right" style="height: 85px; width: 72px; background-color:#fbdc07; padding:0 6px 6px 0;">
                  <div style="font-size:30px; line-height:90%; font-weight:700;">А3</div>
                  <div style="font-size:12px; font-weight:bold; line-height:100%;">ПРИНТ</div>
                </td>
                <!-- Заголовок -->
                <td align="right" valign="bottom" style="font-size:20px; line-height:140%; opacity:0.3; color:#272835;">
                  Оповещения
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- TITLE -->
        <tr>
          <td style="font-size:60px; font-weight:700; line-height:115%; color:#272835; padding:0 40px 36px 40px;">
            Новый клиент
          </td>
        </tr>

        <!-- ДАННЫЕ: Имя -->
        <tr>
          <td style="border-top:1px solid #d9d9d9; padding:4px 40px 18px;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td valign="top" width="166" style="font-size:20px; font-weight:500; color:#338af3;">Имя</td>
                <td valign="top" style="font-size:20px; font-weight:500; color:#272835;">${name}</td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- ДАННЫЕ: Номер -->
        <tr>
          <td style="border-top:1px solid #d9d9d9; padding:4px 40px 18px;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td valign="top" width="166" style="font-size:20px; font-weight:500; color:#338af3;">Номер</td>
                <td valign="top" style="font-size:20px; font-weight:500; color:#272835;">+7 ${phoneNumber}</td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- ДАННЫЕ: Услуга -->
        <tr>
          <td style="border-top:1px solid #d9d9d9; padding:4px 40px 48px 40px;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td valign="top" width="166" style="font-size:20px; font-weight:500; color:#338af3;">Услуга</td>
                <td valign="top" style="font-size:20px; font-weight:500; color:#272835;">${message}</td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- BUTTON -->
        <tr>
          <td style="padding:0 40px 66px 40px;">
            <a href="${link}" target="_blank"
              style="display:inline-block; width:290px; height:52px; background:#fbdc07;
                      border-radius:4px; font-family:Inter, Arial, sans-serif;
                      font-weight:600; font-size:16px; line-height:52px; text-align:center;
                      color:#331609; text-decoration:none;">
              Открыть в таблице
            </a>
          </td>
        </tr>
      </table>
    </div>`;

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: "info@a3print.kz",
    subject: "Новое сообщение с сайта",
    html: htmlTemplate,
  });

  return NextResponse.json({ success: true });
}
