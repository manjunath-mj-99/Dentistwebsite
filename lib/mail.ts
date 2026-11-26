import nodemailer from 'nodemailer';
export function getTransport(){const {SMTP_HOST,SMTP_PORT,SMTP_SECURE,SMTP_USER,SMTP_PASSWORD,MAIL_FROM}=process.env;if(!SMTP_HOST||!SMTP_PORT||!MAIL_FROM)return null;return {transport:nodemailer.createTransport({host:SMTP_HOST,port:Number(SMTP_PORT),secure:SMTP_SECURE==='true',auth:SMTP_USER?{user:SMTP_USER,pass:SMTP_PASSWORD}:undefined}),from:MAIL_FROM}}
