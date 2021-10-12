import Mail from '../lib/Mail'
import { Job } from 'bull'
import User from '../classes/User'

export default {
    key: "RegistrationMail",
    async handle(user: Job<User>) {
        await Mail.sendMail({
            from: 'João Victor Dechine <jvadechine@gmail.com>',
            to: `${user.data.name} <${user.data.email}>`,
            subject: 'Cadastro de Usuário',
            html: `Olá ${user.data.name}! Bem vindo ao sistema de filas.`
        })
    }
}