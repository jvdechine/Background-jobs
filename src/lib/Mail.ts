import nodemailer from 'nodemailer'
import mailConfig from '../config/Mail';

export default nodemailer.createTransport(mailConfig);